import { useEffect, useState } from "react";
import { phone } from "~/components/site/siteNav";
import { useLang } from "~/i18n";

// on phones a bar at the bottom of the screen with the two ways to get in touch,
// within thumb reach. It slides in once the buttons of the hero (#hero-cta) have
// left the screen, so they never show twice. tel: and cal.com links, so the
// Plausible events "Telefon" and "Erstgespräch" fire as everywhere else
export default function CallBar({ calHref }: { calHref: string }) {
  const de = useLang() === "de";
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const target = document.getElementById("hero-cta");
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) =>
      setShown(!entry.isIntersecting && entry.boundingClientRect.top < 0),
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* room for the bar, so it never covers the footer */}
      <div aria-hidden="true" className="h-20 sm:hidden" />
      <div
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-navy/95 px-4 py-3 backdrop-blur-sm transition-transform duration-300 sm:hidden ${
          shown ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-md gap-3">
          <a
            href={phone.href}
            className="flex-1 rounded-full border border-white/25 py-3 text-center font-semibold text-white"
          >
            {de ? "Anrufen" : "Call"}
          </a>
          <a
            href={calHref}
            target="_blank"
            rel="noreferrer"
            className="flex-[1.4] rounded-full bg-teal py-3 text-center font-semibold text-navy"
          >
            {de ? "Erstgespräch buchen" : "Book a call"}
          </a>
        </div>
      </div>
    </>
  );
}
