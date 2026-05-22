"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import EditorialFooter from "../components/EditorialFooter";

const contactImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC7DgkXc3Rs37zGwCK4Pq6jM0aF1ahouz_FFHhI1tW9d-pddX4kF0c0BeTlFW7sKUlNLRNreJ_uZeU-lBVJZSxRhnHbSIcVS_SW6ayOSCOszRz675eLEuG7bHlYGYxqomZFpB2lgIM62kPWITMjIVvUkctpmSyE9JxCmy-yJbsIt0UJoh4rfQccPchMz2C25iWDTKSke2AvBp_K0ZM8rzw1Z9yYvE4CpO5-CcGQNlJEdrRv6uAFH0g0i6eBgB8i7cwb2yG--FbYanM4";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Portfolio", href: "/#portfolio" },
];

const inquiries = [
  { label: "General", email: "hello@aethereal.ai" },
  { label: "Partnerships", email: "growth@aethereal.ai" },
];

const locations = [
  {
    city: "London",
    lines: ["42 Bruton Place, Mayfair", "London W1J 6NP, United Kingdom"],
  },
  {
    city: "New York",
    lines: ["250 Hudson Street, Suite 201", "New York, NY 10013, USA"],
  },
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
            className="font-headline-md text-headline-md font-bold tracking-tighter text-primary"
            href="/"
          >
            AETHEREAL
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
            CONSULTATION
          </Link>
        </nav>
      </header>

      <main className="overflow-x-hidden">
        <section className="reveal mx-auto max-w-max-width px-margin-desktop py-32">
          <div className="max-w-[800px]">
            <h1 className="mb-8 font-headline-xl text-headline-xl">
              LET&apos;S BUILD THE FUTURE.
            </h1>
            <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
              Whether you&apos;re looking to automate complex workflows or
              architect an entirely new AI-driven ecosystem, we are here to
              bridge the gap between vision and execution.
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
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="group border-b border-primary/10 transition-colors focus-within:border-muted-teal">
                <label className="mb-4 block font-label-caps text-label-caps text-on-surface-variant">
                  COMPANY
                </label>
                <input
                  className="w-full border-none bg-transparent p-0 pb-4 font-body-md text-body-md placeholder:text-on-surface-variant/30 focus:ring-0"
                  placeholder="Aethereal Corp"
                  type="text"
                />
              </div>
              <div className="group border-b border-primary/10 transition-colors focus-within:border-muted-teal">
                <label className="mb-4 block font-label-caps text-label-caps text-on-surface-variant">
                  EMAIL
                </label>
                <input
                  className="w-full border-none bg-transparent p-0 pb-4 font-body-md text-body-md placeholder:text-on-surface-variant/30 focus:ring-0"
                  placeholder="john@aethereal.ai"
                  type="email"
                />
              </div>
              <div className="group border-b border-primary/10 transition-colors focus-within:border-muted-teal">
                <label className="mb-4 block font-label-caps text-label-caps text-on-surface-variant">
                  MESSAGE
                </label>
                <textarea
                  className="w-full resize-none border-none bg-transparent p-0 pb-4 font-body-md text-body-md placeholder:text-on-surface-variant/30 focus:ring-0"
                  placeholder="Tell us about your project..."
                  rows={4}
                />
              </div>
              <button
                className="flex w-full items-center justify-center gap-4 rounded-DEFAULT bg-primary px-12 py-5 font-label-caps text-label-caps text-on-primary transition-colors hover:bg-muted-teal md:w-auto"
                type="submit"
              >
                SEND INQUIRY
                <ArrowIcon />
              </button>
            </form>
          </div>

          <div className="reveal space-y-24 md:col-span-4 md:col-start-9">
            <div>
              <h3 className="mb-8 border-b border-primary/10 pb-4 font-label-caps text-label-caps text-primary">
                DIRECT INQUIRIES
              </h3>
              <div className="space-y-6">
                {inquiries.map((inquiry) => (
                  <div key={inquiry.email}>
                    <p className="mb-1 font-label-caps text-[10px] text-on-surface-variant">
                      {inquiry.label.toUpperCase()}
                    </p>
                    <a
                      className="font-body-md text-body-md text-primary underline underline-offset-4 transition-colors hover:text-muted-teal"
                      href={`mailto:${inquiry.email}`}
                    >
                      {inquiry.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-8 border-b border-primary/10 pb-4 font-label-caps text-label-caps text-primary">
                GLOBAL PRESENCE
              </h3>
              <div className="space-y-8">
                {locations.map((location) => (
                  <div key={location.city}>
                    <p className="mb-2 font-headline-md text-headline-md">
                      {location.city}
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {location.lines.map((line) => (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="group relative aspect-square overflow-hidden bg-surface-container">
              <Image
                alt="A sophisticated, high-end corporate office interior featuring minimalist black furniture and expansive glass walls."
                className="h-full w-full object-cover opacity-80 grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                src={contactImage}
              />
              <div className="absolute inset-0 bg-primary/5" />
            </div>
          </div>
        </section>
      </main>

      <EditorialFooter />
    </div>
  );
}
