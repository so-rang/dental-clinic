import Link from "next/link";
import { FEATURED_FAQ } from "@/data/faq";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { FaqAccordion } from "@/components/faq-accordion";

export function FaqPreviewSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="border-t border-line bg-paper"
    >
      <div className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-20">
          <Reveal className="md:col-span-5">
            <SectionLabel index="07" label="Questions" />
            <h2
              id="faq-heading"
              className="mt-8 font-display italic text-display-l text-balance leading-[0.95]"
            >
              자주 묻는 질문에 답합니다.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
            <p className="text-[16px] md:text-[18px] leading-[1.85] text-ink-soft">
              진단·치료 과정·비용·운영에 대해 환자분께서 자주 주시는 질문에
              답합니다. 답에서 다 풀리지 않는 부분은 상담 시 직접 여쭤보세요.
            </p>
            <p className="mt-6 text-meta">
              · 전체 FAQ는 <Link href="/faq" className="link-underline text-ink">/faq</Link> 에 정리되어 있습니다.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <FaqAccordion items={FEATURED_FAQ} defaultOpen={0} />
        </Reveal>

        <Reveal delay={0.3} className="mt-12 flex justify-center">
          <Link
            href="/faq"
            className="link-underline text-[14px] tracking-[0.06em] inline-flex items-center gap-2 text-ink hover:text-ultramarine transition-colors"
          >
            모든 FAQ 보기
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
