"use client";

import { motion, useReducedMotion } from "motion/react";
import { CLINIC } from "@/data/clinic";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[88vh] md:min-h-[92vh] flex flex-col"
    >
      <div className="container-page flex-1 flex flex-col">
        {/* Eyebrow */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="pt-10 md:pt-14 grid grid-cols-2 items-start gap-4"
        >
          <p className="text-eyebrow">
            N°01 — Cheongdam Dental Clinic
          </p>
          <p className="text-eyebrow text-right">Est. 2024 · Seoul</p>
        </motion.div>

        {/* Main copy */}
        <div className="flex-1 flex items-center justify-center -mt-4">
          <div className="w-full text-center max-w-5xl mx-auto px-4">
            <h1
              id="hero-heading"
              className="font-display italic text-display-xl"
            >
              {CLINIC.tagline.split(/(\s+)/).map((segment, i) =>
                segment.trim() === "" ? (
                  <span key={i}>{segment}</span>
                ) : (
                  <span
                    key={i}
                    className="inline-block overflow-hidden align-bottom"
                  >
                    <motion.span
                      initial={
                        reduce ? false : { y: "115%" }
                      }
                      animate={{ y: 0 }}
                      transition={{
                        duration: 1.1,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.4 + i * 0.12,
                      }}
                      className="inline-block"
                    >
                      {segment}
                    </motion.span>
                  </span>
                ),
              )}
            </h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-8 text-[13px] tracking-[0.22em] uppercase text-muted font-sans"
            >
              For an enduring smile
            </motion.p>
          </div>
        </div>

        {/* Bottom meta + scroll cue */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.6 }}
          className="pb-10 md:pb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="text-meta leading-relaxed">
            {CLINIC.address.cityShort}
            <span className="mx-2 text-line">·</span>
            {CLINIC.hoursShort}
            <br className="md:hidden" />
            <span className="hidden md:inline text-line mx-2">·</span>
            <span className="text-ink-soft">{CLINIC.address.subway}</span>
          </div>

          <div className="flex items-end gap-3 text-meta">
            <span>scroll</span>
            <span
              className="block w-px h-12 bg-ink/40 origin-top relative overflow-hidden"
              aria-hidden
            >
              <motion.span
                className="absolute inset-x-0 top-0 h-1/2 bg-ink block"
                initial={{ y: "-100%" }}
                animate={{ y: "200%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
