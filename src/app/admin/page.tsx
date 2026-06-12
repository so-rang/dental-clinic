import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/admin-shell";

export const metadata: Metadata = {
  title: "AEO · 콘텐츠 관리",
  description:
    "정단아치과 AEO/GEO 콘텐츠 관리 대시보드. FAQ·진료·의료진 콘텐츠와 AI 답변 최적화 점수를 관리합니다.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminShell />;
}
