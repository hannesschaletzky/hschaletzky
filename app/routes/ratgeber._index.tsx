import type { MetaFunction } from "react-router";
import { useLoaderData } from "react-router";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import { pageMeta } from "~/components/site/pageMeta";
import { getArticles, status } from "~/ratgeber.server";

// overview of the guide, German only: the articles grouped by the reader's
// situation instead of by topic, because people come with a problem, not a category.
// Headlines stay white here, teal only marks numbers, labels and links (the
// two-colour headline belongs to the page heroes)

// the list needs no article text
export const loader = () =>
  getArticles().map((a) => ({
    slug: a.slug,
    title: `${a.title} ${a.highlight}`,
    minutes: a.minutes,
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

// each article's "thema" decides where it appears; an unknown topic lands in
// "Weitere Fragen", so no article ever disappears from the overview
const situations = [
  {
    name: "Ich plane eine Website",
    sub: "Kosten, Wege, Pflichtangaben",
    topics: ["Website erstellen"],
  },
  {
    name: "Ich will gefunden werden",
    sub: "Google, Sichtbarkeit, Ladezeit",
    topics: ["Gefunden werden"],
  },
  {
    name: "Meine Website macht mir Sorgen",
    sub: "Sicherheit, Updates, Zugänge",
    topics: ["Sicherheit", "Hosting & Wartung"],
  },
];

function groups(items: Item[]) {
  const known = situations.flatMap((s) => s.topics);
  return [
    ...situations.map((s) => ({
      ...s,
      items: items.filter((i) => s.topics.includes(i.topic)),
    })),
    {
      name: "Weitere Fragen",
      sub: "",
      items: items.filter((i) => !known.includes(i.topic)),
    },
  ].filter((g) => g.items.length > 0);
}

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

          <div className="mt-14 border-t border-white/10">
            {groups(items).map((group, i) => (
              <div
                key={group.name}
                className="grid gap-6 border-b border-white/10 py-10 lg:grid-cols-[2fr_3fr] lg:gap-12"
              >
                <div className="flex gap-5">
                  <span className="text-4xl font-bold leading-none text-teal/40 sm:text-5xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold leading-tight text-white">
                      {group.name}
                    </h2>
                    {group.sub && (
                      <p className="mt-2 text-slate-400">{group.sub}</p>
                    )}
                  </div>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.slug}>
                      <a
                        href={`/ratgeber/${item.slug}`}
                        className="group flex items-baseline justify-between gap-4 py-2.5"
                      >
                        <span className="text-lg leading-snug text-white group-hover:text-teal-light">
                          {item.title}
                          {item.slug === newest && <Badge>Neu</Badge>}
                          {/* only in development: drafts and scheduled ones */}
                          {item.status && <Badge>{item.status}</Badge>}
                        </span>
                        <span
                          aria-hidden="true"
                          className="inline-block text-teal transition-transform group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <ContactBox />
      </main>

      <Footer />
    </div>
  );
}
