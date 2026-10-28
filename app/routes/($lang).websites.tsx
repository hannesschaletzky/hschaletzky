import type { MetaFunction } from "@remix-run/node";
import ClimbSteps from "~/components/site/climbSteps";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import { pageMeta } from "~/components/site/pageMeta";
import SectionHeading from "~/components/site/sectionHeading";
import { langFromParams, langLoader, useLang } from "~/i18n";

export const loader = langLoader;

const text = {
  de: {
    title: "Websites für kleine Unternehmen & Vereine | Hannes Schaletzky",
    description:
      "Website-Check-up ab 250 €, neue Websites ab 990 €, Hosting ab 49 € im Monat – persönlich und fair, für kleine Unternehmen, Vereine und Selbstständige.",
    mail: "mailto:info@hschaletzky.com?subject=Website-Anfrage",
    hero: {
      eyebrow: "Für kleine Unternehmen & Vereine",
      title: "Ihre Website,",
      highlight: "einfach gut betreut.",
      cta: "Unverbindlich anfragen",
      text: "Persönlich, fair, vor Ort oder remote – für Selbstständige, kleine Unternehmen und Vereine.",
    },
    offersEyebrow: "Angebote & Preise",
    offersHeading: "Klare Preise, keine Überraschungen.",
    offers: [
      {
        title: "Website-Check-up",
        price: "ab 250 €",
        text: "Ich prüfe Ihre bestehende Website auf Technik, Sicherheit, Auffindbarkeit und Nutzerfreundlichkeit. Sie erhalten einen schriftlichen Bericht (PDF) mit priorisierten Empfehlungen und einer Aufwandsschätzung – und wir besprechen ihn 30 Minuten per Video oder Telefon. Teurer wird es nur bei sehr komplexen Websites – und dann sage ich Ihnen das vorher.",
      },
      {
        title: "Website-Erstellung",
        price: "ab 990 €",
        text: "Eine moderne, schnelle Website, die auf jedem Gerät gut aussieht und die Sie verstehen. Enthalten sind bis zu 5 Seiten in einer Sprache, Impressum und Datenschutzerklärung – größere Websites, Shops oder weitere Sprachen nach Aufwand.",
      },
      {
        title: "Hosting & Wartung",
        price: "ab 49 € / Monat",
        text: "Updates, Sicherheit und technische Hilfe, wenn etwas hakt – damit Sie sich nicht darum kümmern müssen. Enthalten sind Hosting, SSL, Backups und kleine Änderungen bis 30 Minuten im Monat – alles darüber nach Aufwand.",
      },
      {
        title: "KI & Automatisierung",
        price: "auf Anfrage",
        text: "Wiederkehrende Arbeit automatisieren, zum Beispiel E-Mails, Termine und Routinen. Wir schauen zuerst, wo Sie am meisten Zeit verlieren – und ich baue nur, was Ihnen wirklich Arbeit abnimmt.",
      },
    ],
    vat: "Alle Preise inkl. 19 % MwSt.",
    stepsEyebrow: "So läuft es ab",
    stepsHeading: "In drei Schritten zu Ihrer Website.",
    steps: [
      {
        title: "Kontakt aufnehmen",
        text: "Schreiben Sie mir oder buchen Sie ein Erstgespräch und erzählen Sie mir, was Sie brauchen.",
      },
      {
        title: "Klares Angebot",
        text: "Sie bekommen ein Angebot mit einem fairen Preis, bevor die Arbeit beginnt.",
      },
      {
        title: "Online & betreut",
        text: "Ihre Website geht online – und ich bleibe danach Ihr Ansprechpartner.",
      },
    ],
    referencesEyebrow: "Referenzen",
    referencesHeading: "Websites, die ich betreue.",
    references: ["Technisches Update & Wartung", "Technische Wartung"],
    since: "seit",
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question: "Brauche ich technisches Wissen?",
        answer:
          "Nein. Ich kümmere mich um die Technik und erkläre alles verständlich.",
      },
      {
        question: "Können Sie meine bestehende Website übernehmen?",
        answer:
          "Ja. Nach einem Website-Check-up sage ich Ihnen, ob ich sie so weiter betreuen kann oder ob ein Neuaufbau sinnvoller ist.",
      },
      {
        question: "Wie lange dauert eine neue Website?",
        answer:
          "Meist 2–4 Wochen, je nachdem, wie schnell Texte und Bilder bereitstehen.",
      },
      {
        question: "Arbeiten Sie auch vor Ort?",
        answer: "Ja – vor Ort oder remote, ganz wie es Ihnen am besten passt.",
      },
    ],
  },
  en: {
    title: "Websites for Small Businesses & Clubs | Hannes Schaletzky",
    description:
      "Website check-up from 250 €, new websites from 990 €, hosting from 49 € a month – personal and fair, for self-employed people, small businesses and clubs.",
    mail: "mailto:info@hschaletzky.com?subject=Website%20inquiry",
    hero: {
      eyebrow: "For small businesses & clubs",
      title: "Your website,",
      highlight: "simply taken care of.",
      cta: "Send an inquiry",
      text: "Personal, fair, on-site or remote – for self-employed people, small businesses and clubs.",
    },
    offersEyebrow: "Offers & prices",
    offersHeading: "Clear prices, no surprises.",
    offers: [
      {
        title: "Website check-up",
        price: "from 250 €",
        text: "I check your existing website for technology, security, findability and usability. You get a written report (PDF) with prioritised recommendations and an effort estimate – and we go through it in a 30-minute video or phone call. It only costs more for very complex websites – and I'll tell you beforehand.",
      },
      {
        title: "Website creation",
        price: "from 990 €",
        text: "A modern, fast website that looks good on every device and that you can understand. Includes up to 5 pages in one language, imprint and privacy policy – bigger sites, shops or more languages depending on the effort.",
      },
      {
        title: "Hosting & maintenance",
        price: "from 49 € / month",
        text: "Updates, security and technical help when something gets stuck – so you don't have to think about it. Includes hosting, SSL, backups and small changes up to 30 minutes a month – anything beyond that depending on the effort.",
      },
      {
        title: "AI & automation",
        price: "on request",
        text: "Automate recurring work such as mails, appointments and routines. We start by looking at where you lose the most time – and I only build what really saves you work.",
      },
    ],
    vat: "All prices incl. 19 % VAT.",
    stepsEyebrow: "How it works",
    stepsHeading: "Three steps to your website.",
    steps: [
      {
        title: "Get in touch",
        text: "Write me or book a call and tell me what you need.",
      },
      {
        title: "Clear offer",
        text: "You get a proposal with a fair price before any work starts.",
      },
      {
        title: "Online & cared for",
        text: "Your website goes live – and I stay your contact afterwards.",
      },
    ],
    referencesEyebrow: "References",
    referencesHeading: "Websites I look after.",
    references: ["Technical update & maintenance", "Technical maintenance"],
    since: "since",
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "Do I need any technical knowledge?",
        answer:
          "No. I take care of the technology and explain everything in plain words.",
      },
      {
        question: "Can you take over my existing website?",
        answer:
          "Yes. After a check-up I'll tell you whether I can maintain it as it is or whether a rebuild makes more sense.",
      },
      {
        question: "How long does a new website take?",
        answer:
          "Usually 2–4 weeks, depending on how quickly texts and images are ready.",
      },
      {
        question: "Do you work on-site?",
        answer: "Yes – on-site or remote, whatever suits you best.",
      },
    ],
  },
};

