"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ, FAQ_CATEGORIES, type FaqCategory } from "@/data/faq";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { FaqAccordion } from "@/components/faq-accordion";

const CATEGORIES: FaqCategory[] = ["treatment", "process", "operation"];

export function FaqSection() {
  const [active, setActive] = useState<FaqCategory>("treatment");
  const items = FAQ.filter((q) => q.category === active);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-line bg-paper"
    >
      <div className="container-page py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-10 md:items-end">
          <Reveal className="md:col-span-5">
            <SectionLabel index="07" label="Questions" />
            <h2
              id="faq-heading"
              className="mt-6 font-display italic text-display-l leading-[1.1]"
            >
              자주 묻는 질문에 답합니다
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
            <p className="text-[15px] md:text-[16px] leading-[1.75] text-ink-soft">
              진단·치료 과정·비용·운영에 관해 환자분께서 자주 주시는 질문에
              답합니다. 답에서 풀리지 않는 부분은 상담 때 직접 여쭤보세요.
            </p>
          </Reveal>
        </div>

        {/* Tab bar */}
        <Reveal>
          <div
            role="tablist"
            aria-label="FAQ 카테고리"
            className="flex flex-wrap gap-1 md:gap-2 mb-2 border-b border-line"
          >
            {CATEGORIES.map((cat) => {
              const count = FAQ.filter((q) => q.category === cat).length;
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`faq-panel-${cat}`}
                  onClick={() => setActive(cat)}
                  className={`relative px-4 md:px-6 py-3 md:py-4 text-[13px] md:text-[14px] tracking-[0.04em] cursor-pointer transition-colors ${
                    isActive
                      ? "text-ink"
                      : "text-muted hover:text-ink-soft"
                  }`}
                >
                  <span>{FAQ_CATEGORIES[cat]}</span>
                  <span className="ml-2 text-[11px] tabular-nums text-muted">
                    {String(count).padStart(2, "0")}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="faq-tab-underline"
                      aria-hidden
                      className="absolute -bottom-px left-0 right-0 h-px bg-ink"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Panel */}
        <div
          id={`faq-panel-${active}`}
          role="tabpanel"
          aria-labelledby={`faq-tab-${active}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <FaqAccordion items={items} defaultOpen={0} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
