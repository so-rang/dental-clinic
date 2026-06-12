import { CLINIC } from "@/data/clinic";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export function LocationSection() {
  const naverMapHref = `https://map.naver.com/p/search/${encodeURIComponent(
    CLINIC.address.road,
  )}`;
  const kakaoMapHref = `https://map.kakao.com/?q=${encodeURIComponent(
    CLINIC.address.road,
  )}`;

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
              선릉역 1번 출구,
              <br />
              도보 4분.
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
          {/* Map placeholder */}
          <Reveal className="md:col-span-7">
            <div className="relative aspect-[4/3] md:aspect-[5/4] overflow-hidden bg-paper-deep border border-line">
              <MapPlaceholder />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                <a
                  href={naverMapHref}
                  target="_blank"
                  rel="noopener"
                  className="bg-paper border border-ink px-4 py-2 text-[12px] tracking-[0.04em] hover:bg-ink hover:text-paper transition-colors"
                >
                  네이버 지도 →
                </a>
                <a
                  href={kakaoMapHref}
                  target="_blank"
                  rel="noopener"
                  className="bg-paper border border-line px-4 py-2 text-[12px] tracking-[0.04em] hover:border-ink transition-colors"
                >
                  카카오맵 →
                </a>
              </div>
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

function MapPlaceholder() {
  return (
    <svg
      viewBox="0 0 400 320"
      className="absolute inset-0 w-full h-full"
      role="img"
      aria-label="청담·선릉역 인근 약도"
    >
      <defs>
        <pattern
          id="map-grid"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 32 0 L 0 0 0 32"
            fill="none"
            stroke="#E5E3DE"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="400" height="320" fill="#F2F0EA" />
      <rect width="400" height="320" fill="url(#map-grid)" />

      {/* Streets */}
      <line x1="0" y1="180" x2="400" y2="180" stroke="#D5D3CD" strokeWidth="14" />
      <line x1="220" y1="0" x2="220" y2="320" stroke="#D5D3CD" strokeWidth="10" />
      <line
        x1="0"
        y1="90"
        x2="400"
        y2="90"
        stroke="#DAD8D2"
        strokeWidth="6"
      />

      {/* Street labels */}
      <text x="14" y="174" fontSize="9" fill="#8A8A85" letterSpacing="1.5">
        TEHERAN-RO
      </text>
      <text x="14" y="86" fontSize="9" fill="#8A8A85" letterSpacing="1.5">
        EONJU-RO
      </text>
      <text
        x="232"
        y="318"
        fontSize="9"
        fill="#8A8A85"
        letterSpacing="1.5"
      >
        SAMSEONG-RO
      </text>

      {/* Subway dots */}
      <g>
        <circle cx="120" cy="180" r="9" fill="#FAFAF7" stroke="#1A1A1A" />
        <text x="98" y="200" fontSize="10" fill="#1A1A1A" fontWeight="600">
          선릉
        </text>
      </g>
      <g>
        <circle cx="310" cy="180" r="7" fill="#FAFAF7" stroke="#1A1A1A" />
        <text x="290" y="200" fontSize="10" fill="#1A1A1A">
          삼성중앙
        </text>
      </g>

      {/* Clinic pin */}
      <g transform="translate(160 110)">
        <circle r="32" fill="#2D4FBF" opacity="0.12" />
        <circle r="20" fill="#2D4FBF" opacity="0.22" />
        <circle r="9" fill="#2D4FBF" />
        <line y1="9" y2="62" stroke="#2D4FBF" strokeWidth="1.5" />
      </g>
      <text
        x="160"
        y="92"
        textAnchor="middle"
        fontSize="11"
        fill="#1A1A1A"
        fontWeight="600"
        fontFamily="serif"
        fontStyle="italic"
      >
        DAN-A
      </text>
      <text
        x="160"
        y="105"
        textAnchor="middle"
        fontSize="9"
        fill="#1A1A1A"
        letterSpacing="0.5"
      >
        Dental Clinic
      </text>

      {/* Compass */}
      <g transform="translate(370 30)">
        <line y2="14" stroke="#1A1A1A" strokeWidth="1" />
        <text
          x="0"
          y="-2"
          textAnchor="middle"
          fontSize="9"
          fill="#1A1A1A"
          fontWeight="600"
        >
          N
        </text>
      </g>
    </svg>
  );
}
