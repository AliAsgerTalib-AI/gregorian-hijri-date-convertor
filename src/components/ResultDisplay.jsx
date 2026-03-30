import { getIslamicEvent } from '../utils/islamicEvents';

/**
 * ResultDisplay — "The Final Truth"
 * 2px black border (the only exception).
 * Display-lg type, flush-left, bottom-justified.
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
        <p className="text-[2rem] font-semibold text-outline-variant">
          — . — . ——
        </p>
      </div>
    );
  }

  const event = getIslamicEvent(result.month, result.day);

  return (
    <div className="flex flex-col gap-0">
      {/* ── Main result card ── */}
      <div className="border-2 border-primary p-[0.4rem] min-h-[8rem] flex flex-col justify-end">
        {/* Technical annotation label */}
        <p className="text-[0.75rem] font-medium uppercase tracking-[0.05rem] text-on-surface-variant mb-[0.75rem]">
          Hijri Date
        </p>

        {/* The converted date — display-lg, the centrepiece */}
        <p
          id="hijri-result"
          className="text-[2rem] sm:text-[3rem] lg:text-[3.5rem] font-bold leading-tight text-primary"
        >
          {result.formatted}
        </p>

        {/* Structured breakdown */}
        <div className="mt-4 border-t border-primary pt-[0.4rem] flex gap-4 sm:gap-8 flex-wrap">
          <div>
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.05rem] text-on-surface-variant">
              Day
            </span>
            <p className="text-[1.5rem] font-semibold text-on-surface">
              {result.day}
            </p>
          </div>
          <div>
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.05rem] text-on-surface-variant">
              Month
            </span>
            <p className="text-[1.5rem] font-semibold text-on-surface">
              {result.monthName}
            </p>
          </div>
          <div>
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.05rem] text-on-surface-variant">
              Year
            </span>
            <p className="text-[1.5rem] font-semibold text-on-surface">
              {result.year} <span className="text-[0.875rem] text-on-surface-variant">AH</span>
            </p>
          </div>
        </div>
      </div>

      {/* ── Islamic Event Banner (only rendered when there's a match) ── */}
      {event && (
        <div className="border-2 border-t-0 border-primary bg-primary px-[0.4rem] py-3 flex items-start gap-3">
          {/* Icon column */}
          <span className="text-[1.25rem] leading-none text-on-primary select-none mt-[0.1rem]" aria-hidden="true">
            {event.icon}
          </span>

          {/* Text column */}
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
