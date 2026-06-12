import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/json-ld";
import { FAQ, FAQ_CATEGORIES, type FaqCategory } from "@/data/faq";

export const metadata: Metadata = {
  title: "자주 묻는 질문",
  description:
    "어크로스치과의 진료·절차·운영에 관한 자주 묻는 질문. 보존 치료, 임플란트 사후 관리, 비용, 야간 진료, 주차 등을 정리했습니다.",
};

const CATEGORIES: FaqCategory[] = ["treatment", "process", "operation"];

export default function FaqPage() {
  return (
    <>
      <JsonLd id="ld-faq" data={faqSchema()} />
      <JsonLd
        id="ld-breadcrumb"
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ])}
      />
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          index="07"
          eyebrow="Questions"
          breadcrumb={[{ label: "FAQ" }]}
          title={
            <>
              질문에
              <br />
              답합니다.
            </>
          }
          description="진단·치료 과정·비용·운영에 대해 환자분께서 자주 주시는 질문에 답합니다. 답에서 다 풀리지 않는 부분은 상담 시 직접 여쭤보세요."
        />

        <section className="container-page py-20 md:py-32">
          {CATEGORIES.map((cat, ci) => {
            const items = FAQ.filter((q) => q.category === cat);
            if (items.length === 0) return null;
            return (
              <div
                key={cat}
                className={ci === 0 ? "" : "mt-20 md:mt-28 pt-20 md:pt-24 border-t border-line"}
              >
                <div className="grid md:grid-cols-12 gap-8 mb-10 md:mb-14">
                  <div className="md:col-span-3">
                    <p className="text-eyebrow">
                      N°{String(ci + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-4 font-display italic text-[32px] md:text-[44px] leading-tight">
                      {FAQ_CATEGORIES[cat]}
                    </h2>
                  </div>
                  <div className="md:col-span-7 md:col-start-6 flex items-end">
                    <p className="text-meta">
                      총 {items.length}개의 질문이 정리되어 있습니다.
                    </p>
                  </div>
                </div>
                <FaqAccordion items={items} />
              </div>
            );
          })}
        </section>

        <section className="border-t border-line bg-paper-deep">
          <div className="container-page py-20 md:py-28 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <p className="text-eyebrow">Still wondering?</p>
              <h2 className="mt-6 font-display italic text-display-m leading-tight">
                여기서 풀리지 않는 질문은
                <br />
                직접 여쭤보세요.
              </h2>
            </div>
            <div className="md:col-span-5 flex flex-col gap-4 md:items-end">
              <a
                href="/reservation"
                className="inline-flex items-center gap-3 border border-ink px-10 py-5 text-[15px] tracking-[0.04em] hover:bg-ink hover:text-paper transition-colors"
              >
                상담 예약 →
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
