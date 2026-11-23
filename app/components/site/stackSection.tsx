import SectionHeading from "~/components/site/sectionHeading";
import { localize, useLang } from "~/i18n";
import ArrowLink from "~/components/site/arrowLink";

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
              className="rounded-full border border-white/10 bg-navy-light px-4 py-2 text-white"
            >
              {tool}
            </li>
          ))}
        </ul>
        <ArrowLink href={localize("/stack", lang)}>
          {lang === "de" ? "Zum kompletten Stack" : "See the full stack"}
        </ArrowLink>
      </div>
    </section>
  );
}
