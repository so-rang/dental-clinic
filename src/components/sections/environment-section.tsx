import { CLINIC } from "@/data/clinic";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { MoodPlaceholder } from "@/components/mood-placeholder";

export function EnvironmentSection() {
  return (
    <section
      id="environment"
      aria-labelledby="environment-heading"
      className="border-t border-line bg-ink text-paper"
    >
      <div className="container-page py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-12 md:items-end">
          <Reveal className="md:col-span-5">
            <SectionLabel
              index="05"
              label="Environment"
              className="!text-paper/60"
            />
            <h2
              id="environment-heading"
              className="mt-6 font-display italic text-display-l leading-[1.1] text-paper"
            >
              내부 공간
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
            <p className="text-[15px] md:text-[16px] leading-[1.8] text-paper/75">
              청담동·삼성클라쎄롯데캐슬 3층을 단독으로 사용합니다. 진료실은
              모두 독립되어 있고, 기구는 1인 1세트로 멸균 후 개봉합니다.
            </p>
          </Reveal>
        </div>

        {/* Big numbers + image strip in one viewport */}
        <Reveal delay={0.2}>
          <ul className="grid grid-cols-2 md:grid-cols-4 border-t border-paper/15">
            {CLINIC.environment.map((e, i) => (
              <li
                key={e.label}
                className={`py-6 md:py-7 ${
                  i % 2 === 0 ? "border-r" : ""
                } ${i < 2 ? "border-b md:border-b-0" : ""} ${
                  i > 0 ? "md:border-l" : ""
                } border-paper/15 md:pl-6 first:pl-0`}
              >
                <p className="font-display italic text-[52px] md:text-[64px] leading-none tracking-tight text-paper">
                  {e.number}
                  {e.unit && (
                    <span className="font-display not-italic text-[16px] md:text-[18px] tracking-normal text-paper/55 ml-1.5">
                      {e.unit}
                    </span>
                  )}
                </p>
                <p className="mt-3 text-[13px] md:text-[14px] font-medium text-paper">
                  {e.label}
                </p>
                <p className="mt-1 text-[11px] text-paper/55 leading-relaxed">
                  {e.sub}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.3} className="mt-8 md:mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            <MoodPlaceholder
              tone="ink"
              pattern="grid"
              aspect="landscape"
              caption="Operatory"
              label="진료실"
              src="/images/interior.png"
              alt="정단아치과 진료실 인테리어"
              sizes="(min-width:768px) 33vw, 50vw"
            />
            <MoodPlaceholder
              tone="ink"
              pattern="line"
              aspect="landscape"
              caption="Sterilization"
              label="멸균실"
              src="/images/sterilization.png"
              alt="정단아치과 멸균실"
              sizes="(min-width:768px) 33vw, 50vw"
            />
            <MoodPlaceholder
              tone="ink"
              pattern="circle"
              aspect="landscape"
              caption="Imaging"
              label="3D CT · 스캐너"
              src="/images/equipment.png"
              alt="정단아치과 진료 장비"
              sizes="(min-width:768px) 33vw, 50vw"
              className="col-span-2 md:col-span-1"
            />
          </div>
        </Reveal>

        {/* Equipment list — compact inline */}
        <Reveal delay={0.4} className="mt-8 md:mt-10 pt-6 border-t border-paper/15">
          <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8">
            <p className="text-eyebrow text-paper/55 shrink-0">
              N°05.1 — Equipment
            </p>
            <p className="text-[13px] text-paper/75 leading-relaxed">
              {CLINIC.equipment.join("  ·  ")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
