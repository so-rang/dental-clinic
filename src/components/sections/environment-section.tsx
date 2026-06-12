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
      <div className="container-page py-28 md:py-44">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20 md:items-end">
          <Reveal className="md:col-span-4">
            <SectionLabel index="05" label="Environment" className="!text-paper/60" />
            <h2
              id="environment-heading"
              className="mt-8 font-display italic text-display-l text-balance leading-[0.95] text-paper"
            >
              깨끗한 자리에서,
              <br />
              정밀한 진료를.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-7 md:col-start-6">
            <p className="text-[16px] md:text-[18px] leading-[1.85] text-paper/75">
              어크로스는 청담동·삼성클라쎄롯데캐슬 3층 전체를 단독으로 사용합니다.
              모든 진료실은 독립되어 있고, 모든 기구는 1인 1세트로 멸균 후
              개봉합니다. 의료의 기본을 가장 분명하게 보여드립니다.
            </p>
          </Reveal>
        </div>

        {/* Big numbers */}
        <Reveal delay={0.2}>
          <ul className="grid grid-cols-2 md:grid-cols-4 border-t border-paper/15">
            {CLINIC.environment.map((e, i) => (
              <li
                key={e.label}
                className={`py-10 md:py-14 ${
                  i % 2 === 0 ? "border-r md:border-r" : ""
                } ${
                  i < 2 ? "md:border-b" : ""
                } border-paper/15 ${i > 0 ? "md:border-l" : ""} md:pl-8 first:pl-0`}
              >
                <p className="font-display italic text-[64px] md:text-[88px] leading-none tracking-tight text-paper">
                  {e.number}
                  {e.unit && (
                    <span className="font-display not-italic text-[20px] md:text-[24px] tracking-normal text-paper/60 ml-1.5">
                      {e.unit}
                    </span>
                  )}
                </p>
                <p className="mt-4 text-[14px] md:text-[15px] font-medium text-paper">
                  {e.label}
                </p>
                <p className="mt-1 text-[12px] text-paper/55">
                  {e.sub}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Image mood strip */}
        <Reveal delay={0.3} className="mt-20 md:mt-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <MoodPlaceholder
              tone="ink"
              pattern="grid"
              aspect="landscape"
              caption="Operatory"
              label="진료실"
              src="/images/interior.png"
              alt="어크로스치과 진료실 인테리어"
              sizes="(min-width:768px) 33vw, 100vw"
            />
            <MoodPlaceholder
              tone="ink"
              pattern="line"
              aspect="landscape"
              caption="Sterilization"
              label="멸균실"
              src="/images/sterilization.png"
              alt="어크로스치과 멸균실"
              sizes="(min-width:768px) 33vw, 100vw"
              className="opacity-95"
            />
            <MoodPlaceholder
              tone="ink"
              pattern="circle"
              aspect="landscape"
              caption="Imaging"
              label="3D CT · 스캐너"
              src="/images/equipment.png"
              alt="어크로스치과 진료 장비"
              sizes="(min-width:768px) 33vw, 100vw"
              className="opacity-90"
            />
          </div>
        </Reveal>

        {/* Equipment list */}
        <Reveal delay={0.4} className="mt-20 md:mt-28 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <p className="text-eyebrow text-paper/60">Equipment</p>
            <h3 className="mt-4 font-display italic text-[28px] leading-tight">
              검증된 장비만,
              <br />
              제 자리에서.
            </h3>
          </div>
          <ul className="md:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[14px] text-paper/85 self-end">
            {CLINIC.equipment.map((e) => (
              <li
                key={e}
                className="border-b border-paper/15 pb-3 flex items-start gap-3"
              >
                <span className="text-paper/40">—</span>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
