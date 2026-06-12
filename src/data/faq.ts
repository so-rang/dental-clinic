export type FaqCategory = "treatment" | "process" | "operation";

export type FaqItem = {
  question: string;
  answer: string;
  category: FaqCategory;
  featured?: boolean;
};

export const FAQ_CATEGORIES: Record<FaqCategory, string> = {
  treatment: "진료에 관해서",
  process: "절차 · 비용",
  operation: "운영 · 방문",
};

export const FAQ: FaqItem[] = [
  {
    question: "다른 치과에서 발치를 권유받았는데, 신경치료로 살릴 수 있나요?",
    answer:
      "환자분의 치아 상태에 따라 다릅니다. 어크로스는 가능한 한 자연 치아를 보존하는 것을 원칙으로 하기 때문에, 다른 치과에서 발치를 권유받으셨더라도 재진단을 통해 신경 치료(근관 치료), 치근단 절제술 등 보존 가능성을 먼저 검토합니다. 현미경 신경 치료가 필요한 경우 보존과 전문의가 직접 진행합니다.",
    category: "treatment",
    featured: true,
  },
  {
    question: "타 병원에서 치료를 받던 중인데, 옮길 수 있나요?",
    answer:
      "가능합니다. 이전 병원의 진료 기록이나 영상 자료를 가져오시면 진료 연속성을 확보할 수 있고, 어크로스에서 추가 진단을 통해 남은 치료 계획을 조정해 드립니다. 기록이 없으셔도 초진을 통해 현재 상태를 확인합니다.",
    category: "process",
    featured: true,
  },
  {
    question: "임플란트를 한 후에 평생 관리는 어떻게 해야 하나요?",
    answer:
      "임플란트는 수술이 끝나는 시점이 아니라 시작점입니다. 어크로스는 임플란트 수술 후 10년 정기 점검 프로토콜을 운영합니다. 6개월마다 점검과 전문가 잇솔질을 받으시고, 필요시 보철물 교체나 잇몸 관리를 진행합니다. 같은 의료진이 계속 봐드립니다.",
    category: "treatment",
    featured: true,
  },
  {
    question: "치료 비용은 어떻게 정해지나요? 사전에 견적을 받을 수 있나요?",
    answer:
      "초진과 진단(CT · 구강 스캔) 후 환자분께 치료 계획서와 함께 항목별 견적을 서면으로 드립니다. 진행 중 추가 비용이 발생할 수 있는 항목은 시작 전에 별도로 안내드리고 동의를 받습니다. 비급여 항목은 위 견적에 모두 포함됩니다.",
    category: "process",
    featured: true,
  },
  {
    question: "디지털 진단 시스템은 어떤 것이 갖추어져 있나요?",
    answer:
      "3D 디지털 CT(CBCT), 구강 스캐너(iTero Element 5D), 디지털 스마일 디자인(DSD) 소프트웨어를 사용합니다. 인상(본뜨기) 없이 정밀 진단이 가능하고, 환자분께서 치료 전후 시뮬레이션을 화면으로 함께 확인하실 수 있습니다.",
    category: "treatment",
  },
  {
    question: "수면 마취가 필요한 경우는 언제인가요?",
    answer:
      "치과 공포가 심하거나 광범위한 임플란트·외과 수술이 필요한 경우 의식하 진정요법(수면 마취)을 선택하실 수 있습니다. 마취과 전문의가 동석하여 모니터링하며, 사전 건강 검진을 통해 안전성을 확인한 후 진행합니다.",
    category: "treatment",
  },
  {
    question: "수요일 야간 진료(12:00 – 21:00)는 어떻게 예약하나요?",
    answer:
      "직장인분들을 위한 야간 진료는 매주 수요일에 운영합니다. 평일 진료가 어려우신 경우 예약 페이지에서 ‘수요일 야간’ 슬롯을 선택하시거나 카카오톡 채널(@across-dental)로 직접 요청해 주세요. 야간 슬롯은 한 주 전부터 오픈됩니다.",
    category: "operation",
  },
  {
    question: "주차는 가능한가요?",
    answer:
      "삼성클라쎄롯데캐슬 지하 주차장 이용이 가능하며, 진료 시 2시간 무료 주차권을 드립니다. 대중교통으로는 선릉역 1번 출구에서 도보 4분, 삼성중앙역 6번 출구에서 도보 6분 거리입니다.",
    category: "operation",
  },
  {
    question: "어린이 · 청소년 진료도 가능한가요?",
    answer:
      "가능합니다. 만 7세 이상부터 진료하며, 성장기 교정·예방 진료(불소 도포·실란트)·충치 치료를 진행합니다. 보호자분이 진료실 동행 가능하고, 첫 방문 시 진료실 미리 둘러보기(아이가 익숙해지도록)를 별도로 안내드립니다.",
    category: "treatment",
  },
  {
    question: "보험이 적용되는 진료와 안 되는 진료의 구분 기준은 무엇인가요?",
    answer:
      "스케일링(연 1회), 충치 치료, 신경 치료, 잇몸 치료 등 질병 치료 목적은 건강보험이 적용됩니다. 임플란트는 만 65세 이상 2개까지, 틀니는 만 65세 이상 일부 보험이 적용됩니다. 라미네이트·올세라믹·치아 미백 등 심미 목적 진료는 비급여입니다. 자세한 항목별 적용 여부는 초진 시 안내드립니다.",
    category: "process",
  },
  {
    question: "예약을 변경하거나 취소하려면 어떻게 해야 하나요?",
    answer:
      "예약 시간 24시간 전까지 카카오톡 채널(@across-dental) 또는 대표 전화(02-538-1004)로 알려주시면 위약금 없이 변경·취소가 가능합니다. 당일 취소는 다른 환자분의 진료 기회가 줄어들 수 있어 가능한 한 사전에 연락 부탁드립니다.",
    category: "operation",
  },
];

export const FEATURED_FAQ = FAQ.filter((q) => q.featured);
