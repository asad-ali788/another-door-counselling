"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Star, Check, MapPin, Clock, ShieldCheck } from "lucide-react";
import {
  site,
  intro,
  about,
  issues,
  steps,
  testimonials,
  faqs,
  images,
} from "@/lib/site";
import { FadeIn, Accordion } from "@/components/shared/ui";

const nav = [
  { label: "About", href: "#about" },
  { label: "Specialisms", href: "#issues" },
  { label: "Process", href: "#process" },
  { label: "Fees", href: "#fees" },
];

export default function V4() {
  return (
    <main className="bg-[#16263D] text-[#F7F4EE] font-sans selection:bg-[#C5A572]/30">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#16263D]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="#top" className="font-serif text-xl font-semibold tracking-tight">
            {site.name}
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-[#F7F4EE]/70 transition hover:text-[#C5A572]">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#C5A572] px-5 py-2.5 text-sm font-semibold text-[#16263D] transition hover:bg-[#b8975f]"
          >
            Book a call
          </a>
        </div>
      </header>

      {/* Hero — full-bleed */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.nature}
            alt="Calm landscape at dusk"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16263D] via-[#16263D]/90 to-[#16263D]/40" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8 md:py-40">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#C5A572]/40 px-4 py-1.5 text-sm font-medium text-[#C5A572]"
          >
            <ShieldCheck className="size-4" /> {site.credential}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-6 max-w-3xl font-serif text-6xl font-semibold leading-[1.02] tracking-tight sm:text-7xl"
          >
            Therapy with depth, warmth &amp; care.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[#F7F4EE]/80"
          >
            Confidential counselling for {site.clients.toLowerCase()} in {site.location} and online —
            a considered, professional space to understand yourself and move forward.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#C5A572] px-7 py-3.5 font-semibold text-[#16263D] transition hover:bg-[#b8975f]"
            >
              Book a free 15-min call
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-[#F7F4EE]/30 px-6 py-3.5 font-semibold transition hover:bg-white/10"
            >
              <Phone className="size-4" /> {site.phone}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Issues */}
      <section id="issues" className="bg-[#1E3A5F] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <FadeIn className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C5A572]">
              Specialisms
            </span>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              Areas I work with
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {issues.map((issue, i) => (
              <FadeIn key={issue.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-[#C5A572]/50 hover:bg-white/[0.06]">
                  <span className="font-serif text-3xl font-semibold text-[#C5A572]">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-semibold">{issue.title}</h3>
                  <p className="mt-2 leading-relaxed text-[#F7F4EE]/65">{issue.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 md:grid-cols-[0.85fr_1.15fr]">
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-[#C5A572]/30">
              <Image
                src={images.portrait}
                alt={`${site.name}, counsellor`}
                width={900}
                height={1100}
                className="h-[30rem] w-full object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C5A572]">
              About Josh
            </span>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              A calm, professional presence
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#F7F4EE]/80">{intro}</p>
            <p className="mt-4 leading-relaxed text-[#F7F4EE]/65">{about}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                [site.credential.split(" ").slice(-1)[0], "BACP member"],
                ["Level 4", "Dip. Counselling"],
                ["16+", "ages welcomed"],
              ].map(([big, small]) => (
                <div key={small} className="border-l-2 border-[#C5A572] pl-4">
                  <p className="font-serif text-2xl font-semibold text-[#C5A572]">{big}</p>
                  <p className="text-sm text-[#F7F4EE]/60">{small}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-[#1E3A5F] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <FadeIn className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C5A572]">
              The process
            </span>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              How we&apos;ll work together
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.1}>
                <div className="border-t border-[#C5A572]/40 pt-6">
                  <span className="font-serif text-5xl font-semibold text-[#C5A572]/50">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-[#F7F4EE]/65">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <FadeIn className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C5A572]">
              Testimonials
            </span>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              Trusted, respected, recommended
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                  <div className="flex gap-1 text-[#C5A572]">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-[#F7F4EE]/90">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-[#F7F4EE]/60">
                    {t.name} · {t.detail}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="bg-[#1E3A5F] py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-2">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C5A572]">
              Investment
            </span>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              An investment in yourself
            </h2>
            <p className="mt-6 leading-relaxed text-[#F7F4EE]/75">
              Begin with a complimentary {site.consultation.toLowerCase()} so you can decide,
              with no obligation, whether we&apos;re the right fit.
            </p>
            <div className="mt-7 space-y-3 text-[#F7F4EE]/80">
              <p className="flex items-center gap-3"><MapPin className="size-5 text-[#C5A572]" /> {site.serves}</p>
              <p className="flex items-center gap-3"><Clock className="size-5 text-[#C5A572]" /> {site.availability}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-[#C5A572]/30 bg-[#16263D] p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C5A572]">
                Counselling session
              </p>
              <p className="mt-3 font-serif text-6xl font-semibold">
                {site.fee}
                <span className="text-lg font-normal text-[#F7F4EE]/60"> / {site.sessionLength}</span>
              </p>
              <div className="mt-6 h-px bg-white/10" />
              <ul className="mt-6 space-y-3">
                {[
                  site.consultation,
                  "In person in Sandy or online",
                  "Weekly, at a pace that suits you",
                  "Strict BACP ethical framework",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[#F7F4EE]/85">
                    <Check className="mt-0.5 size-5 shrink-0 text-[#C5A572]" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#C5A572] px-6 py-3.5 font-semibold text-[#16263D] transition hover:bg-[#b8975f]"
              >
                Book your free call <ArrowRight className="size-4" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <FadeIn className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C5A572]">
              FAQs
            </span>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              Your questions, answered
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-10">
            <Accordion
              items={faqs}
              className="divide-white/10"
              questionClassName="font-serif text-[#F7F4EE]"
              iconClassName="text-[#C5A572]"
            />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden px-5 py-24 sm:px-8">
        <div className="absolute inset-0">
          <Image src={images.texture} alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-[#16263D]/85" />
        </div>
        <FadeIn className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Begin when you&apos;re ready
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-[#F7F4EE]/75">
            Arrange your complimentary 15-minute consultation today.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#C5A572] px-7 py-3.5 font-semibold text-[#16263D] transition hover:bg-[#b8975f]"
            >
              Email Josh <ArrowRight className="size-4" />
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-[#F7F4EE]/30 px-7 py-3.5 font-semibold transition hover:bg-white/10"
            >
              <Phone className="size-4" /> {site.phone}
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-[#F7F4EE]/60 sm:px-8 md:flex-row">
          <span className="font-serif text-lg font-semibold text-[#F7F4EE]">{site.name}</span>
          <span>{site.credential} · {site.location} {site.postcode}</span>
          <span>© {new Date().getFullYear()} {site.name}</span>
        </div>
      </footer>
    </main>
  );
}
