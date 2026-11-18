type Item = { title: string; text: string };

// columns without numbers, each point opens with a short teal stroke;
// four columns suit eight points, three suit six
export default function FeatureStrokes({
  items,
  columns = 3,
}: {
  items: Item[];
  columns?: 3 | 4;
}) {
  return (
    <ul
      className={`grid gap-x-10 gap-y-12 sm:grid-cols-2 ${columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
    >
      {items.map((item) => (
        <li key={item.title}>
          <span className="block h-1 w-10 rounded-full bg-teal" />
          <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
          <p className="mt-2 leading-relaxed">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
