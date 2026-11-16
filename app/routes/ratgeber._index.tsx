import type { MetaFunction } from "react-router";
import { useLoaderData } from "react-router";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import { pageMeta } from "~/components/site/pageMeta";
import { formatDate, getArticles } from "~/ratgeber";

// overview of the guide, German only: the newest article as a large lead story,
// the older ones as tiles below. Headlines stay white here, teal only marks labels
// and links (the two-colour headline belongs to the page heroes)

// the list needs no article text
export const loader = () =>
  getArticles().map((a) => ({
    slug: a.slug,
    title: `${a.title} ${a.highlight}`,
    description: a.description,
    date: a.date,
    minutes: a.minutes,
    topic: a.topic,
    draft: a.draft,
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

function Details({ item }: { item: Item }) {
  return (
    <p className="text-sm text-slate-400">
      {formatDate(item.date)} · {item.topic} · {item.minutes} Min. Lesezeit
      {item.draft && (
        <span className="ml-2 rounded-full border border-teal/50 px-2 py-0.5 text-xs text-teal">
          Entwurf
        </span>
      )}
    </p>
  );
}

function More() {
  return (
    <span className="font-semibold text-teal group-hover:text-teal-light">
      Weiterlesen{" "}
      <span
        aria-hidden="true"
        className="inline-block transition-transform group-hover:translate-x-1"
      >
        →
      </span>
    </span>
  );
}

export default function Ratgeber() {
  const [lead, ...rest] = useLoaderData<typeof loader>();

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
            Selbstständige, kleine Betriebe und Vereine. Verständlich erklärt,
            und ehrlich auch dann, wenn die Antwort nicht „Beauftragen Sie mich“
            lautet.
          </p>

          {lead && (
            <a
              href={`/ratgeber/${lead.slug}`}
              className="group mt-12 grid gap-8 rounded-3xl border border-teal/40 bg-navy-light p-8 transition hover:border-teal sm:p-12 lg:grid-cols-[3fr_2fr]"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                  Neu
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  {lead.title}
                </h2>
                <div className="mt-4">
                  <Details item={lead} />
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <p className="text-lg leading-relaxed">{lead.description}</p>
                <p className="mt-6">
                  <More />
                </p>
              </div>
            </a>
          )}

          {rest.length > 0 && (
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {rest.map((item) => (
                <a
                  key={item.slug}
                  href={`/ratgeber/${item.slug}`}
                  className="group flex flex-col rounded-2xl border border-white/10 p-6 transition hover:border-teal/50"
                >
                  <Details item={item} />
                  <h2 className="mt-3 text-xl font-bold leading-snug text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 flex-1 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="mt-6">
                    <More />
                  </p>
                </a>
              ))}
            </div>
          )}
        </section>

        <ContactBox />
      </main>

      <Footer />
    </div>
  );
}
