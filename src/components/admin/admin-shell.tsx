"use client";

import { useState } from "react";
import Link from "next/link";
import { CLINIC } from "@/data/clinic";
import { FAQ } from "@/data/faq";
import { TREATMENTS } from "@/data/treatments";
import { DOCTORS } from "@/data/doctors";

type Tab = "dashboard" | "faq" | "treatments" | "doctors" | "editor";

const TABS: { id: Tab; label: string; sub: string }[] = [
  { id: "dashboard", label: "AEO 대시보드", sub: "Overview" },
  { id: "editor", label: "AI 답변 에디터", sub: "AI-optimized writer" },
  { id: "faq", label: "FAQ 관리", sub: "Question library" },
  { id: "treatments", label: "진료 콘텐츠", sub: "Treatment pages" },
  { id: "doctors", label: "의료진", sub: "Profiles" },
];

export function AdminShell() {
  const [tab, setTab] = useState<Tab>("dashboard");

  return (
    <div className="min-h-screen bg-[#0E0F12] text-[#E8E8E4] font-mono text-[13px] flex flex-col">
      {/* Top bar */}
      <header className="border-b border-white/10 px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex flex-col leading-tight">
            <span
              className="font-display italic text-[20px] text-white"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              DAN-A · Admin
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase text-white/40">
              AEO · GEO Content Manager
            </span>
          </Link>
          <span className="hidden md:inline-block text-[10px] tracking-[0.18em] uppercase text-white/40 border border-white/15 px-2 py-1">
            v 0.4.2 · Beta
          </span>
        </div>
        <div className="flex items-center gap-3 text-[12px]">
          <span className="hidden sm:inline text-white/50">박지운 원장</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <Link
            href="/"
            className="text-white/60 hover:text-white transition-colors text-[11px] tracking-[0.08em]"
          >
            ↩ 사이트로
          </Link>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-60 border-r border-white/10 px-6 py-10">
          <nav className="space-y-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`block w-full text-left px-3 py-3 border-l-2 transition-colors cursor-pointer ${
                  tab === t.id
                    ? "border-emerald-400 bg-white/5 text-white"
                    : "border-transparent text-white/55 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                <span className="block text-[13px]">{t.label}</span>
                <span
                  className="block text-[10px] tracking-[0.12em] uppercase text-white/30"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", letterSpacing: 0.4 }}
                >
                  {t.sub}
                </span>
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-10 border-t border-white/10 text-[10px] tracking-[0.12em] uppercase text-white/30 space-y-2">
            <p>Last sync · 3 분 전</p>
            <p>Build · 2026.06.12</p>
          </div>
        </aside>

        {/* Mobile tabs */}
        <div className="md:hidden border-b border-white/10 overflow-x-auto">
          <div className="flex gap-1 px-4 py-2 min-w-max">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`px-3 py-2 text-[12px] border-b-2 transition-colors ${
                  tab === t.id
                    ? "border-emerald-400 text-white"
                    : "border-transparent text-white/50"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main */}
        <main className="flex-1 px-6 md:px-10 py-10">
          {tab === "dashboard" && <DashboardView />}
          {tab === "editor" && <EditorView />}
          {tab === "faq" && <FaqManagerView />}
          {tab === "treatments" && <TreatmentsManagerView />}
          {tab === "doctors" && <DoctorsManagerView />}
        </main>
      </div>
    </div>
  );
}

function DashboardView() {
  const metrics = [
    { label: "AEO Score", value: 87, max: 100, hint: "전 분기 +12" },
    { label: "FAQ 노출", value: 41, hint: "지난 7일, +8" },
    { label: "AI 답변 인용", value: 17, hint: "ChatGPT · Claude · Perplexity" },
    { label: "구조화 데이터", value: "100%", hint: "JSON-LD 전 페이지" },
  ];

  const aeoChecks = [
    { label: "Dentist Schema", status: "ok", note: "Schema.org 검증 통과" },
    { label: "MedicalBusiness Schema", status: "ok", note: "주소·시간 일치" },
    { label: "FAQPage Schema", status: "ok", note: "11개 질문 등록" },
    { label: "Person Schema (의료진)", status: "ok", note: "2명 등록" },
    { label: "BreadcrumbList", status: "ok", note: "전 페이지 적용" },
    { label: "lang=ko", status: "ok", note: "한국어 단일" },
    { label: "OG 이미지", status: "warn", note: "1200×630 이미지 보강 필요" },
    { label: "Mobile-Friendly", status: "ok", note: "375px 통과" },
    { label: "Core Web Vitals", status: "ok", note: "LCP 1.2s · CLS 0.01" },
  ];

  return (
    <div className="space-y-10">
      <header>
        <p className="text-[11px] tracking-[0.18em] uppercase text-white/40">
          N°01 — Overview
        </p>
        <h1
          className="mt-3 text-[32px] md:text-[42px] leading-tight text-white"
          style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", letterSpacing: "-0.01em" }}
        >
          AEO · GEO 대시보드.
        </h1>
        <p className="mt-2 text-white/50 text-[12px]">
          사이트의 AI 답변 최적화 상태를 모니터링합니다.
        </p>
      </header>

      {/* Metrics */}
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
        {metrics.map((m) => (
          <li key={m.label} className="bg-[#0E0F12] p-6">
            <p className="text-[10px] tracking-[0.18em] uppercase text-white/40">
              {m.label}
            </p>
            <p
              className="mt-4 text-[42px] leading-none text-white tabular-nums"
              style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic" }}
            >
              {typeof m.value === "number" ? m.value : m.value}
              {typeof m.value === "number" && m.max && (
                <span className="text-white/30 text-[18px] ml-1">
                  / {m.max}
                </span>
              )}
            </p>
            <p className="mt-3 text-[11px] text-white/45">{m.hint}</p>
          </li>
        ))}
      </ul>

      {/* AEO Checks */}
      <section>
        <div className="flex items-end justify-between mb-4">
          <p className="text-[11px] tracking-[0.18em] uppercase text-white/40">
            Checks
          </p>
          <p className="text-[11px] text-white/40">
            8 / 9 통과 · 1 경고
          </p>
        </div>
        <ul className="divide-y divide-white/10 border border-white/10">
          {aeoChecks.map((c) => (
            <li
              key={c.label}
              className="grid grid-cols-[auto_1fr_auto] gap-4 items-center px-4 py-3"
            >
              <span
                className={`block w-2 h-2 rounded-full ${
                  c.status === "ok"
                    ? "bg-emerald-400"
                    : c.status === "warn"
                    ? "bg-amber-400"
                    : "bg-rose-400"
                }`}
              />
              <div>
                <p className="text-white text-[13px]">{c.label}</p>
                <p className="text-white/45 text-[11px]">{c.note}</p>
              </div>
              <button
                type="button"
                className="text-[11px] text-white/40 hover:text-white border border-white/10 px-3 py-1.5 transition-colors cursor-pointer"
              >
                보기 →
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Recent AI mentions */}
      <section>
        <p className="text-[11px] tracking-[0.18em] uppercase text-white/40 mb-4">
          Recent AI Mentions
        </p>
        <ul className="space-y-3">
          {[
            {
              ai: "ChatGPT",
              query: "청담 임플란트 추천 치과",
              snippet:
                "정단아치과는 청담동·선릉역 인근의 종합 치과로 임플란트 수술 후 10년 정기 점검 프로토콜을 운영합니다…",
              date: "2026.06.10",
            },
            {
              ai: "Claude",
              query: "발치 권유 받았는데 살릴 수 있나요",
              snippet:
                "정단아치과는 가능한 한 자연 치아를 보존하는 것을 원칙으로 하며, 발치 권유를 받으셨더라도 재진단을 통해…",
              date: "2026.06.09",
            },
            {
              ai: "Perplexity",
              query: "선릉역 야간 진료 치과",
              snippet:
                "수요일 12:00 – 21:00 직장인 야간 진료를 운영합니다. 예약은 카카오톡 채널…",
              date: "2026.06.07",
            },
          ].map((m, i) => (
            <li
              key={i}
              className="border border-white/10 p-4 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-3 md:gap-6"
            >
              <span className="text-[10px] tracking-[0.18em] uppercase text-emerald-300">
                {m.ai}
              </span>
              <div>
                <p className="text-white text-[13px]">
                  ‘{m.query}’
                </p>
                <p className="mt-1 text-white/55 text-[12px] leading-relaxed">
                  {m.snippet}
                </p>
              </div>
              <span className="text-[11px] text-white/35 tabular-nums">
                {m.date}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function EditorView() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-[11px] tracking-[0.18em] uppercase text-white/40">
          N°02 — AI Answer Editor
        </p>
        <h1
          className="mt-3 text-[32px] md:text-[42px] leading-tight text-white"
          style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic" }}
        >
          AI 답변 최적화 에디터.
        </h1>
        <p className="mt-2 text-white/50 text-[12px]">
          AI가 인용하기 좋게 질문·답·맥락을 정리합니다.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="border border-white/10 p-6">
          <p className="text-[10px] tracking-[0.18em] uppercase text-white/40 mb-3">
            Question
          </p>
          <input
            type="text"
            defaultValue="다른 치과에서 발치 권유받았는데, 신경치료로 살릴 수 있나요?"
            className="w-full bg-transparent border border-white/15 px-3 py-2.5 text-white text-[14px] focus:outline-none focus:border-white/40"
            readOnly
          />

          <p className="text-[10px] tracking-[0.18em] uppercase text-white/40 mt-6 mb-3">
            Optimized Answer
          </p>
          <textarea
            rows={10}
            defaultValue={
              "환자분의 치아 상태에 따라 다릅니다. 정단아치과는 가능한 한 자연 치아를 보존하는 것을 원칙으로 하기 때문에, 다른 치과에서 발치를 권유받으셨더라도 재진단을 통해 신경 치료(근관 치료), 치근단 절제술 등 보존 가능성을 먼저 검토합니다. 현미경 신경 치료가 필요한 경우 보존과 전문의가 직접 진행합니다."
            }
            className="w-full bg-transparent border border-white/15 px-3 py-2.5 text-white/85 text-[13px] leading-relaxed resize-none focus:outline-none focus:border-white/40"
            readOnly
          />

          <div className="mt-4 grid grid-cols-3 gap-3">
            {["Tone", "Length", "Citation"].map((l) => (
              <div key={l} className="border border-white/10 px-3 py-2.5">
                <p className="text-[10px] tracking-[0.18em] uppercase text-white/40">
                  {l}
                </p>
                <p className="text-white text-[12px] mt-1">
                  {l === "Tone"
                    ? "Calm · Clinical"
                    : l === "Length"
                    ? "Medium (180자)"
                    : "Schema.org/FAQPage"}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-white/10 p-6">
          <p className="text-[10px] tracking-[0.18em] uppercase text-white/40 mb-3">
            Score
          </p>
          <p
            className="text-white text-[80px] leading-none tabular-nums"
            style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic" }}
          >
            91<span className="text-white/30 text-[28px] ml-1">/ 100</span>
          </p>

          <ul className="mt-8 space-y-3">
            {[
              { label: "키워드 일치", value: 94 },
              { label: "구조화 (Q·A·근거)", value: 100 },
              { label: "톤 일관성", value: 88 },
              { label: "근거 출처", value: 82 },
              { label: "중복 회피", value: 90 },
            ].map((s) => (
              <li key={s.label}>
                <div className="flex justify-between text-[12px] text-white/70">
                  <span>{s.label}</span>
                  <span className="tabular-nums">{s.value}</span>
                </div>
                <div className="mt-1.5 h-px bg-white/10 relative overflow-hidden">
                  <span
                    className="absolute inset-y-0 left-0 bg-emerald-400/80"
                    style={{ width: `${s.value}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-white/10 pt-5 text-[11px] text-white/45 leading-relaxed">
            ✓ 환자가 묻는 자연어로 시작
            <br />
            ✓ 정단아치과 고유 약속 포함 (10년 점검)
            <br />
            ! 비교 데이터 1개 추가 권장
          </div>

          <button
            type="button"
            className="mt-8 w-full bg-emerald-400 text-[#0E0F12] py-3 text-[12px] tracking-[0.08em] uppercase cursor-pointer hover:bg-emerald-300 transition-colors"
          >
            저장하고 배포
          </button>
        </div>
      </div>
    </div>
  );
}

