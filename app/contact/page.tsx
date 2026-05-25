"use client";

import Link from "next/link";
import { useEffect } from "react";
import EditorialFooter from "../components/EditorialFooter";

const navItems = [
  { label: "Services", href: "/#systems" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/#process" },
];

const contactEmail = "nayzgi@allinhaus.com";
const contactMailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
  "Clinic automation audit enquiry",
)}&body=${encodeURIComponent(
  [
    "Hi Allinhaus,",
    "",
    "I would like to discuss a clinic automation audit.",
    "",
    "Clinic name:",
    "Biggest admin bottleneck:",
  ].join("\n"),
)}`;

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-[18px] w-[18px]"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function ContactPage() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-muted-teal selection:text-white">
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-surface">
        <nav className="mx-auto flex h-20 max-w-max-width items-center justify-between px-margin-desktop">
          <Link
            className="font-headline-md text-headline-md font-bold text-primary"
            href="/"
          >
            ALLINHAUS
          </Link>
          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <Link
                className="font-label-caps text-label-caps text-on-surface-variant transition-colors duration-200 hover:text-muted-teal"
                href={item.href}
                key={item.label}
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
            <Link
              className="border-b border-primary pb-1 font-label-caps text-label-caps text-primary"
              href="/contact"
            >
              CONTACT
            </Link>
          </div>
          <Link
            className="rounded-DEFAULT bg-primary px-6 py-3 font-label-caps text-label-caps text-white transition-all hover:opacity-80"
            href="/contact"
          >
            CLINIC AUDIT
          </Link>
        </nav>
      </header>

      <main className="overflow-x-hidden">
        <section className="mx-auto grid max-w-max-width grid-cols-1 gap-16 px-margin-desktop py-24 md:grid-cols-12 md:py-32">
          <div className="reveal md:col-span-7">
            <div className="space-y-10 border-y border-primary/10 py-12">
              <div>
                <span className="font-label-caps text-label-caps text-muted-teal">
                  EMAIL
                </span>
                <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">
                  Contact us.
                </h2>
                <p className="mt-5 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                  Please email us with your name, current workflow, and the
                  admin tasks that are taking the most time. Please do not
                  include patient clinical information.
                </p>
              </div>
              <a
                className="flex w-full items-center justify-center gap-4 rounded-DEFAULT bg-primary px-12 py-5 font-label-caps text-label-caps text-on-primary transition-colors hover:bg-muted-teal md:w-fit"
                href={contactMailto}
              >
                EMAIL US
                <ArrowIcon />
              </a>
              <p className="font-label-md text-label-md text-primary">
                {contactEmail}
              </p>
              <p className="max-w-xl text-sm leading-relaxed text-on-surface-variant">
                By emailing an enquiry, you agree that Allinhaus can use the
                details you provide to respond to you. Read the{" "}
                <Link
                  className="text-primary underline underline-offset-4 transition-colors hover:text-muted-teal"
                  href="/privacy"
                >
                  privacy policy
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <EditorialFooter />
    </div>
  );
}
