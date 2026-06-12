export const NAV_ITEMS = [
  { href: "#treatments", label: "진료안내" },
  { href: "#doctors", label: "의료진" },
  { href: "#location", label: "오시는 길" },
  { href: "#faq", label: "FAQ" },
] as const;

export const RESERVATION_HREF = "#reservation";

export const ADMIN_HREF = "/admin";

export const SECTION_IDS = {
  hero: "hero",
  philosophy: "philosophy",
  treatments: "treatments",
  doctors: "doctors",
  environment: "environment",
  location: "location",
  faq: "faq",
  reservation: "reservation",
} as const;
