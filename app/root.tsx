import type { LinksFunction } from "@remix-run/node";
import type { ReactNode } from "react";
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import { siteNav } from "~/components/site/siteNav";
import styles from "~/tailwind.css";

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

function Document({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <html lang="en">
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
        <LiveReload />
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

  return (
    <Document title={notFound ? "Page not found | Hannes Schaletzky" : "Error | Hannes Schaletzky"}>
      <div className="flex min-h-screen flex-col">
        <Header links={siteNav} />
        <main className="mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            {notFound ? "404" : "Error"}
          </p>
          <h1 className="mt-4 text-4xl font-light text-white sm:text-5xl">
            {notFound ? "This page doesn't exist." : "Something went wrong."}
          </h1>
          <p className="mt-6 text-lg">
            {notFound
              ? "Maybe it moved – the site has a new design."
              : "Please try again in a moment."}
          </p>
          <a
            href="/"
            className="mt-10 rounded-full bg-teal px-6 py-3 font-semibold text-navy transition hover:bg-teal-light"
          >
            Back to the start
          </a>
        </main>
        <Footer />
      </div>
    </Document>
  );
}
