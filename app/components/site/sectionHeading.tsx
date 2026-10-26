import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}
