import { TREATMENTS } from "@/data/treatments";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { MoodPlaceholder } from "@/components/mood-placeholder";

const TONE_MAP = {
  implant: { tone: "navy", pattern: "circle" },
  esthetic: { tone: "rose", pattern: "arc" },
  orthodontics: { tone: "azure", pattern: "wave" },
  general: { tone: "warm-light", pattern: "dot" },
} as const;

export function TreatmentsSection() {
  return (
    <section
      id="treatments"
      aria-labelledby="treatments-heading"
      className="border-t border-line bg-paper-deep"
    >
      <div className="container-page py-28 md:py-44">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20 md:items-end">
          <Reveal className="md:col-span-4">
            <SectionLabel index="03" label="Treatment" />
            <h2
              id="treatments-heading"
              className="mt-8 font-display italic text-display-l text-balance leading-[0.95]"
            >
              네 가지 진료,
              <br />한 자리에서.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-7 md:col-start-6">
            <p className="text-[16px] md:text-[18px] leading-[1.85] text-ink-soft">
              임플란트·보철·교정·일반 진료를 분과별 전문의가 한 자리에서
              진행합니다. 환자분께서 여러 병원을 옮기지 않으셔도, 어크로스 안에서
              초진부터 사후 관리까지 같은 의료진이 책임집니다.
            </p>
            <p className="mt-6 text-meta">
              모든 진료는 의료광고법에 따른 표시 기준을 준수합니다.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-20">
          {TREATMENTS.map((t, i) => {
            const tone = TONE_MAP[t.slug as keyof typeof TONE_MAP];
            return (
              <Reveal key={t.slug} delay={i * 0.08}>
                <li>
                  <article>
                    <MoodPlaceholder
                      tone={tone.tone}
                      pattern={tone.pattern}
                      aspect="portrait"
                      caption={`Treatment ${t.number}`}
                      src={t.image}
                      alt={t.imageAlt}
                      sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
                    />
                    <div className="mt-6">
                      <p className="text-eyebrow">{t.number}</p>
                      <h3 className="mt-2 font-display italic text-[22px] md:text-[24px] leading-tight">
                        {t.name}
                      </h3>
                      <p className="mt-1 font-display italic text-[13px] tracking-[0.08em] text-muted">
                        {t.english}
                      </p>
                    </div>
                    <p className="mt-5 text-[14px] leading-[1.7] text-ink-soft">
                      {t.tagline}
                    </p>
                  </article>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
