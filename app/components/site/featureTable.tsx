type Item = { title: string; text: string };

// one point per row over the full width: the titles stand in one column, so the
// eye reads them top to bottom; good for long lists (e.g. the check-up areas)
export default function FeatureTable({ items }: { items: Item[] }) {
  return (
    <ol className="border-t border-white/15">
      {items.map((item, i) => (
        <li
          key={item.title}
          className="grid gap-2 border-b border-white/15 py-6 md:grid-cols-[3rem_18rem_1fr] md:items-baseline md:gap-8"
        >
          <span
            aria-hidden="true"
            className="text-sm font-semibold tabular-nums text-teal"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <p className="leading-relaxed">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
