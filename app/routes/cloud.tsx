import type { MetaFunction } from "@remix-run/node";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import SectionHeading from "~/components/site/sectionHeading";
import { siteNav } from "~/components/site/siteNav";
import StackSection from "~/components/site/stackSection";

export const meta: MetaFunction = () => [
  { title: "Cloud & Integrations | Hannes Schaletzky" },
  {
    name: "description",
    content:
      "Freelance integration & cloud engineer in Berlin – backend and integration solutions with Node.js/TypeScript and AWS, from analysis to production.",
  },
];

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
    title: "Architecture & cloud review",
    text: "A second opinion on your existing system, your AWS costs or a planned migration – with a clear written result and next steps.",
    price: "1,200 €",
    priceNote: "plus VAT",
    cta: "Book a review",
    href: "mailto:info@hschaletzky.com?subject=Architecture%20review",
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
    client: "blu Systems",
    title: "Multi-tenant integration platform for Xurrent",
    text: "AWS-based platform running data imports and process logic in isolated environments – live at seven customers with around 500 integrations a week on real customer data.",
  },
  {
    client: "tilde ventures",
    title: "Migration from Vercel to AWS",
    text: "Own production AWS environment with CI/CD and an automated test suite for a digital health care directive platform.",
  },
];

export default function Cloud() {
  return (
    <div className="min-h-screen">
      <Header links={siteNav} />

      <main>
        <PageHero
          eyebrow="For companies"
          title="Backends and integrations"
          highlight="that run in production."
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
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-white/10 p-6"
                >
                  <span className="text-sm font-semibold text-teal">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* selected work */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHeading eyebrow="Selected work">
              Running in production today.
            </SectionHeading>
            <div className="grid gap-6 md:grid-cols-2">
              {work.map((item) => (
                <article key={item.title}>
                  <p className="text-sm text-slate-400">{item.client}</p>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed">{item.text}</p>
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
