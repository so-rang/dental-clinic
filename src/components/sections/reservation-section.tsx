"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CLINIC } from "@/data/clinic";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { ReservationForm } from "@/components/reservation-form";

export function ReservationSection() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <section
      id="reservation"
      aria-labelledby="reservation-heading"
      className="border-t border-line bg-paper-deep"
    >
      <div className="container-page py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-10 md:items-end">
          <Reveal className="md:col-span-5">
            <SectionLabel index="08" label="Reservation" />
            <h2
              id="reservation-heading"
              className="mt-6 font-display italic text-display-l leading-[1.1]"
            >
              상담 30분으로 시작합니다
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
            <p className="text-[15px] md:text-[16px] leading-[1.75] text-ink-soft">
              초진은 진단(CT · 구강 스캔)을 포함해 약 30분이 소요됩니다. 치료
              계획서와 항목별 견적을 서면으로 받아 보실 수 있습니다.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Direct contact — always visible */}
          <Reveal className="md:col-span-5">
            <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-px bg-line border border-line">
              <li className="bg-paper-deep p-5">
                <p className="text-eyebrow mb-2">Kakao Channel</p>
                <a
                  href={CLINIC.contact.kakaoHref}
                  target="_blank"
                  rel="noopener"
                  className="font-display italic text-[22px] link-underline"
                >
                  {CLINIC.contact.kakao}
                </a>
              </li>
              <li className="bg-paper-deep p-5">
                <p className="text-eyebrow mb-2">Phone</p>
                <a
                  href={CLINIC.contact.phoneHref}
                  className="font-display italic text-[22px] tabular-nums link-underline"
                >
                  T. {CLINIC.contact.phoneDisplay}
                </a>
              </li>
              <li className="bg-paper-deep p-5">
                <p className="text-eyebrow mb-2">Email</p>
                <a
                  href={CLINIC.contact.emailHref}
                  className="link-underline text-[14px]"
                >
                  {CLINIC.contact.email}
                </a>
              </li>
            </ul>

            <p className="mt-6 text-meta">
              평일 진료 10:00 — 19:00 · 수요일 야간 12:00 — 21:00
            </p>
          </Reveal>

          {/* Online form — toggle */}
          <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
            <button
              type="button"
              aria-expanded={open}
              aria-controls="reservation-form-panel"
              onClick={() => setOpen((v) => !v)}
              className="w-full grid grid-cols-[1fr_auto] items-center gap-4 border border-ink bg-paper text-ink px-6 md:px-8 py-5 md:py-6 hover:bg-ink hover:text-paper transition-colors cursor-pointer group"
            >
              <span className="text-left">
                <span className="block text-eyebrow text-ink-soft group-hover:text-paper/70 transition-colors">
                  Online Form
                </span>
                <span className="mt-2 block font-display italic text-[20px] md:text-[24px] leading-tight">
                  {open ? "폼 접기" : "온라인으로 예약 신청"}
                </span>
              </span>
              <span
                aria-hidden
                className="relative inline-flex items-center justify-center w-6 h-6 shrink-0"
              >
                <span className="absolute inset-x-0 top-1/2 h-px bg-current -translate-y-1/2" />
                <span
                  className={`absolute inset-y-0 left-1/2 w-px bg-current -translate-x-1/2 transition-transform duration-400 origin-center ${
                    open ? "scale-y-0" : "scale-y-100"
                  }`}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id="reservation-form-panel"
                  initial={
                    reduce
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  animate={{ height: "auto", opacity: 1 }}
                  exit={
                    reduce
                      ? { height: "auto", opacity: 0 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{
                    duration: reduce ? 0 : 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-8 md:pt-10">
                    <ReservationForm />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="mt-4 text-meta">
              · 본 폼은 시연용입니다. 실제 예약은 위 카카오톡 채널 또는 전화로
              부탁드립니다.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
