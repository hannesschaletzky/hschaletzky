import type { MetaFunction } from "react-router";
import OfferPage from "~/components/site/offerPage";
import Section from "~/components/site/section";
import ClimbSteps from "~/components/site/climbSteps";
import FeatureStrokes from "~/components/site/featureStrokes";
import Testimonials from "~/components/site/testimonials";
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
    title: "Google-Unternehmensprofil ab 149 € | Hannes Schaletzky",
    description:
      "Google-Unternehmensprofil anlegen oder überarbeiten ab 149 €, oder das ganze Paket mit Search Console, Seitentiteln und Ladezeit für 390 €. Festpreise.",
    hero: {
      title: "Damit Kunden Sie",
      highlight: "leichter bei Google finden.",
      cta: "Kostenloses Erstgespräch buchen",
      ctaHref: calUrl,
      phone: true,
      text: "Vom Google-Unternehmensprofil bis zur Search Console: Ich bringe die Grundlagen bei Google in Ordnung.",
      prices: {
        tiles: [
          { label: "Nur das Profil", value: "149 €" },
          { label: "Ganzes Paket", value: "390 €" },
        ],
        note: "jeweils einmalig, inkl. 19 % MwSt.",
      },
    },
    includedEyebrow: "Was ich mache",
    includedHeading: "Die Grundlagen, sauber erledigt.",
    includedNote:
      "Im Paket Unternehmensprofil ist nur der erste Punkt enthalten, im ganzen Paket alle.",
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
        text: "Sie geben mir Zugang, ich setze es meist in etwa einer Woche um. Bei einem neuen Profil kommt die Bestätigung durch Google dazu.",
      },
      {
        title: "Übergeben",
        text: "Ein kurzer Bericht, und ich zeige Ihnen, wo Sie selbst nachsehen können.",
      },
    ],
    pricingEyebrow: "Preis",
    pricingHeading: "Zwei Pakete, feste Preise.",
    featuresLabel: "Enthalten",
    packages: [
      {
        name: "Unternehmensprofil",
        description: "Der Einstieg: Ihr Eintrag bei Google und Google Maps.",
        price: "149 €",
        priceNote: "Festpreis, einmalig, inkl. 19 % MwSt.",
        features: [
          "Google-Unternehmensprofil anlegen oder überarbeiten",
          "Öffnungszeiten und Kategorien",
          "Fotos",
          "Link zu Ihrer Website",
        ],
        cta: {
          label: "Kontakt aufnehmen",
          href: "/contact?thema=google-unternehmensprofil",
        },
      },
      {
        name: "Google-Sichtbarkeit",
        description: "Das ganze Paket, das Unternehmensprofil eingeschlossen.",
        price: "390 €",
        priceNote: "Festpreis, einmalig, inkl. 19 % MwSt.",
        features: ["Alles aus dem Paket Unternehmensprofil"],
        extras: [
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
          "Änderungen an einem bestehenden Google-Unternehmensprofil sind oft nach wenigen Tagen zu sehen, ein neues Profil erst, wenn Google es bestätigt hat. Bis Google Ihre Seiten neu bewertet, dauert es meist einige Wochen.",
      },
      {
        question: "Muss Google das Profil erst bestätigen?",
        answer:
          "Ja, bei einem neuen Profil. Google prüft, ob es Ihren Betrieb wirklich gibt, zum Beispiel per Postkarte mit Code oder per kurzem Video. Das kann einige Tage dauern und liegt nicht in meiner Hand. Ich sage Ihnen, was zu tun ist, sobald Google den Weg vorgibt.",
      },
      {
        question: "Funktioniert das auch mit WordPress, Wix oder Jimdo?",
        answer:
          "Ja. Titel, Beschreibungen und das Google-Unternehmensprofil lassen sich überall anpassen. Bei Baukästen wie Wix oder Jimdo ist bei der Ladezeit manches vorgegeben, das sage ich Ihnen vorher.",
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
    title: "Google Business Profile from 149 € | Hannes Schaletzky",
    description:
      "Create or revise your Google Business Profile from 149 €, or the whole package with Search Console, page titles and loading time for 390 €. Fixed prices.",
    hero: {
      title: "So customers",
      highlight: "find you more easily on Google.",
      cta: "Book a free intro call",
      ctaHref: calUrl,
      phone: true,
      text: "From the Google Business Profile to Search Console: I put the basics on Google in order.",
      prices: {
        tiles: [
          { label: "Profile only", value: "149 €" },
          { label: "Whole package", value: "390 €" },
        ],
        note: "each one-off, incl. 19 % VAT",
      },
    },
    includedEyebrow: "What I do",
    includedHeading: "The basics, done properly.",
    includedNote:
      "The Business Profile package covers only the first point, the whole package all of them.",
    included: [
      {
        title: "Google Business Profile",
        text: "Create or revise your profile: opening hours, categories, photos and link.",
      },
      {
        title: "Search Console",
        text: "Google's free tool for website owners: set it up, submit your pages and tackle reported errors.",
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
        text: "You give me access, and I usually get it done in about a week. A new profile also needs Google's verification.",
      },
      {
        title: "Hand over",
        text: "A short report, and I show you where to check things yourself.",
      },
    ],
    pricingEyebrow: "Price",
    pricingHeading: "Two packages, fixed prices.",
    featuresLabel: "Included",
    packages: [
      {
        name: "Business Profile",
        description:
          "The starting point: your listing on Google and Google Maps.",
        price: "149 €",
        priceNote: "Fixed price, one-off, incl. 19 % VAT.",
        features: [
          "Create or revise your Google Business Profile",
          "Opening hours and categories",
          "Photos",
          "Link to your website",
        ],
        cta: {
          label: "Get in touch",
          href: "/en/contact?thema=google-unternehmensprofil",
        },
      },
      {
        name: "Google visibility",
        description: "The whole package, Business Profile included.",
        price: "390 €",
        priceNote: "Fixed price, one-off, incl. 19 % VAT.",
        features: ["Everything from the Business Profile package"],
        extras: [
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
          "Changes to an existing Google Business Profile often show within a few days, a new profile only once Google has verified it. It usually takes a few weeks for Google to re-evaluate your pages.",
      },
      {
        question: "Does Google have to verify the profile first?",
        answer:
          "Yes, for a new profile. Google checks that your business really exists, for example by postcard with a code or by a short video. That can take a few days and is not in my hands. I tell you what to do as soon as Google sets the way.",
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
      packages={t.packages}
      heroQuote="Lena Z."
      faq={{ heading: t.faqHeading, faqs: t.faqs }}
    >
      <Section
        eyebrow={t.includedEyebrow}
        heading={t.includedHeading}
        className="bg-navy-lighter"
      >
        <FeatureStrokes items={t.included} />
        <p className="mt-8 text-sm text-slate-400">{t.includedNote}</p>
      </Section>

      {/* a client voice about being found on Google */}
      <Testimonials group="websites" only="Lena Z." />

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
