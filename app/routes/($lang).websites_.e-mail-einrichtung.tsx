import type { MetaFunction } from "react-router";
import OfferPage from "~/components/site/offerPage";
import Section from "~/components/site/section";
import ClimbSteps from "~/components/site/climbSteps";
import FeatureHeadlines from "~/components/site/featureHeadlines";
import PricingSection from "~/components/site/pricingSection";
import { pageMeta } from "~/components/site/pageMeta";
import { calUrl } from "~/components/site/siteNav";
import { langFromParams, useLang } from "~/i18n";
import { offerLoader } from "~/ratgeber.server";

export const loader = offerLoader("/websites/e-mail-einrichtung");

// email with the client's own domain: I set it up and move the old mail, an
// established provider with servers in Germany runs the mailboxes
const text = {
  de: {
    title: "E-Mail mit eigener Domain einrichten, 249 € | Hannes Schaletzky",
    description:
      "Adressen wie info@ihr-betrieb.de, eingerichtet auf Handy und Computer, alte E-Mails ziehen mit um. Einrichtung 249 €, Postfach 6 € im Monat.",
    hero: {
      title: "E-Mail mit",
      highlight: "Ihrer eigenen Domain.",
      cta: "Kostenloses Erstgespräch buchen",
      ctaHref: calUrl,
      text: "Eine Adresse wie info@ihr-betrieb.de wirkt professioneller als eine GMX-Adresse. Ich richte alles ein und ziehe Ihre alten E-Mails um. Einmalig 249 €.",
    },
    includedEyebrow: "Was ich einrichte",
    includedHeading: "Alles, was dazugehört.",
    included: [
      {
        title: "Eigene Adressen",
        text: "info@, vorname@ oder rechnung@, so wie es zu Ihrem Betrieb passt.",
      },
      {
        title: "Umzug Ihrer E-Mails",
        text: "Alte Nachrichten und Ordner können mitziehen, etwa von GMX, Web.de oder T-Online.",
      },
      {
        title: "Gemeinsam auf Ihren Geräten",
        text: "In einem Termin vor Ort oder per Video richten wir die Postfächer zusammen auf Handy und Computer ein, auch in Outlook oder Apple Mail.",
      },
      {
        title: "Schutz vor Fälschungen",
        text: "Schutzeinträge an Ihrer Domain erschweren es Betrügern, in Ihrem Namen zu schreiben. Ihre eigenen E-Mails landen dadurch seltener im Spam.",
      },
      {
        title: "Server in Deutschland",
        text: "Die Postfächer liegen bei einem etablierten Anbieter mit Rechenzentren in Deutschland.",
      },
    ],
    stepsEyebrow: "So läuft es ab",
    stepsHeading: "In drei Schritten zur eigenen Adresse.",
    steps: [
      {
        title: "Adressen festlegen",
        text: "Wir überlegen kurz, welche Adressen Sie brauchen und welche alten Postfächer umziehen sollen.",
      },
      {
        title: "Einrichten & umziehen",
        text: "Ich richte die Postfächer ein, ziehe Ihre E-Mails um und trage die Schutzeinträge an Ihrer Domain ein.",
      },
      {
        title: "Loslegen",
        text: "In einem gemeinsamen Termin richten wir Ihre Geräte ein, und Sie schreiben ab sofort von der neuen Adresse.",
      },
    ],
    pricingEyebrow: "Preise",
    pricingHeading: "Einmal einrichten, dann monatlich.",
    featuresLabel: "Enthalten",
    packages: [
      {
        name: "Einrichtung",
        description: "Einmalig, für bis zu fünf Postfächer.",
        price: "249 €",
        priceNote: "einmalig, inkl. 19 % MwSt.",
        features: [
          "Bis zu fünf Postfächer mit Ihrer Domain",
          "Schutzeinträge gegen gefälschte Absender",
          "Umzug Ihrer E-Mails aus bis zu fünf alten Postfächern",
          "Gemeinsamer Termin für Ihre Geräte, bis zu einer Stunde",
        ],
        cta: { label: "Kontakt aufnehmen", href: "/contact" },
      },
      {
        name: "Postfach",
        description: "Pro Postfach, monatlich kündbar.",
        price: "6 €",
        priceNote: "pro Monat, inkl. 19 % MwSt.",
        features: [
          "Spam- und Virenschutz",
          "Server in Deutschland",
          "Ansprechpartner bei Fragen",
        ],
        cta: { label: "Kontakt aufnehmen", href: "/contact" },
      },
    ],
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question: "Brauche ich dafür eine eigene Domain?",
        answer:
          "Ja. Haben Sie noch keine, besorge ich Ihnen eine auf Ihren Namen und nenne Ihnen vorher den Preis. Bei Hosting & Wartung ist eine .de-Domain schon enthalten.",
      },
      {
        question: "Muss meine Website bei Ihnen liegen?",
        answer:
          "Nein. Die E-Mail-Einrichtung funktioniert auch, wenn Ihre Website bei einem anderen Anbieter liegt.",
      },
      {
        question: "Was passiert mit meiner alten Adresse?",
        answer:
          "Sie können sie behalten. Ich zeige Ihnen, wie Sie dort eine Weiterleitung auf die neue Adresse einrichten, damit Ihnen nichts entgeht.",
      },
      {
        question: "Was, wenn die Einrichtung der Geräte länger dauert?",
        answer:
          "Eine Stunde reicht den meisten Betrieben, weil alle parallel mitmachen. Dauert es länger, rechne ich die zusätzliche Zeit nach Aufwand ab: 71,40 € pro Stunde (60 € netto).",
      },
      {
        question: "Kann beim Umzug etwas verloren gehen?",
        answer:
          "Das ist sehr unwahrscheinlich. Ihre E-Mails werden kopiert, nicht verschoben. Beim alten Anbieter bleibt alles, wie es ist, bis Sie es selbst löschen.",
      },
      {
        question: "Ich brauche mehr als fünf Postfächer. Geht das?",
        answer:
          "Ja. Für die Einrichtung weiterer Postfächer nenne ich Ihnen vorher einen Preis, jedes Postfach kostet dann ebenfalls 6 € im Monat.",
      },
      {
        question: "Kann ich wieder kündigen?",
        answer:
          "Ja, jeden Monat. Vorher exportieren wir Ihre E-Mails, damit Sie alles mitnehmen können.",
      },
    ],
  },
  en: {
    title: "Email With Your Own Domain, 249 € Setup | Hannes Schaletzky",
    description:
      "Addresses like info@your-business.de, set up on phone and computer, old emails move with you. Setup 249 €, mailbox 6 € a month.",
    hero: {
      title: "Email with",
      highlight: "your own domain.",
      cta: "Book a free intro call",
      ctaHref: calUrl,
      text: "An address like info@your-business.de looks more professional than a free-mail address. I set everything up and move your old mail. 249 € one-off.",
    },
    includedEyebrow: "What I set up",
    includedHeading: "Everything that comes with it.",
    included: [
      {
        title: "Your own addresses",
        text: "info@, firstname@ or invoices@, whatever suits your business.",
      },
      {
        title: "Moving your mail",
        text: "Old messages and folders can come along, for example from GMX, Web.de or T-Online.",
      },
      {
        title: "Together on your devices",
        text: "In one session on-site or by video we set up the mailboxes together on phone and computer, including Outlook or Apple Mail.",
      },
      {
        title: "Protection against forgery",
        text: "Protective entries on your domain make it harder for fraudsters to write in your name. Your own emails also land in spam less often.",
      },
      {
        title: "Servers in Germany",
        text: "The mailboxes run with an established provider with data centres in Germany.",
      },
    ],
    stepsEyebrow: "How it works",
    stepsHeading: "Three steps to your own address.",
    steps: [
      {
        title: "Choose addresses",
        text: "We briefly work out which addresses you need and which old mailboxes should move over.",
      },
      {
        title: "Set up & move",
        text: "I set up the mailboxes, move your mail and add the protective entries to your domain.",
      },
      {
        title: "Get going",
        text: "In a joint session we set up your devices, and from then on you write from the new address.",
      },
    ],
    pricingEyebrow: "Prices",
    pricingHeading: "Set up once, then monthly.",
    featuresLabel: "Included",
    packages: [
      {
        name: "Setup",
        description: "One-off, for up to five mailboxes.",
        price: "249 €",
        priceNote: "one-off, incl. 19 % VAT",
        features: [
          "Up to five mailboxes with your domain",
          "Protective entries against forged senders",
          "Moving your mail from up to five old mailboxes",
          "Joint session for your devices, up to one hour",
        ],
        cta: { label: "Get in touch", href: "/en/contact" },
      },
      {
        name: "Mailbox",
        description: "Per mailbox, cancel any month.",
        price: "6 €",
        priceNote: "per month, incl. 19 % VAT",
        features: [
          "Spam and virus protection",
          "Servers in Germany",
          "A contact for questions",
        ],
        cta: { label: "Get in touch", href: "/en/contact" },
      },
    ],
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "Do I need my own domain for this?",
        answer:
          "Yes. If you don't have one yet, I get you one in your name and tell you the price beforehand. With hosting & maintenance a .de domain is already included.",
      },
      {
        question: "Does my website have to be with you?",
        answer:
          "No. The email setup works even if your website is with another provider.",
      },
      {
        question: "What happens to my old address?",
        answer:
          "You can keep it. I show you how to forward it to the new address so you don't miss anything.",
      },
      {
        question: "What if setting up the devices takes longer?",
        answer:
          "One hour is enough for most businesses, because everyone joins in at the same time. If it takes longer, I bill the extra time by effort: 71.40 € per hour (60 € net).",
      },
      {
        question: "Can anything get lost during the move?",
        answer:
          "That is very unlikely. Your mail is copied, not moved. Everything stays as it is with your old provider until you delete it yourself.",
      },
      {
        question: "I need more than five mailboxes. Is that possible?",
        answer:
          "Yes. For setting up more mailboxes I tell you a price beforehand, and each mailbox also costs 6 € a month.",
      },
      {
        question: "Can I cancel again?",
        answer:
          "Yes, any month. Before that we export your mail so you can take everything with you.",
      },
    ],
  },
};

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return pageMeta({
    title: text[lang].title,
    description: text[lang].description,
    path: "/websites/e-mail-einrichtung",
    lang,
    image: "e-mail-einrichtung",
  });
};

export default function EMailEinrichtung() {
  const lang = useLang();
  const t = text[lang];

  return (
    <OfferPage
      area="websites"
      current="/websites/e-mail-einrichtung"
      hero={t.hero}
      faq={{ heading: t.faqHeading, faqs: t.faqs }}
    >
      <Section
        eyebrow={t.includedEyebrow}
        heading={t.includedHeading}
        className="bg-navy-lighter"
      >
        <FeatureHeadlines items={t.included} />
      </Section>

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
      />
    </OfferPage>
  );
}
