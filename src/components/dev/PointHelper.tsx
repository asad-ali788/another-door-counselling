"use client";

import { useEffect, useRef, useState } from "react";

type SourceMap = Map<string, Set<WeakRef<Element>>>;

/**
 * Best-effort source file:line lookup. React 19 / local Vite dev does NOT expose this,
 * but Lovable's cloud sandbox populates `window.sourceElementMap`, so use it when present.
 */
function resolveSourceKey(start: Element): string | null {
  const map = (window as Window & { sourceElementMap?: SourceMap }).sourceElementMap;
  if (!map) return null;
  const reverse = new Map<Element, string>();
  for (const [key, set] of map) {
    for (const ref of set) {
      const n = ref.deref();
      if (n) reverse.set(n, key);
    }
  }
  for (let el: Element | null = start; el; el = el.parentElement) {
    const key = reverse.get(el);
    if (key) return key;
  }
  return null;
}

/**
 * Build a ready-to-paste, greppable descriptor of the clicked element.
 * Classes and text survive the dev JSX transform verbatim, so Claude can grep them to
 * land on the exact file:line — no source map needed.
 */
function describe(node: Element): string {
  const tag = node.tagName.toLowerCase();
  const cls = (node.getAttribute("class") ?? "").trim();
  const text = (node.textContent ?? "").replace(/\s+/g, " ").trim();
  const snippet = text.length > 100 ? text.slice(0, 100) + "…" : text;

  const crumbs: string[] = [];
  for (let el: Element | null = node, i = 0; el && i < 4; el = el.parentElement, i++) {
    const first = el.classList[0] ? `.${el.classList[0]}` : "";
    crumbs.unshift(`${el.tagName.toLowerCase()}${first}`);
  }

  const sourceKey = resolveSourceKey(node);
  const lines = [
    sourceKey ? `📄 ${sourceKey}` : null,
    `element: <${tag}>`,
    cls ? `classes: ${cls}` : null,
    text ? `text: "${snippet}"` : null,
    `path: ${crumbs.join(" › ")}`,
  ].filter(Boolean);
  return lines.join("\n");
}

/**
 * Dev-only "point at an element → copy its source for Claude" overlay.
 * Only mounted in dev (guard at the mount site); hooks stay unconditional.
 */
export function PointHelper() {
  const [active, setActive] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!active) return;

    const isOwnUi = (t: EventTarget | null) =>
      t instanceof Element && t.closest("[data-point-ui]") != null;

    const box = document.createElement("div");
    Object.assign(box.style, {
      position: "fixed",
      zIndex: "99998",
      pointerEvents: "none",
      border: "2px solid #6366f1",
      background: "rgba(99,102,241,0.12)",
      borderRadius: "4px",
      transition: "all 60ms ease-out",
    } satisfies Partial<CSSStyleDeclaration>);
    document.body.appendChild(box);
    boxRef.current = box;

    const onMove = (e: MouseEvent) => {
      if (isOwnUi(e.target)) {
        box.style.display = "none";
        return;
      }
      const el = e.target as Element | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      Object.assign(box.style, {
        display: "block",
        top: `${r.top}px`,
        left: `${r.left}px`,
        width: `${r.width}px`,
        height: `${r.height}px`,
      });
    };

    const onClick = (e: MouseEvent) => {
      if (isOwnUi(e.target)) return;
      e.preventDefault();
      e.stopPropagation();
      const el = e.target as Element | null;
      if (!el) return;
      const payload = describe(el);
      void navigator.clipboard?.writeText(payload).catch(() => {});
      setToast(payload);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(false);
    };

    document.addEventListener("mousemove", onMove, true);
    document.addEventListener("click", onClick, true);
    document.addEventListener("keydown", onKey, true);

    return () => {
      document.removeEventListener("mousemove", onMove, true);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("keydown", onKey, true);
      box.remove();
      boxRef.current = null;
    };
  }, [active]);

  return (
    <div
      data-point-ui
      style={{
        position: "fixed",
        right: "16px",
        bottom: "16px",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "8px",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {toast && (
        <div
          style={{
            maxWidth: "360px",
            padding: "8px 10px",
            borderRadius: "8px",
            background: "#111827",
            color: "#e5e7eb",
            fontSize: "11px",
            lineHeight: 1.4,
            boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          }}
        >
          <div style={{ color: "#a5b4fc", marginBottom: "2px", fontWeight: 600 }}>
            Copied — paste to Claude
          </div>
          {toast}
        </div>
      )}
      <button
        type="button"
        onClick={() => {
          setActive((a) => !a);
          setToast(null);
        }}
        style={{
          padding: "8px 14px",
          borderRadius: "9999px",
          border: "none",
          cursor: "pointer",
          fontSize: "13px",
          fontWeight: 600,
          color: "#fff",
          background: active ? "#4f46e5" : "#111827",
          boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
        }}
      >
        {active ? "📍 Pointing… (Esc)" : "📍 Point"}
      </button>
    </div>
  );
}
