"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "motion/react";
import { CLINIC } from "@/data/clinic";

export function HeroSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  const arcShiftX = useTransform(smoothX, [0, 1], [-40, 40]);
  const arcShiftY = useTransform(smoothY, [0, 1], [-30, 30]);
  const glowX = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(smoothY, [0, 1], ["0%", "100%"]);
  const glowBg = useMotionTemplate`radial-gradient(38vmax 38vmax at ${glowX} ${glowY}, rgba(45,79,191,0.18), rgba(45,79,191,0.04) 36%, transparent 64%)`;

  useEffect(() => {
    if (reduce) return;
    const el = sectionRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mouseX.set((e.clientX - r.left) / r.width);
      mouseY.set((e.clientY - r.top) / r.height);
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY, reduce]);

  const words = CLINIC.tagline.split(/(\s+)/);

  return (
    <section
      id="hero"
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="relative min-h-[78vh] md:min-h-[86vh] flex flex-col overflow-hidden bg-paper isolate"
    >
      {/* Rotating concentric arcs */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ x: arcShiftX, y: arcShiftY }}
        >
          <motion.svg
            viewBox="0 0 1000 1000"
            className="absolute left-1/2 top-1/2 w-[140vmax] h-[140vmax] -translate-x-1/2 -translate-y-1/2 will-change-transform"
            animate={{ rotate: 360 }}
            transition={{ duration: 220, ease: "linear", repeat: Infinity }}
          >
            <g fill="none" stroke="#1A1A1A" strokeWidth="0.4" opacity="0.10">
              <circle cx="500" cy="500" r="480" />
              <circle cx="500" cy="500" r="420" />
              <circle cx="500" cy="500" r="360" />
              <circle cx="500" cy="500" r="300" />
              <circle cx="500" cy="500" r="240" />
              <circle cx="500" cy="500" r="180" />
            </g>
            <g
              fill="none"
              stroke="#2D4FBF"
              strokeWidth="0.6"
              opacity="0.16"
              strokeDasharray="2 8"
            >
              <circle cx="500" cy="500" r="450" />
              <circle cx="500" cy="500" r="330" />
              <circle cx="500" cy="500" r="210" />
            </g>
          </motion.svg>
        </motion.div>
      )}

      {/* Cursor-tracked ultramarine glow */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: glowBg }}
        />
      )}

      {/* Subtle grain */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 mix-blend-multiply opacity-[0.06]"
      >
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      <div className="container-page flex-1 flex flex-col relative z-10">
        {/* Eyebrow row */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="pt-10 md:pt-14 grid grid-cols-2 items-start gap-4"
        >
          <p className="text-eyebrow">N°01 — Cheongdam Dental Clinic</p>
          <p className="text-eyebrow text-right">Est. 2024 · Seoul</p>
        </motion.div>

        {/* Centered hero copy */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-12 md:py-16">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-sans text-[13px] md:text-[14px] font-medium tracking-[0.32em] text-ink"
          >
            정단아치과
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-2 font-display italic text-[11px] md:text-[12px] tracking-[0.32em] text-muted"
          >
            {CLINIC.name.en}
          </motion.p>

          <h1
            id="hero-heading"
            className="mt-10 md:mt-14 font-display italic text-display-xl text-balance"
          >
            {words.map((segment, i) =>
              segment.trim() === "" ? (
                <span key={i}>{segment}</span>
              ) : (
                <span
                  key={i}
                  className="inline-block overflow-hidden align-bottom"
                >
                  <motion.span
                    initial={reduce ? false : { y: "115%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1.15,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.55 + i * 0.13,
                    }}
                    className="inline-block"
                  >
                    {segment}
                  </motion.span>
                </span>
              ),
            )}
          </h1>

          <motion.div
            aria-hidden
            className="mt-10 h-px bg-ink/50"
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
            style={{ width: "min(180px, 40%)" }}
          />

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-6 text-[12px] tracking-[0.32em] uppercase text-muted font-sans"
          >
            For an enduring smile
          </motion.p>
        </div>

        {/* Bottom: sweeping line + meta + scroll cue */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.7 }}
          className="pb-10 md:pb-14"
        >
          {!reduce && (
            <div
              aria-hidden
              className="relative h-px mb-8 bg-line overflow-hidden"
            >
              <motion.div
                className="absolute inset-y-0 w-24 md:w-40"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #2D4FBF, transparent)",
                }}
                initial={{ x: "-100%" }}
                animate={{ x: "1200%" }}
                transition={{
                  duration: 7,
                  ease: "linear",
                  repeat: Infinity,
                  delay: 2,
                }}
              />
            </div>
          )}

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="text-meta leading-relaxed">
              <span className="text-ink-soft">
                {CLINIC.address.cityShort}
              </span>
              <span className="mx-2 text-line">·</span>
              {CLINIC.hoursShort}
              <br className="md:hidden" />
              <span className="hidden md:inline text-line mx-2">·</span>
              <span className="text-ink-soft">
                {CLINIC.address.subway}
              </span>
            </div>

            <div className="flex items-end gap-3 text-meta">
              <span>scroll</span>
              <span
                className="block w-px h-12 bg-ink/30 origin-top relative overflow-hidden"
                aria-hidden
              >
                <motion.span
                  className="absolute inset-x-0 top-0 h-1/2 bg-ink block"
                  initial={{ y: "-100%" }}
                  animate={{ y: "200%" }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2.4,
                  }}
                />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
