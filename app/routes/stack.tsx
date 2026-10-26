import type { MetaFunction } from "@remix-run/node";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import { siteNav } from "~/components/site/siteNav";
import { pageMeta } from "~/components/site/pageMeta";

export const meta: MetaFunction = () =>
  pageMeta({
    title: "Stack | Hannes Schaletzky",
    description:
      "The tech Hannes Schaletzky works with – AWS, Node.js/TypeScript, integration & data, CI/CD, testing and operations.",
    path: "/stack",
  });

const groups = [
  {
    title: "Cloud & AWS",
    items: ["ECS/Fargate", "ECR", "IAM", "VPC", "SQS", "S3", "DynamoDB", "Terraform"],
  },
  {
    title: "Backend",
    items: ["Node.js", "TypeScript", "REST APIs", "Drizzle ORM", "PostgreSQL"],
  },
  {
    title: "Integration & data",
    items: [
      "Messaging / event-driven",
      "ETL",
      "MS SQL Server / T-SQL",
      "SAML",
      "MS Entra",
      "MS Exchange",
      "PowerShell",
    ],
  },
  {
    title: "Delivery & testing",
    items: ["Docker", "GitHub Actions", "Jest", "Playwright"],
  },
  {
    title: "Operations",
    items: ["Grafana", "Prometheus", "Mezmo", "Logging & alerting", "On-call"],
  },
  {
    title: "Web & frontend",
    items: ["Next.js", "Remix", "React", "Tailwind"],
  },
  {
    title: "Also experienced with",
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
    title: "How I work",
    items: [
      "Domain-driven design",
      "Clean code",
      "TDD",
      "Infrastructure as code",
      "Pair programming",
      "AI-assisted development",
    ],
  },
];

export default function Stack() {
  return (
    <div className="min-h-screen">
      <Header links={siteNav} />

      <main>
        <PageHero
          eyebrow="Stack"
          title="Tools I trust"
          highlight="in production."
          cta={{ label: "Talk about your project", href: "/cloud" }}
        >
          The technologies behind the platforms I build and run – from AWS to
          the tests that keep them reliable.
        </PageHero>

        <section className="bg-navy-lighter">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-24 sm:px-6 md:grid-cols-2">
            {groups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-white/10 p-6"
              >
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                  {group.title}
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-navy-light px-3 py-1 text-sm text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-24">
          <ContactBox />
        </div>
      </main>

      <Footer />
    </div>
  );
}
