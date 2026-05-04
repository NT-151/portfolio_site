"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import BgVideo from "../components/BgVideo";
import Nav from "../components/Nav";
import Fab from "../components/Fab";

export default function ContactPage() {
  const innerRef = useRef<HTMLDivElement>(null);
  const pillDotRef = useRef<HTMLSpanElement>(null);
  const sendBtnRef = useRef<HTMLButtonElement>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const msg = params.get("msg");
    if (msg) setMessage(msg);
  }, []);

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

  useEffect(() => {
    const btn = sendBtnRef.current;
    if (!btn) return;
    const onEnter = () =>
      gsap.to(btn, { y: -2, duration: 0.25, ease: "power2.out" });
    const onLeave = () =>
      gsap.to(btn, { y: 0, duration: 0.35, ease: "power2.out" });
    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);
    return () => {
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <BgVideo />
      <div className="co-page" data-screen-label="Contact">
        <Nav current="contact" />
        <main className="co-hero" style={{ paddingTop: 64, paddingBottom: 96 }}>
          <div className="co-hero__inner" ref={innerRef}>
            <h1 className="co-display" data-hero-stagger>
              <em>Contact us</em>
            </h1>

            <p className="co-sub" data-hero-stagger>
              We’d love to hear from you — send us a message and we’ll be in
              touch soon.
            </p>

            <div className="co-contact-grid" data-hero-stagger>
              <aside className="co-card co-card--email">
                <p className="co-card--email__label">Our email</p>
                <a
                  className="co-card--email__link"
                  href="mailto:lorem@coverl.com"
                >
                  lorem@coverl.com
                </a>
              </aside>

              <form
                className="co-card co-form"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Contact form"
              >
                <div className="co-field">
                  <label className="co-label" htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    className="co-input"
                    type="text"
                    autoComplete="name"
                  />
                </div>

                <div className="co-field">
                  <label className="co-label" htmlFor="contact-email">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    className="co-input"
                    type="email"
                    autoComplete="email"
                  />
                </div>

                <div className="co-field">
                  <label className="co-label" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    className="co-textarea"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button
                  ref={sendBtnRef}
                  className="co-btn co-btn--white-lg co-btn--full"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Fab />
    </>
  );
}
