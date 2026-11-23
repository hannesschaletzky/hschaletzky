import type { ReactNode } from "react";
import SectionHeading from "~/components/site/sectionHeading";

// a full-width section with the usual container and an eyebrow + heading
export default function Section({
  eyebrow,
  heading,
  intro,
  className,
  children,
}: {
  eyebrow: string;
  heading: ReactNode;
  // one or two sentences between the heading and the content
  intro?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading eyebrow={eyebrow}>{heading}</SectionHeading>
        {intro && (
          <p className="-mt-4 mb-12 max-w-2xl text-lg leading-relaxed">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
