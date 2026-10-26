// placeholders – replace with real quotes (and get permission to publish them)
const testimonials = [
  {
    quote:
      "[Quote from a client of a company project – what was the problem and what changed after working together? 1–3 sentences.]",
    name: "[Name]",
    role: "[Role, company – e.g. blu Systems]",
  },
  {
    quote:
      "[Quote from a website customer – e.g. a club or a self-employed person. How was the collaboration, what do they like about the result?]",
    name: "[Name]",
    role: "[Club or business]",
  },
  {
    quote:
      "[Quote from a former colleague – what is it like to work with you in a team?]",
    name: "[Name]",
    role: "[Role – e.g. DigitalService des Bundes]",
  },
];

export default function Testimonials({ className = "" }: { className?: string }) {
  return (
    <section aria-labelledby="testimonials" className={className}>
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <h2
          id="testimonials"
          className="mb-16 text-sm font-semibold uppercase tracking-[0.2em] text-teal"
        >
          Kind words
        </h2>
        <div className="space-y-16">
          {testimonials.map((testimonial, i) => (
            <figure key={i} className="relative pl-10 sm:pl-14">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 font-serif text-5xl leading-none text-teal sm:text-6xl"
              >
                “
              </span>
              <blockquote className="text-xl font-light leading-relaxed text-white sm:text-2xl">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-white">
                  {testimonial.name}
                </span>
                {" · "}
                {testimonial.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
