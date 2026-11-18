import type { MetaFunction } from "react-router";
import ContactBox from "~/components/site/contactBox";
import FaqSection from "~/components/site/faqSection";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import { ProjectCards } from "~/components/site/projects";
import PageHero from "~/components/site/pageHero";
import { pageMeta } from "~/components/site/pageMeta";
import SectionHeading from "~/components/site/sectionHeading";
import StackSection from "~/components/site/stackSection";
import Testimonials from "~/components/site/testimonials";
import { langFromParams, langLoader, localize, useLang } from "~/i18n";

export const loader = langLoader;

// an entry with href links to its own page
type Area = {
  title: string;
  items: { title: string; text: string; href?: string }[];
};

const text = {
  de: {
    title: "Cloud & Integrationen für Unternehmen | Hannes Schaletzky",
    description:
      "Freiberuflicher Integration & Cloud Engineer aus Berlin: ITSM-, MDM- und Microsoft-Integrationen (Xurrent, Intune, ACMP, Entra) mit Node.js/TypeScript und AWS. Remote oder vor Ort im DACH-Raum.",
    hero: {
      title: "Cloud & Integrationen,",
      highlight: "verlässlich im Betrieb.",
      cta: "Über Ihr Projekt sprechen",
      text: "Freiberuflicher Integration & Cloud Engineer aus Berlin. Remote oder vor Ort im DACH-Raum. Für Software-Anbieter, IT-Teams und Start-ups.",
    },
    servicesEyebrow: "Leistungen",
    servicesHeading: "Von der Planung bis zum Betrieb.",
    services: [
      {
        title: "Consulting",
        items: [
          {
            title: "Architektur-Review",
            text: "Ich schaue mir Ihr System, Ihre Infrastruktur oder Ihre Pläne an und zeige Ihnen, wo Sie stehen und was die sinnvollen nächsten Schritte sind.",
            href: "/cloud/architektur-review",
          },
          {
            title: "Beratung auf Abruf",
            text: "Sie haben Fragen zu Architektur, Cloud oder Tools? Ich bin Ihr Ansprechpartner, wenn Sie Unterstützung brauchen, ohne gleich ein Projekt daraus zu machen.",
          },
        ],
      },
      {
        title: "Engineering",
        items: [
          {
            title: "Systemintegration",
            text: "Ich verbinde Ihre Systeme und Tools, etwa ITSM, MDM oder Identity, damit Daten automatisch dort ankommen, wo sie gebraucht werden.",
            href: "/cloud/systemintegration",
          },
          {
            title: "Cloud & On-Prem verbinden",
            text: "Ich verbinde Cloud-Dienste sicher mit Systemen im eigenen Rechenzentrum oder bei Ihren Kunden, auch über Netzwerkgrenzen hinweg.",
          },
          {
            title: "Migration nach AWS",
            text: "Ich ziehe Ihre Anwendung nach AWS um, geplant und Schritt für Schritt, damit Ihr Betrieb weiterläuft und Sie danach eine saubere Umgebung haben.",
            href: "/cloud/aws-migration",
          },
          {
            title: "Abläufe automatisieren",
            text: "Aufgaben, die heute von Hand erledigt werden, laufen automatisch und nachvollziehbar, ob im Ticketsystem, in Microsoft 365 oder anderswo.",
          },
        ],
      },
      {
        title: "Betrieb",
        items: [
          {
            title: "Betrieb & Rufbereitschaft",
            text: "Ich betreue Ihr System, behalte es im Blick und kümmere mich bei Störungen, auf Wunsch auch nachts und am Wochenende.",
            href: "/cloud/betrieb",
          },
          {
            title: "Übernahme bestehender Systeme",
            text: "Ich arbeite mich in Ihr bestehendes System ein und kümmere mich danach darum, auch wenn es jemand anderes gebaut hat.",
          },
        ],
      },
    ] as Area[],
    waysEyebrow: "Zusammenarbeit",
    waysHeading: "So, wie es zu Ihnen passt.",
    ways: [
      {
        title: "Projekt",
        text: "Für klar umrissene Vorhaben wie eine Integration oder eine Migration. Nach dem Erstgespräch steht der Festpreis für die Umsetzung.",
        billing: "Festpreis",
        note: "nach kostenlosem Erstgespräch",
      },
      {
        title: "Auf Abruf",
        text: "Für Fragen und kleinere Aufgaben. Sie melden sich, wenn Sie mich brauchen, abgerechnet wird nach Stunden.",
        billing: "Stundenbasis",
        note: "nach tatsächlichem Aufwand",
      },
      {
        title: "Monatlich",
        text: "Ich betreue Ihr System, mit Monitoring und auf Wunsch mit Rufbereitschaft. Planbar für Sie, jeden Monat gleich.",
        billing: "Pauschale",
        note: "pro Monat",
      },
    ],
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question: "Arbeiten Sie remote oder vor Ort?",
        answer:
          "Meist remote. Für den Start, Workshops oder wichtige Termine komme ich gern vorbei, in Berlin und im ganzen DACH-Raum.",
      },
      {
        question: "Arbeiten Sie mit unserem eigenen Team zusammen?",
        answer:
          "Ja, gern. Ich arbeite mich in Ihre Abläufe und Tools ein, entwickle gemeinsam mit Ihrem Team und übergebe so, dass es ohne mich weiterarbeiten kann.",
      },
      {
        question: "Unterschreiben Sie eine Vertraulichkeitsvereinbarung?",
        answer:
          "Ja. Wenn Sie mir vor dem ersten Gespräch Details zu Ihren Systemen zeigen möchten, unterschreibe ich vorab gern ein NDA.",
      },
      {
        question: "Wie schnell können Sie starten?",
        answer:
          "Das hängt von meiner aktuellen Auslastung ab. Im Erstgespräch sage ich Ihnen ehrlich, ab wann ich Zeit habe.",
      },
    ],
    workEyebrow: "Ausgewählte Projekte",
    workHeading: "Gebaut für den Produktivbetrieb.",
  },
  en: {
    title: "Integration & Cloud Engineer | Hannes Schaletzky",
    description:
      "Freelance integration & cloud engineer from Berlin: ITSM, MDM and Microsoft integrations (Xurrent, Intune, ACMP, Entra) with Node.js/TypeScript and AWS. Remote or on-site across Germany, Austria and Switzerland.",
    hero: {
      title: "Cloud & integrations,",
      highlight: "reliable in production.",
      cta: "Talk about your project",
      text: "Freelance integration & cloud engineer from Berlin. Remote or on-site across Germany, Austria and Switzerland. For software vendors, IT teams and start-ups.",
    },
    servicesEyebrow: "Services",
    servicesHeading: "From planning to operations.",
    services: [
      {
        title: "Consulting",
        items: [
          {
            title: "Architecture review",
            text: "I look at your system, your infrastructure or your plans and show you where you stand and which next steps make sense.",
            href: "/cloud/architektur-review",
          },
          {
            title: "Consulting on call",
            text: "Questions about architecture, cloud or tools? I'm there when you need support, without turning it into a project right away.",
          },
        ],
      },
      {
        title: "Engineering",
        items: [
          {
            title: "System integration",
            text: "I connect your systems and tools, such as ITSM, MDM or identity, so data arrives automatically where it's needed.",
            href: "/cloud/systemintegration",
          },
          {
            title: "Connecting cloud & on-prem",
            text: "I connect cloud services securely with systems in your own data centre or at your customers, even across network boundaries.",
          },
          {
            title: "Migration to AWS",
            text: "I move your application to AWS, planned and step by step, so your business keeps running and you end up with a clean environment.",
            href: "/cloud/aws-migration",
          },
          {
            title: "Automating workflows",
            text: "Tasks that are done by hand today run automatically and traceably, whether in your ticket system, in Microsoft 365 or elsewhere.",
          },
        ],
      },
      {
        title: "Operations",
        items: [
          {
            title: "Operations & on-call",
            text: "I look after your system, keep an eye on it and take care of incidents, also at night and on weekends if you need it.",
            href: "/cloud/betrieb",
          },
          {
            title: "Taking over existing systems",
            text: "I get to know your existing system and look after it from then on, even if someone else built it.",
          },
        ],
      },
    ] as Area[],
    waysEyebrow: "Working together",
    waysHeading: "Whatever suits you best.",
    ways: [
      {
        title: "Project",
        text: "For clearly defined work such as an integration or a migration. After the intro call, the fixed price for the implementation is set.",
        billing: "Fixed price",
        note: "after a free intro call",
      },
      {
        title: "On call",
        text: "For questions and smaller tasks. You get in touch when you need me, and I bill by the hour.",
        billing: "Hourly",
        note: "based on actual effort",
      },
      {
        title: "Monthly",
        text: "I look after your system, with monitoring and on-call support if you need it. Predictable for you, the same every month.",
        billing: "Flat fee",
        note: "per month",
      },
    ],
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "Do you work remotely or on-site?",
        answer:
          "Mostly remotely. For the start, workshops or important meetings I'm happy to come by, in Berlin and across Germany, Austria and Switzerland.",
      },
      {
        question: "Do you work together with our own team?",
        answer:
          "Yes, happily. I get to know your processes and tools, build together with your team and hand over so it can carry on without me.",
      },
      {
        question: "Will you sign a non-disclosure agreement?",
        answer:
          "Yes. If you'd like to show me details of your systems before our first call, I'm happy to sign an NDA beforehand.",
      },
      {
        question: "How soon can you start?",
        answer:
          "That depends on my current workload. In the first call I'll tell you honestly when I have time.",
      },
    ],
    workEyebrow: "Selected work",
    workHeading: "Built for production.",
  },
};

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
        <Testimonials className="bg-navy-lighter" centered />

        {/* services: like the stack page, area left, what it covers right;
            entries with a page of their own link there; the subpages jump back here */}
        <section id="leistungen" className="scroll-mt-16">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.servicesEyebrow}>
              {t.servicesHeading}
            </SectionHeading>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {t.services.map((area) => (
                <div
                  key={area.title}
                  className="grid gap-6 py-10 md:grid-cols-[1fr_2fr] md:gap-12"
                >
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {area.title}
                  </h3>
                  <ul className="grid content-start gap-6">
                    {area.items.map((item) => {
                      const body = (
                        <>
                          <p className="text-lg font-semibold text-white group-hover:text-teal-light">
                            {item.title}{" "}
                            {item.href && (
                              <span
                                aria-hidden="true"
                                className="inline-block text-teal transition-transform group-hover:translate-x-1"
                              >
                                →
                              </span>
                            )}
                          </p>
                          <p className="mt-1 text-slate-400">{item.text}</p>
                        </>
                      );
                      // the line is teal only where a page with more follows
                      return (
                        <li key={item.title}>
                          {item.href ? (
                            <a
                              href={localize(item.href, lang)}
                              className="group block border-l-2 border-teal pl-5"
                            >
                              {body}
                            </a>
                          ) : (
                            <div className="border-l-2 border-white/15 pl-5">
                              {body}
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ways of working together: what is billed how; no amounts, prices follow the intro call */}
        <section className="bg-navy-lighter">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.waysEyebrow}>
              {t.waysHeading}
            </SectionHeading>
            <div className="grid gap-6 md:grid-cols-3">
              {t.ways.map((way) => (
                <article
                  key={way.title}
                  className="flex flex-col rounded-3xl border border-white/10 bg-navy-light p-8"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                    {way.title}
                  </h3>
                  <p className="mt-4 flex-1 leading-relaxed">{way.text}</p>
                  <div className="mt-8 border-t border-white/10 pt-5">
                    <p className="text-3xl font-bold text-white">
                      {way.billing}
                    </p>
                    <p className="mt-1 text-sm">{way.note}</p>
                  </div>
                </article>
              ))}
            </div>
            <a
              href={localize("/contact", lang)}
              className="mt-10 inline-block rounded-full bg-teal px-6 py-3 font-semibold text-navy transition hover:bg-teal-light"
            >
              {t.hero.cta}
            </a>
          </div>
        </section>

        {/* selected work */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.workEyebrow}>
              {t.workHeading}
            </SectionHeading>
            <ProjectCards
              ids={["platform", "bridge", "vorsorge", "bundesident"]}
            />
          </div>
        </section>

        {/* own background, so it doesn't run into the project cards */}
        <StackSection className="bg-navy-lighter" />
        <FaqSection heading={t.faqHeading} faqs={t.faqs} />
        <ContactBox />
      </main>

      <Footer />
    </div>
  );
}
