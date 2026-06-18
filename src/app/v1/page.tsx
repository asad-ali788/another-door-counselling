"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Leaf,
  Heart,
  Sparkles,
  MapPin,
  Quote,
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
  { label: "How I help", href: "#issues" },
  { label: "Fees", href: "#fees" },
  { label: "FAQs", href: "#faqs" },
];

export default function V1() {
  return (
    <main className="bg-[#F4EEE4] text-[#2F3A33] font-sans selection:bg-[#6B8F71]/30">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-[#6B8F71]/15 bg-[#F4EEE4]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="#top" className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-[#6B8F71] text-[#F4EEE4]">
              <Leaf className="size-5" />
            </span>
            <span className="font-serif text-xl font-semibold tracking-tight">
              {site.name}
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="opacity-80 transition hover:opacity-100">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#6B8F71] px-5 py-2.5 text-sm font-medium text-[#F4EEE4] shadow-sm transition hover:bg-[#5b7c61]"
          >
            Book a free chat
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 md:grid-cols-2 md:pt-24">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#6B8F71]/30 bg-white/40 px-4 py-1.5 text-sm font-medium text-[#4f6b54]"
            >
              <ShieldCheck className="size-4" /> {site.credential}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
            >
              A safe space to be heard.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-md text-lg leading-relaxed text-[#2F3A33]/75"
            >
              {site.tagline} Warm, confidential counselling for {site.clients.toLowerCase()} in {site.location} and online.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#6B8F71] px-7 py-3.5 font-medium text-[#F4EEE4] shadow-sm transition hover:bg-[#5b7c61]"
              >
                Book a free 15-min chat
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-[#6B8F71]/40 px-6 py-3.5 font-medium text-[#3c5142] transition hover:bg-white/50"
              >
                <Phone className="size-4" /> Call Josh
              </a>
            </motion.div>
            <p className="mt-6 text-sm text-[#2F3A33]/60">
              {site.consultation} · {site.serves}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-[#6B8F71]/15">
              <Image
                src={images.calmRoom}
                alt="A calm, light-filled room"
                width={1400}
                height={1600}
                priority
                className="h-[30rem] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white/90 px-5 py-4 shadow-lg ring-1 ring-[#6B8F71]/10 backdrop-blur sm:block">
              <p className="text-2xl font-semibold text-[#6B8F71]">{site.consultation.split(" ")[0]}</p>
              <p className="text-sm text-[#2F3A33]/70">intro call, no pressure</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Issues */}
      <section id="issues" className="bg-[#EDE5D7] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#6B8F71]">
              How I can help
            </span>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight">
              Whatever you're carrying, you don't have to carry it alone
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {issues.map((issue, i) => (
              <FadeIn key={issue.title} delay={i * 0.06}>
                <div className="group h-full rounded-3xl bg-[#F4EEE4] p-7 ring-1 ring-[#6B8F71]/10 transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="grid size-11 place-items-center rounded-2xl bg-[#6B8F71]/12 text-[#6B8F71]">
                    <Heart className="size-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold">{issue.title}</h3>
                  <p className="mt-2 leading-relaxed text-[#2F3A33]/70">{issue.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 md:grid-cols-2">
          <FadeIn>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-lg ring-1 ring-[#6B8F71]/15">
                <Image
                  src={images.portrait}
                  alt={`${site.name}, counsellor`}
                  width={900}
                  height={1100}
                  className="h-[28rem] w-full object-cover"
                />
              </div>
              <span className="absolute -right-4 -top-4 grid size-16 place-items-center rounded-full bg-[#C08457] text-[#F4EEE4] shadow-lg">
                <Sparkles className="size-7" />
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#6B8F71]">
              About Josh
            </span>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight">
              Hello, I&apos;m {site.name.split(" ")[0]}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#2F3A33]/80">{intro}</p>
            <p className="mt-4 leading-relaxed text-[#2F3A33]/70">{about}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {[site.credential, site.qualification, "Person-centred & integrative"].map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-[#6B8F71]/12 px-4 py-2 text-sm font-medium text-[#3c5142]"
                >
                  {b}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-[#6B8F71] py-20 text-[#F4EEE4] md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#F4EEE4]/70">
              Getting started
            </span>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight">
              Three gentle steps
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.1}>
                <div className="rounded-3xl bg-[#F4EEE4]/10 p-8 ring-1 ring-[#F4EEE4]/15">
                  <span className="font-serif text-5xl font-semibold text-[#F4EEE4]/40">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-[#F4EEE4]/80">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#6B8F71]">
              In their words
            </span>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight">
              What clients say
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-3xl bg-[#EDE5D7] p-8 ring-1 ring-[#6B8F71]/10">
                  <Quote className="size-8 text-[#6B8F71]/40" />
                  <blockquote className="mt-4 flex-1 leading-relaxed text-[#2F3A33]/85">
                    “{t.quote}”
                  </blockquote>
                  <div className="mt-6 flex items-center gap-1 text-[#C08457]">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-current" />
                    ))}
                  </div>
                  <figcaption className="mt-2 text-sm text-[#2F3A33]/60">
                    {t.name} · {t.detail}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="bg-[#EDE5D7] py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-2">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#6B8F71]">
              Fees & availability
            </span>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="mt-5 leading-relaxed text-[#2F3A33]/75">
              Every journey begins with a free, no-obligation conversation so you can decide
              if we&apos;re the right fit. {site.availability}.
            </p>
            <div className="mt-7 space-y-3 text-[#2F3A33]/80">
              <p className="flex items-center gap-3">
                <MapPin className="size-5 text-[#6B8F71]" /> {site.serves}
              </p>
              <p className="flex items-center gap-3">
                <ShieldCheck className="size-5 text-[#6B8F71]" /> {site.clients}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-[2rem] bg-[#F4EEE4] p-8 shadow-lg ring-1 ring-[#6B8F71]/12">
              <p className="text-sm font-medium uppercase tracking-widest text-[#6B8F71]">
                Counselling session
              </p>
              <p className="mt-3 font-serif text-5xl font-semibold">
                {site.fee}
                <span className="text-lg font-normal text-[#2F3A33]/60">
                  {" "}/ {site.sessionLength}
                </span>
              </p>
              <div className="mt-6 h-px bg-[#6B8F71]/15" />
              <ul className="mt-6 space-y-3 text-[#2F3A33]/80">
                {[
                  site.consultation,
                  "In person in Sandy or online",
                  "Weekly sessions at your pace",
                  "Confidential, BACP ethical framework",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#6B8F71] text-[#F4EEE4]">
                      <svg viewBox="0 0 12 12" className="size-3 fill-none stroke-current stroke-2">
                        <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#6B8F71] px-6 py-3.5 font-medium text-[#F4EEE4] transition hover:bg-[#5b7c61]"
              >
                Book your free chat <ArrowRight className="size-4" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <FadeIn className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#6B8F71]">
              Questions
            </span>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight">
              Things people often ask
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-10">
            <Accordion
              items={faqs}
              className="divide-[#6B8F71]/15"
              questionClassName="font-serif text-[#2F3A33]"
              iconClassName="text-[#6B8F71]"
            />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-5 pb-24 sm:px-8">
        <FadeIn className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-[#2F3A33] px-8 py-16 text-center text-[#F4EEE4] md:py-20">
          <h2 className="mx-auto max-w-2xl font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Ready when you are
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-[#F4EEE4]/75">
            Reaching out is often the hardest part. Send a message or call for your free
            15-minute chat — there&apos;s no pressure, just a place to start.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#6B8F71] px-7 py-3.5 font-medium text-[#F4EEE4] transition hover:bg-[#5b7c61]"
            >
              Email Josh <ArrowRight className="size-4" />
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-[#F4EEE4]/30 px-7 py-3.5 font-medium transition hover:bg-[#F4EEE4]/10"
            >
              <Phone className="size-4" /> {site.phone}
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#6B8F71]/15 bg-[#EDE5D7] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:px-8 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-full bg-[#6B8F71] text-[#F4EEE4]">
              <Leaf className="size-4" />
            </span>
            <span className="font-serif text-lg font-semibold">{site.name}</span>
          </div>
          <p className="text-sm text-[#2F3A33]/60">
            {site.credential} · {site.location} {site.postcode}
          </p>
          <p className="text-sm text-[#2F3A33]/60">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </footer>
    </main>
  );
}
