import type { MetaFunction } from "react-router";
import ClimbSteps from "~/components/site/climbSteps";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import { logos } from "~/components/site/logos";
import PageHero from "~/components/site/pageHero";
import { pageMeta } from "~/components/site/pageMeta";
import SectionHeading from "~/components/site/sectionHeading";
import StackSection from "~/components/site/stackSection";
import Testimonials from "~/components/site/testimonials";
import { langFromParams, langLoader, localize, useLang } from "~/i18n";

export const loader = langLoader;

const text = {
  de: {
    title: "Cloud & Integrationen für Unternehmen | Hannes Schaletzky",
    description:
      "Freiberuflicher Integration & Cloud Engineer aus Berlin: ITSM-, MDM- und Microsoft-Integrationen (Xurrent, Intune, ACMP, Entra) mit Node.js/TypeScript und AWS. Remote oder vor Ort im DACH-Raum.",
    hero: {
      title: "Cloud & Integrationen,",
      highlight: "verlässlich im Betrieb.",
      cta: "Über Ihr Projekt sprechen",
      text: "Ich verbinde ITSM-, MDM- und Microsoft-Umgebungen mit der Cloud und mit On-Prem-Systemen. Dafür nutze ich Node.js/TypeScript und AWS und begleite Sie von der Architektur bis zum sicheren Betrieb.",
    },
    servicesEyebrow: "Leistungen",
    servicesHeading: "Was ich übernehme.",
    services: [
      {
        title: "ITSM-, MDM- & Identity-Integrationen",
        text: "Ich verbinde ITSM-Systeme wie Xurrent mit MDM-Systemen wie Intune, ACMP oder Mobivisor und automatisiere Abläufe in Entra und Exchange, über APIs, Messaging und ETL.",
      },
      {
        title: "Cloud & On-Prem verbinden",
        text: "Ich verbinde SaaS und Cloud sicher mit den On-Prem-Systemen Ihrer Kunden. Die Daten fließen asynchron und zuverlässig.",
      },
      {
        title: "AWS-Architektur & Migrationen",
        text: "Mandantenfähige Plattformen auf ECS/Fargate, getrennte Umgebungen und Migrationen in Ihren eigenen AWS-Account.",
      },
      {
        title: "CI/CD & automatisierte Tests",
        text: "Pipelines, Infrastructure as Code und Testsuites, die die kritischen Teile Ihres Systems abdecken.",
      },
      {
        title: "Monitoring & Produktionsbetrieb",
        text: "Logging, Monitoring und Alerting. Und jemand, der das System nach dem Go-live am Laufen hält.",
      },
      {
        title: "Backend & Full-Stack",
        text: "APIs und Services in Node.js/TypeScript, typisiert und getestet, mit Clean Code und Domain-driven Design. Bei Bedarf auch die Weboberfläche dazu.",
      },
    ],
    offersEyebrow: "Angebote",
    offersHeading: "Zwei Wege zum Start.",
    offers: [
      {
        eyebrow: "Ein guter erster Schritt",
        title: "Projekt-Kickoff",
        text: "Ein kurzer, fokussierter Einstieg: Ich lerne Ihr Setup, Ihre Schnittstellen und Datenflüsse kennen und finde die Schwachstellen. Danach bekommen Sie einen Lösungsvorschlag und eine belastbare Schätzung.",
        price: "ab 800 €",
        priceNote: "zzgl. MwSt.",
        cta: "Kickoff anfragen",
        href: "/contact",
        highlight: true,
      },
      {
        eyebrow: "Das Kerngeschäft",
        title: "Projekte & laufende Betreuung",
        text: "Von der Integrationsplattform bis zur AWS-Migration: Ich baue Ihre Systeme auf, betreibe sie und entwickle sie nach dem Go-live weiter.",
        price: "Auf Anfrage",
        priceNote: "je nach Umfang",
        cta: "Über Ihr Projekt sprechen",
        href: "/contact",
        highlight: false,
      },
    ],
    stepsEyebrow: "So arbeite ich",
    stepsHeading: "Von der Analyse zur Übergabe.",
    steps: [
      {
        title: "Verstehen",
        text: "Das bestehende System, seine Daten und Abhängigkeiten analysieren.",
      },
      {
        title: "Planen",
        text: "Eine Zielarchitektur entwerfen, die sicher, skalierbar und kosteneffizient ist.",
      },
      {
        title: "Bauen",
        text: "Umsetzen, mit automatisierten Tests und einer CI/CD-Pipeline ab dem ersten Tag.",
      },
      {
        title: "Übergeben",
        text: "Dokumentieren und an Ihr Team übergeben oder den Betrieb für Sie übernehmen.",
      },
    ],
    workEyebrow: "Ausgewählte Projekte",
    workHeading: "Gebaut für den Produktivbetrieb.",
    work: [
      {
        title: "Mandantenfähige Integrationsplattform für Xurrent",
        text: "AWS-Plattform, die Datenimporte und Prozesslogik für jeden Kunden in einer eigenen Umgebung ausführt, zum Beispiel Integrationen mit Intune, ACMP und Mobivisor. Live bei sieben Kunden mit rund 500 Integrationen pro Woche auf echten Kundendaten.",
        facts: [
          "7 Kunden live",
          "~500 Integrationen / Woche",
          "Intune, ACMP & Mobivisor",
        ],
      },
      {
        title: "Hybrid-Cloud-Bridge zu On-Prem-Systemen",
        text: "Ein Mid-/Jump-Server als sicheres Bindeglied zwischen Xurrent und den On-Prem-Systemen der Kunden. Er führt die Prozesslogik direkt in ihren Umgebungen aus. Die Docker-Images aktualisieren sich selbst und sind pro Mandant getrennt.",
        facts: [
          "Sichere asynchrone Kommunikation über SQS & S3",
          "Linux, PowerShell, Entra & Exchange",
        ],
      },
      {
        title: "Migration von Vercel zu AWS",
        text: "Eigene produktive AWS-Umgebung mit CI/CD und automatisierter Testsuite für eine digitale Vorsorge-Plattform.",
        facts: ["Eigene AWS-Umgebung", "Staging & CI/CD"],
      },
      {
        title: "BundesIdent: Backend für digitale Identitäten (eID)",
        text: "Skalierbares Backend, das digitale Identitäten in der bundesweiten eID-Infrastruktur prüft, mit sicheren APIs, Kubernetes und Rufbereitschaft im Produktivbetrieb. Ich habe daran als angestellter Software Engineer bei DigitalService gearbeitet. Das Backend lief 2022–2023 und ist Open Source.",
        facts: [
          "Öffentlicher Sektor",
          "Kotlin/Spring Boot · SAML · Kubernetes",
        ],
      },
    ],
  },
  en: {
    title: "Integration & Cloud Engineer | Hannes Schaletzky",
    description:
      "Freelance integration & cloud engineer from Berlin: ITSM, MDM and Microsoft integrations (Xurrent, Intune, ACMP, Entra) with Node.js/TypeScript and AWS. Remote or on-site across Germany, Austria and Switzerland.",
    hero: {
      title: "Cloud & integrations,",
      highlight: "reliable in production.",
      cta: "Talk about your project",
      text: "I connect ITSM, MDM and Microsoft environments with the cloud and with on-prem systems. I use Node.js/TypeScript and AWS and support you from architecture to secure production operation.",
    },
    servicesEyebrow: "Services",
    servicesHeading: "What I take on.",
    services: [
      {
        title: "ITSM, MDM & identity integrations",
        text: "I connect ITSM systems such as Xurrent with MDM systems such as Intune, ACMP or Mobivisor and automate processes in Entra and Exchange, via APIs, messaging and ETL.",
      },
      {
        title: "Connecting cloud & on-prem",
        text: "I connect SaaS and the cloud securely with the on-prem systems of your customers. Data flows asynchronously and reliably.",
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
        text: "Logging, monitoring and alerting. And someone who keeps it running after go-live.",
      },
      {
        title: "Backend & full-stack",
        text: "APIs and services in Node.js/TypeScript, typed and tested, built with clean code and domain-driven design. And the web interface when you need one.",
      },
    ],
    offersEyebrow: "Offers",
    offersHeading: "Two ways to start.",
    offers: [
      {
        eyebrow: "A good first step",
        title: "Project kickoff",
        text: "A short, focused start: I get to know your setup, interfaces and data flows and find the weak spots. Then you get a proposed solution and a reliable estimate.",
        price: "from 800 €",
        priceNote: "plus VAT",
        cta: "Request a kickoff",
        href: "/en/contact",
        highlight: true,
      },
      {
        eyebrow: "The main thing",
        title: "Projects & ongoing support",
        text: "From an integration platform to an AWS migration: I build your systems, run them and keep developing them after go-live.",
        price: "On request",
        priceNote: "depending on scope",
        cta: "Talk about your project",
        href: "/en/contact",
        highlight: false,
      },
    ],
    stepsEyebrow: "How I work",
    stepsHeading: "From analysis to handover.",
    steps: [
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
        text: "Document and hand over to your team, or keep running it for you.",
      },
    ],
    workEyebrow: "Selected work",
    workHeading: "Built for production.",
    work: [
      {
        title: "Multi-tenant integration platform for Xurrent",
        text: "AWS platform that runs data imports and process logic in a separate environment for each customer, for example integrations with Intune, ACMP and Mobivisor. Live at seven customers with around 500 integrations a week on real customer data.",
        facts: [
          "7 customers live",
          "~500 integrations / week",
          "Intune, ACMP & Mobivisor",
        ],
      },
      {
        title: "Hybrid cloud bridge to on-premise systems",
        text: "A mid/jump server as the secure link between Xurrent and the on-premise systems of customers. It runs the process logic inside their environments. The Docker images update themselves and are separated per tenant.",
        facts: [
          "Secure async messaging via SQS & S3",
          "Linux, PowerShell, Entra & Exchange",
        ],
      },
      {
        title: "Migration from Vercel to AWS",
        text: "Own production AWS environment with CI/CD and an automated test suite for a digital health care directive platform.",
        facts: ["Own AWS environment", "Staging & CI/CD"],
      },
      {
        title: "BundesIdent: backend for digital identities (eID)",
        text: "Scalable backend for authenticating digital identities within the German federal eID infrastructure, with secure APIs, a Kubernetes deployment and on-call duty for production. I worked on it as an employed software engineer at DigitalService. The backend ran from 2022 to 2023 and is open source.",
        facts: ["Public sector", "Kotlin/Spring Boot · SAML · Kubernetes"],
      },
    ],
  },
};

