import type { MetaFunction } from "react-router";
import AboutMeSection from "~/components/site/aboutMeSection";
import ContactBox from "~/components/site/contactBox";
import FaqSection from "~/components/site/faqSection";
import FeatureStrokes from "~/components/site/featureStrokes";
import Footer from "~/components/site/footer";
import { RelatedOffers } from "~/components/site/offerTiles";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import { pageMeta } from "~/components/site/pageMeta";
import PricingSection from "~/components/site/pricingSection";
import ReferencesSection from "~/components/site/referencesSection";
import SectionHeading from "~/components/site/sectionHeading";
import { langFromParams, langLoader, localize, useLang } from "~/i18n";

export const loader = langLoader;

const text = {
  de: {
    title:
      "Website-Hosting & Wartung aus Berlin ab 25 € im Monat | Hannes Schaletzky",
    description:
      "Hosting in Deutschland, .de-Domain, SSL, tägliche Backups, Überwachung und schnelle Hilfe aus Berlin. Basis 25 €, Plus 50 €, WordPress & Co. 60 € im Monat, monatlich kündbar.",
    hero: {
      title: "Hosting & Wartung,",
      highlight: "persönlich statt Hotline.",
      cta: "Kontakt aufnehmen",
      text: "Ich kümmere mich aus Berlin um Hosting, Backups und Updates und helfe schnell, wenn etwas hakt. Monatlich kündbar.",
    },
    servicesEyebrow: "Was ich übernehme",
    servicesHeading: "Damit Ihre Website sorgenfrei läuft.",
    services: [
      {
        title: "Hosting in Deutschland",
        text: "Server in Deutschland, damit Ihre Daten unter deutschem Datenschutz bleiben.",
      },
      {
        title: "Domain inklusive",
        text: "Eine .de-Domain auf Ihren Namen ist dabei, ich verwalte sie technisch.",
      },
      {
        title: "SSL-Zertifikat",
        text: "Eine verschlüsselte Verbindung, damit Browser nicht vor Ihrer Seite warnen.",
      },
      {
        title: "Tägliche Backups",
        text: "Jeden Tag eine Sicherung, 30 Tage aufbewahrt, damit nichts verloren geht.",
      },
      {
        title: "Updates",
        text: "Technik und Software bleiben aktuell, auch bei WordPress.",
      },
      {
        title: "Überwachung",
        text: "Fällt Ihre Website aus, werde ich automatisch alarmiert, meist bevor Sie es merken.",
      },
      {
        title: "Schnelle Hilfe",
        text: "Bei Fragen oder Problemen erreichen Sie mich direkt per E-Mail oder Telefon, meist mit Antwort innerhalb eines Werktags.",
      },
      {
        title: "Kostenloser Umzug",
        text: "Ihre bestehende Website ziehe ich kostenlos zu mir um.",
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
        features: [
          "Alles aus Basis",
        ],
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
        features: [
          "Alles aus Basis",
        ],
        extras: [
          "Updates für PHP, Plugins und Themes",
          "Tägliche Backups inklusive Datenbank",
        ],
        cta: { label: "Kontakt aufnehmen", href: "/contact" },
      },
    ],
    pricingNotes: [
      "Monatlich kündbar. Den Umzug Ihrer bestehenden Website übernehme ich kostenlos.",
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
          "Ihre E-Mail-Adressen funktionieren weiter. Auf Wunsch richte ich Ihnen Postfächer mit Ihrer Domain ein: 249 € einmalig und 6 € pro Postfach im Monat. Bleiben Ihre Postfächer beim bisherigen Anbieter, sorge ich beim Umzug dafür, dass alle E-Mails weiter ankommen.",
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
      "Hosting in Germany, .de domain, SSL, daily backups, monitoring and quick help from Berlin. Basic 25 €, Plus 50 €, WordPress & Co. 60 € a month, cancel monthly.",
    hero: {
      title: "Hosting & maintenance,",
      highlight: "a person, not a hotline.",
      cta: "Get in touch",
      text: "From Berlin, I take care of hosting, backups and updates and help quickly when something gets stuck. Cancel any month.",
    },
    servicesEyebrow: "What I take care of",
    servicesHeading: "So your website runs worry-free.",
    services: [
      {
        title: "Hosting in Germany",
        text: "Servers in Germany, so your data stays under German data protection.",
      },
      {
        title: "Domain included",
        text: "A .de domain in your name is included, I manage it technically.",
      },
      {
        title: "SSL certificate",
        text: "An encrypted connection, so browsers don't warn about your site.",
      },
      {
        title: "Daily backups",
        text: "A backup every day, kept for 30 days, so nothing gets lost.",
      },
      {
        title: "Updates",
        text: "Technology and software stay up to date, WordPress included.",
      },
      {
        title: "Monitoring",
        text: "If your website goes down, I get an automatic alert, usually before you notice.",
      },
      {
        title: "Quick help",
        text: "With questions or problems you reach me directly by email or phone, usually with an answer within one working day.",
      },
      {
        title: "Free move",
        text: "I move your existing website to me free of charge.",
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
        features: [
          "Everything in Basic",
        ],
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
        features: [
          "Everything in Basic",
        ],
        extras: [
          "Updates for PHP, plugins and themes",
          "Daily backups including the database",
        ],
        cta: { label: "Get in touch", href: "/en/contact" },
      },
    ],
    pricingNotes: [
      "Cancel any month. I move your existing website to me free of charge.",
    ],
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "How long does hosting & maintenance run?",
        answer:
          "There is no minimum term. You can cancel any month.",
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
          "Your email addresses keep working. If you like, I set up mailboxes with your domain: 249 € one-off and 6 € per mailbox a month. If your inboxes stay with your current provider, I make sure during the move that all emails keep arriving.",
      },
      {
        question: "Which package fits my website?",
        answer:
          "Basic and Plus are for the websites I build. They consist of ready-made pages and need no database. That makes them fast, secure and low-maintenance. WordPress, shops and similar systems store their content in a database and regularly need updates for PHP, plugins and themes. That is what the WordPress & Co. package is for.",
      },
      {
        question: "Who owns the website and the domain?",
        answer:
          "The website is yours, and the domain is registered in your name. A .de domain is included in the hosting, which I manage technically for you. I'm happy to set up more domains or other endings and tell you the price beforehand. If you ever want to switch, I hand everything over.",
      },
    ],
  },
};

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return pageMeta({
    title: text[lang].title,
    description: text[lang].description,
    path: "/hosting-wartung",
    lang,
    image: "hosting-wartung",
  });
};

export default function HostingWartung() {
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

        <section className="bg-navy-lighter">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.servicesEyebrow}>
              {t.servicesHeading}
            </SectionHeading>
            <FeatureStrokes items={t.services} columns={4} />
          </div>
        </section>

        <PricingSection
          eyebrow={t.pricingEyebrow}
          heading={t.pricingHeading}
          packages={t.packages}
          notes={t.pricingNotes}
          featuresLabel={t.featuresLabel}
        />

        <AboutMeSection className="bg-navy-light" />

        <ReferencesSection />

        <FaqSection
          heading={t.faqHeading}
          faqs={t.faqs}
          className="bg-navy-light"
        />

        <RelatedOffers current="/hosting-wartung" />

        <ContactBox />
      </main>

      <Footer />
    </div>
  );
}
