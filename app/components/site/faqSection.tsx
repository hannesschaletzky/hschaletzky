import SectionHeading from "~/components/site/sectionHeading";

// collapsible questions, used on the websites and the check-up page
export default function FaqSection({
  heading,
  faqs,
  className,
}: {
  heading: string;
  faqs: { question: string; answer: string }[];
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading eyebrow="FAQ">{heading}</SectionHeading>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {/* native details/summary: collapsible without JavaScript */}
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-2xl font-normal leading-none text-teal transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-2 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
