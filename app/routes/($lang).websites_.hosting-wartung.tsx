import type { MetaFunction } from "react-router";
import OfferPage from "~/components/site/offerPage";
import Section from "~/components/site/section";
import ClimbSteps from "~/components/site/climbSteps";
import FeatureStrokes from "~/components/site/featureStrokes";
import { pageMeta } from "~/components/site/pageMeta";
import { calUrl } from "~/components/site/siteNav";
import PricingSection from "~/components/site/pricingSection";
import ReferencesSection from "~/components/site/referencesSection";
import { langFromParams, localize, useLang } from "~/i18n";
import { offerLoader } from "~/ratgeber.server";

export const loader = offerLoader("/websites/hosting-wartung");

const text = {
  de: {
    title:
      "Website-Hosting & Wartung aus Berlin ab 25 € im Monat | Hannes Schaletzky",
    description:
      "Hosting in Deutschland, .de-Domain, SSL, tägliche Backups, Überwachung und persönliche Hilfe aus Berlin. Basis 25 €, Plus 50 €, WordPress & Co. 60 € im Monat, monatlich kündbar.",
    hero: {
      title: "Hosting & Wartung,",
      highlight: "persönlich statt Hotline.",
      cta: "Kostenloses Erstgespräch buchen",
      ctaHref: calUrl,
      text: "Ich betreibe Ihre Website, sichere sie täglich und halte sie aktuell. Ab 25 € im Monat. Monatlich kündbar, der Umzug zu mir ist kostenlos.",
    },
    servicesEyebrow: "Was ich übernehme",
    servicesHeading: "Darum kümmere ich mich.",
    services: [
      {
        title: "Hosting in Deutschland",
        text: "Ihre Website liegt auf einem Server in Deutschland, unter deutschem Datenschutz.",
      },
      {
        title: "Domain inklusive",
        text: "Ihre Adresse im Internet, etwa ihr-betrieb.de, läuft auf Ihren Namen. Ich verwalte sie technisch.",
      },
      {
        title: "SSL-Zertifikat",
        text: "Verschlüsselte Verbindung, ohne Warnung im Browser.",
      },
      {
        title: "Tägliche Backups",
        text: "Jeden Tag eine Sicherung, 30 Tage aufbewahrt.",
      },
      {
        title: "Updates",
        text: "Regelmäßige Updates für Technik und Software.",
      },
      {
        title: "Überwachung",
        text: "Fällt Ihre Website aus, bekomme ich einen Alarm.",
      },
      {
        title: "Persönliche Hilfe",
        text: "Bei Fragen oder Problemen direkt bei mir, per E-Mail oder Telefon.",
      },
      {
        title: "E-Mail bleibt",
        text: "Ihre bestehenden E-Mail-Adressen funktionieren weiter.",
      },
    ],
    stepsEyebrow: "So läuft es ab",
    stepsHeading: "In drei Schritten zu mir.",
    steps: [
      {
        title: "Kennenlernen",
        text: "Wir sprechen über Ihre Website und welches Paket passt.",
      },
      {
        title: "Umzug",
        text: "Ich ziehe Ihre Website kostenlos zu mir um und richte Backups und Überwachung ein.",
      },
      {
        title: "Betreuung",
        text: "Ich spiele Updates ein und bin da, wenn etwas hakt.",
      },
    ],
    pricingEyebrow: "Pakete & Preise",
    pricingHeading: "Drei Pakete, monatlich kündbar.",
    featuresLabel: "Enthalten",
    packages: [
      {
        name: "Basis",
        description: "Für Websites, die ich für Sie baue.",
        price: "25 €",
        priceNote: "pro Monat, inkl. 19 % MwSt.",
        features: [
          "Hosting in Deutschland",
          "Eine .de-Domain auf Ihren Namen",
          "SSL-Zertifikat",
          "Tägliche Backups, 30 Tage aufbewahrt",
          "Überwachung mit Alarm bei Ausfall",
          "Updates von Technik und Software",
        ],
        cta: { label: "Kontakt aufnehmen", href: "/contact" },
      },
      {
        name: "Plus",
        description: "Wie Basis, dazu kleine Änderungen jeden Monat.",
        price: "50 €",
        priceNote: "pro Monat, inkl. 19 % MwSt.",
        features: ["Alles aus Basis"],
        extras: [
          "Kleine Änderungen bis 30 Minuten im Monat, etwa Öffnungszeiten, Texte oder Bilder",
        ],
        cta: { label: "Kontakt aufnehmen", href: "/contact" },
      },
      {
        name: "WordPress & Co.",
        description:
          "Für WordPress, Joomla, Shops und ähnliche Systeme. Änderungen nach Aufwand.",
        price: "60 €",
        priceNote: "pro Monat, inkl. 19 % MwSt.",
        features: ["Alles aus Basis"],
        extras: [
          "Updates für PHP, Plugins und Themes",
          "Tägliche Backups inklusive Datenbank",
        ],
        cta: { label: "Kontakt aufnehmen", href: "/contact" },
      },
    ],
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question: "Wie lange läuft Hosting & Wartung?",
        answer:
          "Es gibt keine Mindestlaufzeit. Sie können jeden Monat kündigen.",
      },
      {
        question: "Was zählt als kleine Änderung?",
        answer:
          "Zum Beispiel neue Öffnungszeiten, ein neues Foto oder ein geänderter Text. Im Plus-Paket sind bis zu 30 Minuten im Monat enthalten, ungenutzte Minuten verfallen am Monatsende. Alles darüber sowie Änderungen in den Paketen Basis und WordPress & Co. rechne ich nach Aufwand ab: 71,40 € pro Stunde (60 € netto).",
      },
      {
        question: "Können Sie meine bestehende Website übernehmen?",
        answer:
          "Ja, und der Umzug zu mir ist kostenlos. Vorher sage ich Ihnen, ob ich sie so weiter betreuen kann oder ob ein Neuaufbau sinnvoller ist.",
      },
      {
        question: "Was passiert mit meinen E-Mail-Adressen?",
        answer:
          "Ihre E-Mail-Adressen funktionieren weiter. Auf Wunsch richte ich Ihnen Postfächer mit Ihrer Domain ein: 249 € einmalig und 6 € pro Postfach im Monat. Bleiben Ihre Postfächer beim bisherigen Anbieter, achte ich beim Umzug darauf, dass alle E-Mails weiter ankommen.",
      },
      {
        question: "Welches Paket passt zu meiner Website?",
        answer:
          "Basis und Plus sind für die Websites, die ich baue. Sie bestehen aus fertigen Seiten und brauchen keine Datenbank. Das macht sie schnell, sicher und wenig aufwendig. WordPress, Shops und ähnliche Systeme speichern ihre Inhalte dagegen in einer Datenbank und brauchen regelmäßig Updates für PHP, Plugins und Themes. Dafür gibt es das Paket WordPress & Co.",
      },
      {
        question: "Wem gehören die Website und die Domain?",
        answer:
          "Die Website gehört Ihnen, und die Domain läuft auf Ihren Namen. Eine .de-Domain ist im Hosting enthalten, ich verwalte sie technisch für Sie. Weitere Domains oder andere Endungen richte ich gern ein, den Preis nenne ich Ihnen vorher. Wenn Sie wechseln möchten, übergebe ich Ihnen alles.",
      },
    ],
  },
  en: {
    title:
      "Website Hosting & Maintenance from 25 € a Month | Hannes Schaletzky",
    description:
      "Hosting in Germany, .de domain, SSL, daily backups, monitoring and personal help from Berlin. Basic 25 €, Plus 50 €, WordPress & Co. 60 € a month, cancel monthly.",
    hero: {
      title: "Hosting & maintenance,",
      highlight: "a person, not a hotline.",
      cta: "Book a free intro call",
      ctaHref: calUrl,
      text: "I run your website, back it up daily and keep it up to date. From 25 € a month. Cancel any month, moving to me is free.",
    },
    servicesEyebrow: "What I take care of",
    servicesHeading: "That's what I take care of.",
    services: [
      {
        title: "Hosting in Germany",
        text: "Your website sits on a server in Germany, under German data protection.",
      },
      {
        title: "Domain included",
        text: "Your address on the internet, such as your-business.de, is registered in your name. I manage the technical side.",
      },
      {
        title: "SSL certificate",
        text: "Encrypted connection, no browser warnings.",
      },
      {
        title: "Daily backups",
        text: "A backup every day, kept for 30 days.",
      },
      {
        title: "Updates",
        text: "Regular updates for technology and software.",
      },
      {
        title: "Monitoring",
        text: "If your website goes down, I get an alert.",
      },
      {
        title: "Personal help",
        text: "Questions or problems go straight to me, by email or phone.",
      },
      {
        title: "Email stays",
        text: "Your existing email addresses keep working.",
      },
    ],
    stepsEyebrow: "How it works",
    stepsHeading: "Three steps to me.",
    steps: [
      {
        title: "Get to know each other",
        text: "We talk about your website and which package fits.",
      },
      {
        title: "Move",
        text: "I move your website to me free of charge and set up backups and monitoring.",
      },
      {
        title: "Ongoing care",
        text: "I install updates and I'm there when something gets stuck.",
      },
    ],
    pricingEyebrow: "Packages & prices",
    pricingHeading: "Three packages, cancel any month.",
    featuresLabel: "Included",
    packages: [
      {
        name: "Basic",
        description: "For websites I build for you.",
        price: "25 €",
        priceNote: "per month, incl. 19 % VAT",
        features: [
          "Hosting in Germany",
          "A .de domain in your name",
          "SSL certificate",
          "Daily backups, kept for 30 days",
          "Monitoring with an alert on outages",
          "Updates for technology and software",
        ],
        cta: { label: "Get in touch", href: "/en/contact" },
      },
      {
        name: "Plus",
        description: "Like Basic, plus small changes every month.",
        price: "50 €",
        priceNote: "per month, incl. 19 % VAT",
        features: ["Everything in Basic"],
        extras: [
          "Small changes up to 30 minutes a month, such as opening hours, texts or images",
        ],
        cta: { label: "Get in touch", href: "/en/contact" },
      },
      {
        name: "WordPress & Co.",
        description:
          "For WordPress, Joomla, shops and similar systems. Changes billed by effort.",
        price: "60 €",
        priceNote: "per month, incl. 19 % VAT",
        features: ["Everything in Basic"],
        extras: [
          "Updates for PHP, plugins and themes",
          "Daily backups including the database",
        ],
        cta: { label: "Get in touch", href: "/en/contact" },
      },
    ],
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "How long does hosting & maintenance run?",
        answer: "There is no minimum term. You can cancel any month.",
      },
      {
        question: "What counts as a small change?",
        answer:
          "For example new opening hours, a new photo or an edited text. The Plus package includes up to 30 minutes a month, unused minutes expire at the end of the month. Anything beyond that, and changes in the Basic and WordPress & Co. packages, is billed by effort: 71.40 € per hour (60 € net).",
      },
      {
        question: "Can you take over my existing website?",
        answer:
          "Yes, and moving it to me is free. Beforehand I tell you whether I can maintain it as it is or whether a rebuild makes more sense.",
      },
      {
        question: "What happens to my email addresses?",
        answer:
          "Your email addresses keep working. If you like, I set up mailboxes with your domain: 249 € one-off and 6 € per mailbox a month. If your inboxes stay with your current provider, I make sure during the move that your emails keep arriving.",
      },
      {
        question: "Which package fits my website?",
        answer:
          "Basic and Plus are for the websites I build. They consist of ready-made pages and need no database. That makes them fast, secure and low-maintenance. WordPress, shops and similar systems store their content in a database and regularly need updates for PHP, plugins and themes. That is what the WordPress & Co. package is for.",
      },
      {
        question: "Who owns the website and the domain?",
        answer:
          "The website is yours, and the domain is registered in your name. A .de domain is included in the hosting, which I manage technically for you. I'm happy to set up more domains or other domain extensions and tell you the price beforehand. If you ever want to switch, I hand everything over.",
      },
    ],
  },
};

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return pageMeta({
    title: text[lang].title,
    description: text[lang].description,
    path: "/websites/hosting-wartung",
    lang,
    image: "hosting-wartung",
  });
};

export default function HostingWartung() {
  const lang = useLang();
  const t = text[lang];

  return (
    <OfferPage
      area="websites"
      current="/websites/hosting-wartung"
      hero={t.hero}
      faq={{ heading: t.faqHeading, faqs: t.faqs }}
    >
      <Section
        eyebrow={t.servicesEyebrow}
        heading={t.servicesHeading}
        className="bg-navy-lighter"
      >
        <FeatureStrokes items={t.services} columns={4} />
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
          label:
            lang === "de"
              ? "Alle Website-Leistungen im Überblick"
              : "All website services at a glance",
          href: `${localize("/websites", lang)}#angebote`,
        }}
      />

      <ReferencesSection className="bg-navy-lighter" />
    </OfferPage>
  );
}
