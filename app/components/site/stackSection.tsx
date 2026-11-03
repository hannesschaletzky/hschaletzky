import SectionHeading from "~/components/site/sectionHeading";
import { localize, useLang } from "~/i18n";

// the same four areas as on the stack page, only the most telling tools
const stack: { title: { de: string; en: string }; items: string[] }[] = [
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
    title: { de: "Delivery & Betrieb", en: "Delivery & operations" },
    items: ["Docker", "GitHub Actions", "Playwright", "Grafana"],
  },
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
        <div className="grid gap-8 sm:grid-cols-2">
          {stack.map((group) => (
            <div key={group.title.en}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                {group.title[lang]}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-navy-light px-4 py-2 text-white"
                  >
                    {item}
                  </li>
                ))}
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
