"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import BgVideo from "../components/BgVideo";
import Nav from "../components/Nav";
import Fab from "../components/Fab";

export default function AboutPage() {
  const innerRef = useRef<HTMLDivElement>(null);

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
      },
    );
  }, []);

  return (
    <>
      <BgVideo />
      <div className="co-page" data-screen-label="About">
        <Nav current="about" />
        <main className="co-hero" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div
            className="co-hero__inner"
            ref={innerRef}
            style={{
              textAlign: "left",
              alignItems: "flex-start",
              maxWidth: 980,
            }}
          >
            <h1
              className="co-display"
              style={{ textAlign: "left" }}
              data-hero-stagger
            >
              <em>Lorem</em> ipsum dolor sit.
            </h1>

            <p
              className="co-sub"
              style={{ textAlign: "left", maxWidth: 620 }}
              data-hero-stagger
            >
              <span className="co-sub__lead">
                Lorem ipsum dolor sit amet, consectetur.
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>

            <div style={{ width: "100%", marginTop: 32 }} data-hero-stagger>
              <div className="co-spec-row">
                <div className="co-spec-row__key">Lorem</div>
                <div className="co-spec-row__val">
                  <strong>Lorem ipsum dolor sit amet.</strong> Consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Fab />
    </>
  );
}
