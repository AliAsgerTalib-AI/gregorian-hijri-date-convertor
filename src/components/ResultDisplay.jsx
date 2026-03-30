import { getIslamicEvent } from '../utils/islamicEvents';

/**
 * ResultDisplay — "The Final Truth"
 * Shows the Hijri date in Arabic (primary) and English (secondary).
 * 2px black border. Swiss Typographic layout.
 */
export default function ResultDisplay({ result, error }) {
  if (error) {
    return (
      <div className="border-2 border-error bg-error-container p-[0.4rem] min-h-[8rem] flex flex-col justify-end">
        <p className="text-[0.75rem] font-medium uppercase tracking-[0.05rem] text-error mb-[0.75rem]">
          Error
        </p>
        <p className="text-[0.875rem] text-on-surface">{error}</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="border-2 border-outline-variant p-[0.4rem] min-h-[8rem] flex flex-col justify-end">
        <p className="text-[0.75rem] font-medium uppercase tracking-[0.05rem] text-outline mb-[0.75rem]">
          Hijri Date
        </p>
        <p className="text-[2rem] font-semibold text-outline-variant" dir="rtl" lang="ar">
          — · — · ——
        </p>
      </div>
    );
  }

  const event = getIslamicEvent(result.month, result.day);

  return (
    <div className="flex flex-col gap-0">
      {/* ── Main result card ── */}
      <div className="border-2 border-primary p-[0.4rem] min-h-[8rem] flex flex-col justify-end">

        {/* Section label */}
        <p className="text-[0.75rem] font-medium uppercase tracking-[0.05rem] text-on-surface-variant mb-[0.75rem]">
          Hijri Date
        </p>

        {/* ── Arabic (primary headline) ── */}
        <p
          id="hijri-result-ar"
          dir="rtl"
          lang="ar"
          className="text-[2rem] sm:text-[3rem] lg:text-[3.5rem] font-bold leading-tight text-primary text-right"
          style={{ fontFamily: "'Noto Naskh Arabic', 'Amiri', serif" }}
        >
          {result.arabicFormatted}
        </p>

        {/* ── English (secondary, below) ── */}
        <p
          id="hijri-result-en"
          className="mt-1 text-[0.875rem] sm:text-[1rem] font-medium text-on-surface-variant tracking-wide"
        >
          {result.formatted}
        </p>

        {/* ── Bilingual breakdown ── */}
        <div className="mt-4 border-t border-primary pt-[0.4rem] flex gap-4 sm:gap-8 flex-wrap">

          {/* Day */}
          <div>
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.05rem] text-on-surface-variant">
              Day / اليوم
            </span>
            <p
              dir="rtl" lang="ar"
              className="text-[1.5rem] font-bold text-on-surface leading-tight"
              style={{ fontFamily: "'Noto Naskh Arabic', 'Amiri', serif" }}
            >
              {result.arabicDay}
            </p>
            <p className="text-[0.75rem] text-on-surface-variant">{result.day}</p>
          </div>

          {/* Month */}
          <div>
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.05rem] text-on-surface-variant">
              Month / الشهر
            </span>
            <p
              dir="rtl" lang="ar"
              className="text-[1.5rem] font-bold text-on-surface leading-tight"
              style={{ fontFamily: "'Noto Naskh Arabic', 'Amiri', serif" }}
            >
              {result.arabicMonthName}
            </p>
            <p className="text-[0.75rem] text-on-surface-variant">{result.monthName}</p>
          </div>

          {/* Year */}
          <div>
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.05rem] text-on-surface-variant">
              Year / السنة
            </span>
            <p
              dir="rtl" lang="ar"
              className="text-[1.5rem] font-bold text-on-surface leading-tight"
              style={{ fontFamily: "'Noto Naskh Arabic', 'Amiri', serif" }}
            >
              {result.arabicYear} <span className="text-[0.875rem]">هـ</span>
            </p>
            <p className="text-[0.75rem] text-on-surface-variant">{result.year} AH</p>
          </div>

        </div>
      </div>

      {/* ── Islamic Event Banner ── */}
      {event && (
        <div className="border-2 border-t-0 border-primary bg-primary px-[0.4rem] py-3 flex items-start gap-3">
          <span className="text-[1.25rem] leading-none text-on-primary select-none mt-[0.1rem]" aria-hidden="true">
            {event.icon}
          </span>
          <div className="flex flex-col gap-[0.25rem]">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08rem] text-on-primary opacity-70">
              Islamic Occasion
            </p>
            <p className="text-[1rem] font-bold text-on-primary leading-tight">
              {event.name}
            </p>
            <p className="text-[0.75rem] text-on-primary opacity-80 leading-snug">
              {event.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
