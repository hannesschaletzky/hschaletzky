type Item = { title: string; text: string };

// a vertical line that links numbered points, for a sequence of steps.
// The circles cover the line, so they take the background of their section.
export default function FeaturePath({
  items,
  circleBg = "bg-navy-light",
}: {
  items: Item[];
  circleBg?: string;
}) {
  return (
    <ol className="relative max-w-3xl border-l-2 border-teal/30 pl-10">
      {items.map((item, i) => (
        <li key={item.title} className="relative pb-10 last:pb-0">
          <span
            aria-hidden="true"
            className={`absolute -left-[calc(3.25rem+1px)] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-teal text-[0.65rem] font-bold text-teal ${circleBg}`}
          >
            {i + 1}
          </span>
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <p className="mt-1 leading-relaxed">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
