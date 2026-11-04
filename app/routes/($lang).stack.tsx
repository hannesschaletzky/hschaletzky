import type { MetaFunction } from "react-router";
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
      "Die Technologien, mit denen Hannes Schaletzky arbeitet: AWS, Node.js/TypeScript, Integration & Daten, CI/CD, Tests und Betrieb.",
    title1: "Werkzeuge, denen ich",
    highlight: "im Betrieb vertraue.",
    cta: "Über Ihr Projekt sprechen",
    mail: "mailto:info@hschaletzky.com?subject=Projektanfrage",
    intro:
      "Die Technologien hinter den Plattformen, die ich baue und betreibe, von AWS bis zu den Tests, die sie zuverlässig machen.",
  },
  en: {
    title: "Tech Stack: AWS, Node.js & TypeScript | Hannes Schaletzky",
    description:
      "The tech Hannes Schaletzky works with: AWS, Node.js/TypeScript, integration & data, CI/CD, testing and operations.",
    title1: "Tools I trust",
    highlight: "in production.",
    cta: "Talk about your project",
    mail: "mailto:info@hschaletzky.com?subject=Project%20inquiry",
    intro:
      "The technologies behind the platforms I build and run, from AWS to the tests that keep them reliable.",
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

type Label = string | { de: string; en: string };

// main areas: a sentence on what I use it for, then the tools (names stay as they are)
const focus: {
  title: { de: string; en: string };
  text: { de: string; en: string };
  items: Label[];
}[] = [
  {
    title: { de: "Cloud & AWS", en: "Cloud & AWS" },
    text: {
      de: "Mandantenfähige Plattformen auf ECS/Fargate, sauber getrennte Umgebungen und Infrastruktur, die als Code im Repository liegt.",
      en: "Multi-tenant platforms on ECS/Fargate, cleanly separated environments and infrastructure that lives as code in the repository.",
    },
    items: [
      "ECS/Fargate",
      "Terraform / OpenTofu",
      "IAM",
      "VPC",
      "SQS",
      "S3",
      "DynamoDB",
      "ECR",
    ],
  },
  {
    title: { de: "Backend", en: "Backend" },
    text: {
      de: "APIs und Services in Node.js und TypeScript, typisiert und getestet, mit einer sauberen Datenbank dahinter.",
      en: "APIs and services in Node.js and TypeScript, typed and tested, with a clean database behind them.",
    },
    items: ["Node.js", "TypeScript", "PostgreSQL", "REST APIs", "Drizzle ORM"],
  },
  {
    title: { de: "Integration & Daten", en: "Integration & data" },
    text: {
      de: "Ich verbinde SaaS-, Cloud- und On-Prem-Systeme, von ITSM und Gerätemanagement (MDM) über Microsoft-Umgebungen bis zu gewachsenen SQL-Datenbanken.",
      en: "I connect SaaS, cloud and on-prem systems, from ITSM and device management (MDM) to Microsoft environments and SQL databases that have grown over the years.",
    },
    items: [
      "MS SQL Server / T-SQL",
      "Microsoft Entra",
      "Microsoft Intune",
      "Microsoft Exchange",
      "Xurrent (ITSM)",
      "ACMP",
      "Mobivisor",
      "SAML / SSO",
      { de: "Message Queues", en: "Message queues" },
      { de: "ETL-Strecken", en: "ETL pipelines" },
      "PowerShell",
    ],
  },
  {
    title: { de: "Delivery & Betrieb", en: "Delivery & operations" },
    text: {
      de: "Automatisierte Tests und Deployments ab dem ersten Tag und ein Monitoring, das Probleme meldet, bevor Ihre Kunden sie bemerken.",
      en: "Automated tests and deployments from day one, and monitoring that reports problems before your customers notice them.",
    },
    items: [
      "Docker",
      "GitHub Actions",
      "Playwright",
      "Jest",
      "Grafana",
      "Prometheus",
      { de: "Mezmo (Logs)", en: "Mezmo (logs)" },
      { de: "Rufbereitschaft", en: "On-call" },
    ],
  },
];

// smaller lists below the main areas
const more: { title: { de: string; en: string }; items: Label[] }[] = [
  {
    title: { de: "Web & Frontend", en: "Web & frontend" },
    items: ["Next.js", "React Router", "React", "Astro", "Tailwind"],
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
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            {/* main areas: text left, tools right */}
            <div className="divide-y divide-white/10 border-y border-white/10">
              {focus.map((area) => (
                <div
                  key={area.title.en}
                  className="grid gap-6 py-10 md:grid-cols-[2fr_3fr] md:gap-12"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">
                      {area.title[lang]}
                    </h2>
                    <p className="mt-3 text-lg leading-relaxed">
                      {area.text[lang]}
                    </p>
                  </div>
                  <ul className="flex flex-wrap content-start gap-3">
                    {area.items.map((entry) => {
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

            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {more.map((group) => (
                <div key={group.title.en}>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                    {group.title[lang]}
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((entry) => {
                      const item =
                        typeof entry === "string" ? entry : entry[lang];
                      return (
                        <li key={item} className="text-white">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
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
