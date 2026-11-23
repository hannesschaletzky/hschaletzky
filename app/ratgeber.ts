// date shown on the guide pages, e.g. "16. November 2026"
// (kept apart from ratgeber.server.ts, which holds the article texts)
export function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// The situations a reader comes with. Each article's "thema" decides its
// situation; the overview filters by them, and the article shows the same name.
export const situations = [
  { key: "plan", name: "Website planen", topics: ["Website erstellen"] },
  { key: "find", name: "Gefunden werden", topics: ["Gefunden werden"] },
  {
    key: "worry",
    name: "Sicherheit & Pflege",
    topics: ["Sicherheit", "Hosting & Wartung"],
  },
];

// the situation of a topic; an unknown topic has none
export const situationOf = (topic: string) =>
  situations.find((s) => s.topics.includes(topic));
