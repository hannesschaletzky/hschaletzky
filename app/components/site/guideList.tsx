import { formatDate } from "~/ratgeber";

export type GuideTeaser = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

// guide articles as a quiet list with a link to the whole guide; on /websites
// and on the offer pages the articles belong to
export default function GuideList({ articles }: { articles: GuideTeaser[] }) {
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
      <a
        href="/ratgeber"
        className="group mt-8 inline-block font-semibold text-teal hover:text-teal-light"
      >
        Alle Artikel im Ratgeber{" "}
        <span
          aria-hidden="true"
          className="inline-block transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </a>
    </div>
  );
}
