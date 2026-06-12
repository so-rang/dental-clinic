# 어크로스치과 ACROSS DENTAL — Design Document

> Brainstorm 산출물. plan 단계로 핸드오프.
> 작성일: 2026-06-12

---

## 0. 미션 컨텍스트

해커톤: 병원/치과/한의원 홈페이지 바이브코딩 대회.
원장님이 보고 "우리도 이렇게 만들고 싶다" 할 영업용 샘플.
1순위 평가: 첫인상 / 와우 포인트.
마감: 오후 3시 50분, 시연: 오후 4시. Vercel 배포 URL 제출.

다른 두 트랙(피부과·한의원)과 톤이 확연히 달라야 함.

---

## 1. 브랜드

| 항목 | 값 |
|---|---|
| 브랜드명 (한글) | 어크로스치과 |
| 브랜드명 (영문) | ACROSS DENTAL |
| 한 줄 콘셉트 | 아름다운 미소를 위하여. |
| 단어 의미 | across = through (처음부터 끝까지, 한 분을 길게 봄) |
| 지역 | 청담동 · 선릉역 · 삼성클라쎄롯데캐슬 |
| 진료 영역 | 종합 진료 (임플란트 / 보철·심미 / 교정 / 일반), 특정 시술 강조 X |

### 의료진 (가상)

- **박지운 Park Jiwoon** — 보존과 전문의
  - 서울대학교 치의학대학원 졸업
  - 전) 서울대학교치과병원 보존과 임상강사
  - 미국 Univ. of Pennsylvania 보존과 visiting scholar
  - 대한치과보존학회 정회원

- **이수아 Lee Sooah** — 보철과 전문의
  - 연세대학교 치과대학 졸업
  - 전) 연세대학교치과병원 보철과 전임의
  - 대한치과보철학회 정회원

### 운영시간

| 요일 | 시간 |
|---|---|
| 월·화·목·금 | 10:00 – 19:00 |
| 수요일 (야간) | 12:00 – 21:00 |
| 토요일 | 10:00 – 14:00 |
| 일·공휴일 | 휴진 |
| 점심시간 | 13:00 – 14:00 |

연락처: 02-538-XXXX / Kakao Channel @across-dental

---

## 2. 디자인 톤

**무쇄 미니멈 부티크 (Aesop / Apple Vision Pro 결)**

조용·절제·여백. 0.5초 안에 "고급스러운 갤러리/부티크" 느낌.

레퍼런스: aesop.com · apple.com (Vision Pro) · fewer.shop · 국내 less.kr · 여의도 어나더치과 ("기본, 그리고 더해지는 품격")

### 컬러

| 토큰 | HEX | 용도 |
|---|---|---|
| `--color-bg` | `#FAFAF7` | Off-white 배경 |
| `--color-fg` | `#1A1A1A` | Charcoal 본문/제목 |
| `--color-accent` | `#2D4FBF` | Ultramarine 호버/링크/CTA |
| `--color-muted` | `#8A8A85` | 보조 텍스트 (12-14px) |
| `--color-line` | `#E5E3DE` | 1px 구분선 |

### 폰트

| 토큰 | 패밀리 | 용도 |
|---|---|---|
| `--font-serif` | Cormorant Garamond | 메인 카피, 큰 제목 (Italic 위주) |
| `--font-sans` | Pretendard Variable | 본문, 메뉴, UI |

### 폰트 스케일 (데스크탑)

- 메인 히어로 카피: Cormorant Italic 100px
- 섹션 제목: Cormorant Italic 64-72px
- 본문 큰: Pretendard 18px
- 본문: Pretendard 16px
- 보조/캡션: Pretendard 12-14px
- 로고 한글: Pretendard Medium 16px
- 로고 영문: Cormorant Italic 11px

### 자간

- 메뉴/UI: 0.05-0.15em (Pretendard)
- 영문 키워드: 0.1em
- 본문 Pretendard: 기본 (-0.01em)

