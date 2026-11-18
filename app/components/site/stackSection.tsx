import SectionHeading from "~/components/site/sectionHeading";
import { localize, useLang } from "~/i18n";

// a short teaser for tech readers (cloud page): one row of the most telling
// tools, the details with a sentence per area live on the stack page
const tools = [
  "AWS",
  "Terraform / OpenTofu",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "MS SQL Server",
  "Microsoft Entra",
  "Docker",
  "GitHub Actions",
  "Grafana",
];

export default function StackSection({ className }: { className?: string }) {
  const lang = useLang();
  return (
    <section className={className}>
      {/* no top padding without an own background: there it follows a section in
          the same colour, whose bottom padding already makes the gap */}
      <div
        className={`mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24 ${className ? "pt-16 sm:pt-24" : ""}`}
      >
        <SectionHeading eyebrow="Stack">
          {lang === "de" ? "Womit ich arbeite." : "What I work with."}
        </SectionHeading>
        <ul className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-white/10 bg-navy-light px-4 py-2 text-white transition hover:-translate-y-0.5 hover:border-teal/60"
            >
              {tool}
            </li>
          ))}
        </ul>
        <a
          href={localize("/stack", lang)}
          className="group mt-8 inline-block font-semibold text-teal hover:text-teal-light"
        >
          {lang === "de" ? "Zum kompletten Stack" : "Full stack"}{" "}
          <span
            aria-hidden="true"
            className="inline-block transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </section>
  );
}
