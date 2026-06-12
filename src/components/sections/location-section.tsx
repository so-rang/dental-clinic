import { CLINIC } from "@/data/clinic";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export function LocationSection() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="border-t border-line bg-paper"
    >
      <div className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-12 md:items-end">
          <Reveal className="md:col-span-4">
            <SectionLabel index="06" label="Location" />
            <h2
              id="location-heading"
              className="mt-8 font-display italic text-display-l text-balance leading-[0.95]"
            >
              선릉역 1번 출구, 도보 4분.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-7 md:col-start-6">
            <p className="text-[16px] md:text-[18px] leading-[1.85] text-ink-soft">
              청담동·삼성클라쎄롯데캐슬 3층. 선릉역에서 도보 4분, 삼성중앙역에서
              도보 6분 거리에 있습니다. 차량으로 오시는 경우 건물 지하 주차장을
              이용하실 수 있고, 진료 시 2시간 무료 주차권을 드립니다.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10">
          {/* Map */}
          <Reveal className="md:col-span-7">
            <div className="relative aspect-[4/3] md:aspect-[5/4] overflow-hidden bg-paper-deep border border-line">
              <ClinicMap />
            </div>
          </Reveal>

          {/* Info panel */}
          <Reveal delay={0.15} className="md:col-span-5 flex flex-col">
            <div className="border-t border-line pt-6">
              <p className="text-eyebrow mb-2">Address</p>
              <p className="text-[15px] leading-relaxed">
                {CLINIC.address.road}
              </p>
              <p className="mt-2 text-meta">{CLINIC.address.postalCode}</p>
            </div>

            <div className="border-t border-line pt-6 mt-8">
              <p className="text-eyebrow mb-2">Transit</p>
              <ul className="text-[14px] text-ink-soft space-y-1.5">
                <li>지하철 2호선·분당선 · 선릉역 1번 출구 도보 4분</li>
                <li>지하철 9호선 · 삼성중앙역 6번 출구 도보 6분</li>
                <li>버스 · 선릉역 정류장 (146 · 341 · 360)</li>
                <li>차량 · 건물 지하 주차장 (진료 시 2시간 무료)</li>
              </ul>
            </div>

            <div className="border-t border-line pt-6 mt-8 flex-1">
              <p className="text-eyebrow mb-3">Hours</p>
              <ul className="text-[14px] space-y-2 text-ink">
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

            <div className="border-t border-line pt-6 mt-8 flex flex-col gap-2">
              <a
                href={CLINIC.contact.phoneHref}
                className="font-display italic text-[28px] hover:text-ultramarine transition-colors"
              >
                T. {CLINIC.contact.phoneDisplay}
              </a>
              <a
                href={CLINIC.contact.kakaoHref}
                className="text-meta link-underline"
              >
                Kakao Channel {CLINIC.contact.kakao}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ClinicMap() {
  const { latitude, longitude } = CLINIC.address;
  const delta = 0.004;
  const bbox = [
    longitude - delta,
    latitude - delta * 0.7,
    longitude + delta,
    latitude + delta * 0.7,
  ].join(",");
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${latitude},${longitude}`;

  return (
    <>
      <iframe
        src={src}
        title="정단아치과 위치 지도"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full grayscale-[0.15] contrast-[0.95]"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-paper-deep" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-line/40" />
    </>
  );
}
