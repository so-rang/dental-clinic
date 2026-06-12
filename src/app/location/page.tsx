import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { LocationSection } from "@/components/sections/location-section";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "오시는 길 · 운영시간",
  description:
    "어크로스치과 청담동·삼성클라쎄롯데캐슬 3층. 선릉역 1번 출구 도보 4분, 삼성중앙역 6번 출구 도보 6분. 운영시간과 주차 안내.",
};

export default function LocationPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          index="06"
          eyebrow="Location"
          breadcrumb={[{ label: "오시는 길" }]}
          title={
            <>
              선릉역에서
              <br />
              도보 4분.
            </>
          }
          description="청담동·삼성클라쎄롯데캐슬 3층. 지하철·버스·차량 모두 편리한 위치이며, 진료 시 2시간 무료 주차권을 드립니다."
        />

        <LocationSection />

        {/* Visiting tips */}
        <section className="border-t border-line bg-paper-deep">
          <div className="container-page py-24 md:py-32 grid md:grid-cols-12 gap-10">
            <Reveal className="md:col-span-4">
              <p className="text-eyebrow">Tips</p>
              <h2 className="mt-6 font-display italic text-display-m leading-tight">
                처음
                <br />
                오시는 분께.
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-7 md:col-start-6">
              <ul className="space-y-8">
                {[
                  {
                    n: "01",
                    title: "선릉역 1번 출구",
                    body: "출구로 나오신 뒤 테헤란로를 따라 강남구청 방향으로 200m 직진하시면 삼성클라쎄롯데캐슬 건물이 보입니다.",
                  },
                  {
                    n: "02",
                    title: "엘리베이터로 3층",
                    body: "건물 메인 로비에서 좌측 엘리베이터를 이용해 3층으로 올라오시면 입구에서 안내해 드립니다.",
                  },
                  {
                    n: "03",
                    title: "초진 30분",
                    body: "초진은 진단을 포함해 약 30분이 소요됩니다. 진료 의뢰서·구강 사진 등 자료가 있으시면 가져오시면 좋습니다.",
                  },
                  {
                    n: "04",
                    title: "주차",
                    body: "건물 지하 주차장 이용 가능. 진료 시 2시간 무료 주차권을 드리며, 추가 시간은 시간당 4,000원입니다.",
                  },
                ].map((t) => (
                  <li
                    key={t.n}
                    className="grid grid-cols-[auto_1fr] gap-6 border-t border-line pt-6"
                  >
                    <span className="font-display italic text-[24px] text-muted tabular-nums">
                      {t.n}
                    </span>
                    <div>
                      <p className="font-display italic text-[22px] leading-tight">
                        {t.title}
                      </p>
                      <p className="mt-2 text-[14px] text-ink-soft leading-relaxed">
                        {t.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
