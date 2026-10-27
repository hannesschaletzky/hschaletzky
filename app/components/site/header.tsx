import { useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import { getSiteMap, getSiteNav, legalPaths } from "~/components/site/siteNav";
import { localize, switchLang, useLang } from "~/i18n";

// the language switch links to the same page in the other language (the
// German-only legal pages switch to the English start page)
function useOtherLang() {
  const lang = useLang();
  const { pathname } = useLocation();
  const href = legalPaths.includes(pathname) ? "/en" : switchLang(pathname);
  return { lang, href } as const;
}

// DE | EN in a rounded frame, the active language filled
function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, href } = useOtherLang();
  return (
    <div
      className={`flex items-center rounded-full border border-white/20 p-0.5 text-xs font-semibold ${className}`}
    >
      {(["de", "en"] as const).map((code) =>
        code === lang ? (
          <span
            key={code}
            aria-current="true"
            className="rounded-full bg-white px-2.5 py-1 text-navy"
          >
            {code.toUpperCase()}
          </span>
        ) : (
          <a
            key={code}
            href={href}
            hrefLang={code}
            lang={code}
            aria-label={code === "de" ? "Deutsch" : "English"}
            className="rounded-full px-2.5 py-1 text-slate-300 transition hover:text-white"
          >
            {code.toUpperCase()}
          </a>
        )
      )}
    </div>
  );
}

export default function Header() {
  const lang = useLang();
  const de = lang === "de";
  const [menuOpen, setMenuOpen] = useState(false);

  // close the mobile menu with Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-navy/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <a
          href={localize("/", lang)}
          aria-label={
            de ? "Hannes Schaletzky – Startseite" : "Hannes Schaletzky – home"
          }
        >
          <img
            src="/brand/hasc-wortmarke-negativ.svg"
            width={525}
            height={121}
            alt="HASC"
            className="h-5 w-auto sm:h-6"
          />
        </a>
        <nav className="flex items-center gap-3 text-sm sm:gap-6">
          {getSiteNav(lang).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden hover:text-white md:inline"
            >
              {link.label}
            </a>
          ))}
          <LangSwitch />
          <a
            href={localize("/contact", lang)}
            className="rounded-full bg-teal px-4 py-2 font-semibold text-navy transition hover:bg-teal-light"
          >
            {de ? "Kontakt" : "Contact"}
          </a>
          <button
            type="button"
            aria-label={
              menuOpen
                ? de
                  ? "Menü schließen"
                  : "Close menu"
                : de
                ? "Menü öffnen"
                : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* mobile menu with every page */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={de ? "Menü" : "Menu"}
          className="border-t border-white/10 bg-navy px-4 pb-8 pt-4 md:hidden"
        >
          {getSiteMap(lang).map((group) => (
            <div key={group.title} className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                {group.title}
              </p>
              <ul className="mt-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 text-lg text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
