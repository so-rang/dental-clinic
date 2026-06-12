export function SectionLabel({
  index,
  label,
  className = "",
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-muted ${className}`}
    >
      <span className="font-display italic normal-case text-[14px] tracking-normal text-ink-soft">
        N°{index}
      </span>
      <span className="block w-8 h-px bg-line" aria-hidden />
      <span>{label}</span>
    </div>
  );
}
