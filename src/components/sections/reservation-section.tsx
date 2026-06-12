import { CLINIC } from "@/data/clinic";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { ReservationForm } from "@/components/reservation-form";

export function ReservationSection() {
  return (
    <section
      id="reservation"
      aria-labelledby="reservation-heading"
      className="border-t border-line bg-paper-deep"
    >
      <div className="container-page py-28 md:py-44">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          <Reveal className="md:col-span-5">
            <SectionLabel index="08" label="Reservation" />
            <h2
              id="reservation-heading"
              className="mt-8 font-display italic text-display-l leading-[1.1]"
            >
              상담 30분으로
              <br />
              시작합니다.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
            <p className="text-[16px] md:text-[18px] leading-[1.85] text-ink-soft">
              초진은 진단(CT · 구강 스캔)을 포함해 약 30분이 소요됩니다. 치료
              계획서와 항목별 견적을 서면으로 받아 보실 수 있습니다.
            </p>
            <p className="mt-6 text-meta">
              · 본 폼은 시연용입니다. 실제 예약은 카카오톡 채널 또는 전화로
              부탁드립니다.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-7">
            <ReservationForm />
          </Reveal>

          <Reveal
            delay={0.15}
            className="md:col-span-4 md:col-start-9 flex flex-col gap-10"
          >
            <div>
              <p className="text-eyebrow mb-3">Direct</p>
              <p className="font-display italic text-[26px] md:text-[30px] leading-tight">
                바로 예약하시려면.
              </p>
              <ul className="mt-6 space-y-4 text-[14px]">
                <li className="border-t border-line pt-4">
                  <p className="text-eyebrow mb-1">Kakao Channel</p>
                  <a
                    href={CLINIC.contact.kakaoHref}
                    target="_blank"
                    rel="noopener"
                    className="link-underline text-[16px]"
                  >
                    {CLINIC.contact.kakao}
                  </a>
                </li>
                <li className="border-t border-line pt-4">
                  <p className="text-eyebrow mb-1">Phone</p>
                  <a
                    href={CLINIC.contact.phoneHref}
                    className="link-underline text-[16px] tabular-nums"
                  >
                    T. {CLINIC.contact.phoneDisplay}
                  </a>
                </li>
                <li className="border-t border-line pt-4">
                  <p className="text-eyebrow mb-1">Email</p>
                  <a
                    href={CLINIC.contact.emailHref}
                    className="link-underline text-[14px]"
                  >
                    {CLINIC.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="border-t border-line pt-6">
              <p className="text-eyebrow mb-3">Notice</p>
              <p className="text-[13px] leading-relaxed text-ink-soft">
                예약 변경 · 취소는 가능한 한 24시간 전까지 부탁드립니다. 당일
                취소는 다른 환자분의 진료 기회가 줄어들 수 있어요.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
