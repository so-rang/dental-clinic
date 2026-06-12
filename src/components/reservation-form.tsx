"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const SUBJECTS = [
  "임플란트",
  "보철·심미",
  "교정",
  "일반·정기 점검",
  "이어 진료",
  "기타",
] as const;

const SLOTS = [
  "평일 오전",
  "평일 오후",
  "수요일 야간",
  "토요일",
  "상관없음",
] as const;

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
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
            className="space-y-5"
            aria-label="예약 문의 폼"
          >
            <div className="grid grid-cols-2 gap-3">
              <Field id="name" label="성함" required>
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
            </div>

            <Field id="subject" label="상담 주제" required>
              <ChipGroup
                name="subject"
                items={SUBJECTS}
                defaultValue={SUBJECTS[0]}
              />
            </Field>

            <Field id="slot" label="희망 시간">
              <ChipGroup name="slot" items={SLOTS} defaultValue="상관없음" />
            </Field>

            <Field id="memo" label="문의 내용">
              <textarea
                id="memo"
                name="memo"
                rows={3}
                placeholder="치료받고 싶은 부위, 기존 진료 이력 등을 자유롭게 적어주세요."
                className="form-input resize-none leading-relaxed"
              />
            </Field>

            <label className="flex items-start gap-2.5 cursor-pointer text-[12px] text-ink-soft leading-snug">
              <input
                type="checkbox"
                name="consent"
                required
                className="sr-only peer"
              />
              <span className="mt-0.5 block w-3.5 h-3.5 border border-ink shrink-0 peer-checked:bg-ink transition-colors" />
              <span>
                개인정보 수집·이용에 동의합니다. (시연용 — 실제 저장되지
                않습니다.)
              </span>
            </label>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="cursor-pointer inline-flex items-center gap-3 border border-ink bg-ink text-paper px-8 py-3 text-[14px] tracking-[0.04em] hover:bg-paper hover:text-ink transition-colors"
              >
                예약 신청
                <span aria-hidden>→</span>
              </button>
              <p className="text-meta">
                또는 카카오톡 채널 @dan-a-dental
              </p>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="done"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="border border-line bg-paper p-8 md:p-10"
            role="status"
            aria-live="polite"
          >
            <p className="text-eyebrow text-ultramarine">Received</p>
            <p className="mt-5 font-display italic text-[36px] md:text-[44px] leading-tight">
              접수되었습니다.
            </p>
            <p className="mt-5 text-[14px] leading-relaxed text-ink-soft max-w-md">
              영업일 기준 하루 안에 카카오톡 채널로 연락드리겠습니다.
            </p>
            <p className="mt-6 text-meta">* 시연용 폼 — 실제 전송되지 않습니다.</p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 cursor-pointer text-[12px] tracking-[0.06em] link-underline"
            >
              새 문의 작성하기
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.65rem 0.85rem;
          background: transparent;
          border: 1px solid var(--color-line);
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--color-ink);
          transition: border-color 0.2s;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-ink);
        }
        .form-input::placeholder {
          color: var(--color-muted);
          font-size: 13px;
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
      <label htmlFor={id} className="text-eyebrow mb-2 block">
        {label}
        {required && <span className="ml-1 text-ultramarine">*</span>}
      </label>
      {children}
    </div>
  );
}

function ChipGroup({
  name,
  items,
  defaultValue,
}: {
  name: string;
  items: readonly string[];
  defaultValue?: string;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <label
          key={item}
          className="relative cursor-pointer group"
        >
          <input
            type="radio"
            name={name}
            value={item}
            defaultChecked={item === defaultValue}
            className="sr-only peer"
          />
          <span className="block border border-line px-3 py-1.5 text-[12.5px] text-ink-soft hover:border-ink hover:text-ink peer-checked:bg-ink peer-checked:text-paper peer-checked:border-ink transition-colors">
            {item}
          </span>
        </label>
      ))}
    </div>
  );
}
