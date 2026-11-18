import type { MetaFunction } from "react-router";
import AboutMeSection from "~/components/site/aboutMeSection";
import ContactBox from "~/components/site/contactBox";
import FaqSection from "~/components/site/faqSection";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import OfferTiles from "~/components/site/offerTiles";
import PageHero from "~/components/site/pageHero";
import { pageMeta } from "~/components/site/pageMeta";
import SectionHeading from "~/components/site/sectionHeading";
import Testimonials from "~/components/site/testimonials";
import { phone } from "~/components/site/siteNav";
import { langFromParams, langLoader, localize, useLang } from "~/i18n";

export const loader = langLoader;

// overview of the website offers: one tile each, the details live on their own pages
const text = {
  de: {
    title:
      "Websites für kleine Unternehmen & Vereine in Berlin | Hannes Schaletzky",
    description:
      "Sichere Websites für kleine Unternehmen, Vereine und Selbstständige: Check-up für 250 €, neue Websites ab 599 €, Hosting ab 25 € im Monat. Persönlich und fair.",
    hero: {
      title: "Rund um Ihre Website,",
      highlight: "ein Ansprechpartner.",
      cta: "Kontakt aufnehmen",
      text: "Persönlich & fair. Vor Ort in Berlin oder remote. Für Selbstständige, kleine Unternehmen und Vereine.",
    },
    offersEyebrow: "Angebote & Preise",
    offersHeading: "Klare Preise, keine Überraschungen.",
    vat: "Alle Preise inkl. 19 % MwSt.",
    emergency: {
      label: "Notfall?",
      text: "Website gehackt, plötzlich offline oder der Browser warnt? Rufen Sie mich an:",
    },
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question: "Brauche ich technisches Wissen?",
        answer:
          "Nein. Ich kümmere mich um die Technik und erkläre Ihnen alles so, dass Sie es verstehen.",
      },
      {
        question: "Können Sie meine bestehende Website übernehmen?",
        answer:
          "Ja, und der Umzug zu mir ist kostenlos. Vorher sage ich Ihnen, ob ich sie so weiter betreuen kann oder ob ein Neuaufbau sinnvoller ist.",
      },
      {
        question: "Arbeiten Sie auch vor Ort?",
        answer:
          "Ja, gern. Ich komme vorbei oder wir arbeiten remote, ganz wie es Ihnen lieber ist.",
      },
    ],
  },
  en: {
    title: "Websites for Small Businesses & Clubs | Hannes Schaletzky",
    description:
      "Secure websites for small businesses, clubs and self-employed people: check-up for 250 €, new websites from 599 €, hosting from 25 € a month. Personal and fair.",
    hero: {
      title: "Everything around your website,",
      highlight: "one person to talk to.",
      cta: "Get in touch",
      text: "Personal & fair. On-site in Berlin or remote. For self-employed people, small businesses and clubs.",
    },
    offersEyebrow: "Offers & prices",
    offersHeading: "Clear prices, no surprises.",
    vat: "All prices incl. 19 % VAT.",
    emergency: {
      label: "Emergency?",
      text: "Website hacked, suddenly offline or the browser shows a warning? Call me:",
    },
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "Do I need any technical knowledge?",
        answer:
          "No. I take care of the technology and explain everything in a way that makes sense to you.",
      },
      {
        question: "Can you take over my existing website?",
        answer:
          "Yes, and moving it to me is free. Beforehand I tell you whether I can maintain it as it is or whether a rebuild makes more sense.",
      },
      {
        question: "Do you work on-site?",
        answer:
          "Yes, happily. I can come by or we work remotely, whatever you prefer.",
      },
    ],
  },
};

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return pageMeta({
    title: text[lang].title,
    description: text[lang].description,
    path: "/websites",
    lang,
    image: "websites",
  });
};

export default function Websites() {
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

        <Testimonials group="websites" className="bg-navy-lighter" />

        {/* offers: equal tiles, each one links to its own page */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.offersEyebrow}>
              {t.offersHeading}
            </SectionHeading>
            <OfferTiles />
            {/* no tile for emergencies: in a crisis people call, they don't compare */}
            <p className="mt-6 border-l-2 border-teal py-1 pl-4 leading-relaxed">
              <span className="font-semibold text-white">
                {t.emergency.label}
              </span>{" "}
              {t.emergency.text}{" "}
              <a
                href={phone.href}
                className="whitespace-nowrap font-semibold text-teal hover:text-teal-light"
              >
                {phone.label}
              </a>
            </p>
            {/* final prices incl. VAT, required when consumers may order (PAngV) */}
            <p className="mt-6 text-sm text-slate-400">{t.vat}</p>
          </div>
        </section>

        <AboutMeSection className="bg-navy-lighter" />

        <FaqSection
          heading={t.faqHeading}
          faqs={t.faqs}
          className="bg-navy-light"
        />

        {/* the faq has its own background, so the box needs its own gap */}
        <div className="pt-16 sm:pt-24">
          <ContactBox />
        </div>
      </main>

      <Footer />
    </div>
  );
}
