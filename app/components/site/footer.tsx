import { getLegalLinks, getSiteMap } from "~/components/site/siteNav";
import useSecretClicks from "~/components/useSecretClicks";
import { useLang } from "~/i18n";

export default function Footer() {
  // easter egg: click the footer logo three times to open the hand-built classic site
  const secret = useSecretClicks("/classic");
  const lang = useLang();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
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
              className={`h-12 w-auto ${
                secret.clicks > 0 ? "motion-safe:animate-wiggle" : ""
              } ${
                secret.clicks >= 2
                  ? "drop-shadow-[0_0_14px_rgba(63,184,160,0.9)]"
                  : ""
              }`}
            />
          </button>
        </div>

        {getSiteMap(lang).map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              {group.title}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="break-all hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* legal & social */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Hannes Schaletzky</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="https://linkedin.com/in/hannesschaletzky/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/hannesschaletzky"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
            {getLegalLinks(lang).map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
