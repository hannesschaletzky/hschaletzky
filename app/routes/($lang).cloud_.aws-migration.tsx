import type { MetaFunction } from "react-router";
import OfferPage from "~/components/site/offerPage";
import Section from "~/components/site/section";
import FeatureHeadlines from "~/components/site/featureHeadlines";
import FeaturePath from "~/components/site/featurePath";
import FeatureChecks from "~/components/site/featureChecks";
import { pageMeta } from "~/components/site/pageMeta";
import PricingSection from "~/components/site/pricingSection";
import ProjectsSection from "~/components/site/projects";
import Testimonials from "~/components/site/testimonials";
import { langFromParams, langLoader, localize, useLang } from "~/i18n";

export const loader = langLoader;

// offer page for moving to AWS, linked from the cloud services list
const text = {
  de: {
    title: "Migration nach AWS: von Vercel & On-Prem | Hannes Schaletzky",
    description:
      "Ich ziehe Ihre Anwendung von Vercel, Heroku, einem eigenen Server oder On-Prem nach AWS um, mit Terraform/OpenTofu. Festpreis nach kostenlosem Erstgespräch.",
    hero: {
      title: "Migration",
      highlight: "nach AWS.",
      cta: "Erstgespräch vereinbaren",
      text: "Ich ziehe Ihre Anwendung in eine eigene AWS-Umgebung um, die als Code beschrieben, getrennt nach Test und Produktion und überwacht ist. Geplant, damit Ihre Nutzer vom Umzug möglichst wenig merken.",
    },
    fromEyebrow: "Ausgangslagen",
    fromHeading: "Woher Sie kommen.",
    from: [
      {
        title: "Hosting-Plattformen",
        text: "Vercel, Netlify oder Heroku: bequem zum Start. Mit dem Wachstum kommt oft der Wunsch nach mehr Kontrolle.",
      },
      {
        title: "Eigener Server",
        text: "Ein einzelner Server oder VPS, von Hand gepflegt. Fällt er aus, steht alles.",
      },
      {
        title: "On-Prem",
        text: "Anwendungen im eigenen Rechenzentrum, die in die Cloud sollen, ganz oder Stück für Stück.",
      },
      {
        title: "Andere Cloud",
        text: "Von Azure, Google Cloud oder einem anderen Anbieter zu AWS.",
      },
    ],
    includedEyebrow: "Mögliche Bausteine",
    includedHeading: "Was dazugehören kann.",
    includedIntro:
      "Was genau dazugehört, vereinbaren wir gemeinsam. Mögliche Bausteine sind:",
    included: [
      {
        title: "Infrastruktur als Code",
        text: "Die Umgebung steht als Code in Terraform oder OpenTofu, nachvollziehbar und wiederholbar.",
      },
      {
        title: "Staging & Produktion",
        text: "Getrennte Umgebungen, damit Änderungen erst getestet werden, bevor sie live gehen.",
      },
      {
        title: "Datenbank umziehen",
        text: "Ihre Daten ziehen vollständig mit um, vorher geprobt und danach abgeglichen.",
      },
      {
        title: "Planbare Umstellung",
        text: "Auf Wunsch läuft die neue Umgebung erst parallel, umgeschaltet wird, wenn alles passt.",
      },
      {
        title: "Monitoring & Alarme",
        text: "Fehler und Engpässe fallen früh auf, oft bevor Nutzer sie bemerken.",
      },
      {
        title: "Zugriffe & Rollen",
        text: "Jeder bekommt nur die Rechte, die er braucht, sauber geregelt über IAM.",
      },
    ],
    stepsEyebrow: "Ablauf",
    stepsHeading: "Vom Erstgespräch zur Übergabe.",
    steps: [
      {
        title: "Bestandsaufnahme",
        text: "Im Erstgespräch schauen wir uns Ihre Anwendung, Daten und Abhängigkeiten an.",
      },
      {
        title: "Plan & Festpreis",
        text: "Sie bekommen einen Plan für den Umzug und einen festen Preis für die Umsetzung.",
      },
      {
        title: "Umzug",
        text: "Ich baue die neue Umgebung auf, teste sie und schalte zum vereinbarten Zeitpunkt um.",
      },
      {
        title: "Übergabe oder Betrieb",
        text: "Mit Doku an Ihr Team, oder ich übernehme den Betrieb.",
      },
    ],
    pricingEyebrow: "Preis",
    pricingHeading: "Fester Preis nach dem kostenlosen Erstgespräch.",
    featuresLabel: "Enthalten",
    packages: [
      {
        name: "Migration nach AWS",
        description:
          "Im Erstgespräch klären wir, woher Sie kommen und was dazugehören soll. Danach bekommen Sie einen festen Preis, bevor es losgeht.",
        features: [
          "Gemeinsam festgelegter Umfang",
          "Fester Preis vor dem Start",
          "Übergabe an Ihr Team oder Betrieb durch mich",
          "Vertraulich, auf Wunsch mit NDA",
        ],
        cta: { label: "Erstgespräch vereinbaren", href: "/contact" },
      },
    ],
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question: "Gibt es eine Ausfallzeit?",
        answer:
          "Meist kaum: Auf Wunsch läuft die neue Umgebung zuerst parallel, umgeschaltet wird zu einem abgestimmten Zeitpunkt. Ob es ganz ohne Unterbrechung geht, hängt vor allem von der Datenbank ab. Das klären wir im Erstgespräch.",
      },
      {
        question: "Was kostet AWS danach im Monat?",
        answer:
          "Das hängt von Last und Diensten ab. Vor dem Umzug schätze ich die laufenden Kosten ab, damit Sie vorher wissen, womit Sie rechnen.",
      },
      {
        question: "Sind wir dann an AWS gebunden?",
        answer:
          "Ein Stück weit, wie bei jedem Anbieter. Weil die Umgebung als Code beschrieben und dokumentiert ist, wäre ein späterer Wechsel aber kein Neuanfang.",
      },
      {
        question: "Wer betreibt die Umgebung danach?",
        answer:
          "Entweder Ihr Team nach einer Übergabe mit Doku, oder ich übernehme den Betrieb, auf Wunsch mit Rufbereitschaft.",
      },
    ],
    more: "Alle Leistungen im Überblick",
  },
  en: {
    title: "Migration to AWS: from Vercel & on-prem | Hannes Schaletzky",
    description:
      "I move your application from Vercel, Heroku, your own server or on-prem to AWS, with Terraform/OpenTofu. Fixed price after a free intro call.",
    hero: {
      title: "Migration",
      highlight: "to AWS.",
      cta: "Book an intro call",
      text: "I move your application into its own AWS environment, described as code, separated into testing and production, and monitored. Planned so your users notice as little of the move as possible.",
    },
    fromEyebrow: "Starting points",
    fromHeading: "Where you're coming from.",
    from: [
      {
        title: "Hosting platforms",
        text: "Vercel, Netlify or Heroku: convenient to start with. As you grow, you often want more control.",
      },
      {
        title: "Your own server",
        text: "A single server or VPS, looked after by hand. If it fails, everything stops.",
      },
      {
        title: "On-prem",
        text: "Applications in your own data centre that are meant to move to the cloud, all at once or step by step.",
      },
      {
        title: "Another cloud",
        text: "From Azure, Google Cloud or another provider to AWS.",
      },
    ],
    includedEyebrow: "Possible building blocks",
    includedHeading: "What can be part of it.",
    includedIntro:
      "We agree together on what exactly is included. Possible building blocks are:",
    included: [
      {
        title: "Infrastructure as code",
        text: "The environment is written as code in Terraform or OpenTofu, traceable and repeatable.",
      },
      {
        title: "Staging & production",
        text: "Separate environments, so changes are tested before they go live.",
      },
      {
        title: "Moving the database",
        text: "All your data moves along, rehearsed beforehand and checked afterwards.",
      },
      {
        title: "Planned switchover",
        text: "If you like, the new environment runs in parallel first, and we switch once everything works.",
      },
      {
        title: "Monitoring & alerts",
        text: "Errors and bottlenecks show up early, often before users notice them.",
      },
      {
        title: "Access & roles",
        text: "Everyone gets only the permissions they need, properly managed through IAM.",
      },
    ],
    stepsEyebrow: "Process",
    stepsHeading: "From intro call to handover.",
    steps: [
      {
        title: "Assessment",
        text: "In the intro call we look at your application, data and dependencies.",
      },
      {
        title: "Plan & fixed price",
        text: "You get a plan for the move and a fixed price for the implementation.",
      },
      {
        title: "Move",
        text: "I build the new environment, test it and switch over at the agreed time.",
      },
      {
        title: "Handover or operations",
        text: "With docs to your team, or I take over operations.",
      },
    ],
    pricingEyebrow: "Price",
    pricingHeading: "A fixed price after the free intro call.",
    featuresLabel: "Included",
    packages: [
      {
        name: "Migration to AWS",
        description:
          "In the intro call we clarify where you're coming from and what should be included. After that you get a fixed price before anything starts.",
        features: [
          "Jointly agreed scope",
          "Fixed price before the start",
          "Handover to your team or operations by me",
          "Confidential, with an NDA if you like",
        ],
        cta: { label: "Book an intro call", href: "/contact" },
      },
    ],
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "Will there be downtime?",
        answer:
          "Usually very little: if you like, the new environment runs in parallel first, and we switch over at an agreed time. Whether it works with no interruption at all depends mostly on the database. We clarify that in the intro call.",
      },
      {
        question: "What will AWS cost per month afterwards?",
        answer:
          "That depends on load and services. Before the move I estimate the running costs, so you know what to expect beforehand.",
      },
      {
        question: "Are we locked into AWS then?",
        answer:
          "To some extent, as with any provider. Because the environment is described as code and documented, a later move wouldn't mean starting from scratch.",
      },
      {
        question: "Who runs the environment afterwards?",
        answer:
          "Either your team after a handover with docs, or I take over operations, with on-call support if you need it.",
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
    path: "/cloud/aws-migration",
    image: "cloud-aws-migration",
    lang,
  });
};