---

## 3. 랜딩 페이지 구조 (8섹션)

### HERO (첫 화면)

```
┌──────────────────────────────────────────────────────────────────┐
│ 어크로스치과            진료안내  의료진  오시는길  FAQ   [예약]  │
│ ACROSS DENTAL                                                    │
│                                                                  │
│                                                                  │
│                                                                  │
│                  아름다운 미소를 위하여.                          │  ← Cormorant Italic 100px
│                                                                  │
│                                                                  │
│ Cheongdam · Mon–Sat 10:00—19:00                                  │
└──────────────────────────────────────────────────────────────────┘
```

요소:
- ① 좌상단 로고: 어크로스치과 (Pretendard Medium 16px) / ACROSS DENTAL (Cormorant Italic 11px), 2줄
- ② 우상단 메뉴: 진료안내 · 의료진 · 오시는길 · FAQ (Pretendard Regular 14px, 자간 32px) + [예약] CTA (1px charcoal 테두리, padding 8x20)
- ③ EN 토글: 없음 (한국어 단일)
- ④ 중앙 카피: "아름다운 미소를 위하여." (Cormorant Italic 100px)
- ⑤ 하단 보조: "Cheongdam · Mon–Sat 10:00—19:00" (Pretendard Regular 12px, 자간 0.1em)
- 호버 컬러: ultramarine underline
- 모션: 스크롤 시 느린 페이드 (Aesop 결, 강한 모션 X)

### ① 철학 한 문단

브랜드 메시지를 짧은 산문 1-2문장. across=through 톤 살림.
Cormorant Italic (강조구) + Pretendard (본문) 혼용.
풀스크린 80vh, 좌측 또는 중앙 정렬.

### ② 시그니처 진료

```
임플란트 / 보철·심미 / 교정 / 일반 진료
```

종합 진료 강조. 4분할 그리드 (데스크탑) → 1열 세로 (모바일).
각 항목: 무드 이미지 (1:1 정사각) + 카테고리명 + 짧은 설명 + 진료 페이지 링크.
이미지 톤: 모노톤, 차분한 조명, 추상 클로즈업 (전체샷 X).

### ③ 의료진

박지운 / 이수아 카드 2개 (가로 2분할 → 모바일 세로).
구조: 사진(AI 생성, 등자업, 가운, 차분한 조명) + 이름 + 영문명 + 전공 + 약력 3-4줄.
사진은 가상 인물이나 사이트 내 별도 명시 없음 (시연용 샘플).

### ④ 진료환경

장비/공간/멸균 시스템 데이터 시각화 + 인테리어 이미지.
숫자 큰 타이포: "300평", "임상의 12대", "1인 1기구 멸균".
이미지 2-3장 (인테리어 코너, 의료 장비 클로즈업, 멸균실).

### ⑤ 위치 + 시간

선릉역 도보 X분 + 약도/지도 + 주소 + 운영시간 테이블 + 오시는 길 안내.

### ⑥ FAQ 프리뷰

어크로스 톤 질문 3-4개 + "전체 FAQ" 링크.
클리셰 질문("얼마나 아픈가요?", "첫 방문 시") 피하고 어크로스만의 차별화 질문.
예시 방향:
- 다른 치과에서 발치 권유받았는데 살릴 수 있나요? (보존 강조)
- 타 치과 진료 중인데 옮길 수 있나요?
- 임플란트 후 평생 관리는 어떻게 하나요? (across=through)
- 디지털 진단 시스템은 어떤 게 있나요?
- 치료 비용은 어떻게 책정되나요? (투명성)
- 주차는 어떻게 되나요?
- 수요일 야간 진료 예약은?

### ⑦ FOOTER + 예약 CTA

큰 예약 버튼 + 연락처 / 주소 / 사업자 등록 / 의료기관 인증번호 등 법정 표기.

---

## 4. 모션 톤

