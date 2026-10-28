import type { MetaFunction } from "@remix-run/node";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import { pageMeta } from "~/components/site/pageMeta";
import { langFromParams, langLoader, useLang } from "~/i18n";

export const loader = langLoader;

const text = {
  de: {
    title: "Tech Stack: AWS, Node.js & TypeScript | Hannes Schaletzky",
    description:
      "Die Technologien, mit denen Hannes Schaletzky arbeitet – AWS, Node.js/TypeScript, Integration & Daten, CI/CD, Tests und Betrieb.",
    title1: "Werkzeuge, denen ich",
    highlight: "im Betrieb vertraue.",
    cta: "Über Ihr Projekt sprechen",
    mail: "mailto:info@hschaletzky.com?subject=Projektanfrage",
    intro:
      "Die Technologien hinter den Plattformen, die ich baue und betreibe – von AWS bis zu den Tests, die sie zuverlässig machen.",
  },
  en: {
    title: "Tech Stack: AWS, Node.js & TypeScript | Hannes Schaletzky",
    description:
      "The tech Hannes Schaletzky works with – AWS, Node.js/TypeScript, integration & data, CI/CD, testing and operations.",
    title1: "Tools I trust",
    highlight: "in production.",
    cta: "Talk about your project",
    mail: "mailto:info@hschaletzky.com?subject=Project%20inquiry",
    intro:
      "The technologies behind the platforms I build and run – from AWS to the tests that keep them reliable.",
  },
};

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return pageMeta({
    title: text[lang].title,
    description: text[lang].description,
    path: "/stack",
    lang,
  });
};

// group titles in both languages, the tools themselves are names
const groups = [
  {
    title: { de: "Cloud & AWS", en: "Cloud & AWS" },
    items: [
      "ECS/Fargate",
      "ECR",
      "IAM",
      "VPC",
      "SQS",
      "S3",
      "DynamoDB",
      "Terraform",
    ],
  },
  {
    title: { de: "Backend", en: "Backend" },
    items: ["Node.js", "TypeScript", "REST APIs", "Drizzle ORM", "PostgreSQL"],
  },
  {
    title: { de: "Integration & Daten", en: "Integration & data" },
    items: [
      { de: "Messaging / ereignisgesteuert", en: "Messaging / event-driven" },
      "ETL",
      "MS SQL Server / T-SQL",
      "SAML",
      "MS Entra",
      "MS Exchange",
      "PowerShell",
    ],
  },
  {
    title: { de: "Delivery & Tests", en: "Delivery & testing" },
    items: ["Docker", "GitHub Actions", "Jest", "Playwright"],
  },
  {
    title: { de: "Betrieb", en: "Operations" },
    items: [
      "Grafana",
      "Prometheus",
      "Mezmo",
      { de: "Logging & Alerting", en: "Logging & alerting" },
      { de: "Rufbereitschaft", en: "On-call" },
    ],
  },
  {
    title: { de: "Web & Frontend", en: "Web & frontend" },
    items: ["Next.js", "Remix", "React", "Tailwind"],
  },
  {
    title: { de: "Außerdem Erfahrung mit", en: "Also experienced with" },
    items: [
      "Kotlin / Spring Boot",
      "C# / .NET",
      "Kubernetes",
      "Hetzner Cloud",
      "Azure DevOps",
      "SSAS",
      "VBA",
    ],
  },
  {
    title: { de: "Arbeitsweise", en: "How I work" },
    items: [
      { de: "Domain-driven Design", en: "Domain-driven design" },
      { de: "Clean Code", en: "Clean code" },
      "TDD",
      { de: "Infrastructure as Code", en: "Infrastructure as code" },
      { de: "Pair Programming", en: "Pair programming" },
      { de: "KI-gestützte Entwicklung", en: "AI-assisted development" },
    ],
  },
];

export default function Stack() {
  const lang = useLang();
  const t = text[lang];
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <PageHero
          eyebrow="Stack"
          title={t.title1}
          highlight={t.highlight}
          cta={{ label: t.cta, href: t.mail }}
        >
          {t.intro}
        </PageHero>

        <section className="bg-navy-lighter">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2">
            {groups.map((group) => (
              <div
                key={group.title.en}
                className="rounded-2xl border border-white/10 p-6"
              >
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                  {group.title[lang]}
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((entry) => {
                    const item =
                      typeof entry === "string" ? entry : entry[lang];
                    return (
                      <li
                        key={item}
                        className="rounded-full border border-white/10 bg-navy-light px-3 py-1 text-sm text-white"
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-16 sm:pt-24">
          <ContactBox />
        </div>
      </main>

      <Footer />
    </div>
  );
}
