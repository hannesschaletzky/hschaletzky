import type { ReactNode } from "react";
import SectionHeading from "~/components/site/sectionHeading";

// a full-width section with the usual container and an eyebrow + heading
export default function Section({
  eyebrow,
  heading,
  className,
  children,
}: {
  eyebrow: string;
  heading: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading eyebrow={eyebrow}>{heading}</SectionHeading>
        {children}
      </div>
    </section>
  );
}
