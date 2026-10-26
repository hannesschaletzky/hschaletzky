import { useRef, useState } from "react";

// easter egg: clicking an element `count` times in quick succession fades the page out
// and opens `target` (the classic site and back)
export default function useSecretClicks(
  target: string,
  { count = 3, windowMs = 1500 } = {}
) {
  const [clicks, setClicks] = useState(0);
  const lastClick = useRef(0);

  function onClick() {
    const now = Date.now();
    const next = now - lastClick.current < windowMs ? clicks + 1 : 1;
    lastClick.current = now;
    setClicks(next);

    if (next >= count) {
      document.body
        .animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 400,
          fill: "forwards",
        })
        .finished.then(() => window.location.assign(target));
    }
  }

  return { clicks, onClick };
}
