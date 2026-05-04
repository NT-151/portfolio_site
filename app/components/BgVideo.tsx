"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BgVideo() {
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!stageRef.current) return;
    gsap.fromTo(
      stageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.4, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => v.play().catch(() => {});
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener("loadeddata", tryPlay, { once: true });
  }, []);

  return (
    <div ref={stageRef} className="co-bg-stage" data-screen-label="Background">
      <video ref={videoRef} src="/moon.mp4" autoPlay muted loop playsInline preload="auto" />
    </div>
  );
}
