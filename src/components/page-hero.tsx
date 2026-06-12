import Link from "next/link";

export function PageHero({
  index,
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section
      aria-labelledby="page-heading"
      className="border-b border-line bg-paper pt-28 md:pt-40"
    >
      <div className="container-page pb-16 md:pb-24">
        {breadcrumb && (
          <nav
            aria-label="페이지 위치"
            className="mb-10 md:mb-14 flex flex-wrap items-center gap-2 text-[12px] tracking-[0.08em] text-muted"
          >
            <Link href="/" className="link-underline">
              Home
            </Link>
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <span aria-hidden>/</span>
                {b.href ? (
                  <Link href={b.href} className="link-underline">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-ink">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <p className="text-eyebrow">
              N°{index} — {eyebrow}
            </p>
            <h1
              id="page-heading"
              className="mt-6 font-display italic text-display-xl text-balance leading-[0.92]"
            >
              {title}
            </h1>
          </div>
          {description && (
            <div className="md:col-span-5 md:col-start-8 flex md:items-end">
              <p className="text-[15px] md:text-[16px] leading-[1.85] text-ink-soft border-t border-line pt-6 mt-2">
                {description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
