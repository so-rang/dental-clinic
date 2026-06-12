import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { MoodPlaceholder } from "@/components/mood-placeholder";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/json-ld";
import { SITE_URL } from "@/lib/site-url";
import { TREATMENTS } from "@/data/treatments";

export const metadata: Metadata = {
  title: "진료 안내",
  description:
    "어크로스치과의 4가지 시그니처 진료 — 임플란트, 보철·심미, 교정, 일반 진료. 각 진료의 절차·장비·사후 관리를 안내합니다.",
};

const TONE_MAP = {
  implant: { tone: "navy", pattern: "circle" },
  esthetic: { tone: "rose", pattern: "arc" },
  orthodontics: { tone: "azure", pattern: "wave" },
  general: { tone: "warm-light", pattern: "dot" },
} as const;

export default function TreatmentsPage() {
  const proceduresSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: TREATMENTS.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "MedicalProcedure",
        name: t.name,
        alternateName: t.english,
        description: t.description,
        url: `${SITE_URL}/treatments#${t.slug}`,
        procedureType: "Therapeutic",
      },
    })),
  };

  return (
    <>
      <JsonLd id="ld-procedures" data={proceduresSchema} />
      <JsonLd
        id="ld-breadcrumb"
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "진료안내", href: "/treatments" },
        ])}
      />
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          index="03"
          eyebrow="Treatment"
          breadcrumb={[{ label: "진료안내" }]}
          title={
            <>
              네 가지 진료,
              <br />한 자리에서.
            </>
          }
          description="임플란트·보철·교정·일반 진료를 분과별 전문의가 한 자리에서 진행합니다. 진단부터 사후 관리까지 같은 의료진이 책임집니다."
        />

        {/* Index */}
        <section className="border-b border-line bg-paper-deep">
          <div className="container-page py-12">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
              {TREATMENTS.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`#${t.slug}`}
                    className="block group"
                  >
                    <p className="text-eyebrow">{t.number}</p>
                    <p className="mt-2 font-display italic text-[22px] group-hover:text-ultramarine transition-colors">
                      {t.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Treatments */}
        {TREATMENTS.map((t, i) => {
          const tone = TONE_MAP[t.slug as keyof typeof TONE_MAP];
          const reverse = i % 2 === 1;
          return (
            <section
              key={t.slug}
              id={t.slug}
              aria-labelledby={`${t.slug}-heading`}
              className={`border-b border-line scroll-mt-32 ${
                i % 2 === 0 ? "bg-paper" : "bg-paper-deep"
              }`}
            >
              <div className="container-page py-28 md:py-40">
                <div
                  className={`grid md:grid-cols-12 gap-10 md:gap-16 ${
                    reverse ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <Reveal className="md:col-span-5">
                    <MoodPlaceholder
                      tone={tone.tone}
                      pattern={tone.pattern}
                      aspect="portrait"
                      caption={`Treatment ${t.number}`}
                      label={t.name}
                    />
                  </Reveal>

                  <Reveal delay={0.1} className="md:col-span-7 flex flex-col">
                    <p className="text-eyebrow">
                      N°{t.number} — {t.english}
                    </p>
                    <h2
                      id={`${t.slug}-heading`}
                      className="mt-4 font-display italic text-display-l leading-[0.95]"
                    >
                      {t.name}
                    </h2>
                    <p className="mt-6 font-display italic text-[24px] md:text-[28px] text-ink-soft leading-snug max-w-xl">
                      {t.tagline}
                    </p>
                    <p className="mt-8 text-[15px] md:text-[16px] leading-[1.9] text-ink-soft max-w-2xl">
                      {t.description}
                    </p>
                    <p className="mt-6 text-[14px] leading-[1.9] text-muted max-w-2xl border-t border-line pt-6">
                      {t.detail}
                    </p>
                  </Reveal>
                </div>

                {/* Highlights */}
                <Reveal delay={0.2} className="mt-16 md:mt-24">
                  <p className="text-eyebrow mb-8">Highlights</p>
                  <ul className="grid grid-cols-1 md:grid-cols-4 border-t border-line">
                    {t.highlights.map((h, hi) => (
                      <li
                        key={h.title}
                        className={`py-8 md:py-10 ${
                          hi > 0 ? "md:border-l md:pl-8" : "md:pr-8"
                        } border-line border-b md:border-b-0`}
                      >
                        <p className="font-display italic text-[24px] md:text-[28px] leading-tight">
                          {h.title}
                        </p>
                        <p className="mt-3 text-[13px] text-ink-soft leading-relaxed">
                          {h.sub}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                {/* Process */}
                <Reveal delay={0.3} className="mt-20 md:mt-28">
                  <p className="text-eyebrow mb-8">Process</p>
                  <ol className="grid grid-cols-1 md:grid-cols-5 border-t border-line">
                    {t.process.map((p, pi) => (
                      <li
                        key={p.step}
                        className={`py-8 ${
                          pi > 0 ? "md:border-l md:pl-6" : "md:pr-6"
                        } border-line border-b md:border-b-0`}
                      >
                        <p className="font-display italic text-[36px] leading-none text-ink-soft tabular-nums">
                          {p.step}
                        </p>
                        <p className="mt-4 font-medium text-[14px] tracking-tight">
                          {p.label}
                        </p>
                        <p className="mt-1 text-[12px] text-muted leading-relaxed">
                          {p.sub}
                        </p>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              </div>
            </section>
          );
        })}
      </main>
      <SiteFooter />
    </>
  );
}
