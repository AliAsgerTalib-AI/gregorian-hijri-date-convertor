/**
 * Islamic Events — keyed by Hijri month and day.
 *
 * Priority order matters: more specific entries (exact day) are listed
 * before range entries (whole month) so the lookup returns the best match.
 *
 * Each entry:
 *   month   {number}  Hijri month (1–12)
 *   day     {number}  Exact Hijri day  (omit for range entries)
 *   dayFrom {number}  Start of day range (inclusive)
 *   dayTo   {number}  End of day range (inclusive)
 *   name    {string}  Short event name
 *   desc    {string}  One-line description shown in the UI
 *   icon    {string}  Emoji decorative mark
 */
const EVENTS = [
  // ── Muharram ──────────────────────────────────────────────────────────────
  {
    month: 1, day: 1,
    name: 'Islamic New Year',
    desc: '1 Muharram — The first day of the Hijri calendar year.',
    icon: '🌙',
  },
  {
    month: 1, day: 10,
    name: 'Day of Ashura',
    desc: '10 Muharram — A day of fasting, reflection and remembrance.',
    icon: '✦',
  },

  // ── Rabi' al-Awwal ────────────────────────────────────────────────────────
  {
    month: 3, day: 12,
    name: "Mawlid al-Nabi ﷺ",
    desc: "12 Rabi' al-Awwal — The birthday of the Prophet Muhammad ﷺ.",
    icon: '☪',
  },

  // ── Rajab ─────────────────────────────────────────────────────────────────
  {
    month: 7, day: 27,
    name: "Isra and Mi'raj",
    desc: "27 Rajab — The Night Journey and Ascension of the Prophet ﷺ.",
    icon: '✦',
  },

  // ── Sha'ban ───────────────────────────────────────────────────────────────
  {
    month: 8, day: 15,
    name: "Laylat al-Bara'at",
    desc: "15 Sha'ban — The Night of Forgiveness and Divine Mercy.",
    icon: '🌙',
  },

  // ── Ramadan — specific night first, then month range ──────────────────────
  {
    month: 9, day: 27,
    name: 'Laylat al-Qadr',
    desc: "27 Ramadan — The Night of Power, better than a thousand months.",
    icon: '★',
  },
  {
    month: 9, dayFrom: 1, dayTo: 30,
    name: 'Ramadan',
    desc: 'The holy month of fasting, prayer and spiritual reflection.',
    icon: '🌙',
  },

  // ── Shawwal ───────────────────────────────────────────────────────────────
  {
    month: 10, day: 1,
    name: 'Eid al-Fitr',
    desc: '1 Shawwal — The Festival of Breaking the Fast. Eid Mubarak!',
    icon: '☪',
  },

  // ── Dhul Hijjah ───────────────────────────────────────────────────────────
  {
    month: 12, day: 9,
    name: 'Day of Arafah',
    desc: '9 Dhul Hijjah — The most sacred day of Hajj. Fasting is highly recommended.',
    icon: '✦',
  },
  {
    month: 12, day: 10,
    name: 'Eid al-Adha',
    desc: '10 Dhul Hijjah — The Festival of Sacrifice. Eid Mubarak!',
    icon: '☪',
  },
  {
    month: 12, dayFrom: 11, dayTo: 13,
    name: 'Days of Tashreeq',
    desc: '11–13 Dhul Hijjah — The days following Eid al-Adha, spent in Mina.',
    icon: '✦',
  },
];

/**
 * Look up an Islamic event for a given Hijri month and day.
 * Returns the matching event object, or null if no event falls on that date.
 *
 * @param {number} month  Hijri month (1–12)
 * @param {number} day    Hijri day (1–30)
 * @returns {{ name: string, desc: string, icon: string } | null}
 */
export function getIslamicEvent(month, day) {
  for (const event of EVENTS) {
    if (event.month !== month) continue;

    // Exact day match
    if (event.day !== undefined && event.day === day) return event;

    // Range match
    if (
      event.dayFrom !== undefined &&
      event.dayTo !== undefined &&
      day >= event.dayFrom &&
      day <= event.dayTo
    ) {
      return event;
    }
  }
  return null;
}
