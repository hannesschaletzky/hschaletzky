import type { MetaFunction } from "react-router";
import OfferPage from "~/components/site/offerPage";
import Section from "~/components/site/section";
import ClimbSteps from "~/components/site/climbSteps";
import FeatureStrokes from "~/components/site/featureStrokes";
import PricingSection from "~/components/site/pricingSection";
import { pageMeta } from "~/components/site/pageMeta";
import { calUrl } from "~/components/site/siteNav";
import { langFromParams, localize, useLang } from "~/i18n";
import { offerLoader } from "~/ratgeber.server";

export const loader = offerLoader("/websites/google-sichtbarkeit");

// fixed-price package for being found on Google: the basics put in order, not a
// running SEO contract and no ranking promises
const text = {
  de: {
    title:
      "Google-Sichtbarkeit: besser gefunden werden, 390 € | Hannes Schaletzky",
    description:
      "Google-Unternehmensprofil, Search Console, Seitentitel und Ladezeit: Ich bringe die Grundlagen Ihrer Website in Ordnung, damit Kunden Sie leichter bei Google finden. Festpreis 390 €.",
    hero: {
      title: "Damit Kunden Sie",
      highlight: "leichter bei Google finden.",
      cta: "Kostenloses Erstgespräch buchen",
      ctaHref: calUrl,
      text: "Ihre Website ist online, aber kaum jemand findet sie? Ich bringe die Grundlagen bei Google in Ordnung. Festpreis 390 €.",
    },
    includedEyebrow: "Was ich mache",
    includedHeading: "Die Grundlagen, sauber erledigt.",
    included: [
      {
        title: "Google-Unternehmensprofil",
        text: "Profil anlegen oder überarbeiten: Öffnungszeiten, Kategorien, Fotos und Link.",
      },
      {
        title: "Search Console",
        text: "Googles kostenloses Werkzeug für Website-Besitzer: einrichten, Seiten einreichen und gemeldete Fehler angehen.",
      },
      {
        title: "Seitentitel & Beschreibungen",
        text: "Titel und Beschreibung für jede wichtige Seite, so wie Kunden suchen.",
      },
      {
        title: "Ladezeit",
        text: "Zu große Bilder verkleinern und, wo möglich, Bremsen entfernen.",
      },
      {
        title: "Technische Grundlagen",
        text: "Weiterleitungen, defekte Links und die Darstellung auf dem Handy.",
      },
      {
        title: "Kurzer Bericht",
        text: "Was ich gemacht habe und was Sie selbst weiter tun können.",
      },
    ],
    stepsEyebrow: "So läuft es ab",
    stepsHeading: "In drei Schritten erledigt.",
    steps: [
      {
        title: "Kennenlernen",
        text: "Wir sprechen kurz darüber, wer Ihre Kunden sind und wonach sie bei Google suchen.",
      },
      {
        title: "Umsetzen",
        text: "Sie geben mir Zugang, ich setze es meist in etwa einer Woche um.",
      },
      {
        title: "Übergeben",
        text: "Ein kurzer Bericht, und ich zeige Ihnen, wo Sie selbst nachsehen können.",
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
          "Der Check-up prüft Ihre Website von außen und zeigt, was zu tun ist. Hier setze ich selbst um, und zwar die Grundlagen rund um Google und Ladezeit.",
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
      "Google Business Profile, Search Console, page titles and loading time: I put the basics of your website in order so customers find you more easily on Google. Fixed price 390 €.",
    hero: {
      title: "So customers",
      highlight: "find you more easily on Google.",
      cta: "Book a free intro call",
      ctaHref: calUrl,
      text: "Your website is online, but hardly anyone finds it? I put the basics on Google in order. Fixed price 390 €.",
    },
    includedEyebrow: "What I do",
    includedHeading: "The basics, done properly.",
    included: [
      {
        title: "Google Business Profile",
        text: "Create or revise your profile: opening hours, categories, photos and link.",
      },
      {
        title: "Search Console",
        text: "Set it up, submit your pages and tackle reported errors.",
      },
      {
        title: "Page titles & descriptions",
        text: "A title and description for every key page, worded the way customers search.",
      },
      {
        title: "Loading time",
        text: "Shrink oversized images and, where possible, remove what slows it down.",
      },
      {
        title: "Technical basics",
        text: "Redirects, broken links and the mobile view.",
      },
      {
        title: "Short report",
        text: "What I did and what you can keep doing yourself.",
      },
    ],
    stepsEyebrow: "How it works",
    stepsHeading: "Done in three steps.",
    steps: [
      {
        title: "Get to know each other",
        text: "We talk briefly about who your customers are and what they search for on Google.",
      },
      {
        title: "Do the work",
        text: "You give me access, and I usually get it done in about a week.",
      },
      {
        title: "Hand over",
        text: "A short report, and I show you where to check things yourself.",
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
          "The Google Business Profile often works within a few days. It usually takes a few weeks for Google to re-evaluate your pages.",
      },
      {
        question: "Does this work with WordPress, Wix or Jimdo too?",
        answer:
          "Yes. Titles, descriptions and the Google profile can be adjusted anywhere. With site builders like Wix or Jimdo some things about loading time are fixed; I'll tell you which ones beforehand.",
      },
      {
        question: "How is this different from the check-up?",
        answer:
          "The check-up looks at your website from the outside and shows what needs doing. Here I do the work myself, for the basics around Google and loading time.",
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
    path: "/websites/google-sichtbarkeit",
    lang,
    image: "google-sichtbarkeit",
  });
};

export default function GoogleSichtbarkeit() {
  const lang = useLang();
  const t = text[lang];

  return (
    <OfferPage
      area="websites"
      current="/websites/google-sichtbarkeit"
      hero={t.hero}
      faq={{ heading: t.faqHeading, faqs: t.faqs }}
    >
      <Section
        eyebrow={t.includedEyebrow}
        heading={t.includedHeading}
        className="bg-navy-lighter"
      >
        <FeatureStrokes items={t.included} />
      </Section>

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
    </OfferPage>
  );
}
