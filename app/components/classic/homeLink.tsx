import { useLocation } from "react-router";

// small link back to the classic index, shown on every classic page except the index itself
export default function HomeLink() {
  const { pathname } = useLocation();
  if (pathname === "/classic" || pathname === "/classic/") return null;

  return (
    <a
      href="/classic"
      className="fixed top-3 left-3 z-10 text-base px-2 py-1 rounded-lg bg-white/80"
    >
      <u>← home</u>
    </a>
  );
}
