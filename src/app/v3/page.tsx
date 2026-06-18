"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Heart, Star, Quote, MapPin, Clock } from "lucide-react";
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
  { label: "My story", href: "#about" },
  { label: "How I help", href: "#issues" },
  { label: "Kind words", href: "#words" },
  { label: "Fees", href: "#fees" },
];

export default function V3() {
  return (
    <main className="bg-[#EFE7DC] text-[#33291F] font-sans selection:bg-[#B5654A]/25">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-[#EFE7DC]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="#top" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-full bg-[#B5654A] text-[#EFE7DC]">
              <Heart className="size-5" />
            </span>
            <span className="text-xl font-bold tracking-tight">{site.name.split(" ")[0]}</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-[#33291F]/70 transition hover:text-[#B5654A]">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#B5654A] px-5 py-2.5 text-sm font-semibold text-[#EFE7DC] transition hover:bg-[#9f553d]"
          >
            Say hello
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        {/* organic background blobs */}
        <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-[#B5654A]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 top-40 size-72 rounded-full bg-[#7C8466]/15 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 md:grid-cols-2 md:pt-20">
          <div className="relative order-2 md:order-1">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-1.5 text-sm font-semibold text-[#9f553d]"
            >
              {site.credential}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
            >
              Hi, I&apos;m {site.name.split(" ")[0]}.
              <span className="mt-2 block text-[#B5654A]">
                Let&apos;s help you feel like yourself again.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-md text-lg leading-relaxed text-[#33291F]/75"
            >
              A warm, down-to-earth counsellor in {site.location}, working with{" "}
              {site.clients.toLowerCase()} in person and online.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#B5654A] px-7 py-3.5 font-semibold text-[#EFE7DC] shadow-sm transition hover:bg-[#9f553d]"
              >
                Book a free 15-min chat
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-[#33291F]/20 px-6 py-3.5 font-semibold transition hover:bg-white/50"
              >
                <Phone className="size-4" /> Call me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 mx-auto md:order-2"
          >
            <div className="blob overflow-hidden ring-8 ring-white/50">
              <Image
                src={images.portrait}
                alt={`${site.name}, counsellor`}
                width={900}
                height={900}
                priority
                className="aspect-square w-full max-w-md object-cover"
              />
            </div>
            <div className="absolute bottom-2 right-2 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-lg">
              <span className="flex -space-x-1 text-[#B5654A]">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </span>
              <span className="text-sm font-semibold">Trusted &amp; kind</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / story */}
      <section id="about" className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#B5654A]">
              My story
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Therapy should feel human
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-[#33291F]/80">{intro}</p>
            <p className="mt-4 leading-relaxed text-[#33291F]/65">{about}</p>
          </FadeIn>
        </div>
      </section>

      {/* Issues */}
      <section id="issues" className="bg-[#E4D8C7] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#B5654A]">
              How I can help
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Bring whatever feels heavy
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {issues.map((issue, i) => (
              <FadeIn key={issue.title} delay={i * 0.06}>
                <div className="h-full rounded-[1.75rem] bg-[#EFE7DC] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <span className="grid size-12 place-items-center rounded-full bg-[#7C8466]/15 text-[#7C8466]">
                    <Heart className="size-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{issue.title}</h3>
                  <p className="mt-2 leading-relaxed text-[#33291F]/65">{issue.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#B5654A]">
              How we begin
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">Starting is the hardest part</h2>
          </FadeIn>
          <div className="relative mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.1}>
                <div className="text-center">
                  <span className="mx-auto grid size-16 place-items-center rounded-full bg-[#B5654A] text-2xl font-bold text-[#EFE7DC]">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-xs leading-relaxed text-[#33291F]/65">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — front and centre */}
      <section id="words" className="bg-[#B5654A] py-20 text-[#EFE7DC] md:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <FadeIn className="text-center">
            <Quote className="mx-auto size-12 text-[#EFE7DC]/40" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Kind words from people I&apos;ve worked with
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <figure className="flex h-full flex-col rounded-[1.75rem] bg-[#EFE7DC] p-7 text-[#33291F]">
                  <div className="flex gap-1 text-[#B5654A]">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 leading-relaxed">“{t.quote}”</blockquote>
                  <figcaption className="mt-5 text-sm font-semibold text-[#9f553d]">
                    {t.name} · {t.detail}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <FadeIn className="overflow-hidden rounded-[2rem] bg-[#7C8466] text-[#EFE7DC] shadow-lg">
            <div className="grid items-center gap-8 p-8 sm:p-12 md:grid-cols-2">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-[#EFE7DC]/70">
                  Fees &amp; availability
                </span>
                <p className="mt-4 text-6xl font-bold">
                  {site.fee}
                  <span className="text-xl font-normal text-[#EFE7DC]/70"> / {site.sessionLength}</span>
                </p>
                <p className="mt-4 max-w-sm leading-relaxed text-[#EFE7DC]/85">
                  And it always starts with a {site.consultation.toLowerCase()} — no cost, no pressure.
                </p>
                <div className="mt-6 space-y-2 text-[#EFE7DC]/90">
                  <p className="flex items-center gap-2">
                    <MapPin className="size-5" /> {site.serves}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="size-5" /> {site.availability}
                  </p>
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-[#EFE7DC] p-8 text-[#33291F]">
                <h3 className="text-xl font-bold">Ready to talk?</h3>
                <p className="mt-2 text-[#33291F]/70">
                  Book your free introductory call and see how it feels.
                </p>
                <a
                  href="#contact"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#B5654A] px-6 py-3.5 font-semibold text-[#EFE7DC] transition hover:bg-[#9f553d]"
                >
                  Book free chat <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#E4D8C7] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <FadeIn className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#B5654A]">
              Questions
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">You might be wondering…</h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-10">
            <Accordion
              items={faqs}
              className="divide-[#33291F]/12"
              questionClassName="text-[#33291F]"
              iconClassName="text-[#B5654A]"
            />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-5 py-20 sm:px-8 md:py-28">
        <FadeIn className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-[#33291F] px-8 py-16 text-center text-[#EFE7DC] md:py-20">
          <div className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-[#B5654A]/30 blur-3xl" />
          <h2 className="relative mx-auto max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            Let&apos;s have a chat
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg text-[#EFE7DC]/75">
            One small message could be the start of feeling better. I&apos;d love to hear from you.
          </p>
          <div className="relative mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#B5654A] px-7 py-3.5 font-semibold text-[#EFE7DC] transition hover:bg-[#9f553d]"
            >
              Email Josh <ArrowRight className="size-4" />
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-[#EFE7DC]/30 px-7 py-3.5 font-semibold transition hover:bg-[#EFE7DC]/10"
            >
              <Phone className="size-4" /> {site.phone}
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-[#33291F]/10 px-5 pt-8 text-sm text-[#33291F]/60 sm:px-8 md:flex-row">
          <span className="flex items-center gap-2 font-bold text-[#33291F]">
            <Heart className="size-4 text-[#B5654A]" /> {site.name}
          </span>
          <span>{site.credential} · {site.location} {site.postcode}</span>
          <span>© {new Date().getFullYear()} {site.name}</span>
        </div>
      </footer>
    </main>
  );
}
