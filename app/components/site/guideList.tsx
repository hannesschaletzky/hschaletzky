import { formatDate } from "~/ratgeber";
import ArrowLink from "~/components/site/arrowLink";
import Section from "~/components/site/section";

export type GuideTeaser = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

// guide articles as a quiet list with a link to the whole guide; on /websites
// and on the offer pages the articles belong to
function GuideList({ articles }: { articles: GuideTeaser[] }) {
  return (
    <div className="max-w-3xl">
      <ul className="border-t border-white/10">
        {articles.map((item) => (
          <li key={item.slug} className="border-b border-white/10">
            <a
              href={`/ratgeber/${item.slug}`}
              className="group grid gap-2 py-6 md:grid-cols-[1fr_auto] md:gap-8"
            >
              <span>
                <span className="block text-xl font-bold leading-snug text-white group-hover:text-teal-light">
                  {item.title}
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
      <ArrowLink href="/ratgeber">Alle Artikel im Ratgeber</ArrowLink>
    </div>
  );
}

// the section "Ratgeber – Ausführlich erklärt." on /websites and on the offer
// pages; nothing is shown without articles
export default function GuideSection({
  articles,
  className,
}: {
  articles: GuideTeaser[];
  className?: string;
}) {
  if (articles.length === 0) return null;
  return (
    <Section
      eyebrow="Ratgeber"
      heading="Ausführlich erklärt."
      className={className}
    >
      <GuideList articles={articles} />
    </Section>
  );
}
