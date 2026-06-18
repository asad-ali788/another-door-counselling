// ─────────────────────────────────────────────────────────────────────────────
// DEV-ONLY hero background lab. Stacks several full-screen hero treatments on
// the "Another Door" theme so we can preview and pick one. 404s in production,
// so it never ships — review it on localhost at /heroes.
// ─────────────────────────────────────────────────────────────────────────────
import { notFound } from "next/navigation";
import { site, images } from "@/lib/site";
import "./heroes.css";

function DoorMark({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M9 21V10a4.5 4.5 0 0 1 9 0" />
      <path d="M18 6.2 13.5 8v12.5L18 19V6.2z" />
      <path d="M15.4 14.2v.01" />
      <path d="M12.4 20.4c-1.5-1-3.1-1.4-4.9-1.2" strokeDasharray="0.2 1.7" />
      <path d="M13.4 3.4 13 4.8M16.4 4l-.7 1.2M10.7 4.4l.8 1.1" />
      <path d="M6 21c0-2.2.3-3.9 1.2-5.1" />
      <path d="M7.2 16.3c-1 .2-2-.3-2.5-1.3 1-.2 2 .3 2.5 1.3z" />
      <path d="M7.2 16.3c1 .2 2-.3 2.5-1.3-1-.2-2 .3-2.5 1.3z" />
    </svg>
  );
}

