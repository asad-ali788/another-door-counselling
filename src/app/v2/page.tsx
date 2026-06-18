"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  ArrowUpRight,
  ShieldCheck,
  Brain,
  CloudRain,
  Activity,
  Smile,
  Users,
  Wind,
  Check,
  Star,
} from "lucide-react";
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
  { label: "Services", href: "#issues" },
  { label: "Process", href: "#process" },
  { label: "Fees", href: "#fees" },
  { label: "FAQs", href: "#faqs" },
];

const issueIcons = [Brain, CloudRain, Activity, Smile, Users, Wind];

export default function V2() {
  return (
    <main className="bg-[#F5F1EA] text-[#1F2E2C] font-sans selection:bg-[#0D9488]/25">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-[#1F2E2C]/8 bg-[#F5F1EA]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="#top" className="text-lg font-bold tracking-tight">
            {site.name}
            <span className="text-[#0D9488]">.</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-[#1F2E2C]/70 transition hover:text-[#0D9488]">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#0D9488] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0b827a]"
          >
            Get started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:pt-24">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-lg bg-[#0D9488]/10 px-3 py-1.5 text-sm font-semibold text-[#0b827a]"
          >
            <ShieldCheck className="size-4" /> {site.credential}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Counselling that meets you{" "}
            <span className="text-[#0D9488]">where you are.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-[#1F2E2C]/70"
          >
            Clear, confidential support for {site.clients.toLowerCase()} in {site.location} and
            online. A calmer mind starts with one conversation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0D9488] px-7 py-3.5 font-semibold text-white transition hover:bg-[#0b827a]"
            >
              Book a free 15-min call
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg border border-[#1F2E2C]/15 px-6 py-3.5 font-semibold transition hover:border-[#0D9488] hover:text-[#0D9488]"
            >
              <Phone className="size-4" /> {site.phone}
            </a>
          </motion.div>
          <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              ["16+", "ages welcomed"],
              ["Online", "& in person"],
              ["Free", "first call"],
            ].map(([big, small]) => (
              <div key={small} className="rounded-xl border border-[#1F2E2C]/8 bg-white/50 p-4">
                <p className="text-2xl font-bold text-[#0D9488]">{big}</p>
                <p className="text-sm text-[#1F2E2C]/60">{small}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-[#1F2E2C]/5"
        >
          <Image
            src={images.window}
            alt="Soft natural light"
            width={1600}
            height={1400}
            priority
            className="h-[28rem] w-full object-cover md:h-[32rem]"
          />
        </motion.div>
      </section>

      {/* Issues */}
      <section id="issues" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <FadeIn className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#0D9488]">
                What I help with
              </span>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Support shaped around you
              </h2>
            </div>
            <p className="max-w-sm text-[#1F2E2C]/65">
              An integrative, person-centred approach — never one-size-fits-all.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-[#1F2E2C]/8 ring-1 ring-[#1F2E2C]/8 sm:grid-cols-2 lg:grid-cols-3">
            {issues.map((issue, i) => {
              const Icon = issueIcons[i % issueIcons.length];
              return (
                <FadeIn key={issue.title} delay={i * 0.05}>
                  <div className="group h-full bg-[#F5F1EA] p-8 transition hover:bg-white">
                    <span className="grid size-11 place-items-center rounded-xl bg-[#0D9488]/10 text-[#0D9488] transition group-hover:bg-[#0D9488] group-hover:text-white">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold">{issue.title}</h3>
                    <p className="mt-2 leading-relaxed text-[#1F2E2C]/65">{issue.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 md:grid-cols-2">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#0D9488]">
              About
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">Meet Josh</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#1F2E2C]/75">{intro}</p>
            <p className="mt-4 leading-relaxed text-[#1F2E2C]/65">{about}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[site.credential, site.qualification, "Integrative therapy", site.clients].map((b) => (
                <div key={b} className="flex items-center gap-2 rounded-lg bg-[#F5F1EA] px-4 py-3 text-sm font-medium">
                  <Check className="size-4 text-[#0D9488]" /> {b}
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-[#1F2E2C]/5">
              <Image
                src={images.portrait}
                alt={`${site.name}, counsellor`}
                width={900}
                height={1100}
                className="h-[30rem] w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <FadeIn className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#0D9488]">
              How it works
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">Simple from the start</h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.1}>
                <div className="relative h-full rounded-2xl border border-[#1F2E2C]/8 bg-white p-8">
                  <span className="grid size-10 place-items-center rounded-lg bg-[#0D9488] text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-[#1F2E2C]/65">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0D9488] py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <FadeIn className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-white/70">
              Client feedback
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">Trusted, gentle support</h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-2xl bg-white/10 p-7 ring-1 ring-white/15 backdrop-blur">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-current text-[#7FB5C4]" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 leading-relaxed text-white/90">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 text-sm text-white/70">
                    {t.name} · {t.detail}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <FadeIn className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#0D9488]">
              Fees
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">One clear rate</h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-[#1F2E2C]/10">
              <div className="grid sm:grid-cols-2">
                <div className="bg-[#0D9488] p-8 text-white">
                  <p className="text-sm font-medium uppercase tracking-widest text-white/70">
                    Per session
                  </p>
                  <p className="mt-2 text-5xl font-bold">{site.fee}</p>
                  <p className="mt-1 text-white/80">{site.sessionLength}</p>
                  <p className="mt-6 text-sm text-white/80">
                    Plus a {site.consultation.toLowerCase()} before you commit.
                  </p>
                </div>
                <div className="p-8">
                  <ul className="space-y-3">
                    {[
                      site.consultation,
                      "In person in Sandy",
                      "Online via Microsoft Teams",
                      site.availability,
                      "Confidential & BACP-ethical",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[#1F2E2C]/80">
                        <Check className="mt-0.5 size-5 shrink-0 text-[#0D9488]" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 border-t border-[#1F2E2C]/10 bg-[#F5F1EA] py-4 font-semibold text-[#0D9488] transition hover:bg-[#0D9488] hover:text-white"
              >
                Book your free call <ArrowUpRight className="size-4" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <FadeIn className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#0D9488]">
              FAQs
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">Good to know</h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-10">
            <Accordion
              items={faqs}
              className="divide-[#1F2E2C]/10"
              questionClassName="text-[#1F2E2C]"
              iconClassName="text-[#0D9488]"
            />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-[#1F2E2C] px-5 py-20 text-[#F5F1EA] sm:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Take the first step today
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-[#F5F1EA]/70">
              Book your free 15-minute call and we&apos;ll find a time that works for you.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-[#0D9488] px-7 py-3.5 font-semibold text-white transition hover:bg-[#0b827a]"
              >
                Email Josh <ArrowUpRight className="size-4" />
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-[#F5F1EA]/25 px-7 py-3.5 font-semibold transition hover:bg-[#F5F1EA]/10"
              >
                <Phone className="size-4" /> {site.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2E2C] py-8 text-[#F5F1EA]/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 px-5 pt-8 text-sm sm:px-8 md:flex-row">
          <span className="font-bold text-[#F5F1EA]">
            {site.name}<span className="text-[#0D9488]">.</span>
          </span>
          <span>{site.credential} · {site.location} {site.postcode}</span>
          <span>© {new Date().getFullYear()} {site.name}</span>
        </div>
      </footer>
    </main>
  );
}
