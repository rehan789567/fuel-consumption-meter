/**
 * Date filtering and comparison helper functions
 */

export function isWithinDateRange(dateStr, startDateStr, endDateStr) {
  if (!dateStr) return false;
  const date = new Date(dateStr).getTime();
  if (isNaN(date)) return false;

  if (startDateStr) {
    const start = new Date(startDateStr).getTime();
    if (date < start) return false;
  }

  if (endDateStr) {
    const end = new Date(endDateStr).setHours(23, 59, 59, 999);
    if (date > end) return false;
  }

  return true;
}

export function getCurrentISOString() {
  const now = new Date();
  const tzoffset = now.getTimezoneOffset() * 60000;
  return new Date(Date.now() - tzoffset).toISOString().slice(0, 16);
}
