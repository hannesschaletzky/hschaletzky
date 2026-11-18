import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { useLoaderData } from "react-router";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import { pageMeta } from "~/components/site/pageMeta";
import { siteUrl } from "~/components/site/sitePages";
import { formatDate } from "~/ratgeber";
import { getArticle, status } from "~/ratgeber.server";

// one guide article from app/content/ratgeber/<slug>.md
export const loader = ({ params }: LoaderFunctionArgs) => {
  const article = getArticle(params.slug ?? "");
  if (!article) throw new Response("Not found", { status: 404 });
  return { ...article, status: status(article) };
};

export const meta: MetaFunction<typeof loader> = ({ loaderData: data }) => {
  if (!data) return [{ title: "Nicht gefunden | Hannes Schaletzky" }];
  return [
    ...pageMeta({
      title: `${data.title} ${data.highlight} | Hannes Schaletzky`,
      description: data.description,
      path: `/ratgeber/${data.slug}`,
      lang: "de",
      image: `ratgeber-${data.slug}`,
      germanOnly: true,
      type: "article",
    }),
    // drafts and scheduled articles are only previewed locally, never indexed
    ...(data.status ? [{ name: "robots", content: "noindex" }] : []),
    { property: "article:published_time", content: data.date },
    { property: "article:section", content: data.topic },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: `${data.title} ${data.highlight}`,
        description: data.description,
        datePublished: data.date,
        dateModified: data.date,
        image: `${siteUrl}/og/ratgeber-${data.slug}-de.png`,
        inLanguage: "de",
        url: `${siteUrl}/ratgeber/${data.slug}`,
        author: {
          "@type": "Person",
          name: "Hannes Schaletzky",
          url: `${siteUrl}/about`,
        },
        publisher: {
          "@type": "Organization",
          name: "Hannes Schaletzky",
          logo: { "@type": "ImageObject", url: `${siteUrl}/icon-512.png` },
        },
      },
    },
  ];
};

export default function RatgeberArticle() {
  const article = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen" lang="de">
      <Header />

      <main>
        <article className="mx-auto max-w-3xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
          {/* the way back to the overview, clearly visible above the article; coming
              from the overview it goes back in history, so a set filter stays */}
          <a
            href="/ratgeber"
            onClick={(event) => {
              const from = document.referrer;
              if (
                from.startsWith(`${window.location.origin}/ratgeber`) &&
                !from.startsWith(`${window.location.origin}/ratgeber/`)
              ) {
                event.preventDefault();
                window.history.back();
              }
            }}
            className="group inline-flex items-center gap-2 text-lg font-semibold text-teal hover:text-teal-light"
          >
            <span
              aria-hidden="true"
              className="inline-block transition-transform group-hover:-translate-x-1"
            >
              ←
            </span>
            Zurück zum Ratgeber
          </a>
          <p className="mt-10 text-sm text-slate-400">
            {formatDate(article.date)} · {article.topic} · {article.minutes}{" "}
            Min. Lesezeit
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight">
            {article.title} {article.highlight}
          </h1>

          {/* the article itself, written in Markdown. The short description is
              not repeated here: readers know it from the card, and every article
              opens with its own introduction */}
          <div
            className="ratgeber-text mt-10"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />

          {/* every article leads to the matching offer */}
          <a
            href={article.offer.href}
            className="group mt-16 flex flex-col rounded-2xl border border-teal/40 p-6 transition hover:-translate-y-0.5 hover:border-teal sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              Passt zu diesem Thema
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white group-hover:text-teal-light">
              {article.offer.title}
            </h2>
            <p className="mt-3 leading-relaxed">{article.offer.text}</p>
            <p className="mt-6 font-semibold text-teal group-hover:text-teal-light">
              Mehr dazu{" "}
              <span
                aria-hidden="true"
                className="inline-block transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </p>
          </a>
        </article>

        <ContactBox />
      </main>

      <Footer />
    </div>
  );
}
