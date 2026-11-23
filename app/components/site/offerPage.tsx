import type { ReactNode } from "react";
import { useLoaderData } from "react-router";
import ContactBox from "~/components/site/contactBox";
import { useContactLinks } from "~/components/site/contactTopic";
import FaqSection from "~/components/site/faqSection";
import Footer from "~/components/site/footer";
import GuideSection, { type GuideTeaser } from "~/components/site/guideList";
import Header from "~/components/site/header";
import { RelatedOffers } from "~/components/site/offerTiles";
import PageHero from "~/components/site/pageHero";
import { calUrl, phone } from "~/components/site/siteNav";
import { useLang } from "~/i18n";

type Faq = { question: string; answer: string };

// the frame of every offer page: hero on top, then the page's own sections,
// then FAQ and the way out. Website offers end with the other website offers,
// cloud offers with the contact box on the FAQ colour
export default function OfferPage({
  area,
  current,
  relatedHidden,
  hero,
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
    // optional: price line, button target other than /contact, phone link
    note?: string;
    ctaHref?: string;
    phone?: boolean;
  };
  faq: { heading: string; faqs: Faq[] };
  children: ReactNode;
}) {
  const lang = useLang();
  const links = useContactLinks();
  const websites = area === "websites";
  // guide articles that belong to this offer (website pages, German only)
  const data = useLoaderData() as { articles?: GuideTeaser[] } | null;
  const articles = data?.articles ?? [];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <PageHero
          title={hero.title}
          highlight={hero.highlight}
          cta={{
            label: hero.cta,
            // the booking link and the way to /contact carry this offer as topic
            href:
              hero.ctaHref === calUrl
                ? links.cal
                : (hero.ctaHref ?? links.contact),
          }}
          note={hero.note}
          phone={
            hero.phone
              ? {
                  href: phone.href,
                  label: `${lang === "de" ? "oder anrufen" : "or call"}: ${phone.label}`,
                }
              : undefined
          }
        >
          {hero.text}
        </PageHero>

        {children}

        <FaqSection
          heading={faq.heading}
          faqs={faq.faqs}
          className={websites ? "bg-navy-light" : "bg-navy-lighter"}
        />

        <GuideSection articles={articles} />

        {/* after the guide list the related offers get the lighter background,
            so the sections keep alternating down to the contact box */}
        {websites && (
          <RelatedOffers
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
    </div>
  );
}
