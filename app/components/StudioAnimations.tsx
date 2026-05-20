"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StudioAnimations() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cursor = cursorRef.current;
    const ctx = gsap.context(() => {
      if (reduceMotion) return;

      gsap.fromTo(
        ".studio-page-wipe",
        { yPercent: 0 },
        { yPercent: -105, duration: 1.15, ease: "expo.inOut", delay: 0.15 },
      );

      gsap.from(".studio-reveal", {
        y: 44,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.1,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.35,
      });

      gsap.utils.toArray<HTMLElement>(".studio-split").forEach((el) => {
        const words = el.querySelectorAll(".studio-split__word");
        gsap.fromTo(
          words,
          { yPercent: 105 },
          {
            yPercent: 0,
            duration: 0.95,
            stagger: 0.035,
            ease: "power4.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      gsap.to(".studio-reel__stage", {
        backgroundPosition: "120px 80px",
        ease: "none",
        scrollTrigger: {
          trigger: ".studio-reel",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".studio-flow--intake", {
        y: -70,
        x: -18,
        ease: "none",
        scrollTrigger: {
          trigger: ".studio-reel",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".studio-flow--route", {
        y: 54,
        x: 22,
        ease: "none",
        scrollTrigger: {
          trigger: ".studio-reel",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".studio-flow--trace", {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: ".studio-reel",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".studio-project-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 90, scale: 0.94, opacity: 0.72 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 42%",
              scrub: true,
            },
          },
        );

        gsap.to(card.querySelector(".studio-project-card__visual"), {
          yPercent: index % 2 === 0 ? -12 : 12,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    let moveCursor: ((event: PointerEvent) => void) | undefined;
    if (cursor && !reduceMotion) {
      gsap.set(cursor, { xPercent: -50, yPercent: -50 });
      const quickX = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3.out" });
      const quickY = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3.out" });

      moveCursor = (event: PointerEvent) => {
        quickX(event.clientX);
        quickY(event.clientY);
      };

      window.addEventListener("pointermove", moveCursor);

      document.querySelectorAll(".studio-project-card, .studio-cta").forEach((el) => {
        el.addEventListener("pointerenter", () => cursor.classList.add("is-active"));
        el.addEventListener("pointerleave", () => cursor.classList.remove("is-active"));
      });
    }

    return () => {
      if (moveCursor) window.removeEventListener("pointermove", moveCursor);
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div className="studio-page-wipe" aria-hidden="true" />
      <div ref={cursorRef} className="studio-cursor" aria-hidden="true">
        <span>view</span>
      </div>
    </>
  );
}
