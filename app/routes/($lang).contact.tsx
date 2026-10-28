import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import { calUrl } from "~/components/site/siteNav";
import { pageMeta } from "~/components/site/pageMeta";
import { langFromParams, langLoader, useLang } from "~/i18n";

export const loader = langLoader;

const mail = "info@hschaletzky.com";

const text = {
  de: {
    title: "Kontakt | Hannes Schaletzky",
    description:
      "Kontakt zu Hannes Schaletzky, freiberuflicher Software Engineer aus Berlin – per E-Mail, auf LinkedIn oder in einem Erstgespräch.",
    eyebrow: "Kontakt",
    title1: "Lassen Sie uns",
    highlight: "über Ihr Projekt sprechen.",
    cta: "E-Mail schreiben",
    intro:
      "Ich antworte auf jede Nachricht, meist innerhalb eines Werktags.",
    channels: [
      {
        title: "E-Mail",
        text: "Der schnellste Weg zu mir – auch, wenn Sie meinen Lebenslauf möchten.",
        label: mail,
        href: `mailto:${mail}`,
      },
      {
        title: "Erstgespräch",
        text: "Wählen Sie einen freien Termin in meinem Kalender.",
        label: "Erstgespräch buchen",
        href: calUrl,
      },
      {
        title: "LinkedIn",
        text: "Kundenprojekte und Empfehlungen.",
        label: "linkedin.com/in/hannesschaletzky",
        href: "https://linkedin.com/in/hannesschaletzky/",
      },
      {
        title: "GitHub",
        text: "Code und Hobbyprojekte.",
        label: "github.com/hannesschaletzky",
        href: "https://github.com/hannesschaletzky",
      },
    ],
  },
  en: {
    title: "Contact | Hannes Schaletzky",
    description:
      "Contact Hannes Schaletzky, freelance software engineer from Berlin – by email, on LinkedIn or in an intro call.",
    eyebrow: "Contact",
    title1: "Let's talk",
    highlight: "about your project.",
    cta: "Write me",
    intro:
      "I reply to every message, usually within one working day.",
    channels: [
      {
        title: "Mail",
        text: "The fastest way to reach me – also if you'd like my CV.",
        label: mail,
        href: `mailto:${mail}`,
      },
      {
        title: "Intro call",
        text: "Pick a free slot in my calendar.",
        label: "Book an intro call",
        href: calUrl,
      },
      {
        title: "LinkedIn",
        text: "Client work and recommendations.",
        label: "linkedin.com/in/hannesschaletzky",
        href: "https://linkedin.com/in/hannesschaletzky/",
      },
      {
        title: "GitHub",
        text: "Code and side projects.",
        label: "github.com/hannesschaletzky",
        href: "https://github.com/hannesschaletzky",
      },
    ],
  },
};

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return pageMeta({
    title: text[lang].title,
    description: text[lang].description,
    path: "/contact",
    lang,
  });
};

export default function Contact() {
  const lang = useLang();
  const t = text[lang];
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <PageHero
          eyebrow={t.eyebrow}
          title={t.title1}
          highlight={t.highlight}
          cta={{ label: t.cta, href: `mailto:${mail}` }}
        >
          {t.intro}
        </PageHero>

        <section className="bg-navy-lighter">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2">
            {t.channels.map((channel) => {
              const external = channel.href.startsWith("http");
              return (
                <a
                  key={channel.title}
                  href={channel.href}
                  {...(external && { target: "_blank", rel: "noreferrer" })}
                  className="group rounded-2xl border border-white/10 p-6 transition hover:border-teal/50"
                >
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                    {channel.title}
                  </h2>
                  <p className="mt-2">{channel.text}</p>
                  <p className="mt-4 break-all text-lg font-semibold text-white group-hover:text-teal">
                    {channel.label} →
                  </p>
                </a>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
