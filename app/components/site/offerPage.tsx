import type { ReactNode } from "react";
import { useLoaderData } from "react-router";
import CallBar from "~/components/site/callBar";
import ContactBox from "~/components/site/contactBox";
import { useContactLinks } from "~/components/site/contactTopic";
import FaqSection from "~/components/site/faqSection";
import Footer from "~/components/site/footer";
import GuideSection, { type GuideTeaser } from "~/components/site/guideList";
import Header from "~/components/site/header";
import HeroQuote, { HeroQuoteProvider } from "~/components/site/heroQuote";
import { RelatedLinks } from "~/components/site/offerTiles";
import { calUrl, getByline, phone } from "~/components/site/siteNav";
import SplitHero, { type Fact } from "~/components/site/splitHero";
import { useLang, type Lang } from "~/i18n";

type Faq = { question: string; answer: string };
type Package = { name: string; price: string; priceNote: string };
type Prices = { tiles: { label: string; value: string }[]; note: string };

// the client voice next to the hero, where the page has none of its own
const defaultQuote = { websites: "Lucas Thiel", cloud: "Tien Hào Vu" };

// the frame of every offer page: hero on top, then the page's own sections,
// then FAQ and the way out.
// Websites (hands-on): photo and name, prices as tiles, a button to call, a call
// bar on phones; at the end a short line of links to the other offers.
// Cloud (pro): sober, the career facts next to the photo, a client voice
export default function OfferPage({
  area,
  current,
  relatedHidden,
  hero,
  packages,
  heroQuote,
  heroMedia,
  faq,
  children,
}: {
  area: "websites" | "cloud";
  // the page's own address, so the related offers leave it out
  current: string;
  // offers the page already shows in its own price section
  relatedHidden?: string[];
  hero: {
    title: string;
    highlight: string;
    cta: string;
    text: string;
    // optional: price line, button target other than /contact, a second
    // button to call, own price tiles (otherwise they come from packages)
    note?: string;
    ctaHref?: string;
    phone?: boolean;
    prices?: Prices;
  };
  // the packages of the page: their names and prices become the tiles in the
  // hero (websites)
  packages?: Package[];
  // name of the client voice next to the hero; the sections below leave it out
  heroQuote?: string;
  // instead of a client voice, e.g. the built sites
  heroMedia?: ReactNode;
  faq: { heading: string; faqs: Faq[] };
  children: ReactNode;
}) {
  const lang = useLang();
  const de = lang === "de";
  const links = useContactLinks();
  const websites = area === "websites";
  // guide articles that belong to this offer (website pages, German only)
  const data = useLoaderData() as { articles?: GuideTeaser[] } | null;
  const articles = data?.articles ?? [];
  const quote = heroMedia ? undefined : (heroQuote ?? defaultQuote[area]);
  const ctaHref =
    hero.ctaHref === calUrl ? links.cal : (hero.ctaHref ?? links.contact);

  // price tiles: the page's own, or one per package
  const tiles: Fact[] | undefined = hero.prices
    ? hero.prices.tiles.map((t) => ({ ...t, href: "#preis" }))
    : packages?.map((pkg) => ({
        label: pkg.name,
        value: pkg.price,
        caption: pkg.priceNote.split(",")[0],
        href: "#preis",
      }));

  return (
    <HeroQuoteProvider value={quote}>
      <div className="min-h-screen">
        <Header />

        <main>
          {websites ? (
            <SplitHero
              byline={getByline(lang)}
              title={hero.title}
              highlight={hero.highlight}
              text={hero.text}
              facts={tiles}
              factsNote={
                tiles
                  ? (hero.prices?.note ??
                    (de
                      ? "inkl. 19 % MwSt., Details unten"
                      : "incl. 19 % VAT, details below"))
                  : undefined
              }
              cta={{
                label: hero.cta,
                // shorter next to the photo, so it stays on one line
                short: hero.cta
                  .replace("Kostenloses ", "")
                  .replace("a free intro", "an intro"),
                href: ctaHref,
              }}
              second={{
                label: `${de ? "Anrufen" : "Call"}: ${phone.label}`,
                short: de ? "Anrufen" : "Call",
                href: phone.href,
              }}
              media={heroMedia ?? (quote && <HeroQuote name={quote} />)}
            />
          ) : (
            <SplitHero
              title={hero.title}
              highlight={hero.highlight}
              text={hero.text}
              facts={careerFacts(lang)}
              cta={{ label: hero.cta, href: ctaHref }}
              media={quote && <HeroQuote name={quote} />}
            />
          )}

          {children}

          <FaqSection
            heading={faq.heading}
            faqs={faq.faqs}
            className={websites ? "bg-navy-light" : "bg-navy-lighter"}
          />

          <GuideSection articles={articles} />

          {/* websites: the other offers as a short line of links */}
          {websites && (
            <RelatedLinks
              current={current}
              hidden={relatedHidden}
              className={articles.length > 0 ? "bg-navy-light" : undefined}
            />
          )}

          <ContactBox
            above={
              !websites
                ? "--color-navy-lighter"
                : articles.length > 0
                  ? "--color-navy-light"
                  : undefined
            }
          />
        </main>

        <Footer />
        {websites && <CallBar calHref={links.cal} />}
      </div>
    </HeroQuoteProvider>
  );
}

// the facts next to the photo on the cloud pages (the same as on /about)
export function careerFacts(lang: Lang): Fact[] {
  const de = lang === "de";
  return [
    {
      label: de ? "Freiberuflich" : "Freelance",
      value: de ? "seit 2024" : "since 2024",
    },
    {
      label: de ? "Erfahrung" : "Experience",
      value: `${new Date().getFullYear() - 2019}+ ${de ? "Jahre" : "years"}`,
    },
    { label: de ? "Stationen" : "Previously", value: "KPMG · DigitalService" },
    { label: "Stack", value: "TypeScript · AWS" },
  ];
}
