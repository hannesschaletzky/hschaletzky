import type { MetaFunction } from "react-router";
import ClimbSteps from "~/components/site/climbSteps";
import ContactBox from "~/components/site/contactBox";
import FaqSection from "~/components/site/faqSection";
import FeatureStrokes from "~/components/site/featureStrokes";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import { RelatedOffers } from "~/components/site/offerTiles";
import PricingSection from "~/components/site/pricingSection";
import { pageMeta } from "~/components/site/pageMeta";
import SectionHeading from "~/components/site/sectionHeading";
import { langFromParams, langLoader, localize, useLang } from "~/i18n";

export const loader = langLoader;

// fixed-price package for being found on Google: the basics put in order, not a
// running SEO contract and no ranking promises
const text = {
  de: {
    title: "Google-Sichtbarkeit: besser gefunden werden, 390 € | Hannes Schaletzky",
    description:
      "Google-Unternehmensprofil, Search Console, Seitentitel und Ladezeit: Ich bringe die Grundlagen Ihrer Website in Ordnung, damit Kunden Sie bei Google finden. Festpreis 390 €.",
    hero: {
      title: "Damit Kunden Sie",
      highlight: "bei Google finden.",
      cta: "Kontakt aufnehmen",
      text: "Ihre Website ist online, aber kaum jemand findet sie? Ich bringe die Grundlagen in Ordnung, die Google braucht, um Ihre Seite zu verstehen und Menschen aus Ihrer Gegend zu zeigen.",
    },
    includedEyebrow: "Was ich mache",
    includedHeading: "Die Grundlagen, sauber erledigt.",
    included: [
      {
        title: "Google-Unternehmensprofil",
        text: "Ich lege Ihr Profil an oder überarbeite es: Öffnungszeiten, Kategorien, Fotos und der Link zu Ihrer Website.",
      },
      {
        title: "Search Console",
        text: "Ich richte das kostenlose Werkzeug von Google ein, reiche Ihre Seiten ein und behebe gemeldete Fehler.",
      },
      {
        title: "Seitentitel & Beschreibungen",
        text: "Für jede wichtige Seite ein Titel und eine Beschreibung, so formuliert, wie Ihre Kunden suchen.",
      },
      {
        title: "Ladezeit",
        text: "Ich verkleinere zu große Bilder und entferne, was die Seite unnötig bremst.",
      },
      {
        title: "Technische Grundlagen",
        text: "Weiterleitungen, defekte Links und die Darstellung auf dem Handy, damit Google nichts im Weg steht.",
      },
      {
        title: "Kurzer Bericht",
        text: "Was ich gemacht habe und was Sie selbst weiter tun können, etwa um Bewertungen zu bitten.",
      },
    ],
    stepsEyebrow: "So läuft es ab",
    stepsHeading: "In drei Schritten besser gefunden.",
    steps: [
      {
        title: "Kennenlernen",
        text: "Wir sprechen kurz darüber, wer Ihre Kunden sind und wonach sie bei Google suchen.",
      },
      {
        title: "Umsetzen",
        text: "Sie geben mir Zugang zu Website und Google-Profil, und ich erledige alles innerhalb von etwa einer Woche.",
      },
      {
        title: "Übergeben",
        text: "Sie bekommen einen kurzen Bericht, und ich zeige Ihnen, wo Sie selbst nachsehen können, wie Sie gefunden werden.",
      },
    ],
    pricingEyebrow: "Preis",
    pricingHeading: "Ein Paket, ein fester Preis.",
    featuresLabel: "Enthalten",
    packages: [
      {
        name: "Google-Sichtbarkeit",
        price: "390 €",
        priceNote: "Festpreis, einmalig, inkl. 19 % MwSt.",
        features: [
          "Google-Unternehmensprofil anlegen oder überarbeiten",
          "Search Console einrichten und Seiten einreichen",
          "Seitentitel und Beschreibungen für bis zu zehn Seiten",
          "Ladezeit verbessern",
          "Kurzer Bericht mit den nächsten Schritten",
        ],
        cta: { label: "Kontakt aufnehmen", href: "/contact" },
      },
    ],
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question: "Garantieren Sie bessere Platzierungen bei Google?",
        answer:
          "Nein, das kann niemand seriös versprechen. Ich räume aus dem Weg, was Google daran hindert, Ihre Seite zu verstehen und zu zeigen. Wie weit oben Sie landen, hängt auch davon ab, wie viele Anbieter es in Ihrer Gegend gibt.",
      },
      {
        question: "Wann sehe ich eine Wirkung?",
        answer:
          "Das Google-Unternehmensprofil wirkt oft schon nach wenigen Tagen. Bis Google Ihre Seiten neu bewertet, dauert es meist einige Wochen.",
      },
      {
        question: "Funktioniert das auch mit WordPress, Wix oder Jimdo?",
        answer:
          "Ja. Titel, Beschreibungen und das Google-Profil lassen sich überall anpassen. Bei Baukästen wie Wix oder Jimdo ist bei der Ladezeit manches vorgegeben, das sage ich Ihnen vorher.",
      },
      {
        question: "Was ist der Unterschied zum Check-up?",
        answer:
          "Der Check-up prüft Ihre ganze Website von außen und zeigt, was zu tun ist. Hier setze ich selbst um, und zwar alles, was mit Google und der Ladezeit zu tun hat.",
      },
      {
        question: "Meine Website hat mehr als zehn Seiten. Geht das trotzdem?",
        answer:
          "Ja. Die zehn wichtigsten Seiten sind im Preis enthalten. Für weitere nenne ich Ihnen vorher einen Preis.",
      },
    ],
  },
  en: {
    title: "Google Visibility: Get Found for 390 € | Hannes Schaletzky",
    description:
      "Google Business Profile, Search Console, page titles and loading time: I put the basics of your website in order so customers find you on Google. Fixed price 390 €.",
    hero: {
      title: "So customers",
      highlight: "find you on Google.",
      cta: "Get in touch",
      text: "Your website is online, but hardly anyone finds it? I put the basics in order that Google needs to understand your site and show it to people nearby.",
    },
    includedEyebrow: "What I do",
    includedHeading: "The basics, done properly.",
    included: [
      {
        title: "Google Business Profile",
        text: "I create or revise your profile: opening hours, categories, photos and the link to your website.",
      },
      {
        title: "Search Console",
        text: "I set up Google's free tool, submit your pages and fix the errors it reports.",
      },
      {
        title: "Page titles & descriptions",
        text: "A title and description for every important page, worded the way your customers search.",
      },
      {
        title: "Loading time",
        text: "I shrink oversized images and remove what slows the site down for no reason.",
      },
      {
        title: "Technical basics",
        text: "Redirects, broken links and the mobile view, so nothing stands in Google's way.",
      },
      {
        title: "Short report",
        text: "What I did and what you can keep doing yourself, such as asking for reviews.",
      },
    ],
    stepsEyebrow: "How it works",
    stepsHeading: "Three steps to being found.",
    steps: [
      {
        title: "Get to know",
        text: "We talk briefly about who your customers are and what they search for on Google.",
      },
      {
        title: "Do the work",
        text: "You give me access to your website and Google profile, and I get everything done within about a week.",
      },
      {
        title: "Hand over",
        text: "You get a short report, and I show you where to check yourself how people find you.",
      },
    ],
    pricingEyebrow: "Price",
    pricingHeading: "One package, one fixed price.",
    featuresLabel: "Included",
    packages: [
      {
        name: "Google visibility",
        price: "390 €",
        priceNote: "Fixed price, one-off, incl. 19 % VAT.",
        features: [
          "Create or revise your Google Business Profile",
          "Set up Search Console and submit your pages",
          "Page titles and descriptions for up to ten pages",
          "Improve loading time",
          "Short report with the next steps",
        ],
        cta: { label: "Get in touch", href: "/en/contact" },
      },
    ],
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "Do you guarantee better rankings on Google?",
        answer:
          "No, nobody can honestly promise that. I clear away what keeps Google from understanding and showing your site. How high you end up also depends on how many competitors there are nearby.",
      },
      {
        question: "When will I see an effect?",
        answer:
          "The Google Business Profile often works within a few days. Until Google re-evaluates your pages usually takes a few weeks.",
      },
      {
        question: "Does this work with WordPress, Wix or Jimdo too?",
        answer:
          "Yes. Titles, descriptions and the Google profile can be adjusted anywhere. With site builders like Wix or Jimdo some things about loading time are fixed, and I tell you beforehand.",
      },
      {
        question: "How is this different from the check-up?",
        answer:
          "The check-up looks at your whole website from the outside and shows what needs doing. Here I do the work myself, for everything to do with Google and loading time.",
      },
      {
        question: "My website has more than ten pages. Does that work?",
        answer:
          "Yes. The ten most important pages are included in the price. For more, I tell you a price beforehand.",
      },
    ],
  },
};

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return pageMeta({
    title: text[lang].title,
    description: text[lang].description,
    path: "/google-sichtbarkeit",
    lang,
    image: "google-sichtbarkeit",
  });
};

export default function GoogleSichtbarkeit() {
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
            <SectionHeading eyebrow={t.includedEyebrow}>
              {t.includedHeading}
            </SectionHeading>
            <FeatureStrokes items={t.included} />
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.stepsEyebrow}>
              {t.stepsHeading}
            </SectionHeading>
            <ClimbSteps steps={t.steps} />
          </div>
        </section>

        <PricingSection
          eyebrow={t.pricingEyebrow}
          heading={t.pricingHeading}
          packages={t.packages}
          featuresLabel={t.featuresLabel}
        />

        <FaqSection
          heading={t.faqHeading}
          faqs={t.faqs}
          className="bg-navy-light"
        />

        <RelatedOffers current="/google-sichtbarkeit" />

        <ContactBox />
      </main>

      <Footer />
    </div>
  );
}
