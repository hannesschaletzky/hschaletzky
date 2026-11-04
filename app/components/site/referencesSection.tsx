import SectionHeading from "~/components/site/sectionHeading";
import { useLang } from "~/i18n";

const references = [
  {
    name: "Deutsch-Französische Gesellschaft Augsburg und Schwaben e. V.",
    label: {
      de: "Technisches Update & Wartung",
      en: "Technical update & maintenance",
    },
    year: "2024",
    url: "https://dfg-augsburg.eu/",
  },
  {
    name: "Freundeskreis Peutinger-Gymnasium Augsburg e. V.",
    label: { de: "Hosting & Wartung", en: "Hosting & maintenance" },
    year: "2023",
    since: true,
    url: "https://freundeskreis-peutinger.de/",
  },
];

// websites I look after, on the websites overview and the hosting page
export default function ReferencesSection({
  className,
}: {
  className?: string;
}) {
  const lang = useLang();
  return (
    <section className={className}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading eyebrow={lang === "de" ? "Referenzen" : "References"}>
          {lang === "de"
            ? "Websites, die ich betreue."
            : "Websites I look after."}
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          {references.map((reference) => (
            <a
              key={reference.url}
              href={reference.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 p-6 transition hover:border-teal/50"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                  {reference.label[lang]}
                </p>
                <p className="shrink-0 rounded-full border border-white/10 px-3 py-0.5 text-sm font-semibold text-white">
                  {reference.since ? (lang === "de" ? "seit " : "since ") : ""}
                  {reference.year}
                </p>
              </div>
              <h3 className="mt-3 text-xl font-bold text-white">
                {reference.name}
              </h3>
              <p className="mt-4 font-semibold text-white group-hover:text-teal">
                {reference.url.replace("https://", "").replace(/\/$/, "")} →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