// from the CV – same order as the texts above
const clients = [
  { client: "blu Systems GmbH", logo: logos.blu },
  { client: "blu Systems GmbH", logo: logos.blu },
  { client: "tilde ventures GmbH", logo: logos.tilde },
  { client: "DigitalService GmbH des Bundes", logo: logos.digitalservice },
];

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return pageMeta({
    title: text[lang].title,
    description: text[lang].description,
    path: "/cloud",
    lang,
  });
};

export default function Cloud() {
  const lang = useLang();
  const t = text[lang];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <PageHero
          title={t.hero.title}
          highlight={t.hero.highlight}
          cta={{ label: t.hero.cta, href: localize("/contact", lang) }}
        >
          {t.hero.text}
        </PageHero>

        {/* proof first: companies want to know who has trusted me before */}
        <Testimonials className="bg-navy-lighter" />

        {/* services */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.servicesEyebrow}>
              {t.servicesHeading}
            </SectionHeading>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {t.services.map((service) => (
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
        <section className="bg-navy-lighter">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.offersEyebrow}>
              {t.offersHeading}
            </SectionHeading>
            <div className="grid gap-6 md:grid-cols-2">
              {t.offers.map((offer) => (
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
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.stepsEyebrow}>
              {t.stepsHeading}
            </SectionHeading>
            <ClimbSteps steps={t.steps} hillClass="fill-navy-lighter" />
          </div>
        </section>

        {/* selected work */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.workEyebrow}>
              {t.workHeading}
            </SectionHeading>
            <div className="grid gap-6 md:grid-cols-2">
              {t.work.map((item, i) => (
                <article
                  key={item.title}
                  className="flex flex-col rounded-3xl border border-white/10 bg-navy-light p-8"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={clients[i].logo.src}
                      width={clients[i].logo.width}
                      height={clients[i].logo.height}
                      loading="lazy"
                      alt=""
                      className="h-10 w-auto rounded-lg"
                    />
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                      {clients[i].client}
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

        <StackSection web={false} />
        <ContactBox />
      </main>

      <Footer />
    </div>
  );
}
