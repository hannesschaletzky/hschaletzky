import type { MetaFunction } from "react-router";
import OfferPage from "~/components/site/offerPage";
import Section from "~/components/site/section";
import FeatureNumbers from "~/components/site/featureNumbers";
import FeaturePath from "~/components/site/featurePath";
import PricingSection from "~/components/site/pricingSection";
import { pageMeta } from "~/components/site/pageMeta";
import { calUrl } from "~/components/site/siteNav";
import { langFromParams, localize, useLang } from "~/i18n";
import { offerLoader } from "~/ratgeber.server";

export const loader = offerLoader("/websites/sprechstunde");

// office hours: the client brings questions, we go through them on their own
// website, by the hour
const text = {
  de: {
    title:
      "Website-Sprechstunde: Ihre Fragen, persönlich beantwortet | Hannes Schaletzky",
    description:
      "Sie bringen Ihre Fragen zu Website, Google-Unternehmensprofil, Analytics oder Ads mit, und wir gehen sie gemeinsam durch. Vor Ort in Berlin oder per Video, 71,40 € pro Stunde.",
    hero: {
      title: "Ihre Fragen,",
      highlight: "persönlich beantwortet.",
      cta: "Kostenloses Erstgespräch buchen",
      ctaHref: calUrl,
      text: "Wir gehen Ihre Fragen zur Website in Ruhe durch, vor Ort in Berlin oder per Video. 71,40 € pro Stunde.",
    },
    topicsEyebrow: "Typische Themen",
    topicsHeading: "Worum es gehen kann.",
    topics: [
      {
        title: "Texte & Bilder ändern",
        text: "Öffnungszeiten, Preise, neue Fotos: kleine Änderungen machen Sie danach selbst, etwa in WordPress.",
      },
      {
        title: "Updates sicher einspielen",
        text: "Wann Sie Updates machen sollten, wie Sie vorher sichern und was Sie danach prüfen.",
      },
      {
        title: "Google-Unternehmensprofil",
        text: "Öffnungszeiten pflegen, Fotos hochladen und auf Bewertungen antworten.",
      },
      {
        title: "Search Console",
        text: "Sehen, mit welchen Suchbegriffen Menschen Sie finden und ob Google Fehler meldet.",
      },
      {
        title: "Google Analytics",
        text: "Verstehen, wie viele Besucher kommen, woher und welche Seiten sie lesen.",
      },
      {
        title: "Google Ads",
        text: "Eine kleine Anzeige aufsetzen, ein Budget festlegen und erkennen, ob sie sich lohnt.",
      },
    ],
    stepsEyebrow: "So läuft es ab",
    stepsHeading: "Gemeinsam, in Ihrem Tempo.",
    steps: [
      {
        title: "Fragen sammeln",
        text: "Sie schreiben mir kurz, worum es geht. Danach weiß ich, wie viel Zeit wir ungefähr brauchen.",
      },
      {
        title: "Gemeinsam durchgehen",
        text: "Wir arbeiten an Ihrer eigenen Website, und Sie haben die Maus in der Hand. So bleibt es hängen.",
      },
      {
        title: "Bei Fragen",
        text: "Wenn später etwas unklar ist, schreiben Sie mir einfach.",
      },
    ],
    pricingEyebrow: "Preis",
    pricingHeading: "Nach Zeit, ohne Paket.",
    featuresLabel: "Enthalten",
    packages: [
      {
        name: "Sprechstunde",
        price: "71,40 €",
        priceNote: "pro Stunde, inkl. 19 % MwSt. (60 € netto)",
        features: [
          "Vor Ort in Berlin oder per Video",
          "An Ihrer eigenen Website, Sie klicken selbst",
          "Themen nach Ihrer Wahl",
          "Mehrere Personen ohne Aufpreis",
        ],
        cta: { label: "Kontakt aufnehmen", href: "/contact" },
      },
    ],
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question: "Muss ich Kunde bei Ihnen sein?",
        answer:
          "Nein. Ich erkläre Ihnen auch Websites, die jemand anderes gebaut hat, solange Sie Zugang dazu haben.",
      },
      {
        question: "Brauche ich Vorwissen?",
        answer:
          "Nein. Ich fange da an, wo Sie stehen, und erkläre ohne Fachbegriffe.",
      },
      {
        question: "Können mehrere Personen teilnehmen?",
        answer:
          "Ja, gern. Gerade im Verein ist es sinnvoll, wenn zwei oder drei Leute dabei sind, damit das Wissen nicht an einer Person hängt.",
      },
      {
        question: "Kann ich die Sprechstunde aufzeichnen?",
        answer:
          "Ja, bei Video-Terminen gern. Dann können Sie später jeden Schritt noch einmal ansehen. Vor Ort machen Sie sich am besten Notizen.",
      },
      {
        question: "Wie wird abgerechnet?",
        answer:
          "Nach der tatsächlichen Zeit, zu 71,40 € pro Stunde (60 € netto). Vorher sage ich Ihnen, wie lange es ungefähr dauert.",
      },
    ],
  },
  en: {
    title:
      "Website Office Hours: Your Questions, Answered in Person | Hannes Schaletzky",
    description:
      "You bring your questions about your website, Google Business Profile, Analytics or Ads, and we go through them together. On-site in Berlin or by video, 71.40 € per hour.",
    hero: {
      title: "Your questions,",
      highlight: "answered in person.",
      cta: "Book a free intro call",
      ctaHref: calUrl,
      text: "We go through your questions about your website calmly, on-site in Berlin or by video. 71.40 € per hour.",
    },
    topicsEyebrow: "Typical topics",
    topicsHeading: "What it can be about.",
    topics: [
      {
        title: "Change texts & images",
        text: "Opening hours, prices, new photos: you make small changes yourself afterwards, for example in WordPress.",
      },
      {
        title: "Run updates safely",
        text: "When to update, how to back up first and what to check afterwards.",
      },
      {
        title: "Google Business Profile",
        text: "Keep opening hours current, upload photos and reply to reviews.",
      },
      {
        title: "Search Console",
        text: "See which search terms people find you with and whether Google reports errors.",
      },
      {
        title: "Google Analytics",
        text: "Understand how many visitors come, where from and which pages they read.",
      },
      {
        title: "Google Ads",
        text: "Set up a small ad, set a budget and tell whether it pays off.",
      },
    ],
    stepsEyebrow: "How it works",
    stepsHeading: "Together, at your pace.",
    steps: [
      {
        title: "Collect questions",
        text: "You drop me a short note on what it's about. Then I know roughly how much time we need.",
      },
      {
        title: "Go through them together",
        text: "We work on your own website, and you hold the mouse. That way it sticks.",
      },
      {
        title: "Follow-up questions",
        text: "If something is unclear later, just write to me.",
      },
    ],
    pricingEyebrow: "Price",
    pricingHeading: "By the hour, no package.",
    featuresLabel: "Included",
    packages: [
      {
        name: "Office hours",
        price: "71.40 €",
        priceNote: "per hour, incl. 19 % VAT (60 € net)",
        features: [
          "On-site in Berlin or by video",
          "On your own website, you do the clicking",
          "Topics of your choice",
          "Several people at no extra cost",
        ],
        cta: { label: "Get in touch", href: "/en/contact" },
      },
    ],
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "Do I have to be your client?",
        answer:
          "No. I also explain websites someone else built, as long as you have access to them.",
      },
      {
        question: "Do I need any prior knowledge?",
        answer: "No. I start where you are and explain without jargon.",
      },
      {
        question: "Can several people take part?",
        answer:
          "Yes, happily. Especially in a club it makes sense for two or three people to join, so the knowledge doesn't depend on one person.",
      },
      {
        question: "Can I record the session?",
        answer:
          "Yes, gladly for video sessions. Then you can watch every step again later. On-site, it's best to take notes.",
      },
      {
        question: "How is it billed?",
        answer:
          "By the actual time, at 71.40 € per hour (60 € net). Beforehand I tell you roughly how long it will take.",
      },
    ],
  },
};

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return pageMeta({
    title: text[lang].title,
    description: text[lang].description,
    path: "/websites/sprechstunde",
    lang,
    image: "website-sprechstunde",
  });
};

export default function WebsiteSprechstunde() {
  const lang = useLang();
  const t = text[lang];

  return (
    <OfferPage
      area="websites"
      current="/websites/sprechstunde"
      hero={t.hero}
      faq={{ heading: t.faqHeading, faqs: t.faqs }}
    >
      <Section
        eyebrow={t.topicsEyebrow}
        heading={t.topicsHeading}
        className="bg-navy-lighter"
      >
        <FeatureNumbers items={t.topics} />
      </Section>

      <Section
        eyebrow={t.stepsEyebrow}
        heading={t.stepsHeading}
        className="bg-navy-light"
      >
        <FeaturePath items={t.steps} circleBg="bg-navy-light" />
      </Section>

      <PricingSection
        eyebrow={t.pricingEyebrow}
        heading={t.pricingHeading}
        packages={t.packages}
        featuresLabel={t.featuresLabel}
        more={{
          label:
            lang === "de"
              ? "Alle Website-Leistungen im Überblick"
              : "All website services at a glance",
          href: `${localize("/websites", lang)}#angebote`,
        }}
      />
    </OfferPage>
  );
}
