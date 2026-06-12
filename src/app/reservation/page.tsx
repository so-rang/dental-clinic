import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { ReservationForm } from "@/components/reservation-form";
import { CLINIC } from "@/data/clinic";

export const metadata: Metadata = {
  title: "예약 · 문의",
  description:
    "어크로스치과 예약·상담 문의. 카카오톡 채널, 전화, 온라인 폼으로 예약하실 수 있습니다. 초진 상담 30분.",
};

export default function ReservationPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          index="08"
          eyebrow="Reservation"
          breadcrumb={[{ label: "예약 · 문의" }]}
          title={
            <>
              상담 30분으로
              <br />
              시작합니다.
            </>
          }
          description="초진은 진단(CT · 구강 스캔)을 포함해 약 30분이 소요됩니다. 치료 계획서와 항목별 견적을 서면으로 받아 보실 수 있습니다."
        />

        <section className="bg-paper">
          <div className="container-page py-20 md:py-32 grid md:grid-cols-12 gap-12 md:gap-16">
            {/* Form */}
            <div className="md:col-span-7">
              <ReservationForm />
            </div>

            {/* Aside */}
            <aside className="md:col-span-4 md:col-start-9 flex flex-col gap-10">
              <div>
                <p className="text-eyebrow mb-3">Direct</p>
                <p className="font-display italic text-[28px] md:text-[32px] leading-tight">
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
                <p className="text-eyebrow mb-3">Hours</p>
                <ul className="text-[13px] space-y-2 text-ink-soft">
                  {CLINIC.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between gap-4 border-b border-line/60 pb-2"
                    >
                      <span className="text-muted">{h.day}</span>
                      <span className="font-medium tabular-nums">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-paper-deep p-6 border border-line">
                <p className="text-eyebrow mb-2">Notice</p>
                <p className="text-[13px] leading-relaxed text-ink-soft">
                  예약 변경 · 취소는 가능한 한 24시간 전까지 부탁드립니다. 당일
                  취소는 다른 환자분의 진료 기회가 줄어들 수 있습니다.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
