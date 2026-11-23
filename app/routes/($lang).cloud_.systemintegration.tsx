import type { MetaFunction } from "react-router";
import OfferPage from "~/components/site/offerPage";
import Section from "~/components/site/section";
import ClimbSteps from "~/components/site/climbSteps";
import FeatureNumbers from "~/components/site/featureNumbers";
import FeatureTable from "~/components/site/featureTable";
import { pageMeta } from "~/components/site/pageMeta";
import PricingSection from "~/components/site/pricingSection";
import ProjectsSection from "~/components/site/projects";
import Testimonials from "~/components/site/testimonials";
import { langFromParams, langLoader, localize, useLang } from "~/i18n";

export const loader = langLoader;

// offer page for system integration, linked from the cloud services list
const text = {
  de: {
    title: "Systemintegration: ITSM, MDM & Microsoft | Hannes Schaletzky",
    description:
      "Ich verbinde ITSM, MDM und Microsoft-Umgebungen wie Xurrent, Intune und Entra ID, auch hinter der Firewall. Festpreis nach kostenlosem Erstgespräch.",
    hero: {
      title: "Systemintegration,",
      highlight: "Daten fließen von selbst.",
      cta: "Erstgespräch vereinbaren",
      text: "Ich verbinde ITSM, MDM und Microsoft-Umgebungen, damit Daten automatisch dort ankommen, wo sie gebraucht werden. Auch mit Systemen hinter der Firewall.",
    },
    systemsEyebrow: "Was ich verbinde",
    systemsHeading: "Systeme, die ich kenne.",
    systems: [
      {
        title: "ITSM",
        text: "Xurrent als zentrale Stelle für Tickets, Assets und Abläufe.",
      },
      {
        title: "MDM",
        text: "Intune, ACMP und Mobivisor: Geräte und ihr Zustand, automatisch abgeglichen.",
      },
      {
        title: "Identity & Microsoft",
        text: "Entra ID und Exchange: Benutzer, Gruppen und Postfächer, gesteuert aus Ihren Abläufen.",
      },
      {
        title: "On-Prem",
        text: "Systeme im Netzwerk Ihrer Kunden, sicher erreicht über einen Jump-Server und Queues.",
      },
    ],
    tasksEyebrow: "Mögliche Aufgaben",
    tasksHeading: "Was dazugehören kann.",
    tasksIntro:
      "Was genau ich umsetze, vereinbaren wir gemeinsam. Typische Aufgaben sind:",
    tasks: [
      {
        title: "Geräte als Assets",
        text: "Geräte aus dem MDM landen automatisch und aktuell als Assets im Ticketsystem.",
      },
      {
        title: "Benutzer per Ticket",
        text: "Ein Ticket legt Benutzer in Entra an, ändert Gruppen oder sperrt den Zugang.",
      },
      {
        title: "Postfächer einrichten",
        text: "Postfächer und Berechtigungen in Exchange entstehen auf Knopfdruck statt von Hand.",
      },
      {
        title: "Offboarding",
        text: "Ein Ticket sperrt alle Zugänge, entzieht Lizenzen und setzt das Gerät zurück.",
      },
      {
        title: "Software-Inventar",
        text: "Installierte Software aus dem MDM landet automatisch beim passenden Asset.",
      },
      {
        title: "Gruppen & Verteiler",
        text: "Mitgliedschaften in Gruppen und Verteilerlisten werden per Ticket gepflegt.",
      },
    ],
    stepsEyebrow: "Ablauf",
    stepsHeading: "Vom Erstgespräch zur Übergabe.",
    steps: [
      {
        title: "Erstgespräch",
        text: "Wir klären Systeme, Schnittstellen und Datenflüsse.",
      },
      {
        title: "Festpreis",
        text: "Sie bekommen ein Angebot mit festem Preis für die Umsetzung.",
      },
      {
        title: "Umsetzung",
        text: "Ich baue die Integration wie vereinbart.",
      },
      {
        title: "Übergabe",
        text: "Mit Doku an Ihr Team, oder ich übernehme den Betrieb.",
      },
    ],
    pricingEyebrow: "Preis",
    pricingHeading: "Fester Preis nach dem kostenlosen Erstgespräch.",
    featuresLabel: "Enthalten",
    packages: [
      {
        name: "Systemintegration",
        description:
          "Im Erstgespräch klären wir, was verbunden werden soll. Danach bekommen Sie einen festen Preis, bevor es losgeht.",
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
        question: "Was, wenn ein System keine API hat?",
        answer:
          "Dann suchen wir andere Wege, etwa Exporte, Datenbankzugriffe oder Skripte direkt im Netzwerk. Im Erstgespräch klären wir, was möglich ist.",
      },
      {
        question: "Wer betreibt die Integration danach?",
        answer:
          "Entweder Ihr Team nach einer Übergabe mit Doku, oder ich übernehme den Betrieb, auf Wunsch mit Rufbereitschaft.",
      },
      {
        question: "Was kostet eine Integration?",
        answer:
          "Das hängt von den Systemen und Abläufen ab. Nach einem kostenlosen Erstgespräch bekommen Sie einen festen Preis für die Umsetzung.",
      },
    ],
    more: "Alle Leistungen im Überblick",
  },
  en: {
    title: "System integration: ITSM, MDM & Microsoft | Hannes Schaletzky",
    description:
      "I connect ITSM, MDM and Microsoft environments such as Xurrent, Intune and Entra ID, including behind the firewall. Fixed price after a free intro call.",
    hero: {
      title: "System integration,",
      highlight: "data flows by itself.",
      cta: "Book an intro call",
      text: "I connect ITSM, MDM and Microsoft environments so data arrives automatically where it's needed. Including systems behind the firewall.",
    },
    systemsEyebrow: "What I connect",
    systemsHeading: "Systems I know.",
    systems: [
      {
        title: "ITSM",
        text: "Xurrent as the central place for tickets, assets and workflows.",
      },
      {
        title: "MDM",
        text: "Intune, ACMP and Mobivisor: devices and their state, synced automatically.",
      },
      {
        title: "Identity & Microsoft",
        text: "Entra ID and Exchange: users, groups and mailboxes, driven by your workflows.",
      },
      {
        title: "On-prem",
        text: "Systems in your customers' networks, reached securely via a jump server and queues.",
      },
    ],
    tasksEyebrow: "Possible tasks",
    tasksHeading: "What can be part of it.",
    tasksIntro: "We agree together on what exactly I build. Typical tasks are:",
    tasks: [
      {
        title: "Devices as assets",
        text: "Devices from the MDM show up automatically and up to date as assets in the ticket system.",
      },
      {
        title: "Users by ticket",
        text: "A ticket creates users in Entra, changes groups or blocks access.",
      },
      {
        title: "Setting up mailboxes",
        text: "Mailboxes and permissions in Exchange are created at the push of a button instead of by hand.",
      },
      {
        title: "Offboarding",
        text: "A ticket blocks all access, removes licences and resets the device.",
      },
      {
        title: "Software inventory",
        text: "Installed software from the MDM shows up automatically on the matching asset.",
      },
      {
        title: "Groups & distribution lists",
        text: "Memberships in groups and distribution lists are maintained by ticket.",
      },
    ],
    stepsEyebrow: "Process",
    stepsHeading: "From intro call to handover.",
    steps: [
      {
        title: "Intro call",
        text: "We clarify systems, interfaces and data flows.",
      },
      {
        title: "Fixed price",
        text: "You get an offer with a fixed price for the implementation.",
      },
      {
        title: "Build",
        text: "I build the integration as agreed.",
      },
      {
        title: "Handover",
        text: "With docs to your team, or I take over operations.",
      },
    ],
    pricingEyebrow: "Price",
    pricingHeading: "A fixed price after the free intro call.",
    featuresLabel: "Included",
    packages: [
      {
        name: "System integration",
        description:
          "In the intro call we clarify what should be connected. After that you get a fixed price before anything starts.",
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
        question: "What if a system has no API?",
        answer:
          "Then we look for other ways, such as exports, database access or scripts right inside the network. In the intro call we clarify what's possible.",
      },
      {
        question: "Who runs the integration afterwards?",
        answer:
          "Either your team after a handover with docs, or I take over operations, with on-call support if you need it.",
      },
      {
        question: "What does an integration cost?",
        answer:
          "That depends on the systems and workflows. After a free intro call you get a fixed price for the implementation.",
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
    path: "/cloud/systemintegration",
    image: "cloud-systemintegration",
    lang,
  });
};

export default function Systemintegration() {
  const lang = useLang();
  const t = text[lang];

  return (
    <OfferPage
      area="cloud"
      current="/cloud/systemintegration"
      hero={t.hero}
      faq={{ heading: t.faqHeading, faqs: t.faqs }}
    >
      {/* systems */}
      <Section
        eyebrow={t.systemsEyebrow}
        heading={t.systemsHeading}
        className="bg-navy-lighter"
      >
        <FeatureTable items={t.systems} />
      </Section>

      {/* typical tasks */}
      <Section
        eyebrow={t.tasksEyebrow}
        heading={t.tasksHeading}
        intro={t.tasksIntro}
      >
        <FeatureNumbers items={t.tasks} />
      </Section>

      {/* proof: the platform this is all based on */}
      <ProjectsSection
        ids={["platform", "bridge"]}
        className="bg-navy-lighter"
      />
      <Testimonials only="Tien Hào Vu" />

      {/* process */}
      <Section
        eyebrow={t.stepsEyebrow}
        heading={t.stepsHeading}
        className="bg-navy-light"
      >
        <ClimbSteps steps={t.steps} />
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
