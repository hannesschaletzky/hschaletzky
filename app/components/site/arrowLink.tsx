import type { ReactNode } from "react";

// a teal text link whose arrow moves on hover, e.g. "Alle Angebote im Überblick →"
export default function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group mt-8 inline-block font-semibold text-teal hover:text-teal-light"
    >
      {children}{" "}
      <span
        aria-hidden="true"
        className="inline-block transition-transform group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}
