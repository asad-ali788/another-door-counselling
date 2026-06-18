"use client";

import { useEffect, useRef, useState } from "react";
import {
  site,
  intro,
  issues,
  steps,
  images,
  concessions,
  schedule,
  approach,
  approachQuote,
  backgroundIntro,
  qualifications,
  experienceItems,
  therapiesOffered,
} from "@/lib/site";
import "./dawn.css";

// Brand mark — an open door with light, a path and a small plant,
// echoing the Another Door Counselling business-card logo.
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

// ── "When I work" — reshaped from the slot matrix into per-day cards ──────────
const dayFull: Record<string, string> = {
  Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday",
  Fri: "Friday", Sat: "Saturday", Sun: "Sunday",
};

const workingDays = schedule.days
  .map((day, i) => ({ day, slots: schedule.slots.filter((s) => s.open[i]).map((s) => s.label) }))
  .filter((d) => d.slots.length > 0);

const closedDays = schedule.days.filter((_, i) => schedule.slots.every((s) => !s.open[i]));

function SlotIcon({ label }: { label: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (label === "Early morning")
    return <svg viewBox="0 0 24 24" {...p}><path d="M3 18h18M12 3v4M5.6 9.6 4.2 8.2M18.4 9.6l1.4-1.4M8 18a4 4 0 0 1 8 0M9 7l3-3 3 3" /></svg>;
  if (label === "Evening")
    return <svg viewBox="0 0 24 24" {...p}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>;
  if (label === "Late afternoon")
    return <svg viewBox="0 0 24 24" {...p}><path d="M3 18h18M5 18a7 7 0 0 1 14 0M12 10V4M9 7l3 3 3-3" /></svg>;
  // Morning / Early afternoon → sun
  return <svg viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" /></svg>;
}

const ways = [
  {
    title: "Online via Teams",
    text: "Sessions by video from wherever you feel most comfortable — supportive, flexible therapy anywhere in the UK.",
    img: images.window,
  },
  {
    title: "Free 15-minute consultation",
    text: "A no-obligation chat to see how it feels and ask anything you'd like before you begin.",
    img: images.plant,
  },
  {
    title: "Trauma-informed therapy",
    text: "Gentle, somatic trauma-informed work that always establishes safe foundations first.",
    img: images.calmRoom,
  },
  {
    title: "Integrative & person-centred",
    text: "An approach shaped around you, rooted in person-centred practice and a genuine relationship.",
    img: images.reflection,
  },
  {
    title: "LGBTQ+ affirming",
    text: "A safe, affirming space to explore identity, gender, sexuality and neurodivergence.",
    img: images.conversation,
  },
  {
    title: "Led at your pace",
    text: "Our sessions are always led by you — there's no rush, no agenda and no judgement.",
    img: images.forestPath,
  },
];

// areas of support — small stroke icons keyed to each issue
const supportIcons = [
  // feeling stuck / compass
  <g key="i"><circle cx="12" cy="12" r="10" /><path d="m16 8-2 6-6 2 2-6z" /></g>,
  // anxiety / cloud
  <path key="i" d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />,
  // grief & loss / heart
  <path key="i" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
  // relationships / people
  <g key="i"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></g>,
  // work stress / briefcase
  <g key="i"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></g>,
  // identity / sparkle-user
  <g key="i"><circle cx="12" cy="8" r="4" /><path d="M6 21v-1a6 6 0 0 1 12 0v1" /></g>,
];

const values = [
  {
    title: "BACP & NCPS registered",
    text: "A registered member of the BACP and the NCPS, working to a strict ethical framework.",
    icon: <g><path d="M12 2 3 7v6c0 5 3.8 8.5 9 9 5.2-.5 9-4 9-9V7z" /><path d="m9 12 2 2 4-4" /></g>,
  },
  {
    title: "LGBTQ+ affirming",
    text: "A warm, affirming space for exploring identity, gender and sexuality — you're welcome exactly as you are.",
    icon: <g><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></g>,
  },
  {
    title: "Neurodivergent-friendly",
    text: "Supporting neurodivergent individuals and anyone who's felt they don't quite fit the “norm.”",
    icon: <g><path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0-2 7 4 4 0 0 0 6 3 4 4 0 0 0 6-3 4 4 0 0 0-2-7 4 4 0 0 0-4-4z" /><path d="M12 6v12" /></g>,
  },
  {
    title: "Trauma-informed",
    text: "Certified in Somatic Trauma-Informed Therapy, going gently and establishing safety before anything else.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
];

export default function V5() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.transitionDelay = `${(i % 6) * 70}ms`;
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const firstName = site.name.split(" ")[0];

  return (
    <div className="dawnPage" ref={rootRef}>
      {/* HEADER */}
      <header className={`site-header${scrolled ? " scrolled" : ""}`} id="top">
        <div className="container header__inner">
          <a href="#top" className="brand" aria-label={`${site.businessName} home`}>
            <span className="brand__mark" aria-hidden="true"><DoorMark /></span>
            <span className="brand__text">
              <strong>{site.businessName}</strong>
              <em>Counselling &amp; Therapy</em>
            </span>
          </a>

          <nav className={`nav${menuOpen ? " open" : ""}`} id="nav" onClick={() => setMenuOpen(false)}>
            <a href="#about">About</a>
            <a href="#therapies">How I Help</a>
            <a href="#trauma">Trauma</a>
            <a href="#fees">Fees</a>
            <a href="#contact" className="nav__cta">Get in touch</a>
          </nav>

          <button
            className={`nav-toggle${menuOpen ? " open" : ""}`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: `url('${images.path}')` }} />
        <div className="hero__blur" />
        <div className="hero__overlay" />
        <div className="container hero__content">
          <div className="hero__copy">
            <span className="hero__badge reveal">
              <DoorMark size={16} /> {site.tagline}
            </span>
            <h1 className="hero__title reveal">There&apos;s always<br />another door</h1>
            <p className="hero__lead reveal">
              Warm, confidential counselling, online across the UK, for {site.clients.toLowerCase()}.
              Together we&apos;ll pave a path through life&apos;s challenges — at your own pace.
            </p>
            <div className="hero__actions reveal">
              <a href="#contact" className="btn btn--primary">Get in touch</a>
              <a href="#therapies" className="btn btn--ghost btn--ghost-light">How I can help</a>
            </div>
            <p className="hero__trust reveal">
              {site.credential} · {site.consultation} · {site.serves}
            </p>
          </div>
        </div>
        <a href="#about" className="hero__scroll" aria-label="Scroll to content"><span></span></a>
      </section>

      {/* ABOUT */}
      <section className="about section" id="about">
        <div className="container">
          <div className="section__head reveal">
            <p className="eyebrow">About {firstName}</p>
            <h2 className="section__title section__title--glow">Meet Josh Brushett, {site.credential}</h2>
            <p className="section__intro">
              A warm, person-centred counsellor helping you find a way forward — at your own pace.
            </p>
          </div>

          {/* Row A — a warm welcome */}
          <div className="about__grid reveal">
            <div className="about__media">
              <div className="about__img" style={{ backgroundImage: `url('${images.meadowPath}')` }} />
              <div className="about__badge">
                <strong>16+</strong>
                <span>supporting adults &amp; young&nbsp;people</span>
              </div>
            </div>
            <div className="about__text">
              <h3 className="about__subtitle">A warm welcome</h3>
              <p>{intro}</p>
              <a href="#contact" className="link-arrow">
                Arrange a conversation
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>
          </div>

          {/* Row B — my approach */}
          <div className="about__grid about__grid--reverse reveal">
            <div className="about__text">
              <h3 className="about__subtitle">My approach</h3>
              {approach.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <blockquote className="about__quote">“{approachQuote}”</blockquote>
              <ul className="about__creds">
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                  {site.credentialLong} (MBACP)
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                  {site.training}
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                  LGBTQ+ affirming &amp; neurodivergent-friendly
                </li>
              </ul>
            </div>
            <div className="about__media about__media--door">
              <div className="about__img about__img--full" style={{ backgroundImage: `url('${images.openDoor}')` }} />
            </div>
          </div>
        </div>
      </section>

      {/* THERAPIES / WAYS OF WORKING */}
      <section className="therapies section section--tint" id="therapies">
        <div className="container">
          <div className="section__head reveal">
            <p className="eyebrow">How I can help</p>
            <h2 className="section__title">Ways we can work together</h2>
            <p className="section__intro">
              Every person is different, so no two journeys look the same. This is how I work, and
              what you can expect when you step through the door.
            </p>
          </div>
          <div className="cards">
            {ways.map((w) => (
              <article className="card reveal" key={w.title}>
                <div className="card__img" style={{ backgroundImage: `url('${w.img}')` }} />
                <div className="card__body">
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="modalities reveal">
            <h3>Therapies offered</h3>
            <ul className="modalities__grid">
              {therapiesOffered.map((t) => (
                <li key={t}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8.5 12.5l2.5 2.5 4.5-5" /></svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AREAS OF SUPPORT */}
      <section className="support section" id="support">
        <div className="container">
          <div className="section__head reveal">
            <p className="eyebrow">Areas of support</p>
            <h2 className="section__title">Whatever you&apos;re carrying</h2>
            <p className="section__intro">
              You don&apos;t need the right words to begin — just a willingness to take the first
              step. These are some of the things people bring to counselling with {firstName}.
            </p>
          </div>
          <ul className="support__grid reveal">
            {issues.map((issue, i) => (
              <li key={issue.title}>
                <span className="support__icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">{supportIcons[i]}</svg>
                </span>
                {issue.title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SPECIALIST TRAUMA SUPPORT */}
      <section className="section section--tint" id="trauma">
        <div className="container about__grid">
          <div className="about__media reveal">
            <div className="about__img" style={{ backgroundImage: `url('${images.hands}')` }} />
          </div>
          <div className="about__text reveal">
            <p className="eyebrow">Specialist support</p>
            <h2 className="section__title">Trauma-informed therapy</h2>
            <p>
              Difficult experiences can leave a lasting imprint on both the mind and the body.
              I hold a <strong>Level 5 Diploma in Trauma Therapy</strong> and work in a gentle,
              trauma-informed way that never rushes you.
            </p>
            <p>
              We always begin by establishing safe foundations, and our sessions are led entirely
              by you, so you&apos;re never put at risk. Whether it&apos;s something recent or long
              held, there is a way through — and we&apos;ll find it together.
            </p>
            <ul className="about__creds">
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                Level 5 Diploma in Trauma Therapy (BCTS)
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                Safe foundations established first
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                Always at a pace that&apos;s led by you
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* TRAINING, QUALIFICATIONS & EXPERIENCE */}
      <section className="section section--tint" id="training">
        <div className="container">
          <div className="section__head reveal">
            <p className="eyebrow">Background</p>
            <h2 className="section__title">Training, qualifications &amp; experience</h2>
            <p className="section__intro">{backgroundIntro}</p>
          </div>
          <div className="training__grid reveal">
            <div className="training__col">
              <div className="training__head">
                <span className="training__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" /></svg>
                </span>
                <h3>Qualifications &amp; training</h3>
              </div>
              <ul className="training__list">
                {qualifications.map((q) => (
                  <li key={q}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            <div className="training__col">
              <div className="training__head">
                <span className="training__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                </span>
                <h3>Experience</h3>
              </div>
              <ul className="training__list">
                {experienceItems.map((e) => (
                  <li key={e}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="band">
        <div className="band__bg" style={{ backgroundImage: `url('${images.nature}')` }} />
        <div className="band__overlay" />
        <div className="container band__content reveal">
          <h2>Taking the first step can feel daunting</h2>
          <p>Whenever you&apos;re ready, {firstName} is here to listen — with warmth, patience and without judgement.</p>
          <div className="band__actions">
            <a href={site.phoneHref} className="btn btn--light">Call {site.phone}</a>
            <a href="#contact" className="btn btn--ghost btn--ghost-light">Send a message</a>
          </div>
        </div>
      </section>

      {/* WORKING TOGETHER / HOW IT WORKS */}
      <section className="supervision section" id="working">
        <div className="container">
          <div className="section__head reveal">
            <p className="eyebrow">Working together</p>
            <h2 className="section__title">How it works</h2>
            <p className="section__intro">
              Getting started is simple, and there&apos;s no pressure at any point.
            </p>
          </div>
          <div className="features">
            {steps.map((step, i) => (
              <div className="feature reveal" key={step.title}>
                <div className="feature__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {i === 0 && <path d="M4 4h16v12H5.2L4 17.2z" />}
                    {i === 1 && <g><path d="M15 10a4 4 0 0 1-4 4H7l-4 3V6a2 2 0 0 1 2-2h6a4 4 0 0 1 4 4z" /><path d="M21 12a2 2 0 0 1-2 2v3l-3-3" /></g>}
                    {i === 2 && <g><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></g>}
                  </svg>
                </div>
                <h3>{`${i + 1}. ${step.title}`}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEES & AVAILABILITY */}
      <section className="section section--tint" id="fees">
        <div className="container">
          <div className="section__head reveal">
            <p className="eyebrow">Fees &amp; availability</p>
            <h2 className="section__title">Simple and transparent</h2>
            <p className="section__intro">
              Every journey starts with a free 15-minute consultation, so you can decide if
              we&apos;re the right fit — with no obligation to continue.
            </p>
          </div>
          <div className="features">
            <div className="feature reveal">
              <div className="feature__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M14.5 9.5a2.5 2.5 0 0 0-2.5-1.5c-1.4 0-2.5.8-2.5 2s1.1 2 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2a2.5 2.5 0 0 1-2.5-1.5M12 6.5v1M12 16.5v1" /></svg>
              </div>
              <h3>{site.fee} per session</h3>
              <p>{site.sessionLength} sessions. Your free 15-minute consultation comes first, at no cost. Concessions available.</p>
            </div>
            <div className="feature reveal">
              <div className="feature__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18M8 2v4M16 2v4M9 14l2 2 4-4" /></svg>
              </div>
              <h3>Availability</h3>
              <p>{site.availability}, online via Microsoft Teams — wherever you are in the UK.</p>
            </div>
            <div className="feature reveal">
              <div className="feature__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" /></svg>
              </div>
              <h3>Qualified &amp; experienced</h3>
              <p>{site.memberships}, with Level 4 &amp; 5 diplomas and {site.experience}.</p>
            </div>
          </div>

          <div className="fees__note reveal">
            <p>
              <strong>Concessions available</strong> on online sessions for students, trainee
              therapists and anyone on a low income or benefits — just mention it when you get in
              touch. Prices may be subject to change.
            </p>
            <p className="contact__memberships">
              {concessions.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </p>
          </div>

          <div className="avail reveal">
            <div className="avail__head">
              <h3>When I work</h3>
              <p className="avail__note">
                Online via Microsoft Teams — with morning, afternoon and evening slots to fit
                around your week.
              </p>
            </div>
            <div className="avail__days">
              {workingDays.map(({ day, slots }) => (
                <article className="avail__daycard" key={day}>
                  <span className="avail__dayname">{dayFull[day]}</span>
                  <ul className="avail__slotlist">
                    {slots.map((s) => (
                      <li key={s}>
                        <span className="avail__sloticon" aria-hidden="true"><SlotIcon label={s} /></span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="avail__closed">
              Rest days · {closedDays.map((d) => dayFull[d]).join(", ")}
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values section">
        <div className="container">
          <div className="section__head reveal">
            <p className="eyebrow">Why {site.businessName}</p>
            <h2 className="section__title">Care you can trust</h2>
          </div>
          <div className="values__grid">
            {values.map((v) => (
              <div className="value reveal" key={v.title}>
                <div className="value__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {v.icon}
                  </svg>
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section section--tint" id="contact">
        <div className="container contact__grid">
          <div className="contact__intro reveal">
            <p className="eyebrow">Get in touch</p>
            <h2 className="section__title">Ready when you are</h2>
            <p>
              Reaching out is often the hardest part. There&apos;s no pressure and no judgement —
              just a warm conversation to see how {firstName} might be able to help. Email or call
              for your free 15-minute consultation.
            </p>
            <p className="contact__memberships">
              <span>BACP Member</span>
              <span>NCPS Member</span>
              <span>LGBTQ+ Affirming</span>
              <span>Online via Teams</span>
            </p>
          </div>

          <div className="contact__cards reveal">
            <a href={`mailto:${site.email}`} className="contact__card">
              <div className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
              </div>
              <div>
                <span className="contact__label">Email</span>
                <strong className="contact__value--email">{site.email}</strong>
              </div>
            </a>

            <a href={site.phoneHref} className="contact__card">
              <div className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </div>
              <div>
                <span className="contact__label">Call or text</span>
                <strong className="contact__value--nowrap">{site.phone}</strong>
              </div>
            </a>

            <div className="contact__card contact__card--static">
              <div className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div>
                <span className="contact__label">Where Josh works</span>
                <strong>{site.serves}</strong>
                <span className="contact__sub">Based in {site.location} ({site.postcode}) · {site.availability}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <span className="brand__mark" aria-hidden="true"><DoorMark size={24} /></span>
            <p className="footer__name">{site.businessName}</p>
            <p className="footer__tag">{site.tagline}</p>
          </div>
          <nav className="footer__nav">
            <a href="#about">About</a>
            <a href="#therapies">How I Help</a>
            <a href="#trauma">Trauma Support</a>
            <a href="#training">Training &amp; Experience</a>
            <a href="#fees">Fees</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer__meta">
            <p>{site.name} · {site.memberships}</p>
            <p>{site.email}</p>
            <p>{site.phone} · {site.location} {site.postcode}</p>
            <p className="footer__copy">© {new Date().getFullYear()} {site.businessName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
