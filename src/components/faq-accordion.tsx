"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import type { FaqItem } from "@/data/faq";

export function FaqAccordion({
  items,
  defaultOpen,
}: {
  items: FaqItem[];
  defaultOpen?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpen ?? null,
  );
  const reduce = useReducedMotion();

  return (
    <ul className="border-t border-line">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <li key={item.question} className="border-b border-line">
            <button
              type="button"
              aria-expanded={open}
              aria-controls={`faq-${i}`}
              onClick={() => setOpenIndex(open ? null : i)}
              className="w-full text-left py-7 md:py-8 grid grid-cols-[auto_1fr_auto] items-start gap-4 md:gap-6 group cursor-pointer"
            >
              <span className="font-display italic text-[14px] tracking-[0.08em] text-muted pt-1.5 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display italic text-[22px] md:text-[28px] leading-[1.3] text-balance group-hover:text-ultramarine transition-colors">
                {item.question}
              </span>
              <span
                aria-hidden
                className="mt-2 relative w-5 h-5 inline-flex items-center justify-center text-ink-soft"
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
                  id={`faq-${i}`}
                  initial={
                    reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
                  }
                  animate={{ height: "auto", opacity: 1 }}
                  exit={
                    reduce
                      ? { height: "auto", opacity: 0 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{
                    duration: reduce ? 0 : 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-9 md:pb-12 grid grid-cols-[auto_1fr_auto] gap-4 md:gap-6">
                    <span aria-hidden />
                    <p className="text-[15px] md:text-[16px] leading-[1.85] text-ink-soft max-w-3xl">
                      {item.answer}
                    </p>
                    <span aria-hidden />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
