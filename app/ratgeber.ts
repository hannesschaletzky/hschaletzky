import { marked } from "marked";

// the guide articles: one Markdown file each in app/content/ratgeber, German only.
// A small header block between "---" lines holds title, date and the matching offer.
const files = import.meta.glob("./content/ratgeber/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export type Article = {
  slug: string;
  // two-line headline like the page heroes: light white line, teal line
  title: string;
  highlight: string;
  description: string;
  // ISO date (YYYY-MM-DD) of publication
  date: string;
  // short topic label, e.g. "Website erstellen"
  topic: string;
  minutes: number;
  // the offer the article leads to, shown as a tile at the end
  offer: { href: string; title: string; text: string };
  // drafts render locally but stay out of the overview, sitemap and search engines
  draft: boolean;
  html: string;
};

function parse(path: string, raw: string): Article {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match)
    throw new Error(`${path}: header block between --- lines missing`);
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  const body = match[2];
  return {
    slug: path.split("/").pop()!.replace(/\.md$/, ""),
    title: meta.titel,
    highlight: meta.hervorhebung,
    description: meta.beschreibung,
    date: meta.datum,
    topic: meta.thema ?? "",
    minutes: Math.max(1, Math.round(body.split(/\s+/).length / 200)),
    offer: {
      href: meta.angebot,
      title: meta.angebotTitel,
      text: meta.angebotText,
    },
    draft: meta.entwurf === "ja",
    html: marked.parse(body, { async: false }),
  };
}

const articles = Object.entries(files)
  .map(([path, raw]) => parse(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date));

// in development drafts show up everywhere, live only published articles
const showDrafts = import.meta.env.DEV;

export function getArticles() {
  return articles.filter((a) => showDrafts || !a.draft);
}

export function getArticle(slug: string) {
  return getArticles().find((a) => a.slug === slug);
}

// published articles only, for the sitemap
export function publishedArticles() {
  return articles.filter((a) => !a.draft);
}

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
