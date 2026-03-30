/**
 * Header — Page title in the Swiss Typographic style.
 * Flush-left, massive type, no centering.
 */
export default function Header() {
  return (
    <header className="mb-8">
      <h1 className="text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] font-bold leading-[1.05] text-primary tracking-[-0.02em] whitespace-nowrap">
        Gregorian <span className="text-on-surface-variant">→ Hijri</span>
      </h1>
      <p className="mt-[0.75rem] text-[0.875rem] text-on-surface-variant max-w-[36ch]">
        Precision date conversion from the Gregorian calendar to the Islamic
        Hijri calendar (Umm al-Qura).
      </p>
    </header>
  );
}
