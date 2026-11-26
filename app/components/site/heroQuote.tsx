import { createContext, useContext } from "react";
import { useLang } from "~/i18n";
import { testimonials } from "~/components/site/testimonials";

// the client voice next to the hero of a subpage. The page tells the sections
// below which one it is, so the same quote never shows twice on a page
const Context = createContext<string | undefined>(undefined);
export const HeroQuoteProvider = Context.Provider;
export const useHeroQuote = () => useContext(Context);

export default function HeroQuote({ name }: { name: string }) {
  const lang = useLang();
  const quote = testimonials.find((x) => x.name === name);
  if (!quote) return null;
  return (
    <figure className="rounded-2xl border border-white/10 bg-navy-light p-8">
      <blockquote className="border-l-2 border-teal pl-5 text-lg leading-relaxed text-white">
        „{(quote.short ?? quote.quote)[lang]}“
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-4">
        {quote.logo ? (
          <img
            src={quote.logo.src}
            width={quote.logo.width}
            height={quote.logo.height}
            alt=""
            className={`h-10 w-auto rounded-lg ${quote.logo.onWhite ? "bg-white px-2 py-1" : ""}`}
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/15 font-bold text-teal"
          >
            {quote.name[0]}
          </span>
        )}
        <span>
          <span className="block font-semibold text-white">{quote.name}</span>
          <span className="block text-sm text-slate-400">
            {quote.role[lang]}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
