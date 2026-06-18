"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Faq } from "@/lib/site";

// ── Fade / rise on scroll ────────────────────────────────────────────────────
export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

// ── Themeable FAQ accordion ──────────────────────────────────────────────────
export function Accordion({
  items,
  className,
  itemClassName,
  questionClassName,
  iconClassName,
}: {
  items: Faq[];
  className?: string;
  itemClassName?: string;
  questionClassName?: string;
  iconClassName?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn("divide-y", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={itemClassName}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className={cn("text-lg font-medium", questionClassName)}>
                {item.q}
              </span>
              <span className={cn("shrink-0", iconClassName)}>
                {isOpen ? (
                  <Minus className="size-5" />
                ) : (
                  <Plus className="size-5" />
                )}
              </span>
            </button>
            <motion.div
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pb-6 pr-10 leading-relaxed opacity-80">{item.a}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
