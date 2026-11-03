import type { LinksFunction } from "react-router";
import type { ReactNode } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "react-router";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import { localize, useLang } from "~/i18n";
import styles from "~/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  // preload the two weights used above the fold
  {
    rel: "preload",
    href: "/fonts/source-sans-3-latin-300-normal.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/fonts/source-sans-3-latin-400-normal.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  // favicons
  { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/site.webmanifest" },
];

function Document({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  const lang = useLang();
  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#15233A" />
        {title && <title>{title}</title>}
        <Meta />
        <Links />
      </head>
      <body className="bg-navy font-brand text-slate-300 antialiased">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

// 404 and unexpected errors, rendered in the site design
export function ErrorBoundary() {
  const error = useRouteError();
  const notFound = isRouteErrorResponse(error) && error.status === 404;
  const lang = useLang();
  const text =
    lang === "de"
      ? {
          title: notFound ? "Seite nicht gefunden" : "Fehler",
          label: notFound ? "404" : "Fehler",
          heading: notFound
            ? "Diese Seite gibt es nicht."
            : "Etwas ist schiefgelaufen.",
          text: notFound
            ? "Vielleicht ist sie umgezogen. Auf der Startseite finden Sie alles Wichtige."
            : "Bitte versuchen Sie es gleich noch einmal.",
          back: "Zur Startseite",
        }
      : {
          title: notFound ? "Page not found" : "Error",
          label: notFound ? "404" : "Error",
          heading: notFound
            ? "This page doesn't exist."
            : "Something went wrong.",
          text: notFound
            ? "Maybe it moved. You'll find everything important on the home page."
            : "Please try again in a moment.",
          back: "Back to the start",
        };

  return (
    <Document title={`${text.title} | Hannes Schaletzky`}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            {text.label}
          </p>
          <h1 className="mt-4 text-4xl font-light text-white sm:text-5xl">
            {text.heading}
          </h1>
          <p className="mt-6 text-lg">{text.text}</p>
          <a
            href={localize("/", lang)}
            className="mt-10 rounded-full bg-teal px-6 py-3 font-semibold text-navy transition hover:bg-teal-light"
          >
            {text.back}
          </a>
        </main>
        <Footer />
      </div>
    </Document>
  );
}
