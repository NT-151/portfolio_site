"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type Page = "home" | "work" | "about" | "contact";

export default function Nav({ current }: { current: Page }) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { y: -16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.1 },
    );
  }, []);

  const aria = (page: Page) =>
    current === page ? { "aria-current": "page" as const } : {};

  return (
    <header className="co-nav-shell" ref={navRef}>
      <nav className="co-nav" aria-label="Primary">
        <Link className="co-nav__brand" href="/" aria-label="coverl home">
          <Image
            className="co-nav__logo"
            src="/coverl-logo.png"
            alt=""
            width={500}
            height={500}
            priority
          />
          <span className="co-nav__wordmark">Coverl</span>
        </Link>
        <div className="co-nav__pill">
          <Link className="co-nav__link" href="/" {...aria("home")}>
            Home
          </Link>
          <Link className="co-nav__link" href="/work" {...aria("work")}>
            Work
          </Link>
          <Link className="co-nav__link" href="/about" {...aria("about")}>
            About
          </Link>
          <Link className="co-nav__cta" href="/contact" {...aria("contact")}>
            Work with us
          </Link>
        </div>
      </nav>
    </header>
  );
}
