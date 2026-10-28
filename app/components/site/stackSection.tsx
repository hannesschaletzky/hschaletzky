import SectionHeading from "~/components/site/sectionHeading";
import { localize, useLang } from "~/i18n";

const stack = [
  "AWS ECS/Fargate",
  "SQS · S3 · IAM",
  "DynamoDB",
  "PostgreSQL",
  "Node.js",
  "TypeScript",
  "Next.js",
  "Remix",
  "Docker",
  "GitHub Actions",
  "Terraform",
  "Playwright",
  "Jest",
  "Grafana",
];

export default function StackSection() {
  const lang = useLang();
  return (
    <section>
      {/* no top padding: on both pages it follows a section in the same colour, whose
          bottom padding already makes the gap */}
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <SectionHeading eyebrow="Stack">
          {lang === "de" ? "Die Technik dahinter." : "The tech behind it."}
        </SectionHeading>
        <ul className="flex flex-wrap gap-3">
          {stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/10 bg-navy-light px-4 py-2 text-white"
            >
              {item}
            </li>
          ))}
        </ul>
        <a
          href={localize("/stack", lang)}
          className="mt-8 inline-block text-teal hover:text-teal-light"
        >
          {lang === "de" ? "Zum kompletten Stack" : "Full stack"} →
        </a>
      </div>
    </section>
  );
}
