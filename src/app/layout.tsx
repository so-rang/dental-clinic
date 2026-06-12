import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "pretendard/dist/web/variable/pretendardvariable.css";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dan-a-dental.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAFAF7",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "정단아치과 DAN-A Dental Clinic · 청담",
    template: "%s · 정단아치과",
  },
  description:
    "한 분의 치아를 첫 진단부터 평생 관리까지. 청담동·선릉역 1번 출구 정단아치과. 임플란트·보철·교정·일반 진료를 한 자리에서.",
  applicationName: "정단아치과 DAN-A Dental",
  keywords: [
    "정단아치과",
    "DAN-A Dental",
    "청담 치과",
    "선릉역 치과",
    "강남 치과",
    "임플란트",
    "보철",
    "심미치과",
    "치아 교정",
    "종합 치과",
  ],
  authors: [{ name: "DAN-A Dental Clinic" }],
  creator: "DAN-A Dental Clinic",
  publisher: "DAN-A Dental Clinic",
  alternates: {
    canonical: "/",
    languages: {
      "ko-KR": "/",
    },
  },
  openGraph: {
    title: "정단아치과 DAN-A — 아름다운 미소를 위하여.",
    description:
      "청담·선릉역. 한 분의 치아를 첫 진단부터 평생 관리까지 한 자리에서 봅니다.",
    url: "/",
    siteName: "정단아치과",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "정단아치과 DAN-A",
    description: "청담·선릉역. 아름다운 미소를 위하여.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  category: "healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${cormorant.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
