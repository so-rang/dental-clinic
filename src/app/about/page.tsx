import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { MoodPlaceholder } from "@/components/mood-placeholder";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, doctorsSchema } from "@/lib/json-ld";
import { CLINIC } from "@/data/clinic";
import { DOCTORS } from "@/data/doctors";

export const metadata: Metadata = {
  title: "병원 소개 · 의료진",
  description:
    "어크로스치과는 청담동·선릉역 위치의 종합 치과로, 보존과·보철과 전문의가 한 자리에서 진료합니다. 의료진과 진료 철학을 소개합니다.",
};

const TONE_MAP = {
  "park-jiwoon": { tone: "sand", pattern: "arc" },
  "lee-sooah": { tone: "warm-light", pattern: "line" },
} as const;

export default function AboutPage() {
  return (
    <>
      {doctorsSchema().map((d, i) => (
        <JsonLd key={i} id={`ld-doctor-${i}`} data={d} />
      ))}
      <JsonLd
        id="ld-breadcrumb"
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "의료진", href: "/about" },
        ])}
      />
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          index="04"
          eyebrow="About"
          breadcrumb={[{ label: "의료진" }]}
          title={
            <>
              같은 의료진이
              <br />
              끝까지 봅니다.
            </>
          }
          description="초진부터 사후 관리까지 같은 의료진이 책임지는 진료를 합니다. 보존과·보철과 전문의가 한 자리에서 환자분의 치아를 봅니다."
        />

        {/* Philosophy block */}
        <section className="border-b border-line">
          <div className="container-page py-24 md:py-36 grid md:grid-cols-12 gap-10">
            <Reveal className="md:col-span-4">
              <SectionLabel index="01" label="Philosophy" />
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-8">
              <p className="font-display italic text-display-m leading-[1.15] text-balance">
                “{CLINIC.philosophy}”
              </p>
            </Reveal>
          </div>
        </section>

        {/* Doctors */}
        <section className="bg-paper">
          <div className="container-page py-24 md:py-36">
            <Reveal>
              <SectionLabel index="02" label="Doctors" />
              <h2 className="mt-8 font-display italic text-display-l leading-[0.95]">
                의료진.
              </h2>
            </Reveal>

            <div className="mt-16 md:mt-24 space-y-24 md:space-y-32">
              {DOCTORS.map((d, i) => {
                const tone = TONE_MAP[d.slug as keyof typeof TONE_MAP];
                return (
                  <Reveal key={d.slug} delay={i * 0.1}>
                    <article
                      className={`grid md:grid-cols-12 gap-10 md:gap-14 ${
                        i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                      }`}
                    >
                      <div className="md:col-span-5">
                        <MoodPlaceholder
                          tone={tone.tone}
                          pattern={tone.pattern}
                          aspect="portrait"
                          caption={d.role}
                        />
                      </div>

                      <div className="md:col-span-7 flex flex-col">
                        <p className="text-eyebrow">{d.role}</p>
                        <h3 className="mt-3 font-display italic text-display-m leading-tight">
                          {d.name.ko}
                        </h3>
                        <p className="mt-2 font-display italic text-[16px] tracking-[0.14em] text-muted">
                          {d.name.en}
                        </p>
                        <p className="mt-2 text-[14px] tracking-[0.04em] text-ink-soft">
                          {d.title}
                        </p>

                        <blockquote className="mt-8 pt-8 border-t border-line">
                          <p className="font-display italic text-[26px] md:text-[30px] leading-snug">
                            “{d.quote}”
                          </p>
                        </blockquote>

                        <p className="mt-8 text-[15px] leading-[1.9] text-ink-soft">
                          {d.bio}
                        </p>

                        <div className="mt-10 grid sm:grid-cols-2 gap-8">
                          <div>
                            <p className="text-eyebrow mb-3">Credentials</p>
                            <ul className="text-[13px] text-ink-soft space-y-1.5">
                              {d.credentials.map((c) => (
                                <li
                                  key={c}
                                  className="flex gap-2 before:content-['—'] before:text-muted"
                                >
                                  {c}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-eyebrow mb-3">Memberships</p>
                            <ul className="text-[13px] text-ink-soft space-y-1.5">
                              {d.memberships.map((m) => (
                                <li
                                  key={m}
                                  className="flex gap-2 before:content-['—'] before:text-muted"
                                >
                                  {m}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
