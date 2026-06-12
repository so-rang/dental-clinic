export type Treatment = {
  slug: string;
  number: string;
  name: string;
  english: string;
  tagline: string;
  description: string;
  detail: string;
  highlights: { title: string; sub: string }[];
  process: { step: string; label: string; sub: string }[];
  image: string;
  imageAlt: string;
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "implant",
    number: "01",
    name: "임플란트",
    english: "Implant",
    tagline: "치아 하나를 다시 만드는 일.",
    description:
      "잃은 치아의 자리를 인공 치근으로 채우고, 그 위에 보철을 얹어 원래 기능을 되찾습니다. 어크로스는 3D CT 진단부터 사후 관리까지 한 자리에서 진행하며, 수술 후 10년 정기 점검 프로토콜을 운영합니다.",
    detail:
      "임플란트는 수술이 끝나는 시점이 아니라 시작점입니다. 정확한 진단과 식립 각도, 보철의 정밀도, 그리고 사후 관리까지 같은 의료진이 책임지는 것이 결과의 수명을 결정합니다.",
    highlights: [
      {
        title: "3D 가이드 수술",
        sub: "CBCT 기반 사전 시뮬레이션 후 가이드 수술",
      },
      {
        title: "프리미엄 픽스처",
        sub: "Straumann · Osstem 임플란트 사용",
      },
      {
        title: "사전 상담 30분 이상",
        sub: "치료 계획서와 항목별 견적 서면 제공",
      },
      {
        title: "10년 정기 점검",
        sub: "6개월 단위 점검과 같은 의료진의 사후 관리",
      },
    ],
    process: [
      { step: "01", label: "정밀 진단", sub: "CBCT · 구강 스캔 · 잇몸 검사" },
      { step: "02", label: "치료 계획", sub: "서면 계획서 · 항목별 견적" },
      { step: "03", label: "가이드 수술", sub: "사전 시뮬레이션 기반 식립" },
      { step: "04", label: "보철 완성", sub: "정밀 보철 + 교합 조정" },
      { step: "05", label: "장기 관리", sub: "10년 사후 점검 프로토콜" },
    ],
    image: "/treatments/implant.jpg",
    imageAlt: "임플란트 진료 — 어크로스치과",
  },
  {
    slug: "esthetic",
    number: "02",
    name: "보철 · 심미",
    english: "Restoration & Esthetic",
    tagline: "원래의 모습을 닮게.",
    description:
      "변색·파절·결손된 치아를 자연스러운 형태와 색으로 회복합니다. 라미네이트, 올세라믹 크라운, 인레이 등 환자의 치아 상태와 생활 습관에 맞춰 선택합니다.",
    detail:
      "심미 진료의 기준은 ‘새 치아처럼 보이는 것’이 아니라 ‘원래 치아처럼 보이는 것’입니다. 환자의 얼굴 비율, 입술 라인, 옆 치아의 마모도까지 살펴 자연 치아와 구분되지 않는 결과를 목표로 합니다.",
    highlights: [
      {
        title: "디지털 스마일 디자인",
        sub: "치료 전후 시뮬레이션을 함께 확인",
      },
      {
        title: "프리미엄 세라믹",
        sub: "독일 · 이태리산 세라믹 블록 사용",
      },
      {
        title: "색조 매칭 시스템",
        sub: "자연 치아 색조와 1:1 매칭",
      },
      {
        title: "보철 보증 5년",
        sub: "보철물 파절 시 5년 무상 교체",
      },
    ],
    process: [
      { step: "01", label: "심미 진단", sub: "안모 · 입술 라인 · 치아 색조" },
      { step: "02", label: "DSD 시뮬레이션", sub: "치료 전후 디지털 미리보기" },
      { step: "03", label: "정밀 삭제", sub: "현미경 사용 최소 삭제" },
      { step: "04", label: "임시 보철", sub: "기능 · 형태 사전 검증" },
      { step: "05", label: "최종 보철", sub: "교합 조정 · 색조 확인" },
    ],
    image: "/treatments/esthetic.jpg",
    imageAlt: "심미 보철 진료 — 어크로스치과",
  },
  {
    slug: "orthodontics",
    number: "03",
    name: "교정",
    english: "Orthodontics",
    tagline: "시간을 들이는 일.",
    description:
      "치아 배열과 교합을 평균 1년 6개월에서 2년에 걸쳐 점진적으로 개선합니다. 투명 교정·설측 교정·소아 교정 중 환자의 일상에 맞는 방식을 선택합니다.",
    detail:
      "교정은 결과만큼 과정이 길어, 의료진과 신뢰 관계가 필수입니다. 어크로스는 같은 교정의가 시작부터 종료까지 직접 관리하며, 유지장치 단계까지 책임집니다.",
    highlights: [
      {
        title: "인비절라인 다이아몬드",
        sub: "Diamond Apex Invisalign Provider 인증",
      },
      {
        title: "월 1회 정기 점검",
        sub: "주치의가 매번 직접 진료",
      },
      {
        title: "유지장치 평생 교체",
        sub: "치료 종료 후 유지장치 무상 교체",
      },
      {
        title: "성장기 교정 프로토콜",
        sub: "소아 · 청소년 별도 진료 시스템",
      },
    ],
    process: [
      { step: "01", label: "교정 진단", sub: "X-ray · 사진 · 모형 분석" },
      { step: "02", label: "치료 계획", sub: "기간 · 방식 · 비용 명확화" },
      { step: "03", label: "장치 부착", sub: "와이어 · 투명 교정 시작" },
      { step: "04", label: "월 1회 조정", sub: "같은 의료진 정기 관리" },
      { step: "05", label: "유지 단계", sub: "유지장치 · 안정 관찰" },
    ],
    image: "/treatments/orthodontics.jpg",
    imageAlt: "교정 진료 — 어크로스치과",
  },
  {
    slug: "general",
    number: "04",
    name: "일반 진료",
    english: "General Dentistry",
    tagline: "이가 안 아파야 합니다.",
    description:
      "충치, 잇몸, 신경 치료, 스케일링 등 가장 기본이 되는 진료를 정기적으로 봅니다. 큰 치료가 아닌, 큰 치료를 막는 진료입니다.",
    detail:
      "정기 검진은 가장 저렴하고 효과적인 진료입니다. 어크로스는 환자분께 6개월 단위로 점검 알림을 보내드리고, 작은 신호를 일찍 발견해 큰 치료로 가지 않도록 합니다.",
    highlights: [
      {
        title: "현미경 신경 치료",
        sub: "Carl Zeiss 현미경으로 정밀 치료",
      },
      {
        title: "비외과적 잇몸 치료",
        sub: "SRP 우선 · 수술은 최후",
      },
      {
        title: "6개월 정기 점검",
        sub: "환자분께 자동 알림 · 같은 의료진",
      },
      {
        title: "보험 진료 명확화",
        sub: "보험 항목 사전 안내",
      },
    ],
    process: [
      { step: "01", label: "초진 검진", sub: "구강 사진 · 잇몸 검사" },
      { step: "02", label: "원인 진단", sub: "통증 · 변색 원인 분석" },
      { step: "03", label: "보존 치료", sub: "충치 · 신경 · 잇몸" },
      { step: "04", label: "예방 진료", sub: "스케일링 · 불소" },
      { step: "05", label: "정기 점검", sub: "6개월 주기 자동 알림" },
    ],
    image: "/treatments/general.jpg",
    imageAlt: "일반 진료 — 어크로스치과",
  },
];

export const TREATMENT_SLUGS = TREATMENTS.map((t) => t.slug);
