"use client";

import Link from "next/link";
import { useEffect } from "react";
import EditorialFooter from "../components/EditorialFooter";

const navItems = [
  { label: "Services", href: "/#systems" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
];

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

    const fields = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      "input, textarea",
    );

    const cleanups = Array.from(fields).map((field) => {
      const label = field.parentElement?.querySelector("label");
      const onFocus = () => {
        label?.classList.replace("text-on-surface-variant", "text-muted-teal");
      };
      const onBlur = () => {
        if (!field.value) {
          label?.classList.replace("text-muted-teal", "text-on-surface-variant");
        }
      };

      field.addEventListener("focus", onFocus);
      field.addEventListener("blur", onBlur);

      return () => {
        field.removeEventListener("focus", onFocus);
        field.removeEventListener("blur", onBlur);
      };
    });

    return () => {
      revealObserver.disconnect();
      cleanups.forEach((cleanup) => cleanup());
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
        <section className="reveal mx-auto max-w-max-width px-margin-desktop py-28">
          <div className="max-w-[820px]">
            <span className="font-label-caps text-label-caps text-muted-teal">
              CONTACT
            </span>
            <h1 className="mb-8 mt-5 font-headline-xl text-headline-xl-mobile text-primary md:text-headline-xl">
              Book a clinic automation audit.
            </h1>
            <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              Share how your clinic handles enquiries, notes, exports, and
              invoices. I will look for the parts AI can make faster without
              removing practitioner review.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-max-width grid-cols-1 gap-16 px-margin-desktop pb-32 md:grid-cols-12">
          <div className="reveal md:col-span-7">
            <form className="space-y-12">
              <div className="group border-b border-primary/10 transition-colors focus-within:border-muted-teal">
                <label className="mb-4 block font-label-caps text-label-caps text-on-surface-variant">
                  NAME
                </label>
                <input
                  className="w-full border-none bg-transparent p-0 pb-4 font-body-md text-body-md placeholder:text-on-surface-variant/30 focus:ring-0"
                  placeholder="Your name"
                  type="text"
                />
              </div>
              <div className="group border-b border-primary/10 transition-colors focus-within:border-muted-teal">
                <label className="mb-4 block font-label-caps text-label-caps text-on-surface-variant">
                  CLINIC
                </label>
                <input
                  className="w-full border-none bg-transparent p-0 pb-4 font-body-md text-body-md placeholder:text-on-surface-variant/30 focus:ring-0"
                  placeholder="Clinic name"
                  type="text"
                />
              </div>
              <div className="group border-b border-primary/10 transition-colors focus-within:border-muted-teal">
                <label className="mb-4 block font-label-caps text-label-caps text-on-surface-variant">
                  EMAIL
                </label>
                <input
                  className="w-full border-none bg-transparent p-0 pb-4 font-body-md text-body-md placeholder:text-on-surface-variant/30 focus:ring-0"
                  placeholder="you@clinic.com"
                  type="email"
                />
              </div>
              <div className="group border-b border-primary/10 transition-colors focus-within:border-muted-teal">
                <label className="mb-4 block font-label-caps text-label-caps text-on-surface-variant">
                  BIGGEST ADMIN BOTTLENECK
                </label>
                <textarea
                  className="w-full resize-none border-none bg-transparent p-0 pb-4 font-body-md text-body-md placeholder:text-on-surface-variant/30 focus:ring-0"
                  placeholder="Social enquiries, treatment notes, Pabau exports, invoices, or something else..."
                  rows={4}
                />
              </div>
              <button
                className="flex w-full items-center justify-center gap-4 rounded-DEFAULT bg-primary px-12 py-5 font-label-caps text-label-caps text-on-primary transition-colors hover:bg-muted-teal md:w-auto"
                type="submit"
              >
                CONTACT US
                <ArrowIcon />
              </button>
              <p className="max-w-xl text-sm leading-relaxed text-on-surface-variant">
                By sending an enquiry, you agree that Allinhaus can use the
                details you provide to respond to you. Please do not include
                patient clinical information in this form. Read the{" "}
                <Link
                  className="text-primary underline underline-offset-4 transition-colors hover:text-muted-teal"
                  href="/privacy"
                >
                  privacy policy
                </Link>
                .
              </p>
            </form>
          </div>
        </section>
      </main>

      <EditorialFooter />
    </div>
  );
}
