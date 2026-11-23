import type { LoaderFunctionArgs } from "react-router";
import { marked } from "marked";
import type { GuideTeaser } from "~/components/site/guideList";
import { langLoader } from "~/i18n";

// the guide articles: one Markdown file each in app/content/ratgeber, German only.
// Server only (.server.ts), so article texts and drafts never reach the browser bundle.
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
  // further offer pages that list the article ("auchAuf", separated by commas)
  also: string[];
  // drafts render locally but stay out of the overview, sitemap and search engines;
  // published articles with a future date go live on that date
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
  // notes for the author as <!-- … --> stay in the Markdown file only, never
  // in the page source
  const body = match[2].replace(/<!--[\s\S]*?-->\n*/g, "");
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
    also: (meta.auchAuf ?? "")
      .split(",")
      .map((p) => p.trim())
      .filter(Boolean),
    draft: meta.entwurf === "ja",
    html: marked.parse(body, { async: false }),
  };
}

const articles = Object.entries(files)
  .map(([path, raw]) => parse(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date));

// today in Berlin as YYYY-MM-DD, checked on every request
function today() {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Europe/Berlin" });
}

// live: an article appears on its date by itself, no deploy needed, as long as it
// is no draft. In development drafts and scheduled articles show up everywhere.
function isLive(a: Article) {
  return !a.draft && a.date <= today();
}

export function getArticles() {
  return import.meta.env.DEV ? articles : articles.filter(isLive);
}

export function getArticle(slug: string) {
  return getArticles().find((a) => a.slug === slug);
}

// live articles only, for the sitemap
export function publishedArticles() {
  return articles.filter(isLive);
}

// shown on the cards in development: why an article is not live yet
export function status(a: Article) {
  if (a.draft) return "Entwurf";
  if (a.date > today()) return "Geplant";
  return null;
}

// live articles as short teasers, newest first; with a path only the articles
// that belong to that offer page (their own offer or listed under "auchAuf")
export function teasers(offerPath?: string): GuideTeaser[] {
  return getArticles()
    .filter((a) => !status(a))
    .filter(
      (a) =>
        !offerPath ||
        a.offer.href.split("#")[0] === offerPath ||
        a.also.includes(offerPath),
    )
    .map((a) => ({
      slug: a.slug,
      title: `${a.title} ${a.highlight}`,
      description: a.description,
      date: a.date,
    }));
}

// loader for an offer page: its three newest guide articles, German only
// (the guide has no English version)
export function offerLoader(offerPath: string) {
  return (args: LoaderFunctionArgs) => {
    langLoader(args);
    return { articles: args.params.lang ? [] : teasers(offerPath).slice(0, 3) };
  };
}