export default function AwsMigration() {
  const lang = useLang();
  const t = text[lang];

  return (
    <OfferPage
      area="cloud"
      current="/cloud/aws-migration"
      hero={t.hero}
      faq={{ heading: t.faqHeading, faqs: t.faqs }}
    >
      {/* starting points */}
      <Section
        eyebrow={t.fromEyebrow}
        heading={t.fromHeading}
        className="bg-navy-lighter"
      >
        <FeatureHeadlines items={t.from} />
      </Section>

      {/* what's included */}
      <Section
        eyebrow={t.includedEyebrow}
        heading={t.includedHeading}
        intro={t.includedIntro}
      >
        <FeatureChecks items={t.included} />
      </Section>

      {/* proof: the Vercel to AWS move */}
      <ProjectsSection ids={["vorsorge"]} className="bg-navy-lighter" />
      <Testimonials only="Dr. Katharina Eller" />

      {/* process */}
      <Section
        eyebrow={t.stepsEyebrow}
        heading={t.stepsHeading}
        className="bg-navy-light"
      >
        <FeaturePath items={t.steps} />
      </Section>

      <PricingSection
        eyebrow={t.pricingEyebrow}
        heading={t.pricingHeading}
        packages={t.packages}
        featuresLabel={t.featuresLabel}
        more={{
          label: t.more,
          href: `${localize("/cloud", lang)}#leistungen`,
        }}
      />
    </OfferPage>
  );
}
