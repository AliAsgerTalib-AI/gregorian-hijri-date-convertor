import { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import DateInput from './components/DateInput';
import ResultDisplay from './components/ResultDisplay';
import GridDivider from './components/GridDivider';
import Footer from './components/Footer';
import { toHijri, daysInMonth, isValidDate } from './utils/hijriConverter';

const MONTHS = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' },
];

export default function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  // Generate year options (1900–2099)
  const yearOptions = useMemo(() => {
    const opts = [];
    for (let y = 2099; y >= 1900; y--) {
      opts.push({ value: y, label: String(y) });
    }
    return opts;
  }, []);

  // Generate day options based on selected month/year
  const dayOptions = useMemo(() => {
    const max = month && year ? daysInMonth(Number(year), Number(month)) : 31;
    const opts = [];
    for (let d = 1; d <= max; d++) {
      opts.push({ value: d, label: String(d) });
    }
    return opts;
  }, [month, year]);

  // ── Auto-convert whenever all three fields are filled ──────────────────────
  useEffect(() => {
    // Clear stale results whenever any field changes
    setResult(null);
    setError('');

    if (!day || !month || !year) return;

    const d = Number(day);
    const m = Number(month);
    const y = Number(year);

    if (!isValidDate(y, m, d)) {
      setError('Invalid date. Please check your input.');
      return;
    }

    try {
      setResult(toHijri(y, m, d));
    } catch {
      setError('Conversion failed. Please try a different date.');
    }
  }, [day, month, year]);

  // Set today's date — the useEffect above will auto-convert once state settles
  const handleToday = () => {
    const now = new Date();
    setDay(String(now.getDate()));
    setMonth(String(now.getMonth() + 1));
    setYear(String(now.getFullYear()));
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col px-4 sm:px-10 lg:px-[5.5rem] py-8 sm:py-12 lg:py-[4.5rem]">
      {/* ── Header ── */}
      <Header />

      {/* ── Full-bleed divider ── */}
      <GridDivider />

      {/* ── Input Grid ── */}
      <section className="mt-8 mb-8">
        <div className="flex items-baseline justify-between mb-[0.75rem]">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.05rem] text-on-surface-variant">
            Gregorian Date Input
          </p>
          <button
            id="today-btn"
            onClick={handleToday}
            className="
              text-[0.6875rem] font-medium uppercase tracking-[0.05rem]
              text-primary border-b border-primary
              hover:text-on-surface-variant
              transition-colors duration-100 ease-linear
              cursor-pointer bg-transparent pb-px
            "
          >
            Today
          </button>
        </div>

        {/* Three equal columns — no Convert button needed */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          <DateInput
            id="input-day"
            label="Day"
            value={day}
            onChange={setDay}
            options={dayOptions}
          />
          <DateInput
            id="input-month"
            label="Month"
            value={month}
            onChange={setMonth}
            options={MONTHS}
          />
          <DateInput
            id="input-year"
            label="Year"
            value={year}
            onChange={setYear}
            options={yearOptions}
          />
        </div>
      </section>

      {/* ── Full-bleed divider ── */}
      <GridDivider />

      {/* ── Result ── */}
      <section className="mt-8 mb-8">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.05rem] text-on-surface-variant mb-[0.75rem]">
          Conversion Result
        </p>
        <ResultDisplay result={result} error={error} />
      </section>

      {/* ── Full-bleed divider ── */}
      <GridDivider className="mt-auto" />

      {/* ── Footer ── */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}
