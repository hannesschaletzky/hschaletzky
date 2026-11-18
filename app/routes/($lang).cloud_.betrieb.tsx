import type { MetaFunction } from "react-router";
import ContactBox from "~/components/site/contactBox";
import FaqSection from "~/components/site/faqSection";
import FeaturePath from "~/components/site/featurePath";
import FeatureStrokes from "~/components/site/featureStrokes";
import FeatureTable from "~/components/site/featureTable";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import { pageMeta } from "~/components/site/pageMeta";
import PricingSection from "~/components/site/pricingSection";
import ProjectsSection from "~/components/site/projects";
import SectionHeading from "~/components/site/sectionHeading";
import Testimonials from "~/components/site/testimonials";
import { langFromParams, langLoader, localize, useLang } from "~/i18n";

export const loader = langLoader;

// offer page for operations and on-call, linked from the cloud services list
const text = {
  de: {
    title: "Betrieb & Rufbereitschaft für Cloud-Systeme | Hannes Schaletzky",
    description:
      "Ich betreue Ihr Cloud-System im laufenden Betrieb, auch wenn es jemand anderes gebaut hat. Monitoring, Updates und Hilfe bei Störungen, auf Wunsch mit Rufbereitschaft. Feste monatliche Pauschale nach einem kostenlosen Erstgespräch.",
    hero: {
      title: "Betrieb & Rufbereitschaft,",
      highlight: "damit es läuft.",
      cta: "Erstgespräch vereinbaren",
      text: "Ich behalte Ihr System im Blick und kümmere mich, wenn etwas hakt. Auf Wunsch auch nachts und am Wochenende.",
    },
    whatEyebrow: "Was ich betreue",
    whatHeading: "Egal, wer es gebaut hat.",
    what: [
      {
        title: "Selbst gebaut",
        text: "Was ich für Sie gebaut habe, betreue ich auf Wunsch auch danach weiter.",
      },
      {
        title: "Von anderen gebaut",
        text: "Ich arbeite mich in bestehende Systeme ein, auch wenn sie jemand anderes gebaut hat.",
      },
      {
        title: "Betreuer weg",
        text: "Der Entwickler oder Dienstleister ist nicht mehr da, und jemand muss sich kümmern.",
      },
      {
        title: "Unterstützung fürs Team",
        text: "Ich unterstütze Ihr eigenes Team, etwa als Vertretung oder in der Rufbereitschaft.",
      },
    ],
    tasksEyebrow: "Mögliche Aufgaben",
    tasksHeading: "Was dazugehören kann.",
    tasksIntro:
      "Was genau dazugehört, vereinbaren wir gemeinsam. Mögliche Aufgaben sind:",
    tasks: [
      {
        title: "Monitoring & Alarme",
        text: "Ihr System wird überwacht, damit Probleme früh auffallen.",
      },
      {
        title: "Updates & Patches",
        text: "Betriebssystem, Abhängigkeiten und Dienste bleiben aktuell.",
      },
      {
        title: "Störungen beheben",
        text: "Wenn etwas hakt, kümmere ich mich um die Ursache.",
      },
      {
        title: "Rufbereitschaft",
        text: "Auf Wunsch auch nachts und am Wochenende erreichbar.",
      },
      {
        title: "Backups im Blick",
        text: "Ich prüfe, ob Backups laufen und sich einspielen lassen.",
      },
      {
        title: "Kleine Anpassungen",
        text: "Kleinere Änderungen und Erweiterungen im laufenden Betrieb.",
      },
      {
        title: "Kosten im Blick",
        text: "Ich beobachte die laufenden Cloud-Kosten und melde Auffälligkeiten.",
      },
      {
        title: "Doku aktuell halten",
        text: "Änderungen werden dokumentiert und bleiben nachvollziehbar.",
      },
    ],
    stepsEyebrow: "Ablauf",
    stepsHeading: "Vom Erstgespräch zum laufenden Betrieb.",
    steps: [
      {
        title: "Erstgespräch",
        text: "Wir besprechen Ihr System und was Ihnen im Betrieb wichtig ist.",
      },
      {
        title: "Einarbeitung",
        text: "Ich verschaffe mir einen Überblick über System, Zugänge und Doku.",
      },
      {
        title: "Übergabe",
        text: "Zugänge, Alarme und Zuständigkeiten gehen geordnet an mich über.",
      },
      {
        title: "Laufender Betrieb",
        text: "Ich kümmere mich wie vereinbart und halte Sie auf dem Laufenden.",
      },
    ],
    pricingEyebrow: "Preis",
    pricingHeading:
      "Feste monatliche Pauschale nach dem kostenlosen Erstgespräch.",
    featuresLabel: "Enthalten",
    packages: [
      {
        name: "Betrieb & Rufbereitschaft",
        description:
          "Im Erstgespräch legen wir fest, was dazugehört. Danach bekommen Sie eine feste monatliche Pauschale.",
        features: [
          "Gemeinsam festgelegte Aufgaben",
          "Ein fester Ansprechpartner",
          "Rufbereitschaft auf Wunsch",
          "Vertraulich, auf Wunsch mit NDA",
        ],
        cta: { label: "Erstgespräch vereinbaren", href: "/contact" },
      },
    ],
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question: "Wie schnell reagieren Sie bei Störungen?",
        answer:
          "Das vereinbaren wir gemeinsam, je nachdem, wie kritisch Ihr System ist und ob Sie Rufbereitschaft brauchen.",
      },
      {
        question: "Was, wenn das System schlecht dokumentiert ist?",
        answer:
          "Dann arbeite ich mich ein und halte fest, was ich dabei lerne. Wie lange das dauert, hängt vom System ab.",
      },
      {
        question: "Ist der Betrieb kündbar?",
        answer: "Ja. Laufzeit und Kündigungsfrist vereinbaren wir gemeinsam.",
      },
      {
        question: "Arbeiten Sie mit unserem Team zusammen?",
        answer:
          "Gerne. Ich kann den Betrieb ganz übernehmen oder Ihr Team unterstützen, zum Beispiel als Vertretung.",
      },
    ],
    more: "Alle Leistungen im Überblick",
  },
  en: {
    title: "Operations & on-call for cloud systems | Hannes Schaletzky",
    description:
      "I look after your cloud system in production, even if someone else built it. Monitoring, updates and help with incidents, with on-call support if you like. A fixed monthly fee after a free intro call.",
    hero: {
      title: "Operations & on-call,",
      highlight: "so it keeps running.",
      cta: "Book an intro call",
      text: "I keep an eye on your system and take care of it when something gets stuck. At night and on weekends too, if you like.",
    },
    whatEyebrow: "What I look after",
    whatHeading: "No matter who built it.",
    what: [
      {
        title: "Built by me",
        text: "What I built for you, I can keep looking after afterwards.",
      },
      {
        title: "Built by others",
        text: "I get to know existing systems, even if someone else built them.",
      },
      {
        title: "Maintainer gone",
        text: "The developer or service provider is no longer around, and someone has to take care of it.",
      },
      {
        title: "Support for your team",
        text: "I support your own team, for example as a stand-in or on call.",
      },
    ],
    tasksEyebrow: "Possible tasks",
    tasksHeading: "What can be part of it.",
    tasksIntro:
      "We agree together on what exactly is included. Possible tasks are:",
    tasks: [
      {
        title: "Monitoring & alerts",
        text: "Your system is monitored, so problems show up early.",
      },
      {
        title: "Updates & patches",
        text: "Operating system, dependencies and services stay up to date.",
      },
      {
        title: "Fixing incidents",
        text: "When something gets stuck, I look into the cause.",
      },
      {
        title: "On-call",
        text: "Reachable at night and on weekends too, if you like.",
      },
      {
        title: "Backups in view",
        text: "I check that backups run and can be restored.",
      },
      {
        title: "Small changes",
        text: "Smaller changes and extensions during operations.",
      },
      {
        title: "Costs in view",
        text: "I watch the running cloud costs and report anything unusual.",
      },
      {
        title: "Keeping docs current",
        text: "Changes are documented and stay traceable.",
      },
    ],
    stepsEyebrow: "Process",
    stepsHeading: "From intro call to running operations.",
    steps: [
      {
        title: "Intro call",
        text: "We talk about your system and what matters to you in operations.",
      },
      {
        title: "Getting to know it",
        text: "I get an overview of the system, access and docs.",
      },
      {
        title: "Handover",
        text: "Access, alerts and responsibilities move over to me in an orderly way.",
      },
      {
        title: "Running operations",
        text: "I take care of things as agreed and keep you posted.",
      },
    ],
    pricingEyebrow: "Price",
    pricingHeading: "A fixed monthly fee after the free intro call.",
    featuresLabel: "Included",
    packages: [
      {
        name: "Operations & on-call",
        description:
          "In the intro call we agree on what's included. After that you get a fixed monthly fee.",
        features: [
          "Jointly agreed tasks",
          "One fixed contact person",
          "On-call if you like",
          "Confidential, with an NDA if you like",
        ],
        cta: { label: "Book an intro call", href: "/contact" },
      },
    ],
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "How fast do you respond to incidents?",
        answer:
          "We agree on that together, depending on how critical your system is and whether you need on-call support.",
      },
      {
        question: "What if the system is poorly documented?",
        answer:
          "Then I get to know it and write down what I learn along the way. How long that takes depends on the system.",
      },
      {
        question: "Can operations be cancelled?",
        answer: "Yes. We agree on the term and notice period together.",
      },
      {
        question: "Do you work with our team?",
        answer:
          "Happily. I can take over operations completely or support your team, for example as a stand-in.",
      },
    ],
    more: "All services at a glance",
  },
};

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return pageMeta({
    title: text[lang].title,
    description: text[lang].description,
    path: "/cloud/betrieb",
    image: "cloud-betrieb",
    lang,
  });
};

