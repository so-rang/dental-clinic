import Link from "next/link";
import { DOCTORS } from "@/data/doctors";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { MoodPlaceholder } from "@/components/mood-placeholder";

const TONE_MAP = {
  "park-jiwoon": { tone: "sand", pattern: "arc" },
  "lee-sooah": { tone: "warm-light", pattern: "line" },
} as const;

export function DoctorsSection() {
  return (
    <section
      aria-labelledby="doctors-heading"
      className="border-t border-line bg-paper"
    >
      <div className="container-page py-28 md:py-44">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          <Reveal className="md:col-span-4">
            <SectionLabel index="04" label="Doctors" />
            <h2
              id="doctors-heading"
              className="mt-8 font-display italic text-display-l text-balance leading-[0.95]"
            >
              같은 의료진이
              <br />
              끝까지 봅니다.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-7 md:col-start-6">
            <p className="text-[16px] md:text-[18px] leading-[1.85] text-ink-soft">
              어크로스는 초진부터 사후 관리까지 같은 의료진이 책임지는 진료
              시스템을 운영합니다. 환자분과의 신뢰는 진료의 결과만큼 중요합니다.
            </p>
          </Reveal>
        </div>

        <ul className="grid md:grid-cols-2 gap-12 md:gap-x-12 md:gap-y-20">
          {DOCTORS.map((d, i) => {
            const tone = TONE_MAP[d.slug as keyof typeof TONE_MAP];
            return (
              <Reveal key={d.slug} delay={i * 0.12}>
                <li className="grid grid-cols-1 sm:grid-cols-5 gap-6 md:gap-8 items-start">
                  <div className="sm:col-span-2">
                    <MoodPlaceholder
                      tone={tone.tone}
                      pattern={tone.pattern}
                      aspect="portrait"
                      caption={d.role}
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <p className="text-eyebrow">{d.role}</p>
                    <h3 className="mt-3 font-display italic text-[36px] md:text-[42px] leading-tight">
                      {d.name.ko}
                    </h3>
                    <p className="mt-1 font-display italic text-[14px] tracking-[0.12em] text-muted">
                      {d.name.en}
                    </p>
                    <p className="mt-2 text-[14px] tracking-[0.04em] text-ink-soft">
                      {d.title}
                    </p>

                    <blockquote className="mt-7 pt-7 border-t border-line">
                      <p className="font-display italic text-[20px] md:text-[22px] leading-snug text-ink">
                        “{d.quote}”
                      </p>
                    </blockquote>

                    <ul className="mt-7 space-y-1.5 text-[13px] text-ink-soft leading-relaxed">
                      {d.credentials.slice(0, 3).map((c) => (
                        <li
                          key={c}
                          className="flex gap-3 before:content-['—'] before:text-muted"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={0.2} className="mt-16 md:mt-24 flex justify-center">
          <Link
            href="/about"
            className="link-underline text-[14px] tracking-[0.06em] inline-flex items-center gap-2 text-ink hover:text-ultramarine transition-colors"
          >
            의료진 상세 보기
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
