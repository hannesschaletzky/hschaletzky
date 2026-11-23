import type { MetaFunction } from "react-router";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import { mail, useContactLinks } from "~/components/site/contactTopic";
import { calUrl, phone } from "~/components/site/siteNav";
import { pageMeta } from "~/components/site/pageMeta";
import { langFromParams, langLoader, useLang } from "~/i18n";

export const loader = langLoader;

const text = {
  de: {
    title: "Kontakt | Hannes Schaletzky",
    description:
      "Kontakt zu Hannes Schaletzky, freiberuflicher Software Engineer aus Berlin, per E-Mail, Telefon oder in einem kostenlosen Erstgespräch.",
    title1: "Lassen Sie uns",
    highlight: "über Ihr Projekt sprechen.",
    cta: "Kostenloses Erstgespräch buchen",
    intro: "Ich antworte persönlich auf Ihre Nachricht.",
    channels: [
      {
        title: "Erstgespräch",
        text: "Wählen Sie einen freien Termin in meinem Kalender. Das Gespräch ist kostenlos.",
        label: "Kostenloses Erstgespräch buchen",
        href: calUrl,
      },
      {
        title: "E-Mail",
        text: "Am besten für Anfragen mit Details. Gern schicke ich Ihnen auch meinen Lebenslauf.",
        label: mail,
        href: `mailto:${mail}`,
      },
      {
        title: "Telefon",
        text: "Rufen Sie gern an. Wenn ich gerade nicht rangehe, rufe ich zurück.",
        ...phone,
      },
    ],
  },
  en: {
    title: "Contact | Hannes Schaletzky",
    description:
      "Contact Hannes Schaletzky, freelance software engineer from Berlin, by email, phone or in a free intro call.",
    title1: "Let's talk",
    highlight: "about your project.",
    cta: "Book a free intro call",
    intro: "I reply to your message personally.",
    channels: [
      {
        title: "Intro call",
        text: "Pick a free slot in my calendar. The call is free of charge.",
        label: "Book a free intro call",
        href: calUrl,
      },
      {
        title: "Email",
        text: "Best for requests with details. I'm also happy to send you my CV.",
        label: mail,
        href: `mailto:${mail}`,
      },
      {
        title: "Phone",
        text: "Feel free to call. If I can't pick up, I'll call you back.",
        ...phone,
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
  // coming from an offer page (?thema=…), mail and booking name that offer
  const links = useContactLinks();
  const withTopic = (href: string) =>
    href === calUrl
      ? links.cal
      : href.startsWith("mailto:")
        ? links.mail
        : href;
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <PageHero
          title={t.title1}
          highlight={t.highlight}
          cta={{ label: t.cta, href: links.cal }}
        >
          {t.intro}
        </PageHero>

        <section className="bg-navy-lighter">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-3">
            {t.channels.map((channel) => {
              const external = channel.href.startsWith("http");
              return (
                <a
                  key={channel.title}
                  href={withTopic(channel.href)}
                  {...(external && { target: "_blank", rel: "noreferrer" })}
                  className="group rounded-2xl border border-white/10 p-6 transition hover:-translate-y-0.5 hover:border-teal/50"
                >
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                    {channel.title}
                  </h2>
                  <p className="mt-2">{channel.text}</p>
                  <p className="mt-4 break-all text-lg font-semibold text-white group-hover:text-teal-light">
                    {channel.label}{" "}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
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
