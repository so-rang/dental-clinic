import Link from "next/link";
import { CLINIC } from "@/data/clinic";
import { NAV_ITEMS, RESERVATION_HREF, ADMIN_HREF } from "@/lib/nav";
import { Reveal } from "@/components/reveal";

export function SiteFooter() {
  return (
    <footer className="bg-paper-deep text-ink">
      {/* CTA band */}
      <section
        aria-labelledby="cta-heading"
        className="border-t border-line"
      >
        <div className="container-page py-24 md:py-36 grid md:grid-cols-12 gap-10 md:gap-14 items-end">
          <Reveal className="md:col-span-7">
            <p className="text-eyebrow mb-8">Reservation</p>
            <h2
              id="cta-heading"
              className="font-display italic text-display-l text-balance"
            >
              상담 30분으로 시작합니다.
            </h2>
            <p className="mt-8 max-w-md text-[15px] text-ink-soft leading-relaxed">
              초진은 약 30분, 정밀 진단(CT · 구강 스캔)과 함께 치료 계획서를
              서면으로 받아 보실 수 있습니다. 같은 자리에서 진단부터 사후
              관리까지.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-5 flex flex-col gap-5 md:items-end">
            <Link
              href={RESERVATION_HREF}
              className="inline-flex items-center gap-3 border border-ink px-10 py-5 text-[15px] tracking-[0.04em] hover:bg-ink hover:text-paper transition-colors duration-300"
            >
              예약 · 문의
              <span aria-hidden>→</span>
            </Link>
            <a
              href={CLINIC.contact.phoneHref}
              className="text-[15px] tracking-[0.06em] link-underline"
            >
              T. {CLINIC.contact.phoneDisplay}
            </a>
            <a
              href={CLINIC.contact.kakaoHref}
              target="_blank"
              rel="noopener"
              className="text-meta link-underline"
            >
              Kakao Channel {CLINIC.contact.kakao}
            </a>
          </Reveal>
        </div>
      </section>

      {/* Footer columns */}
      <div className="border-t border-line">
        <div className="container-page py-16 md:py-20 grid md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-4">
            <div className="leading-tight">
              <p className="text-[17px] font-medium tracking-tight">
                {CLINIC.name.ko}
              </p>
              <p className="font-display italic text-[12px] tracking-[0.18em] text-muted mt-1">
                {CLINIC.name.enFull}
              </p>
            </div>
            <p className="mt-6 text-[13px] text-ink-soft leading-relaxed max-w-xs">
              {CLINIC.description}
            </p>
            <p className="mt-8 font-display italic text-[18px] text-ink leading-snug max-w-xs">
              “{CLINIC.tagline}”
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-eyebrow mb-4">Location</p>
            <p className="text-[13px] text-ink-soft leading-relaxed">
              {CLINIC.address.road}
            </p>
            <p className="mt-3 text-meta">{CLINIC.address.subway}</p>
          </div>

          <div className="md:col-span-2">
            <p className="text-eyebrow mb-4">Contact</p>
            <ul className="text-[13px] space-y-2 text-ink-soft">
              <li>
                <a className="link-underline" href={CLINIC.contact.phoneHref}>
                  {CLINIC.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  className="link-underline"
                  href={CLINIC.contact.kakaoHref}
                  target="_blank"
                  rel="noopener"
                >
                  {CLINIC.contact.kakao}
                </a>
              </li>
              <li>
                <a className="link-underline" href={CLINIC.contact.emailHref}>
                  {CLINIC.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-eyebrow mb-4">Hours</p>
            <ul className="text-[13px] space-y-2 text-ink-soft">
              {CLINIC.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between gap-4 border-b border-line/60 pb-1.5"
                >
                  <span className="text-muted">{h.day}</span>
                  <span className="font-medium">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sitemap row */}
        <div className="border-t border-line">
          <div className="container-page py-6 flex flex-col md:flex-row gap-4 md:gap-10 text-[12px] tracking-[0.04em] text-ink-soft">
            <span className="text-muted">Sitemap</span>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-underline"
              >
                {item.label}
              </Link>
            ))}
            <Link href={RESERVATION_HREF} className="link-underline">
              예약
            </Link>
            <Link href={ADMIN_HREF} className="link-underline md:ml-auto text-muted">
              관리자 · AEO
            </Link>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-line bg-paper-mute">
        <div className="container-page py-6 flex flex-col md:flex-row justify-between gap-3 text-[11px] tracking-[0.04em] text-muted">
          <p>
            © 2026 {CLINIC.name.enFull}. 대표자 {CLINIC.legal.representative} ·
            사업자등록 {CLINIC.legal.businessNo}
          </p>
          <p>{CLINIC.legal.medicalLicense}</p>
        </div>
      </div>
    </footer>
  );
}
