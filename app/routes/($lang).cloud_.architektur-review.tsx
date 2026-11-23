import type { MetaFunction } from "react-router";
import OfferPage from "~/components/site/offerPage";
import Section from "~/components/site/section";
import ClimbSteps from "~/components/site/climbSteps";
import FeatureStrokes from "~/components/site/featureStrokes";
import FeatureTable from "~/components/site/featureTable";
import { pageMeta } from "~/components/site/pageMeta";
import PricingSection from "~/components/site/pricingSection";
import { langFromParams, langLoader, localize, useLang } from "~/i18n";

export const loader = langLoader;

// offer page for an architecture review, linked from the cloud services list
const text = {
  de: {
    title: "Architektur-Review für Cloud & Code | Hannes Schaletzky",
    description:
      "Ich prüfe Ihr System, Ihre Infrastruktur oder Ihre Pläne vor Umbau, Migration oder Finanzierungsrunde. Mit Bericht und Besprechung, zum Festpreis.",
    hero: {
      title: "Architektur-Review,",
      highlight: "klarer Blick von außen.",
      cta: "Erstgespräch vereinbaren",
      text: "Ich schaue mir Ihr System, Ihre Infrastruktur oder Ihre Pläne an und zeige Ihnen, wo Sie stehen und was die sinnvollen nächsten Schritte sind.",
    },
    whenEyebrow: "Wann es sich lohnt",
    whenHeading: "Gute Anlässe für ein Review.",
    when: [
      {
        title: "Vor einem Umbau",
        text: "Bevor Sie umbauen oder migrieren, wissen Sie, worauf Sie aufbauen und was zuerst drankommen sollte.",
      },
      {
        title: "Wenn es wächst",
        text: "Das System wächst und wird langsamer, teurer oder schwerer zu ändern.",
      },
      {
        title: "Übernommenes System",
        text: "Sie haben ein System übernommen und wollen wissen, was da eigentlich läuft.",
      },
      {
        title: "Finanzierung & Due Diligence",
        text: "Vor einer Finanzierungsrunde oder einem Kauf braucht es eine ehrliche Einschätzung der Technik.",
      },
      {
        title: "Zweite Meinung",
        text: "Im Team gibt es unterschiedliche Meinungen, und eine neutrale Sicht von außen hilft bei der Entscheidung.",
      },
    ],
    focusEyebrow: "Mögliche Schwerpunkte",
    focusHeading: "Was wir uns anschauen können.",
    focusIntro:
      "Was genau ich mir anschaue, legen wir gemeinsam im Erstgespräch fest. Typische Schwerpunkte sind:",
    focus: [
      {
        title: "Architektur & Datenflüsse",
        text: "Wie die Teile zusammenhängen und wo Ihre Daten entlanglaufen.",
      },
      {
        title: "Infrastruktur & IaC",
        text: "Wie die Umgebung aufgebaut ist und ob sie als Code beschrieben ist.",
      },
      {
        title: "Sicherheit & Zugriffe",
        text: "Wer worauf zugreifen kann und wo es Lücken gibt.",
      },
      {
        title: "Kosten",
        text: "Wofür Sie bezahlen und wo sich sparen lässt.",
      },
      {
        title: "Betrieb & Monitoring",
        text: "Ob Fehler auffallen und wer reagiert, wenn etwas ausfällt.",
      },
      {
        title: "Deployment & CI/CD",
        text: "Wie Änderungen live gehen und wie sicher das abläuft.",
      },
      {
        title: "Skalierung & Ausfälle",
        text: "Was bei mehr Last passiert oder wenn ein Teil ausfällt.",
      },
      {
        title: "Code-Qualität & Tests",
        text: "Wie gut sich der Code ändern lässt und was Tests absichern.",
      },
    ],
    stepsEyebrow: "Ablauf",
    stepsHeading: "Von den Unterlagen zur Besprechung.",
    steps: [
      {
        title: "Unterlagen & Zugänge",
        text: "Sie geben mir Zugang zu dem, was wir uns gemeinsam anschauen wollen.",
      },
      {
        title: "Analyse",
        text: "Ich gehe die vereinbarten Schwerpunkte in Ruhe durch.",
      },
      {
        title: "Bericht",
        text: "Sie bekommen einen schriftlichen Bericht mit meinen Empfehlungen.",
      },
      {
        title: "Besprechung",
        text: "Wir gehen die Ergebnisse gemeinsam durch und klären die nächsten Schritte.",
      },
    ],
    pricingEyebrow: "Preis",
    pricingHeading: "Fester Preis nach dem kostenlosen Erstgespräch.",
    featuresLabel: "Enthalten",
    packages: [
      {
        name: "Architektur-Review",
        description:
          "Im Erstgespräch legen wir fest, was ich mir anschaue. Danach bekommen Sie einen festen Preis, bevor es losgeht.",
        features: [
          "Gemeinsam festgelegte Schwerpunkte",
          "Schriftlicher Bericht mit Empfehlungen",
          "Besprechung der Ergebnisse",
          "Vertraulich, auf Wunsch mit NDA",
        ],
        cta: { label: "Erstgespräch vereinbaren", href: "/contact" },
      },
    ],
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question: "Brauchen Sie Zugang zu unseren Systemen?",
        answer:
          "Das hängt von den Schwerpunkten ab. Was ich genau brauche, klären wir vorab im Erstgespräch.",
      },
      {
        question: "Unterschreiben Sie ein NDA?",
        answer: "Ja, auf Wunsch auch schon vor dem Erstgespräch.",
      },
      {
        question: "Setzen Sie die Empfehlungen auch um?",
        answer:
          "Gern, das muss aber nicht sein. Sie können die Empfehlungen auch selbst oder mit Ihrem Team angehen.",
      },
      {
        question: "Was, wenn alles gut ist?",
        answer:
          "Dann steht genau das im Bericht, und Sie haben es schwarz auf weiß. Auch das ist ein Ergebnis, etwa vor einer Finanzierungsrunde.",
      },
    ],
    more: "Alle Leistungen im Überblick",
  },
  en: {
    title: "Architecture review for cloud & code | Hannes Schaletzky",
    description:
      "I review your system, infrastructure or plans before a rebuild, a migration or a funding round. With a report and a call, at a fixed price.",
    hero: {
      title: "Architecture review,",
      highlight: "a clear view from outside.",
      cta: "Book an intro call",
      text: "I look at your system, your infrastructure or your plans and show you where you stand and what sensible next steps are.",
    },
    whenEyebrow: "When it pays off",
    whenHeading: "Good reasons for a review.",
    when: [
      {
        title: "Before a rebuild",
        text: "Before you rebuild or migrate, you know what you're building on and what should come first.",
      },
      {
        title: "When it grows",
        text: "The system grows and becomes slower, more expensive or harder to change.",
      },
      {
        title: "Inherited system",
        text: "You've taken over a system and want to know what's actually running.",
      },
      {
        title: "Funding & due diligence",
        text: "Before a funding round or an acquisition, you need an honest assessment of the technology.",
      },
      {
        title: "Second opinion",
        text: "Opinions in the team differ, and a neutral view from outside helps to decide.",
      },
    ],
    focusEyebrow: "Possible focus areas",
    focusHeading: "What we can look at.",
    focusIntro:
      "We decide together in the intro call what exactly I look at. Typical focus areas are:",
    focus: [
      {
        title: "Architecture & data flows",
        text: "How the parts fit together and where your data travels.",
      },
      {
        title: "Infrastructure & IaC",
        text: "How the environment is built and whether it's described as code.",
      },
      {
        title: "Security & access",
        text: "Who can access what, and where there are gaps.",
      },
      {
        title: "Costs",
        text: "What you're paying for and where you can save.",
      },
      {
        title: "Operations & monitoring",
        text: "Whether errors get noticed and who responds when something fails.",
      },
      {
        title: "Deployment & CI/CD",
        text: "How changes go live and how safely that happens.",
      },
      {
        title: "Scaling & failures",
        text: "What happens under more load or when a part fails.",
      },
      {
        title: "Code quality & tests",
        text: "How easily the code can be changed and what tests cover.",
      },
    ],
    stepsEyebrow: "Process",
    stepsHeading: "From documents to the debrief.",
    steps: [
      {
        title: "Documents & access",
        text: "You give me access to what we want to look at together.",
      },
      {
        title: "Analysis",
        text: "I go through the agreed focus areas carefully.",
      },
      {
        title: "Report",
        text: "You get a written report with my recommendations.",
      },
      {
        title: "Debrief",
        text: "We go through the results together and agree on next steps.",
      },
    ],
    pricingEyebrow: "Price",
    pricingHeading: "A fixed price after the free intro call.",
    featuresLabel: "Included",
    packages: [
      {
        name: "Architecture review",
        description:
          "In the intro call we agree on what I look at. After that you get a fixed price before anything starts.",
        features: [
          "Jointly agreed focus areas",
          "Written report with recommendations",
          "Debrief of the results",
          "Confidential, with an NDA if you like",
        ],
        cta: { label: "Book an intro call", href: "/contact" },
      },
    ],
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "Do you need access to our systems?",
        answer:
          "That depends on the focus areas. We clarify in the intro call what exactly I need.",
      },
      {
        question: "Will you sign an NDA?",
        answer: "Yes, even before the intro call if you like.",
      },
      {
        question: "Do you also implement the recommendations?",
        answer:
          "Happily, but it's not required. You can also tackle the recommendations yourself or with your team.",
      },
      {
        question: "What if everything is fine?",
        answer:
          "Then that's exactly what the report says, and you have it in black and white. That's a result too, for example before a funding round.",
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
    path: "/cloud/architektur-review",
    image: "cloud-architektur-review",
    lang,
  });
};

export default function ArchitekturReview() {
  const lang = useLang();
  const t = text[lang];

  return (
    <OfferPage
      area="cloud"
      current="/cloud/architektur-review"
      hero={t.hero}
      faq={{ heading: t.faqHeading, faqs: t.faqs }}
    >
      {/* when it pays off */}
      <Section
        eyebrow={t.whenEyebrow}
        heading={t.whenHeading}
        className="bg-navy-lighter"
      >
        <FeatureTable items={t.when} />
      </Section>

      {/* possible focus areas, picked together */}
      <Section eyebrow={t.focusEyebrow} heading={t.focusHeading}>
        <p className="-mt-4 mb-12 max-w-2xl text-lg leading-relaxed">
          {t.focusIntro}
        </p>
        <FeatureStrokes items={t.focus} columns={4} />
      </Section>

      {/* process */}
      <Section
        eyebrow={t.stepsEyebrow}
        heading={t.stepsHeading}
        className="bg-navy-light"
      >
        <ClimbSteps steps={t.steps} hillClass="fill-navy-lighter" />
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
