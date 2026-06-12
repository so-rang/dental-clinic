"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CLINIC } from "@/data/clinic";
import { NAV_ITEMS, RESERVATION_HREF } from "@/lib/nav";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${
        scrolled || open
          ? "bg-paper/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between py-5 md:py-6">
        <Link
          href="/"
          aria-label="정단아치과 홈"
          className="flex flex-col leading-tight relative z-10"
          onClick={() => setOpen(false)}
        >
          <span className="font-sans text-[15px] md:text-[16px] font-medium tracking-tight">
            {CLINIC.name.ko}
          </span>
          <span className="font-display italic text-[10px] md:text-[11px] tracking-[0.18em] text-muted mt-0.5">
            {CLINIC.name.en}
          </span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-9 text-[14px]"
          aria-label="주요 메뉴"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline tracking-[0.02em] hover:text-ultramarine transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={RESERVATION_HREF}
            className="ml-2 border border-ink px-5 py-2.5 text-[13px] tracking-[0.04em] hover:bg-ink hover:text-paper transition-colors duration-300"
          >
            예약
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative z-10 w-7 h-7 flex flex-col justify-center items-end gap-[5px] cursor-pointer"
        >
          <span
            className={`block h-px bg-ink transition-all duration-400 ease-out ${
              open ? "w-7 rotate-45 translate-y-[3px]" : "w-7"
            }`}
          />
          <span
            className={`block h-px bg-ink transition-all duration-400 ease-out ${
              open ? "w-7 -rotate-45 -translate-y-[3px]" : "w-4"
            }`}
          />
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <div
        id="mobile-nav"
        className={`md:hidden fixed inset-0 bg-paper transition-opacity duration-500 z-0 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav
          className="container-page pt-32 pb-12 flex flex-col gap-7 h-full"
          aria-label="모바일 메뉴"
        >
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display italic text-[44px] text-ink hover:text-ultramarine block leading-none"
              style={{
                transitionDelay: open ? `${i * 70 + 150}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1), color 200ms",
              }}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={RESERVATION_HREF}
            onClick={() => setOpen(false)}
            className="mt-8 inline-block border border-ink px-8 py-4 self-start text-sm tracking-[0.04em]"
            style={{
              transitionDelay: open ? `${NAV_ITEMS.length * 70 + 200}ms` : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            예약 · 문의 →
          </Link>

          <div
            className="mt-auto text-meta"
            style={{
              opacity: open ? 1 : 0,
              transition: "opacity 600ms",
              transitionDelay: open ? "550ms" : "0ms",
            }}
          >
            {CLINIC.address.subway}
            <br />
            T. {CLINIC.contact.phoneDisplay}
          </div>
        </nav>
      </div>
    </header>
  );
}
