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
import { langFromParams, langLoader, localize, useLang } from "~/i18n";

export const loader = langLoader;

// overview of the website offers: one tile each, the details live on their own pages
const text = {
  de: {
    title:
      "Websites für kleine Unternehmen & Vereine in Berlin | Hannes Schaletzky",
    description:
      "Website-Check-up für 250 €, neue Websites ab 599 €, Hosting ab 25 € im Monat. Persönlich und fair, für kleine Unternehmen, Vereine und Selbstständige.",
    hero: {
      eyebrow: "Für kleine Unternehmen & Vereine",
      title: "Ihre Website,",
      highlight: "einfach gut betreut.",
      cta: "Kontakt aufnehmen",
      text: "Persönlich, fair, vor Ort in Berlin oder remote. Für Selbstständige, kleine Unternehmen und Vereine.",
    },
    offersEyebrow: "Angebote & Preise",
    offersHeading: "Klare Preise, keine Überraschungen.",
    vat: "Alle Preise inkl. 19 % MwSt.",
    security: "Sorgen um die Sicherheit Ihrer Website? So gehe ich vor",
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
      "Website check-up for 250 €, new websites from 599 €, hosting from 25 € a month. Personal and fair, for self-employed people, small businesses and clubs.",
    hero: {
      eyebrow: "For small businesses & clubs",
      title: "Your website,",
      highlight: "simply taken care of.",
      cta: "Get in touch",
      text: "Personal, fair, on-site in Berlin or remote. For self-employed people, small businesses and clubs.",
    },
    offersEyebrow: "Offers & prices",
    offersHeading: "Clear prices, no surprises.",
    vat: "All prices incl. 19 % VAT.",
    security:
      "Worried about the security of your website? Here's how I go about it",
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
          eyebrow={t.hero.eyebrow}
          title={t.hero.title}
          highlight={t.hero.highlight}
          cta={{ label: t.hero.cta, href: localize("/contact", lang) }}
        >
          {t.hero.text}
        </PageHero>

        {/* offers: equal tiles, each one links to its own page */}
        <section className="bg-navy-lighter">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.offersEyebrow}>
              {t.offersHeading}
            </SectionHeading>
            <OfferTiles />
            {/* final prices incl. VAT, required when consumers may order (PAngV) */}
            <p className="mt-6 text-sm text-slate-400">{t.vat}</p>
            <a
              href={localize("/website-sicherheit", lang)}
              className="group mt-8 inline-block font-semibold text-teal hover:text-teal-light"
            >
              {t.security}{" "}
              <span
                aria-hidden="true"
                className="inline-block transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </section>

        <AboutMeSection />

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
