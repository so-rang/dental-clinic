import { CLINIC } from "@/data/clinic";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="border-t border-line bg-paper"
    >
      <div className="container-page py-16 md:py-24 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-3">
          <Reveal>
            <SectionLabel index="02" label="Philosophy" />
          </Reveal>
        </div>

        <div className="md:col-span-9">
          <Reveal>
            <h2
              id="philosophy-heading"
              className="font-display italic text-display-m leading-[1.15]"
            >
              치료는 짧게, 결과는 오래
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-[17px] md:text-[19px] leading-[1.85] text-ink-soft">
              {CLINIC.philosophy}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 border-t border-line pt-10">
              {[
                ["보존 우선", "Conservative"],
                ["같은 의료진", "Continuity"],
                ["서면 견적", "Transparent"],
                ["사후 관리", "Long-term"],
              ].map(([ko, en]) => (
                <div key={ko}>
                  <p className="text-[15px] font-medium tracking-tight">
                    {ko}
                  </p>
                  <p className="mt-1 font-display italic text-[13px] tracking-[0.06em] text-muted">
                    {en}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