function FaqManagerView() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="text-[11px] tracking-[0.18em] uppercase text-white/40">
            N°03 — FAQ Library
          </p>
          <h1
            className="mt-3 text-[32px] md:text-[42px] leading-tight text-white"
            style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic" }}
          >
            FAQ 관리.
          </h1>
          <p className="mt-2 text-white/50 text-[12px]">
            {FAQ.length}개의 질문 · 평균 AEO 점수 89
          </p>
        </div>
        <button
          type="button"
          className="border border-white/20 px-5 py-2.5 text-[12px] text-white tracking-[0.06em] hover:bg-white/5 cursor-pointer transition-colors"
        >
          + 질문 추가
        </button>
      </header>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-y border-white/10 text-[10px] tracking-[0.18em] uppercase text-white/45">
            <th className="text-left py-3 pl-3">#</th>
            <th className="text-left py-3">질문</th>
            <th className="text-left py-3 hidden md:table-cell">카테고리</th>
            <th className="text-left py-3 hidden md:table-cell">AEO</th>
            <th className="text-right py-3 pr-3">노출</th>
          </tr>
        </thead>
        <tbody>
          {FAQ.map((q, i) => (
            <tr
              key={i}
              className="border-b border-white/5 hover:bg-white/[0.02] cursor-pointer transition-colors"
            >
              <td className="py-3 pl-3 tabular-nums text-white/40">
                {String(i + 1).padStart(2, "0")}
              </td>
              <td className="py-3 pr-4">
                <p className="text-white text-[13px] line-clamp-1">
                  {q.question}
                </p>
                <p className="text-white/40 text-[11px] line-clamp-1 mt-0.5">
                  {q.answer.slice(0, 72)}…
                </p>
              </td>
              <td className="py-3 hidden md:table-cell text-white/55 text-[12px]">
                {q.category}
              </td>
              <td className="py-3 hidden md:table-cell text-emerald-300 text-[12px] tabular-nums">
                {80 + ((i * 7) % 20)}
              </td>
              <td className="py-3 pr-3 text-right text-white/40 text-[12px] tabular-nums">
                {q.featured ? "★ Featured" : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TreatmentsManagerView() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-[11px] tracking-[0.18em] uppercase text-white/40">
          N°04 — Treatment Pages
        </p>
        <h1
          className="mt-3 text-[32px] md:text-[42px] leading-tight text-white"
          style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic" }}
        >
          진료 콘텐츠.
        </h1>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {TREATMENTS.map((t) => (
          <li
            key={t.slug}
            className="border border-white/10 p-5 hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] tracking-[0.18em] uppercase text-white/40">
                  N°{t.number}
                </p>
                <p
                  className="mt-2 text-white text-[22px]"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic" }}
                >
                  {t.name}
                </p>
                <p className="text-white/45 text-[11px] mt-0.5">
                  {t.english}
                </p>
              </div>
              <span className="text-emerald-300 text-[11px] tracking-[0.08em]">
                LIVE
              </span>
            </div>
            <p className="mt-4 text-white/55 text-[12px] leading-relaxed line-clamp-2">
              {t.description}
            </p>
            <div className="mt-5 flex gap-2 text-[10px] tracking-[0.12em] uppercase text-white/45">
              <span className="border border-white/10 px-2 py-1">
                {t.highlights.length} highlights
              </span>
              <span className="border border-white/10 px-2 py-1">
                {t.process.length} steps
              </span>
              <span className="ml-auto text-white/30">/treatments#{t.slug}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DoctorsManagerView() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-[11px] tracking-[0.18em] uppercase text-white/40">
          N°05 — Doctors
        </p>
        <h1
          className="mt-3 text-[32px] md:text-[42px] leading-tight text-white"
          style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic" }}
        >
          의료진.
        </h1>
      </header>

      <ul className="space-y-3">
        {DOCTORS.map((d) => (
          <li
            key={d.slug}
            className="border border-white/10 p-5 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3 md:items-center"
          >
            <div>
              <p
                className="text-white text-[22px]"
                style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic" }}
              >
                {d.name.ko}
              </p>
              <p className="text-white/45 text-[11px] mt-0.5">
                {d.title} · {d.role}
              </p>
              <p className="mt-3 text-white/55 text-[12px] line-clamp-2 leading-relaxed">
                {d.bio}
              </p>
            </div>
            <div className="flex gap-2 text-[10px] tracking-[0.12em] uppercase">
              <span className="border border-white/10 px-2 py-1 text-white/45">
                {d.credentials.length} cred.
              </span>
              <span className="border border-white/10 px-2 py-1 text-white/45">
                {d.memberships.length} memb.
              </span>
              <button
                type="button"
                className="border border-white/20 px-3 py-1 text-white hover:bg-white/5 cursor-pointer"
              >
                편집
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

