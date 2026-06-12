export const CLINIC = {
  name: {
    ko: "정단아치과",
    en: "DAN-A DENTAL",
    enFull: "DAN-A Dental Clinic",
  },
  tagline: "아름다운 미소를 위하여",
  taglineEn: "For an enduring smile.",

  philosophy:
    "정밀한 진단으로 치료를 줄이고, 같은 의료진의 사후 관리로 결과를 길게 만듭니다. 정단아치과는 그렇게 일합니다.",

  philosophyShort: "치료는 짧게, 결과는 오래",

  description:
    "청담동에 위치한 종합 치과. 임플란트·보철·교정·일반 진료를 한 자리에서 진행하며, 진단부터 사후 관리까지 같은 의료진이 책임지는 진료 시스템을 운영합니다.",

  address: {
    road: "서울특별시 강남구 언주로 731 삼성클라쎄롯데캐슬 3층",
    subway: "선릉역 1번 출구 도보 4분 · 삼성중앙역 6번 출구 도보 6분",
    city: "Cheongdam, Seoul",
    cityShort: "Cheongdam",
    postalCode: "06061",
    latitude: 37.5044,
    longitude: 127.0481,
  },

  hours: [
    { day: "월·화·목·금", time: "10:00 – 19:00", note: "일반 진료" },
    {
      day: "수요일 (야간)",
      time: "12:00 – 21:00",
      note: "직장인 야간 진료",
    },
    { day: "토요일", time: "10:00 – 14:00", note: "" },
    { day: "일요일·공휴일", time: "휴진", note: "" },
    { day: "점심시간", time: "13:00 – 14:00", note: "전 요일" },
  ],

  hoursShort: "Mon – Sat 10:00 — 19:00",

  contact: {
    phone: "02-538-1004",
    phoneDisplay: "02 538 1004",
    phoneHref: "tel:02-538-1004",
    kakao: "@dan-a-dental",
    kakaoHref: "https://pf.kakao.com/_dan-a-dental",
    email: "hello@dan-a-dental.kr",
    emailHref: "mailto:hello@dan-a-dental.kr",
  },

  legal: {
    representative: "정단아",
    businessNo: "888-88-88888",
    medicalLicense: "강남구보건소 의료기관 제 2024-0531호",
    healthInfoOfficer: "정단아",
  },

  environment: [
    {
      number: "320",
      unit: "평",
      label: "진료 공간",
      sub: "층 전체 단독 사용",
    },
    {
      number: "12",
      unit: "대",
      label: "임상 의자",
      sub: "독립 진료실 운영",
    },
    {
      number: "1:1",
      unit: "",
      label: "1인 1기구 멸균",
      sub: "고압증기·EO 가스 이중 멸균",
    },
    {
      number: "3D",
      unit: "",
      label: "디지털 진단",
      sub: "CBCT · iTero · DSD",
    },
  ],

  equipment: [
    "Sirona Orthophos SL 3D CT",
    "iTero Element 5D 구강 스캐너",
    "Carl Zeiss EXTARO 현미경 신경 치료",
    "Straumann · Osstem 임플란트 시스템",
    "Invisalign Diamond Provider 인증 교정 장비",
  ],
} as const;

export type Clinic = typeof CLINIC;
