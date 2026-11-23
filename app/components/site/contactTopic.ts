import { useLocation, useSearchParams } from "react-router";
import { calUrl, getSiteMap } from "~/components/site/siteNav";
import { localize, useLang, type Lang } from "~/i18n";

export const mail = "info@hschaletzky.com";

// The offer a visitor comes from travels along when they get in touch: as the
// subject of the mail, as a note in the booking and as ?thema=… on the way to
// /contact. Nobody has to make up a subject, and the request says what it is about.
export type Topic = { slug: string; label: string };

// every offer page of the two areas; the overviews and the guide are no topic
function topics(lang: Lang): Topic[] {
  return getSiteMap(lang)
    .slice(0, 2)
    .flatMap((group) => group.links)
    .map((link) => ({
      label: link.label,
      parts: link.href.split("/").filter(Boolean),
    }))
    .filter(({ parts }) => /^(cloud|websites)$/.test(parts.at(-2) ?? ""))
    .map(({ label, parts }) => ({ slug: parts.at(-1)!, label }));
}

export function contactLinks(lang: Lang, topic?: Topic) {
  const contact = localize("/contact", lang);
  if (!topic) return { cal: calUrl, mail: `mailto:${mail}`, contact };
  const text = encodeURIComponent(
    `${lang === "de" ? "Anfrage" : "Inquiry"}: ${topic.label}`,
  );
  return {
    // cal.com fills the notes field of the booking form from ?notes=
    cal: `${calUrl}?notes=${text}`,
    mail: `mailto:${mail}?subject=${text}`,
    contact: `${contact}?thema=${topic.slug}`,
  };
}

// the topic of the current page: the offer page itself, or on /contact the
// offer named in ?thema=. Only known offers count, anything else is ignored.
export function useContactLinks() {
  const lang = useLang();
  const { pathname } = useLocation();
  const [params] = useSearchParams();
  const slug =
    params.get("thema") ?? pathname.split("/").filter(Boolean).at(-1);
  const topic = topics(lang).find((t) => t.slug === slug);
  return { topic, ...contactLinks(lang, topic) };
}