// A big, faint outlined arch/door used as a graphic motif in the CSS-only heroes.
function ArchOutline({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 320" fill="none" aria-hidden="true">
      <path d="M20 318 V120 A80 80 0 0 1 180 120 V318" stroke="currentColor" strokeWidth="1.4" />
      <path d="M44 318 V128 A56 56 0 0 1 156 128 V318" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="100" y1="74" x2="100" y2="318" stroke="currentColor" strokeWidth="0.8" opacity="0.45" />
      <circle cx="128" cy="210" r="3" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

const Badge = () => (
  <span className="hl__badge">
    <DoorMark size={15} /> {site.tagline}
  </span>
);

const Lead = () => (
  <p className="hl__lead">
    Warm, confidential counselling, online across the UK, for {site.clients.toLowerCase()}.
    Together we&apos;ll pave a path through life&apos;s challenges — at your own pace.
  </p>
);

const Actions = () => (
  <div className="hl__actions">
    <a className="hl__btn hl__btn--primary">Get in touch</a>
    <a className="hl__btn hl__btn--ghost">How I can help</a>
  </div>
);

const Trust = () => (
  <p className="hl__trust">
    {site.credential} · {site.consultation} · {site.serves}
  </p>
);

type HeroProps = { n: number; name: string; note: string; children: React.ReactNode };
function Hero({ n, name, note, children }: HeroProps) {
  return (
    <>
      {n > 1 && (
        <div className="hl__divider" aria-hidden="true">
          <DoorMark size={18} />
        </div>
      )}
      <section className="hl">
        <div className="hl__tag">
          <span className="hl__tagnum">{String(n).padStart(2, "0")}</span>
          <span className="hl__tagname">{name}</span>
          <span className="hl__tagnote">{note}</span>
        </div>
        {children}
      </section>
    </>
  );
}

export default function HeroesPage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <main className="heroLab">
      <header className="heroLab__intro">
        <h1>Hero background options</h1>
        <p>Six treatments on the “another door” theme. Scroll through, then tell me the number you like (or mix &amp; match).</p>
      </header>

      {/* 01 — Threshold of light: open door photo, dark left wash, gold accent */}
      <Hero n={1} name="Threshold of light" note="Open-door photo · warm cinematic wash">
        <div className="h1bg" style={{ backgroundImage: `url('${images.openDoor}')` }} />
        <div className="h1wash" />
        <div className="hl__content hl__content--left">
          <Badge />
          <h2 className="hl__title">
            There&apos;s always<br /><em>another door</em>
          </h2>
          <Lead />
          <Actions />
          <Trust />
        </div>
      </Hero>

      {/* 02 — Quiet threshold: centred, full vignette over forest path */}
      <Hero n={2} name="Quiet threshold" note="Forest path · centred · deep vignette">
        <div className="h2bg" style={{ backgroundImage: `url('${images.path}')` }} />
        <div className="h2vignette" />
        <div className="hl__content hl__content--center">
          <span className="hl__rule" />
          <Badge />
          <h2 className="hl__title hl__title--serifbig">There&apos;s always another door</h2>
          <Lead />
          <Actions />
          <Trust />
        </div>
      </Hero>

      {/* 03 — Sage mesh: pure CSS gradient + faint arch motif, no photo */}
      <Hero n={3} name="Sage mesh" note="No photo · CSS gradient + arch line-work">
        <div className="h3bg" />
        <div className="h3grain" />
        <ArchOutline className="h3arch" />
        <div className="hl__content hl__content--left">
          <Badge />
          <h2 className="hl__title hl__title--dark">
            There&apos;s always<br /><em>another door</em>
          </h2>
          <p className="hl__lead hl__lead--dark">
            Warm, confidential counselling, online across the UK, for {site.clients.toLowerCase()}.
            Together we&apos;ll pave a path forward — at your own pace.
          </p>
          <Actions />
          <p className="hl__trust hl__trust--dark">{site.credential} · {site.consultation} · {site.serves}</p>
        </div>
      </Hero>

      {/* 04 — Split arch: text panel + arched photo window */}
      <Hero n={4} name="Split arch" note="Two-panel · text left · arched door window">
        <div className="h4grid">
          <div className="h4panel">
            <div className="hl__content hl__content--left">
              <Badge />
              <h2 className="hl__title hl__title--dark">
                There&apos;s always another door
              </h2>
              <p className="hl__lead hl__lead--dark">
                Warm, confidential counselling, online across the UK, for {site.clients.toLowerCase()} — at your own pace.
              </p>
              <Actions />
              <p className="hl__trust hl__trust--dark">{site.credential} · {site.consultation}</p>
            </div>
          </div>
          <div className="h4media">
            <div className="h4arch" style={{ backgroundImage: `url('${images.openDoor}')` }} />
          </div>
        </div>
      </Hero>

      {/* 05 — Duotone path: sage-toned photo + grain + thin frame */}
      <Hero n={5} name="Duotone meadow" note="Sage-duotone photo · framed · centred">
        <div className="h5bg" style={{ backgroundImage: `url('${images.meadowPath}')` }} />
        <div className="h5tone" />
        <div className="h5frame" />
        <div className="hl__content hl__content--center">
          <Badge />
          <h2 className="hl__title hl__title--serifbig">
            There&apos;s always<br /><em>another door</em>
          </h2>
          <Lead />
          <Actions />
          <Trust />
        </div>
      </Hero>

      {/* 06 — Doorway glow: dark forest + radial warm light, atmospheric */}
      <Hero n={6} name="Doorway glow" note="Dark · warm light spilling through · centred">
        <div className="h6bg" style={{ backgroundImage: `url('${images.forestPath}')` }} />
        <div className="h6dark" />
        <div className="h6glow" />
        <div className="hl__content hl__content--center">
          <Badge />
          <h2 className="hl__title">
            There&apos;s always<br /><em>another door</em>
          </h2>
          <Lead />
          <Actions />
          <Trust />
        </div>
      </Hero>

      {/* 07 — Opening doors: two panels part on load to reveal the light + text */}
      <Hero n={7} name="Opening doors" note="Animated · panels open to reveal the path">
        <div className="h7scene" style={{ backgroundImage: `url('${images.meadowPath}')` }} />
        <div className="h7sceneglow" />
        <div className="h7door h7door--left" />
        <div className="h7door h7door--right" />
        <div className="h7seam" />
        <div className="hl__content hl__content--center h7content">
          <Badge />
          <h2 className="hl__title">
            There&apos;s always<br /><em>another door</em>
          </h2>
          <Lead />
          <Actions />
          <Trust />
        </div>
      </Hero>

      {/* 08 — Frosted card: full-bleed photo with a glass content panel */}
      <Hero n={8} name="Frosted glass" note="Photo · floating frosted card">
        <div className="h8bg" style={{ backgroundImage: `url('${images.calmRoom}')` }} />
        <div className="h8tint" />
        <div className="hl__content hl__content--left">
          <div className="h8card">
            <Badge />
            <h2 className="hl__title">There&apos;s always <em>another door</em></h2>
            <Lead />
            <Actions />
            <Trust />
          </div>
        </div>
      </Hero>

      {/* 09 — Editorial: type-first, light, numbered kicker + thin rules + inset */}
      <Hero n={9} name="Editorial" note="Type-first · light · magazine layout">
        <div className="h9bg" />
        <div className="h9inner">
          <div className="h9left">
            <span className="h9kicker">01 — Another Door Counselling</span>
            <h2 className="h9title">
              There&apos;s<br />always<br /><em>another&nbsp;door</em>
            </h2>
            <span className="h9line" />
          </div>
          <div className="h9right">
            <div className="h9img" style={{ backgroundImage: `url('${images.openDoor}')` }} />
            <p className="hl__lead hl__lead--dark">
              Warm, confidential counselling, online across the UK, for {site.clients.toLowerCase()} — at your own pace.
            </p>
            <Actions />
            <p className="hl__trust hl__trust--dark">{site.credential} · {site.consultation} · {site.serves}</p>
          </div>
        </div>
      </Hero>
    </main>
  );
}
