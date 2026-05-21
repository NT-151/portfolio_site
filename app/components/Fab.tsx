"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Fab() {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.6)", delay: 1.0 }
    );
  }, []);

  return (
    <button ref={ref} className="co-fab" aria-label="Open chat">
      <span className="co-fab__mark" aria-hidden="true" />
    </button>
  );
}
