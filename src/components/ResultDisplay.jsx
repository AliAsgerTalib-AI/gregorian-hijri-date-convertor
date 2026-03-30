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

  return (
    <div className="border-2 border-primary p-[0.4rem] min-h-[8rem] flex flex-col justify-end">
      {/* Technical annotation label */}
      <p className="text-[0.75rem] font-medium uppercase tracking-[0.05rem] text-on-surface-variant mb-[0.75rem]">
        Hijri Date
      </p>

      {/* The converted date — display-lg, the centrepiece */}
      <p
        id="hijri-result"
        className="text-[3.5rem] font-bold leading-tight text-primary"
      >
        {result.formatted}
      </p>

      {/* Structured breakdown */}
      <div className="mt-4 border-t border-primary pt-[0.4rem] flex gap-8">
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
  );
}
