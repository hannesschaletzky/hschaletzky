import SectionHeading from "~/components/site/sectionHeading";
import { localize, useLang } from "~/i18n";

type Label = string | { de: string; en: string };

// the same areas as on the stack page, only the most telling tools
const stack: { title: { de: string; en: string }; items: Label[] }[] = [
  {
    title: { de: "Cloud", en: "Cloud" },
    items: ["AWS ECS/Fargate", "SQS · S3 · IAM", "Terraform / OpenTofu"],
  },
  {
    title: { de: "Backend", en: "Backend" },
    items: ["Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: { de: "Integration", en: "Integration" },
    items: ["MS SQL Server", "Microsoft Entra", "SAML / SSO"],
  },
  {
    title: { de: "Web", en: "Web" },
    items: ["Next.js", "Astro", "WordPress"],
  },
  {
    title: { de: "KI & Automatisierung", en: "AI & automation" },
    items: [
      "Claude Code",
      { de: "Workflow-Automatisierung", en: "Workflow automation" },
    ],
  },
  {
    title: { de: "Delivery & Betrieb", en: "Delivery & operations" },
    items: ["Docker", "GitHub Actions", "Playwright", "Grafana"],
  },
];

// the cloud page leaves out the web group, it is about platforms there;
// with its own background (about page) it also needs the top padding
export default function StackSection({
  web = true,
  className,
}: {
  web?: boolean;
  className?: string;
}) {
  const lang = useLang();
  return (
    <section className={className}>
      {/* no top padding on the home and cloud page: there it follows a section in the
          same colour, whose bottom padding already makes the gap */}
      <div
        className={`mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24 ${className ? "pt-16 sm:pt-24" : ""}`}
      >
        <SectionHeading eyebrow="Stack">
          {lang === "de" ? "Die Technik dahinter." : "The tech behind it."}
        </SectionHeading>
        <div className="grid gap-8 sm:grid-cols-2">
          {stack
            .filter((group) => web || group.title.en !== "Web")
            .map((group) => (
              <div key={group.title.en}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                  {group.title[lang]}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-3">
                  {group.items.map((entry) => {
                    const item =
                      typeof entry === "string" ? entry : entry[lang];
                    return (
                      <li
                        key={item}
                        className="rounded-full border border-white/10 bg-navy-light px-4 py-2 text-white"
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
        </div>
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
