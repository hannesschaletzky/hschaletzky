import type { LoaderFunctionArgs } from "react-router";
import { useLocation } from "react-router";

// German lives at /, English under /en – same page addresses in both languages
export type Lang = "de" | "en";

export function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";
}

export function useLang(): Lang {
  return langFromPath(useLocation().pathname);
}

export function langFromParams(params: { lang?: string }): Lang {
  return params.lang === "en" ? "en" : "de";
}

// "/cloud" -> "/en/cloud" for English, unchanged for German
export function localize(path: string, lang: Lang) {
  if (lang === "de" || !path.startsWith("/")) return path;
  return path === "/" ? "/en" : `/en${path}`;
}

// the same page in the other language
export function switchLang(pathname: string) {
  if (langFromPath(pathname) === "en") {
    return pathname.replace(/^\/en/, "") || "/";
  }
  return localize(pathname, "en");
}

// the optional ($lang) segment only accepts "en" – anything else is a 404
export function langLoader({ params }: LoaderFunctionArgs) {
  if (params.lang !== undefined && params.lang !== "en") {
    throw new Response("Not found", { status: 404 });
  }
  return null;
}

// pick the text for the current language
export function t<T>(lang: Lang, texts: { de: T; en: T }): T {
  return texts[lang];
}