- 기본: 강한 모션 X. Aesop 결.
- 스크롤 시 천천히 페이드인 + Y 슬라이드 (`opacity 0→1`, `translateY 12px→0`, duration 600ms ease-out).
- 호버: 1px underline 또는 컬러 트랜지션 200ms.
- `motion/react` 사용 (framer-motion X).
- `prefers-reduced-motion` 존중.

---

## 5. 서브페이지

| 경로 | 내용 |
|---|---|
| `/` | 랜딩 (8섹션) |
| `/about` | 병원 소개 + 의료진 상세 |
| `/treatments` | 진료 안내 (임플란트/보철·심미/교정/일반) |
| `/location` | 오시는 길 + 운영시간 |
| `/reservation` | 예약/문의 폼 (목업, 실제 전송 X) |
| `/faq` | 전체 FAQ |
| `/admin` | AEO/GEO 콘텐츠 관리 대시보드 (정적 목업) |

### `/admin` 어드민 목업 구조

- FAQ 작성/수정 (목업 폼)
- 진료 콘텐츠 관리
- 의료진 소개 수정
- AEO 최적화 점수 대시보드 (가짜 메트릭)
- "AI 답변 최적화 콘텐츠 작성" 에디터 느낌
- 톤: 일반 톤(off-white·charcoal)과 다르게 살짝 어둡거나 그리드 UI

---

## 6. AEO/GEO 기술 항목

- `<html lang="ko">`
- 한글 메타데이터, OG/Twitter 카드
- JSON-LD: `Dentist` + `MedicalBusiness` + `Person`(의료진) + `FAQPage` + `BreadcrumbList`
- `sitemap.xml`, `robots.txt`
- 시맨틱 HTML (`<article>`, `<section>`, `<nav>`, heading 위계)
- 질문형 H2/H3 (FAQ 콘텐츠)

---

## 7. 이미지 생성 계획 (힉스필드)

총 9-10장 필요. 톤: 모노톤·미니멀·차분한 조명·고급스러운 무드.

| 섹션 | 장 수 | 주제 |
|---|---|---|
| ② 시그니처 진료 | 4장 | 임플란트 / 보철·심미 / 교정 / 일반 — 각 카테고리 추상 무드샷 |
| ③ 의료진 | 2장 | 가상 인물 포트레이트 (등자업, 가운, 차분 조명) |
| ④ 진료환경 | 2-3장 | 인테리어 코너, 의료 장비 클로즈업, 멸균실 |
| ⑤ 위치 | 1장 (선택) | 동네 무드 또는 건물 외관 |

프롬프트 무드: minimal, monochrome, soft natural lighting, editorial, magazine quality, off-white background, charcoal accents, premium boutique.

---

## 8. 모바일 적응

- 375px 기준 첫 화면 카피: Cormorant Italic 56-64px
- 메뉴: 햄버거 → 풀스크린 오버레이
- 시그니처 진료 4분할 → 1열 세로
- 의료진 2분할 → 세로 카드
- 시간표: 가로 스크롤 또는 압축 리스트
- FAQ: 아코디언

---

## 9. 절대 지양 (의료광고법)

- "1위", "최고", "유일" 등 과장 표현
- 치료 결과 보장 표현
- 검증되지 않은 의료 효과 주장
- 실제 환자 후기처럼 보이는 허위 콘텐츠
- 사용권 불분명한 실제 인물 사진 (의료진 AI 생성은 시연용 샘플로 허용)

→ 톤: 절제된 카피, 데이터·프로세스 중심, 의료진은 가상 인물.

---

## 핸드오프

다음 단계: `/oma-pm` 으로 작업 분해.
- Brainstorm 단계: 완료
- Plan 단계: 시작 — 위 디자인을 입력으로 task 분해 + 의존성 그래프 + 우선순위
- Implement 단계: plan 산출물 기반 코드 작성

Vercel 자동 배포 (main push 시 트리거) 활용 → push마다 production URL 확인.
