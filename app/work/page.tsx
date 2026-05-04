"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import BgVideo from "../components/BgVideo";
import Nav from "../components/Nav";
import Fab from "../components/Fab";

export default function WorkPage() {
  const innerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = innerRef.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>("[data-hero-stagger]");
    gsap.fromTo(
      targets,
      { y: 24, opacity: 0, filter: "blur(6px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.09,
        delay: 0.25,
      }
    );
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const onEnter = () => gsap.to(card, { y: -4, duration: 0.35, ease: "power2.out" });
    const onLeave = () => gsap.to(card, { y: 0, duration: 0.45, ease: "power2.out" });
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <BgVideo />
      <div className="co-page" data-screen-label="Work">
        <Nav current="work" />
        <main
          className="co-hero"
          style={{ paddingTop: 64, paddingBottom: 96, alignItems: "flex-start" }}
        >
          <div
            className="co-hero__inner"
            ref={innerRef}
            style={{ textAlign: "left", alignItems: "flex-start", maxWidth: 1280, padding: "0 8px" }}
          >
            <span className="co-pill" data-hero-stagger>
              <span className="co-pill__dot" />
              Lorem · Ipsum
            </span>

            <h1 className="co-display" style={{ textAlign: "left" }} data-hero-stagger>
              <em>Lorem</em> ipsum dolor.
            </h1>

            <p
              className="co-sub"
              style={{ textAlign: "left", maxWidth: 620 }}
              data-hero-stagger
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <div style={{ width: "100%", maxWidth: 880, marginTop: 48 }} data-hero-stagger>
              <article className="co-work-card" ref={cardRef}>
                <div className="co-work-card__media" aria-hidden="true">
                  — project image placeholder —
                </div>
                <div className="co-work-card__body">
                  <div className="co-work-card__meta">
                    <span>Lorem</span>
                    <span>Ipsum</span>
                    <span>2026</span>
                  </div>
                  <h3 className="co-work-card__title">Lorem ipsum dolor sit amet.</h3>
                  <p className="co-work-card__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </main>
      </div>
      <Fab />
    </>
  );
}