export default function Betrieb() {
  const lang = useLang();
  const t = text[lang];
  const packages = t.packages.map((pkg) => ({
    ...pkg,
    cta: { ...pkg.cta, href: localize(pkg.cta.href, lang) },
  }));

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

        {/* what I look after */}
        <section className="bg-navy-lighter">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.whatEyebrow}>
              {t.whatHeading}
            </SectionHeading>
            <FeatureTable items={t.what} />
          </div>
        </section>

        {/* possible tasks, agreed together */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.tasksEyebrow}>
              {t.tasksHeading}
            </SectionHeading>
            <p className="-mt-4 mb-12 max-w-2xl text-lg leading-relaxed">
              {t.tasksIntro}
            </p>
            <FeatureStrokes items={t.tasks} columns={4} />
          </div>
        </section>

        {/* proof: the integration platform I still look after */}
        <ProjectsSection
          ids={["platform", "bridge"]}
          className="bg-navy-lighter"
        />
        <Testimonials only="Tien Hào Vu" />

        {/* process */}
        <section className="bg-navy-light">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.stepsEyebrow}>
              {t.stepsHeading}
            </SectionHeading>
            <FeaturePath items={t.steps} circleBg="bg-navy-light" />
          </div>
        </section>

        <PricingSection
          eyebrow={t.pricingEyebrow}
          heading={t.pricingHeading}
          packages={packages}
          featuresLabel={t.featuresLabel}
          more={{
            label: t.more,
            href: `${localize("/cloud", lang)}#leistungen`,
          }}
        />

        <FaqSection
          heading={t.faqHeading}
          faqs={t.faqs}
          className="bg-navy-lighter"
        />

        <ContactBox above="--color-navy-lighter" />
      </main>

      <Footer />
    </div>
  );
}
