import type { MetaFunction } from "@remix-run/node";
import ClimbSteps from "~/components/site/climbSteps";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import { logos } from "~/components/site/logos";
import SectionHeading from "~/components/site/sectionHeading";
import { calUrl, siteNav } from "~/components/site/siteNav";
import StackSection from "~/components/site/stackSection";
import { pageMeta } from "~/components/site/pageMeta";

export const meta: MetaFunction = () =>
  pageMeta({
    title: "Integration & Cloud Engineer in Berlin | Hannes Schaletzky",
    description:
      "Freelance integration & cloud engineer in Berlin – backend and integration solutions with Node.js/TypeScript and AWS, from project kickoff to production.",
    path: "/cloud",
  });

const services = [
  {
    title: "Backend engineering",
    text: "APIs and services in Node.js/TypeScript – typed, tested and maintainable, built with clean code and domain-driven design.",
  },
  {
    title: "System integration & data flows",
    text: "Connect SaaS, cloud and on-prem systems with secure, reliable data flows – messaging, ETL and APIs.",
  },
  {
    title: "AWS architecture & migrations",
    text: "Multi-tenant platforms on ECS/Fargate, separated environments and migrations into your own AWS account.",
  },
  {
    title: "CI/CD & automated testing",
    text: "Pipelines, infrastructure as code and test suites that cover the critical parts of your system.",
  },
  {
    title: "Monitoring & production operation",
    text: "Logging, monitoring and alerting – and someone who keeps it running after go-live.",
  },
  {
    title: "Full-stack when needed",
    text: "Web frontends with Next.js or Remix when your platform needs an interface – from the API to the screen.",
  },
];

const offers = [
  {
    eyebrow: "A good first step",
    title: "Project kickoff",
    text: "A short, focused start on your system: I get to know your setup, interfaces and data flows, find the weak spots, sketch a solution and give you a reliable estimate.",
    price: "from 800 €",
    priceNote: "plus VAT",
    cta: "Book a kickoff",
    href: calUrl,
    highlight: true,
  },
  {
    eyebrow: "The main thing",
    title: "Projects & ongoing support",
    text: "Building, migrating and running your systems – from integration platforms to AWS migrations, including operation and further development after go-live.",
    price: "On request",
    priceNote: "depending on scope",
    cta: "Talk about your project",
    href: "mailto:info@hschaletzky.com?subject=Project%20inquiry",
    highlight: false,
  },
];

const steps = [
  {
    title: "Understand",
    text: "Analyse the existing system, its data and dependencies.",
  },
  {
    title: "Plan",
    text: "Design a target architecture that is secure, scalable and cost-efficient.",
  },
  {
    title: "Build",
    text: "Implement with automated tests and a CI/CD pipeline from day one.",
  },
  {
    title: "Hand over",
    text: "Document, hand over to your team – or keep running it for you.",
  },
];

// from the CV
const work = [
  {
    client: "blu Systems GmbH",
    logo: logos.blu,
    title: "Multi-tenant integration platform for Xurrent",
    text: "AWS-based platform running data imports and process logic in isolated environments – live at seven customers with around 500 integrations a week on real customer data.",
    facts: ["7 customers live", "~500 integrations / week"],
  },
  {
    client: "blu Systems GmbH",
    logo: logos.blu,
    title: "Hybrid cloud bridge to on-premise systems",
    text: "A mid/jump server as the secure link between Xurrent and the on-premise systems of customers – running process logic inside their environments, with self-updating, tenant-separated Docker images.",
    facts: [
      "Secure async messaging via SQS & S3",
      "Linux, PowerShell, Entra & Exchange",
    ],
  },
  {
    client: "tilde ventures GmbH",
    logo: logos.tilde,
    title: "Migration from Vercel to AWS",
    text: "Own production AWS environment with CI/CD and an automated test suite for a digital health care directive platform.",
    facts: ["Own AWS environment", "Staging & CI/CD"],
  },
];

export default function Cloud() {
  return (
    <div className="min-h-screen">
      <Header links={siteNav} />

      <main>
        <PageHero
          eyebrow="For companies"
          title="Integration and cloud engineering"
          highlight="built to last."
          cta={{
            label: "Talk about your project",
            href: "mailto:info@hschaletzky.com?subject=Project%20inquiry",
          }}
        >
          I engineer backend and integration solutions with Node.js/TypeScript
          and AWS – from architecture and clean code to secure production
          operation.
        </PageHero>

        {/* services */}
        <section className="bg-navy-lighter">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHeading eyebrow="What I do">
              From the first line of code to operation.
            </SectionHeading>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-white/10 p-6"
                >
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 leading-relaxed">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* offers: small entry and the main project work */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHeading eyebrow="Offers">
              Start small or start building.
            </SectionHeading>
            <div className="grid gap-6 md:grid-cols-2">
              {offers.map((offer) => (
                <article
                  key={offer.title}
                  className={`flex flex-col rounded-3xl border bg-navy-light p-8 ${
                    offer.highlight ? "border-teal/40" : "border-white/10"
                  }`}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                    {offer.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {offer.title}
                  </h3>
                  <p className="mt-4 flex-1 text-lg leading-relaxed">
                    {offer.text}
                  </p>
                  <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
                    <div>
                      <p className="text-3xl font-bold text-white">
                        {offer.price}
                      </p>
                      <p className="mt-1 text-sm">{offer.priceNote}</p>
                    </div>
                    <a
                      href={offer.href}
                      {...(offer.href.startsWith("http") && {
                        target: "_blank",
                        rel: "noreferrer",
                      })}
                      className="rounded-full bg-teal px-6 py-3 font-semibold text-navy transition hover:bg-teal-light"
                    >
                      {offer.cta}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* approach */}
        <section className="bg-navy-light">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHeading eyebrow="How I work">
              End to end – from the first analysis to the handover.
            </SectionHeading>
            <ClimbSteps steps={steps} hillClass="fill-navy-lighter" />
          </div>
        </section>

        {/* selected work */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHeading eyebrow="Selected work">
              Running in production today.
            </SectionHeading>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {work.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col rounded-3xl border border-white/10 bg-navy-light p-8"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.logo.src}
                      width={item.logo.width}
                      height={item.logo.height}
                      loading="lazy"
                      alt=""
                      className="h-10 w-auto rounded-lg"
                    />
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                      {item.client}
                    </p>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed">{item.text}</p>
                  <ul className="mt-8 grid gap-3 border-t border-white/10 pt-6">
                    {item.facts.map((fact) => (
                      <li
                        key={fact}
                        className="flex items-start gap-2 font-semibold text-white"
                      >
                        <span aria-hidden="true" className="text-teal">
                          ✓
                        </span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <StackSection />
        <ContactBox />
      </main>

      <Footer />
    </div>
  );
}
