export type Doctor = {
  slug: string;
  name: { ko: string; en: string };
  role: string;
  title: string;
  quote: string;
  bio: string;
  credentials: string[];
  memberships: string[];
  image: string;
  imageAlt: string;
};

export const DOCTORS: Doctor[] = [
  {
    slug: "park-jiwoon",
    name: { ko: "박지운", en: "Park, Jiwoon" },
    role: "대표원장",
    title: "보존과 전문의 · D.D.S., Ph.D.",
    quote: "진단이 정확해야 진료가 짧아집니다.",
    bio: "서울대학교 치의학대학원에서 보존과를 전공하고, 동 병원에서 임상강사를 거쳤습니다. 미국 펜실베이니아 대학교에서 보존과 visiting scholar 과정을 마친 후 어크로스를 열었습니다. 가능한 한 자연 치아를 살리는 진료를 원칙으로 합니다.",
    credentials: [
      "서울대학교 치의학대학원 졸업",
      "서울대학교 치과대학 보존과 박사",
      "전) 서울대학교치과병원 보존과 임상강사",
      "전) Univ. of Pennsylvania School of Dental Medicine, Visiting Scholar",
    ],
    memberships: [
      "대한치과보존학회 정회원",
      "대한구강악안면임플란트학회 인정의",
      "American Association of Endodontists Member",
    ],
    image: "/doctors/park-jiwoon.jpg",
    imageAlt: "어크로스치과 대표원장 박지운 보존과 전문의",
  },
  {
    slug: "lee-sooah",
    name: { ko: "이수아", en: "Lee, Sooah" },
    role: "진료원장",
    title: "보철과 전문의 · D.D.S.",
    quote: "원래의 모습을 닮게 만드는 일.",
    bio: "연세대학교 치과대학을 졸업하고 동 병원 보철과에서 전임의 과정을 마쳤습니다. 디지털 스마일 디자인(DSD)과 세라믹 보철 분야에서 다수의 임상 강의를 진행해 왔습니다. 환자의 원래 치아 색조와 형태를 가장 자연스럽게 재현하는 진료를 합니다.",
    credentials: [
      "연세대학교 치과대학 졸업",
      "연세대학교 치과대학원 보철과 석사",
      "전) 연세대학교치과병원 보철과 전임의",
      "ITI(International Team for Implantology) Member",
    ],
    memberships: [
      "대한치과보철학회 정회원",
      "대한심미치과학회 정회원",
      "Digital Smile Design (DSD) Certified Dentist",
    ],
    image: "/doctors/lee-sooah.jpg",
    imageAlt: "어크로스치과 진료원장 이수아 보철과 전문의",
  },
];
