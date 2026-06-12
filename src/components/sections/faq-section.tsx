import { FAQ, FAQ_CATEGORIES, type FaqCategory } from "@/data/faq";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { FaqAccordion } from "@/components/faq-accordion";

const CATEGORIES: FaqCategory[] = ["treatment", "process", "operation"];

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-line bg-paper"
    >
      <div className="container-page py-28 md:py-44">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20 md:items-end">
          <Reveal className="md:col-span-5">
            <SectionLabel index="07" label="Questions" />
            <h2
              id="faq-heading"
              className="mt-8 font-display italic text-display-l leading-[1.1]"
            >
              자주 묻는
              <br />
              질문에 답합니다.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
            <p className="text-[16px] md:text-[18px] leading-[1.85] text-ink-soft">
              진단·치료 과정·비용·운영에 관해 환자분께서 자주 주시는 질문에
              답합니다. 답에서 풀리지 않는 부분은 상담 때 직접 여쭤보세요.
            </p>
            <p className="mt-6 text-meta">
              총 {FAQ.length}개 · {CATEGORIES.length} 카테고리
            </p>
          </Reveal>
        </div>

        <div className="space-y-20 md:space-y-28">
          {CATEGORIES.map((cat, ci) => {
            const items = FAQ.filter((q) => q.category === cat);
            if (items.length === 0) return null;
            return (
              <Reveal key={cat} delay={ci * 0.05}>
                <div
                  className={
                    ci === 0
                      ? ""
                      : "pt-16 md:pt-20 border-t border-line/70"
                  }
                >
                  <div className="grid md:grid-cols-12 gap-6 md:gap-8 mb-8 md:mb-10">
                    <div className="md:col-span-3">
                      <p className="text-eyebrow">
                        N°{String(ci + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 font-display italic text-[28px] md:text-[36px] leading-tight">
                        {FAQ_CATEGORIES[cat]}
                      </h3>
                    </div>
                    <div className="md:col-span-7 md:col-start-6 flex items-end">
                      <p className="text-meta">{items.length}개의 질문</p>
                    </div>
                  </div>
                  <FaqAccordion
                    items={items}
                    defaultOpen={ci === 0 ? 0 : undefined}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
