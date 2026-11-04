import type { MetaFunction } from "react-router";
import ClimbSteps from "~/components/site/climbSteps";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import { pageMeta } from "~/components/site/pageMeta";
import SectionHeading from "~/components/site/sectionHeading";
import { calUrl } from "~/components/site/siteNav";
import { langFromParams, langLoader, useLang } from "~/i18n";

export const loader = langLoader;

const text = {
  de: {
    title: "Websites für kleine Unternehmen & Vereine | Hannes Schaletzky",
    description:
      "Website-Check-up für 250 €, neue Websites ab 599 €, Hosting ab 25 € im Monat. Persönlich und fair, für kleine Unternehmen, Vereine und Selbstständige.",
    hero: {
      eyebrow: "Für kleine Unternehmen & Vereine",
      title: "Ihre Website,",
      highlight: "einfach gut betreut.",
      cta: "Kostenloses Erstgespräch buchen",
      text: "Persönlich, fair, vor Ort oder remote. Für Selbstständige, kleine Unternehmen und Vereine.",
    },
    offersEyebrow: "Angebote & Preise",
    offersHeading: "Klare Preise, keine Überraschungen.",
    // short cards first, the two with tiers below, so each row has a similar height
    offers: [
      {
        title: "Website-Check-up",
        price: "250 €",
        text: "Ich prüfe Ihre gesamte Website auf Technik, Sicherheit und Auffindbarkeit und schaue mir bis zu 5 wichtige Seiten genau an. Sie bekommen einen Bericht (PDF) mit klaren Empfehlungen, und wir besprechen ihn in 30 Minuten per Video oder Telefon.",
        links: [
          {
            label: "Beispielbericht ansehen (PDF)",
            href: "/website-check-up-beispiel.pdf",
          },
        ],
      },
      {
        title: "KI & Automatisierung",
        price: "auf Anfrage",
        text: "Wiederkehrende Arbeit automatisieren, zum Beispiel E-Mails, Termine und Routinen. Wir schauen zuerst, wo Sie am meisten Zeit verlieren, und ich baue nur, was Ihnen wirklich Arbeit abnimmt.",
      },
      {
        title: "Website-Erstellung",
        text: "Eine moderne, schnelle Website, die auf jedem Gerät gut aussieht. Impressum und Datenschutzerklärung sind immer dabei.",
        tiers: [
          {
            name: "Onepager",
            price: "599 €",
            text: "Eine Seite mit allem Wichtigen: Leistungen, Über uns, Kontakt.",
          },
          {
            name: "Mehrseitig",
            price: "990 €",
            text: "Bis zu 5 Seiten, zum Beispiel Leistungen, Team, Termine und Kontakt.",
          },
        ],
        note: "Größere Websites, Shops oder weitere Sprachen nach Aufwand*.",
        linksLabel: "Beispiele:",
        links: [
          {
            label: "Physiotherapie",
            href: "https://physio-musterfrau.hschaletzky.com/",
          },
          {
            label: "Sportverein",
            href: "https://sv-musterstadt.hschaletzky.com/",
          },
          {
            label: "Tischlerei",
            href: "https://tischlerei-mustermann.hschaletzky.com/",
          },
        ],
      },
      {
        title: "Hosting & Wartung",
        text: "Updates, Sicherheit und schnelle Hilfe, wenn etwas hakt. Darum müssen Sie sich nicht mehr kümmern.",
        tiers: [
          {
            name: "Basis",
            price: "25 € / Monat",
            text: "Hosting, SSL, Backups und Updates.",
          },
          {
            name: "Plus",
            price: "49 € / Monat",
            text: "Alles aus Basis, dazu kleine Änderungen bis 30 Minuten im Monat.",
          },
        ],
        note: "Alle weiteren Änderungen nach Aufwand*.",
      },
    ],
    effort: "* Arbeit nach Aufwand: 71,40 € pro Stunde (60 € netto).",
    vat: "Alle Preise inkl. 19 % MwSt.",
    stepsEyebrow: "So läuft es ab",
    stepsHeading: "In drei Schritten zu Ihrer Website.",
    steps: [
      {
        title: "Kennenlernen",
        text: "Sie erzählen mir in einem kostenlosen Gespräch, was Sie vorhaben. Danach wissen Sie, welches Paket passt und was es kostet.",
      },
      {
        title: "Entwurf & Feinschliff",
        text: "Nach wenigen Tagen sehen Sie einen ersten Entwurf. Sie sagen mir, was Ihnen gefällt, und wir passen an, bis alles stimmt.",
      },
      {
        title: "Online & betreut",
        text: "Ihre Website geht online, und erst dann zahlen Sie. Danach bin ich weiter für Sie da.",
      },
    ],
    referencesEyebrow: "Referenzen",
    referencesHeading: "Websites, die ich betreue.",
    references: ["Technisches Update & Wartung", "Hosting & Wartung"],
    since: "seit",
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question: "Brauche ich technisches Wissen?",
        answer:
          "Nein. Ich kümmere mich um die Technik und erkläre Ihnen alles so, dass Sie es verstehen.",
      },
      {
        question: "Wie lange dauert eine neue Website?",
        answer:
          "Ein Onepager ist meist nach einer Woche fertig, eine mehrseitige Website nach etwa zwei Wochen. Wichtig ist nur, dass Texte und Bilder bereitliegen.",
      },
      {
        question: "Wer liefert Texte und Bilder?",
        answer:
          "Am besten Sie, denn Sie kennen Ihr Geschäft. Ich helfe gern beim Formulieren und suche bei Bedarf passende lizenzfreie Bilder.",
      },
      {
        question:
          "Ich habe noch kein Logo oder Corporate Design. Ist das ein Problem?",
        answer:
          "Nein. Auf Wunsch entwerfe ich Ihnen ein Logo und lege Farben und Schriften fest, die Sie auch für Flyer und Visitenkarten nutzen können. Gibt es schon Drucksachen oder ein Logo, übernehme ich den Stil, damit alles zusammenpasst. Arbeiten Sie mit einer Agentur, setze ich deren Vorgaben um.",
      },
      {
        question:
          "Können Sie auch eine Seite für ein einzelnes Angebot oder eine Aktion bauen?",
        answer:
          "Ja. Für eine Aktion, einen Kurs oder ein Angebot, das Sie auf Instagram, Facebook oder per Flyer bewerben, baue ich eine eigene Landingpage mit Anmeldung oder Kontaktformular. Links zu Ihren Social-Media-Kanälen sind auf jeder Website dabei. Was das kostet, hängt vom Umfang ab. Den Preis nenne ich Ihnen vorher.",
      },
      {
        question: "Kann ich Inhalte selbst ändern?",
        answer:
          "Ja. Auf Wunsch baue ich ein einfaches Redaktionssystem ein, mit dem Sie Texte und Bilder selbst pflegen können. Das rechne ich nach Aufwand ab. Sie können mir Änderungen aber auch einfach schicken.",
      },
      {
        question: "Wie läuft die Bezahlung?",
        answer:
          "Sie zahlen erst, wenn Ihre Website online ist und Ihnen gefällt. Hosting und Wartung rechne ich monatlich ab.",
      },
      {
        question: "Wie lange läuft Hosting & Wartung?",
        answer:
          "Sie können jeden Monat kündigen. Eine Mindestlaufzeit gibt es nicht.",
      },
      {
        question: "Wem gehören die Website und die Domain?",
        answer:
          "Die Website gehört Ihnen. Die Domain läuft am besten auf Ihren Namen, ich kann sie aber auch für Sie verwalten. Wenn Sie wechseln möchten, übergebe ich Ihnen alles.",
      },
      {
        question: "Können Sie meine bestehende Website übernehmen?",
        answer:
          "Ja. Nach einem Website-Check-up sage ich Ihnen, ob ich sie so weiter betreuen kann oder ob ein Neuaufbau sinnvoller ist.",
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
      cta: "Book a free intro call",
      text: "Personal, fair, on-site or remote. For self-employed people, small businesses and clubs.",
    },
    offersEyebrow: "Offers & prices",
    offersHeading: "Clear prices, no surprises.",
    offers: [
      {
        title: "Website check-up",
        price: "250 €",
        text: "I check your whole website for technology, security and findability and take a close look at up to 5 important pages. You get a report (PDF) with clear recommendations, and we go through it in a 30-minute video or phone call.",
        links: [
          {
            label: "View a sample report (PDF, German)",
            href: "/website-check-up-beispiel.pdf",
          },
        ],
      },
      {
        title: "AI & automation",
        price: "on request",
        text: "Automate recurring work such as mails, appointments and routines. We start by looking at where you lose the most time, and I only build what really saves you work.",
      },
      {
        title: "Website creation",
        text: "A modern, fast website that looks good on every device. Imprint and privacy policy are always included.",
        tiers: [
          {
            name: "One-pager",
            price: "599 €",
            text: "One page with everything important: services, about, contact.",
          },
          {
            name: "Multi-page",
            price: "990 €",
            text: "Up to 5 pages, for example services, team, dates and contact.",
          },
        ],
        note: "Bigger sites, shops or more languages depending on the effort*.",
        linksLabel: "Examples (German):",
        links: [
          {
            label: "physiotherapy",
            href: "https://physio-musterfrau.hschaletzky.com/",
          },
          {
            label: "sports club",
            href: "https://sv-musterstadt.hschaletzky.com/",
          },
          {
            label: "carpentry",
            href: "https://tischlerei-mustermann.hschaletzky.com/",
          },
        ],
      },
      {
        title: "Hosting & maintenance",
        text: "Updates, security and quick help when something gets stuck. You don't have to worry about any of it.",
        tiers: [
          {
            name: "Basic",
            price: "25 € / month",
            text: "Hosting, SSL, backups and updates.",
          },
          {
            name: "Plus",
            price: "49 € / month",
            text: "Everything in Basic, plus small changes up to 30 minutes a month.",
          },
        ],
        note: "Any further changes depending on the effort*.",
      },
    ],
    effort: "* Work billed by effort: 71.40 € per hour (60 € net).",
    vat: "All prices incl. 19 % VAT.",
    stepsEyebrow: "How it works",
    stepsHeading: "Three steps to your website.",
    steps: [
      {
        title: "Get to know each other",
        text: "You tell me in a free call what you have in mind. Afterwards you know which package fits and what it costs.",
      },
      {
        title: "Draft & polish",
        text: "After a few days you see a first draft. You tell me what you like, and we adjust until everything is right.",
      },
      {
        title: "Online & cared for",
        text: "Your website goes live, and only then do you pay. After that I'm still there for you.",
      },
    ],
    referencesEyebrow: "References",
    referencesHeading: "Websites I look after.",
    references: ["Technical update & maintenance", "Hosting & maintenance"],
    since: "since",
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "Do I need any technical knowledge?",
        answer:
          "No. I take care of the technology and explain everything in a way that makes sense to you.",
      },
      {
        question: "How long does a new website take?",
        answer:
          "A one-pager is usually ready after a week, a multi-page website after about two weeks. All it needs is for the texts and images to be ready.",
      },
      {
        question: "Who provides texts and images?",
        answer:
          "Ideally you, because you know your business. I'm happy to help with the wording and can find suitable royalty-free images if needed.",
      },
      {
        question:
          "I don't have a logo or corporate design yet. Is that a problem?",
        answer:
          "No. If you like, I design a logo and choose colours and fonts that you can also use for flyers and business cards. If you already have printed material or a logo, I adopt its style so everything fits together. If you work with an agency, I implement their guidelines.",
      },
      {
        question: "Can you also build a page for a single offer or campaign?",
        answer:
          "Yes. For a campaign, a course or an offer you promote on Instagram, Facebook or with flyers, I build a dedicated landing page with sign-up or a contact form. Links to your social media channels are part of every website. The cost depends on the scope. I tell you the price beforehand.",
      },
      {
        question: "Can I change content myself?",
        answer:
          "Yes. If you like, I add a simple content management system so you can edit texts and images yourself. I bill that by effort. You can also just send me your changes.",
      },
      {
        question: "How does payment work?",
        answer:
          "You only pay once your website is online and you like it. Hosting and maintenance are billed monthly.",
      },
      {
        question: "How long does hosting & maintenance run?",
        answer: "You can cancel any month. There is no minimum term.",
      },
      {
        question: "Who owns the website and the domain?",
        answer:
          "The website is yours. The domain is best registered in your name, but I can also manage it for you. If you ever want to switch, I hand everything over.",
      },
      {
        question: "Can you take over my existing website?",
        answer:
          "Yes. After a check-up I'll tell you whether I can maintain it as it is or whether a rebuild makes more sense.",
      },
      {
        question: "Do you work on-site?",
        answer:
          "Yes, happily. I can come by or we work remotely, whatever you prefer.",
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

type Offer = (typeof text)["de"]["offers"][number];

function OfferCard({
  offer,
  className = "",
}: {
  offer: Offer;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl border border-white/10 p-6 ${className}`}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-xl font-bold text-white">{offer.title}</h3>
        {/* offers with tiers show their prices there instead */}
        {offer.price && (
          <p className="shrink-0 font-semibold text-teal">{offer.price}</p>
        )}
      </div>
      <p className="mt-3 leading-relaxed">{offer.text}</p>
      {offer.tiers && (
        <dl className="mt-4 space-y-3">
          {offer.tiers.map((tier) => (
            <div key={tier.name} className="rounded-xl bg-white/5 px-4 py-3">
              <dt className="flex items-baseline justify-between gap-4 font-semibold text-white">
                {tier.name}
                <span className="shrink-0 text-teal">{tier.price}</span>
              </dt>
              <dd className="mt-1 text-sm leading-relaxed">{tier.text}</dd>
            </div>
          ))}
        </dl>
      )}
      {offer.note && (
        <p className="mt-4 text-sm leading-relaxed">{offer.note}</p>
      )}
      {/* several links with a label: one compact row */}
      {offer.linksLabel && (
        <p className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span>{offer.linksLabel}</span>
          {offer.links.map((link, i) => (
            <span key={link.href}>
              {i > 0 && (
                <span aria-hidden="true" className="mr-2 text-slate-500">
                  ·
                </span>
              )}
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-teal hover:text-teal-light"
              >
                {link.label}
              </a>
            </span>
          ))}
        </p>
      )}
      {offer.links && !offer.linksLabel && (
        <div className="mt-4 flex flex-col items-start gap-2">
          {offer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group font-semibold text-teal hover:text-teal-light"
            >
              {link.label}{" "}
              <span
                aria-hidden="true"
                className="inline-block transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

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
          cta={{ label: t.hero.cta, href: calUrl }}
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
                <OfferCard key={offer.title} offer={offer} />
              ))}
            </div>
            {/* final prices incl. VAT, required when consumers may order (PAngV) */}
            <div className="mt-6 space-y-1 text-sm text-slate-400">
              <p>{t.vat}</p>
              <p>{t.effort}</p>
            </div>
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
              {/* native details/summary: collapsible without JavaScript */}
              {t.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-2xl font-normal leading-none text-teal transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-2 leading-relaxed">{faq.answer}</p>
                </details>
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
