/**
 * Footer — Minimal typographic footer.
 * Gradient from primary → primary-container to mimic ink density.
 */
export default function Footer() {
  return (
    <footer className="border-t border-primary pt-[0.4rem] mt-auto">
      <div className="flex justify-between items-baseline">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.05rem] text-on-surface-variant">
          Gregorian–Hijri Converter
        </p>
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.05rem] text-outline">
          Umm al-Qura Calendar
        </p>
      </div>
    </footer>
  );
}
