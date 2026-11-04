import type { MetaFunction } from "react-router";
import ContactBox from "~/components/site/contactBox";
import FaqSection from "~/components/site/faqSection";
import FeatureList from "~/components/site/featureList";
import Footer from "~/components/site/footer";
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
    title: "Website-Hosting & Wartung ab 25 € im Monat | Hannes Schaletzky",
    description:
      "Hosting in Deutschland, SSL, Backups, Updates und schnelle Hilfe für Ihre Website. Basis 25 €, Plus 49 € im Monat, monatlich kündbar.",
    hero: {
      eyebrow: "Für kleine Unternehmen & Vereine",
      title: "Hosting & Wartung,",
      highlight: "persönlich statt Hotline.",
      cta: "Kontakt aufnehmen",
      text: "Ich kümmere mich um Hosting, Backups und Updates und helfe schnell, wenn etwas hakt. Monatlich kündbar, ohne Mindestlaufzeit.",
    },
    servicesEyebrow: "Was ich übernehme",
    servicesHeading: "Damit Ihre Website sorgenfrei läuft.",
    services: [
      {
        title: "Hosting in Deutschland",
        text: "Server in Deutschland, damit Ihre Daten unter deutschem Datenschutz bleiben.",
      },
      {
        title: "SSL-Zertifikat",
        text: "Eine verschlüsselte Verbindung, damit Browser nicht vor Ihrer Seite warnen.",
      },
      {
        title: "Backups",
        text: "Regelmäßige Sicherungen, damit nichts verloren geht.",
      },
      {
        title: "Updates",
        text: "Technik und Software bleiben aktuell, auch bei WordPress.",
      },
      {
        title: "Schnelle Hilfe",
        text: "Bei Fragen oder Problemen erreichen Sie mich direkt per E-Mail oder Telefon.",
      },
      {
        title: "Kleine Änderungen",
        text: "Neue Öffnungszeiten, ein Foto oder ein Text: im Plus-Paket bis 30 Minuten im Monat inklusive.",
      },
    ],
    pricingEyebrow: "Pakete & Preise",
    pricingHeading: "Zwei Pakete, monatlich kündbar.",
    featuresLabel: "Enthalten",
    packages: [
      {
        name: "Basis",
        price: "25 €",
        priceNote: "pro Monat, inkl. 19 % MwSt.",
        features: [
          "Hosting in Deutschland",
          "SSL-Zertifikat",
          "Regelmäßige Backups",
          "Updates, auch für WordPress",
        ],
        cta: { label: "Kontakt aufnehmen", href: "/contact" },
      },
      {
        name: "Plus",
        price: "49 €",
        priceNote: "pro Monat, inkl. 19 % MwSt.",
        features: [
          "Alles aus Basis",
          "Kleine Änderungen bis 30 Minuten im Monat, etwa Öffnungszeiten, Texte oder Bilder",
        ],
        cta: { label: "Kontakt aufnehmen", href: "/contact" },
      },
    ],
    pricingNotes: [
      "Alle weiteren Änderungen nach Aufwand: 71,40 € pro Stunde (60 € netto).",
    ],
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question: "Wie lange läuft Hosting & Wartung?",
        answer:
          "Sie können jeden Monat kündigen. Eine Mindestlaufzeit gibt es nicht.",
      },
      {
        question: "Was zählt als kleine Änderung?",
        answer:
          "Zum Beispiel neue Öffnungszeiten, ein neues Foto oder ein geänderter Text. Im Plus-Paket sind bis zu 30 Minuten im Monat enthalten, alles darüber rechne ich nach Aufwand ab.",
      },
      {
        question: "Können Sie meine bestehende Website übernehmen?",
        answer:
          "Ja. Nach einem Website-Check-up sage ich Ihnen, ob ich sie so weiter betreuen kann oder ob ein Neuaufbau sinnvoller ist.",
      },
      {
        question: "Wem gehören die Website und die Domain?",
        answer:
          "Die Website gehört Ihnen. Die Domain läuft am besten auf Ihren Namen, ich kann sie aber auch für Sie verwalten. Wenn Sie wechseln möchten, übergebe ich Ihnen alles.",
      },
    ],
  },
  en: {
    title:
      "Website Hosting & Maintenance from 25 € a Month | Hannes Schaletzky",
    description:
      "Hosting in Germany, SSL, backups, updates and quick help for your website. Basic 25 €, Plus 49 € a month, cancel any month.",
    hero: {
      eyebrow: "For small businesses & clubs",
      title: "Hosting & maintenance,",
      highlight: "a person, not a hotline.",
      cta: "Get in touch",
      text: "I take care of hosting, backups and updates and help quickly when something gets stuck. Cancel any month, no minimum term.",
    },
    servicesEyebrow: "What I take care of",
    servicesHeading: "So your website runs worry-free.",
    services: [
      {
        title: "Hosting in Germany",
        text: "Servers in Germany, so your data stays under German data protection.",
      },
      {
        title: "SSL certificate",
        text: "An encrypted connection, so browsers don't warn about your site.",
      },
      {
        title: "Backups",
        text: "Regular backups, so nothing gets lost.",
      },
      {
        title: "Updates",
        text: "Technology and software stay up to date, WordPress included.",
      },
      {
        title: "Quick help",
        text: "With questions or problems you reach me directly by email or phone.",
      },
      {
        title: "Small changes",
        text: "New opening hours, a photo or a text: up to 30 minutes a month included in the Plus package.",
      },
    ],
    pricingEyebrow: "Packages & prices",
    pricingHeading: "Two packages, cancel any month.",
    featuresLabel: "Included",
    packages: [
      {
        name: "Basic",
        price: "25 €",
        priceNote: "per month, incl. 19 % VAT",
        features: [
          "Hosting in Germany",
          "SSL certificate",
          "Regular backups",
          "Updates, WordPress included",
        ],
        cta: { label: "Get in touch", href: "/en/contact" },
      },
      {
        name: "Plus",
        price: "49 €",
        priceNote: "per month, incl. 19 % VAT",
        features: [
          "Everything in Basic",
          "Small changes up to 30 minutes a month, such as opening hours, texts or images",
        ],
        cta: { label: "Get in touch", href: "/en/contact" },
      },
    ],
    pricingNotes: [
      "Any further changes billed by effort: 71.40 € per hour (60 € net).",
    ],
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "How long does hosting & maintenance run?",
        answer: "You can cancel any month. There is no minimum term.",
      },
      {
        question: "What counts as a small change?",
        answer:
          "For example new opening hours, a new photo or an edited text. The Plus package includes up to 30 minutes a month, anything beyond that is billed by effort.",
      },
      {
        question: "Can you take over my existing website?",
        answer:
          "Yes. After a check-up I'll tell you whether I can maintain it as it is or whether a rebuild makes more sense.",
      },
      {
        question: "Who owns the website and the domain?",
        answer:
          "The website is yours. The domain is best registered in your name, but I can also manage it for you. If you ever want to switch, I hand everything over.",
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
          eyebrow={t.hero.eyebrow}
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
            <FeatureList items={t.services} />
          </div>
        </section>

        <PricingSection
          eyebrow={t.pricingEyebrow}
          heading={t.pricingHeading}
          packages={t.packages}
          notes={t.pricingNotes}
          featuresLabel={t.featuresLabel}
        />

        <ReferencesSection className="bg-navy-light" />

        <FaqSection heading={t.faqHeading} faqs={t.faqs} />

        <ContactBox />
      </main>

      <Footer />
    </div>
  );
}
