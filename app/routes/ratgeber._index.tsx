import type { MetaFunction } from "react-router";
import { useState } from "react";
import { useLoaderData } from "react-router";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import { pageMeta } from "~/components/site/pageMeta";
import { formatDate } from "~/ratgeber";
import { getArticles, status } from "~/ratgeber.server";

// overview of the guide, German only: one list, newest first, with filter chips
// for the reader's situation (people come with a problem, not a category).
// Headlines stay white here, teal only marks the active filter and links (the
// two-colour headline belongs to the page heroes)

// the list needs no article text
export const loader = () =>
  getArticles().map((a) => ({
    slug: a.slug,
    title: `${a.title} ${a.highlight}`,
    description: a.description,
    date: a.date,
    topic: a.topic,
    status: status(a),
  }));

export const meta: MetaFunction = () =>
  pageMeta({
    title: "Ratgeber für Ihre Website | Hannes Schaletzky",
    description:
      "Praktische Antworten zu Websites, Sicherheit und Technik für Selbstständige, kleine Betriebe und Vereine: verständlich erklärt, ohne Fachchinesisch.",
    path: "/ratgeber",
    lang: "de",
    image: "ratgeber",
    germanOnly: true,
  });

type Item = ReturnType<typeof loader>[number];

// each article's "thema" decides its situation; an article with an unknown topic
// shows under "Alle" without a label, so no article ever disappears
const situations = [
  { key: "plan", name: "Website planen", topics: ["Website erstellen"] },
  { key: "find", name: "Gefunden werden", topics: ["Gefunden werden"] },
  {
    key: "worry",
    name: "Sicherheit & Pflege",
    topics: ["Sicherheit", "Hosting & Wartung"],
  },
];

const situationOf = (i: Item) =>
  situations.find((s) => s.topics.includes(i.topic));

function Badge({ children }: { children: string }) {
  return (
    <span className="ml-2 whitespace-nowrap rounded-full bg-teal/15 px-2 py-0.5 align-middle text-xs font-semibold text-teal">
      {children}
    </span>
  );
}

export default function Ratgeber() {
  const items = useLoaderData<typeof loader>();
  // the newest live article gets a small "Neu" (the list is sorted newest first)
  const newest = items.find((i) => !i.status)?.slug;
  const [filter, setFilter] = useState<string | null>(null);
  const shown = filter
    ? items.filter((i) => situationOf(i)?.key === filter)
    : items;

  return (
    <div className="min-h-screen" lang="de">
      <Header />

      <main>
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Ratgeber
          </p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            Websites verständlich erklärt.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            Praktische Antworten zu Websites, Sicherheit und Technik für
            Selbstständige, kleine Betriebe und Vereine, so, wie ich es auch
            Freunden erklären würde. Ich baue selbst Websites, schreibe hier
            aber so, dass Sie auch ohne mich gut entscheiden können.
          </p>

          <div className="mt-14 flex flex-wrap gap-2">
            {[
              { key: null, name: `Alle (${items.length})` },
              ...situations.filter((s) =>
                items.some((i) => situationOf(i)?.key === s.key),
              ),
            ].map((s) => (
              <button
                key={s.name}
                type="button"
                aria-pressed={filter === s.key}
                onClick={() => setFilter(s.key)}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                  filter === s.key
                    ? "border-teal bg-teal text-navy"
                    : "border-white/15 text-white hover:border-teal/60"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          <ul className="mt-8 border-t border-white/10">
            {shown.map((item) => (
              <li key={item.slug} className="border-b border-white/10">
                <a
                  href={`/ratgeber/${item.slug}`}
                  className="group grid gap-2 py-6 md:grid-cols-[10rem_1fr_auto] md:gap-8"
                >
                  <span className="md:pt-1">
                    {situationOf(item) && (
                      <span className="inline-block whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs font-semibold text-slate-300">
                        {situationOf(item)!.name}
                      </span>
                    )}
                  </span>
                  <span>
                    <span className="block text-xl font-bold leading-snug text-white group-hover:text-teal-light">
                      {item.title}
                      {item.slug === newest && <Badge>Neu</Badge>}
                      {/* only in development: drafts and scheduled ones */}
                      {item.status && <Badge>{item.status}</Badge>}
                    </span>
                    <span className="mt-1 block text-slate-400">
                      {item.description}
                    </span>
                    <span className="mt-2 block text-sm text-slate-400">
                      {formatDate(item.date)}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="hidden text-teal transition-transform group-hover:translate-x-1 md:block md:pt-1"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <ContactBox />
      </main>

      <Footer />
    </div>
  );
}
