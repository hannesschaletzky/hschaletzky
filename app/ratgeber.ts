// date shown on the guide pages, e.g. "16. November 2026"
// (kept apart from ratgeber.server.ts, which holds the article texts)
export function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
