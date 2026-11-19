import type { ReactNode } from "react";
import ContactBox from "~/components/site/contactBox";
import FaqSection from "~/components/site/faqSection";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import { RelatedOffers } from "~/components/site/offerTiles";
import PageHero from "~/components/site/pageHero";
import { phone } from "~/components/site/siteNav";
import { localize, useLang } from "~/i18n";

type Faq = { question: string; answer: string };

// the frame of every offer page: hero on top, then the page's own sections,
// then FAQ and the way out. Website offers end with the other website offers,
// cloud offers with the contact box on the FAQ colour
export default function OfferPage({
  area,
  current,
  hero,
  faq,
  children,
}: {
  area: "websites" | "cloud";
  // the page's own address, so the related offers leave it out
  current: string;
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
  const websites = area === "websites";

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <PageHero
          title={hero.title}
          highlight={hero.highlight}
          cta={{
            label: hero.cta,
            href: hero.ctaHref ?? localize("/contact", lang),
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

        {websites && <RelatedOffers current={current} />}

        <ContactBox above={websites ? undefined : "--color-navy-lighter"} />
      </main>

      <Footer />
    </div>
  );
}
