import { getLegalLinks, getSiteMap } from "~/components/site/siteNav";
import useSecretClicks from "~/components/useSecretClicks";
import { useLang } from "~/i18n";

export default function Footer() {
  // easter egg: click the footer logo three times to open the hand-built classic site
  const secret = useSecretClicks("/classic");
  const lang = useLang();

  return (
    <footer className="bg-navy-light">
      {/* the four link groups, as wide as their content and spread evenly, so the
          last one ends flush with the logo below */}
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-20 sm:px-6">
        <div className="grid grid-cols-2 gap-10 lg:flex lg:justify-between">
          {getSiteMap(lang).map((group) => (
            <nav key={group.title} aria-label={group.title}>
              {/* the heading leads to the group's main page (its first link) */}
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                <a
                  href={group.links[0].href}
                  className="text-teal hover:text-teal-light"
                >
                  {group.title}
                </a>
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      {...(link.external && {
                        target: "_blank",
                        rel: "noreferrer",
                      })}
                      className="break-all hover:text-white"
                    >
                      {link.label}
                      {link.external && <span aria-hidden="true"> ↗</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* legal */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          {/* copyright and legal links on the left, the logo on the right */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p>© {new Date().getFullYear()} Hannes Schaletzky</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {getLegalLinks(lang).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={secret.onClick}
            className="cursor-default"
          >
            <img
              key={secret.clicks}
              src="/brand/hasc-logo-negativ.svg"
              width={525}
              height={159}
              loading="lazy"
              alt="HASC – Hannes Schaletzky"
              className={`h-8 w-auto ${
                secret.clicks > 0 ? "motion-safe:animate-wiggle" : ""
              } ${
                secret.clicks >= 2
                  ? "drop-shadow-[0_0_14px_rgba(63,184,160,0.9)]"
                  : ""
              }`}
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
