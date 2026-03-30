/**
 * Gregorian → Hijri conversion using the browser's Intl API
 * with the Islamic (Umm al-Qura) calendar.
 */

const HIJRI_MONTHS = [
  'Muharram',
  'Safar',
  "Rabi' al-Awwal",
  "Rabi' al-Thani",
  'Jumada al-Ula',
  'Jumada al-Thani',
  'Rajab',
  "Sha'ban",
  'Ramadan',
  'Shawwal',
  "Dhul Qi'dah",
  'Dhul Hijjah',
];

/**
 * Convert a Gregorian date to its Hijri equivalent.
 * @param {number} year  - Gregorian year (e.g. 2024)
 * @param {number} month - Gregorian month (1–12)
 * @param {number} day   - Gregorian day (1–31)
 * @returns {{ day: number, month: number, monthName: string, year: number, formatted: string }}
 */
export function toHijri(year, month, day) {
  const date = new Date(year, month - 1, day);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  const parts = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  })
    .formatToParts(date)
    .reduce((acc, part) => {
      if (part.type !== 'literal') {
        acc[part.type] = part.value;
      }
      return acc;
    }, {});

  const hijriDay = parseInt(parts.day, 10);
  const hijriMonth = parseInt(parts.month, 10);
  const hijriYear = parseInt(parts.year, 10);
  const monthName = HIJRI_MONTHS[hijriMonth - 1] || '';

  return {
    day: hijriDay,
    month: hijriMonth,
    monthName,
    year: hijriYear,
    formatted: `${hijriDay} ${monthName} ${hijriYear} AH`,
  };
}

/**
 * Get the number of days in a Gregorian month.
 */
export function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

/**
 * Validate a Gregorian date.
 */
export function isValidDate(year, month, day) {
  if (!year || !month || !day) return false;
  const maxDays = daysInMonth(year, month);
  return day >= 1 && day <= maxDays && month >= 1 && month <= 12 && year >= 1;
}