// same order as the reference labels above
const references = [
  {
    name: "Deutsch-Französische Gesellschaft Augsburg und Schwaben e. V.",
    year: "2024",
    url: "https://dfg-augsburg.eu/",
  },
  {
    name: "Freundeskreis Peutinger-Gymnasium Augsburg e. V.",
    year: "2023",
    since: true,
    url: "https://freundeskreis-peutinger.de/",
  },
];

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return pageMeta({
    title: text[lang].title,
    description: text[lang].description,
    path: "/websites",
    lang,
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
          cta={{ label: t.hero.cta, href: t.mail }}
        >
          {t.hero.text}
        </PageHero>

        {/* offers */}
        <section className="bg-navy-lighter">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.offersEyebrow}>
              {t.offersHeading}
            </SectionHeading>
            <div className="grid gap-6 sm:grid-cols-2">
              {t.offers.map((offer) => (
                <div
                  key={offer.title}
                  className="flex flex-col rounded-2xl border border-white/10 p-6"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-bold text-white">
                      {offer.title}
                    </h3>
                    <p className="shrink-0 font-semibold text-teal">
                      {offer.price}
                    </p>
                  </div>
                  <p className="mt-3 leading-relaxed">{offer.text}</p>
                </div>
              ))}
            </div>
            {/* final prices incl. VAT, required when consumers may order (PAngV) */}
            <p className="mt-6 text-sm text-slate-400">{t.vat}</p>
          </div>
        </section>

        {/* process */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.stepsEyebrow}>
              {t.stepsHeading}
            </SectionHeading>
            <ClimbSteps steps={t.steps} />
          </div>
        </section>

        {/* reference */}
        <section className="bg-navy-light">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.referencesEyebrow}>
              {t.referencesHeading}
            </SectionHeading>
            <div className="grid gap-6 md:grid-cols-2">
              {references.map((reference, i) => (
                <a
                  key={reference.url}
                  href={reference.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-white/10 p-6 transition hover:border-teal/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                      {t.references[i]}
                    </p>
                    <p className="shrink-0 rounded-full border border-white/10 px-3 py-0.5 text-sm font-semibold text-white">
                      {reference.since ? `${t.since} ` : ""}
                      {reference.year}
                    </p>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    {reference.name}
                  </h3>
                  <p className="mt-4 font-semibold text-white group-hover:text-teal">
                    {reference.url.replace("https://", "").replace(/\/$/, "")} →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* faq */}
        <section>
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow="FAQ">{t.faqHeading}</SectionHeading>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {t.faqs.map((faq) => (
                <div key={faq.question} className="py-5">
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-2 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactBox />
      </main>

      <Footer />
    </div>
  );
}
