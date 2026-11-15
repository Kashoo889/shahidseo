/**
 * Scheduled publishing helper.
 *
 * A post is live once the current calendar date in Asia/Dubai is on or after
 * its publish date (YYYY-MM-DD). If the date string includes a time, the full
 * timestamp is compared instead. Missing or unparseable dates are treated as
 * published so existing content is never hidden by accident.
 */

export const PUBLISH_TIME_ZONE = "Asia/Dubai";

/** Current calendar date in Asia/Dubai as YYYY-MM-DD. */
export function todayInDubai(now: Date = new Date()): string {
  // en-CA formats as YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: PUBLISH_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Normalise a date-only string (ISO or dd/mm/yy[yy]) to YYYY-MM-DD, or null. */
function toIsoDate(value: string): string | null {
  const iso = value.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (iso) return `${iso[1]}-${pad(Number(iso[2]))}-${pad(Number(iso[3]))}`;

  const dmy = value.match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{2}|\d{4})$/);
  if (dmy) {
    const year = dmy[3].length === 2 ? `20${dmy[3]}` : dmy[3];
    return `${year}-${pad(Number(dmy[2]))}-${pad(Number(dmy[1]))}`;
  }
  return null;
}

export function isPublished(dateStr: string | null | undefined, now: Date = new Date()): boolean {
  if (!dateStr) return true;
  const value = dateStr.trim();
  if (!value) return true;

  const dateOnly = toIsoDate(value);
  if (dateOnly) return todayInDubai(now) >= dateOnly;

  // Includes a time component: compare the full timestamp.
  const ts = Date.parse(value);
  if (Number.isNaN(ts)) return true;
  return now.getTime() >= ts;
}
