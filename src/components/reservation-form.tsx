"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const SUBJECTS = [
  "임플란트 상담",
  "보철 · 심미 상담",
  "교정 상담",
  "일반 진료 · 정기 점검",
  "타 병원 진료 이어가기",
  "기타 문의",
] as const;

const SLOTS = [
  "평일 오전 (10:00–13:00)",
  "평일 오후 (14:00–18:00)",
  "수요일 야간 (18:00–21:00)",
  "토요일 (10:00–14:00)",
  "상관없음",
] as const;

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // 시연용 — 실제 전송 X. 콘솔 출력만.
    const data = new FormData(e.currentTarget);
    console.info("[reservation:demo]", Object.fromEntries(data.entries()));
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
            aria-label="예약 문의 폼"
          >
            <Field
              id="name"
              label="성함"
              required
            >
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="홍길동"
                className="form-input"
              />
            </Field>

            <Field id="phone" label="연락처" required>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="010-0000-0000"
                pattern="[0-9-]+"
                className="form-input"
              />
            </Field>

            <Field id="subject" label="상담 주제" required>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SUBJECTS.map((s, i) => (
                  <label
                    key={s}
                    className="relative flex items-center gap-3 border border-line px-4 py-3 cursor-pointer hover:border-ink transition-colors has-[:checked]:border-ink has-[:checked]:bg-paper-deep"
                  >
                    <input
                      type="radio"
                      name="subject"
                      value={s}
                      required={i === 0}
                      className="sr-only peer"
                    />
                    <span className="block w-3 h-3 border border-ink rounded-full peer-checked:bg-ink transition-colors" />
                    <span className="text-[14px]">{s}</span>
                  </label>
                ))}
              </div>
            </Field>

            <Field id="slot" label="희망 시간대" required>
              <div className="grid grid-cols-1 gap-2">
                {SLOTS.map((s) => (
                  <label
                    key={s}
                    className="relative flex items-center gap-3 border border-line px-4 py-3 cursor-pointer hover:border-ink transition-colors has-[:checked]:border-ink has-[:checked]:bg-paper-deep"
                  >
                    <input
                      type="radio"
                      name="slot"
                      value={s}
                      className="sr-only peer"
                      defaultChecked={s === "상관없음"}
                    />
                    <span className="block w-3 h-3 border border-ink rounded-full peer-checked:bg-ink transition-colors" />
                    <span className="text-[14px]">{s}</span>
                  </label>
                ))}
              </div>
            </Field>

            <Field id="memo" label="문의 내용">
              <textarea
                id="memo"
                name="memo"
                rows={5}
                placeholder="치료받고 싶은 부위, 기존 진료 이력, 궁금하신 점 등을 자유롭게 적어주세요."
                className="form-input resize-none leading-relaxed"
              />
            </Field>

            <Field id="consent" label="개인정보 수집 · 이용 동의" required>
              <label className="flex items-start gap-3 cursor-pointer text-[13px] text-ink-soft leading-relaxed">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="sr-only peer"
                />
                <span className="mt-0.5 block w-4 h-4 border border-ink shrink-0 peer-checked:bg-ink relative">
                  <span className="absolute inset-1 border-l-2 border-b-2 border-paper rotate-[-50deg] origin-bottom-left opacity-0 peer-checked:opacity-100 group-checked:opacity-100" />
                </span>
                <span>
                  성함·연락처·문의 내용을 예약 처리 목적으로 수집하며, 처리
                  종료 시 즉시 파기합니다. (시연 페이지로 실제로 저장되지
                  않습니다.)
                </span>
              </label>
            </Field>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="submit"
                className="cursor-pointer inline-flex items-center gap-3 border border-ink bg-ink text-paper px-10 py-4 text-[15px] tracking-[0.04em] hover:bg-paper hover:text-ink transition-colors"
              >
                예약 신청 →
              </button>
              <p className="text-meta">
                또는 카카오톡 채널 @across-dental 로 직접 메시지
              </p>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="done"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="border border-line bg-paper-deep p-10 md:p-14"
            role="status"
            aria-live="polite"
          >
            <p className="text-eyebrow text-ultramarine">Received</p>
            <p className="mt-6 font-display italic text-display-m leading-tight">
              접수되었습니다.
            </p>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-soft max-w-md">
              영업일 기준 하루 안에 카카오톡 채널로 연락드리겠습니다. 급하신
              경우 02-538-1004로 전화 주세요.
            </p>
            <p className="mt-8 text-meta">
              * 이 페이지는 시연용 목업으로, 실제로 데이터가 전송되지
              않습니다.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-10 cursor-pointer text-[13px] tracking-[0.06em] link-underline"
            >
              새 문의 작성하기
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.875rem 1rem;
          background: transparent;
          border: 1px solid var(--color-line);
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--color-ink);
          transition: border-color 0.2s;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-ink);
        }
        .form-input::placeholder {
          color: var(--color-muted);
        }
      `}</style>
    </div>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-eyebrow mb-3 block"
      >
        {label}
        {required && <span className="ml-1 text-ultramarine">*</span>}
      </label>
      {children}
    </div>
  );
}
