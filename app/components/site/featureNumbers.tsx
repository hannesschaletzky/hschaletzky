type Item = { title: string; text: string };

// three columns, big outlined numbers and a teal line on the left
export default function FeatureNumbers({ items }: { items: Item[] }) {
  return (
    <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <li key={item.title} className="border-l-2 border-teal pl-6">
          <span
            aria-hidden="true"
            className="block text-5xl font-bold leading-none text-transparent"
            style={{ WebkitTextStroke: "1px rgb(63 184 160 / 0.6)" }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
          <p className="mt-2 leading-relaxed">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
