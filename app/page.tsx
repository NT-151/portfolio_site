"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import BgVideo from "./components/BgVideo";
import Nav from "./components/Nav";
import Fab from "./components/Fab";
import ArrowIcon from "./components/ArrowIcon";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const pillDotRef = useRef<HTMLSpanElement>(null);
  const router = useRouter();
  const [enquiry, setEnquiry] = useState("");

  const goToContact = () => {
    const trimmed = enquiry.trim();
    const target = trimmed
      ? `/contact?msg=${encodeURIComponent(trimmed)}`
      : "/contact";
    router.push(target);
  };

  useEffect(() => {
    const root = heroRef.current;
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

  useEffect(() => {
    if (!pillDotRef.current) return;
    const tl = gsap.to(pillDotRef.current, {
      scale: 1.35,
      opacity: 0.7,
      duration: 1.1,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <BgVideo />
      <div className="co-page" data-screen-label="Landing">
        <Nav current="home" />
        <main className="co-hero">
          <div className="co-hero__inner" ref={heroRef}>
            <h1 className="co-display" data-hero-stagger>
              <em>Bye Bye Admin.</em>
            </h1>

            <p className="co-sub" data-hero-stagger>
              <span className="co-sub__lead">
                Freeing up your time to do the Lord&rsquo;s Work
              </span>
              Custom built software and AI automations allowing you to focus on
              the business you love
            </p>

            <div className="co-hero__cta-row" data-hero-stagger>
              <Link className="co-btn co-btn--white-lg" href="/work">
                See Our Work
                <ArrowIcon />
              </Link>
            </div>

            <form
              className="co-search"
              data-hero-stagger
              onSubmit={(e) => {
                e.preventDefault();
                goToContact();
              }}
            >
              <input
                className="co-search__input"
                type="text"
                placeholder="Tell us about your problems"
                aria-label="Project enquiry"
                value={enquiry}
                onChange={(e) => setEnquiry(e.target.value)}
              />
              <button
                className="co-search__send"
                type="submit"
                aria-label="Send"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
              </button>
            </form>
            <div
              className="co-accolades"
              aria-label="Accolades"
              data-hero-stagger
            ></div>
          </div>
        </main>
      </div>
      <Fab />
    </>
  );
}
