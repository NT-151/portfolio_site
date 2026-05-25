"use client";

import { useState } from "react";

const slides = [
  {
    eyebrow: "Workflow Map",
    title: "Admin intake and routing",
    copy: "Replace this with a short note on how enquiries, invoices, messages, or notes moved through the client's old workflow.",
  },
  {
    eyebrow: "Automation Build",
    title: "System screens and handoff",
    copy: "Use this slide to describe the automations, integrations, dashboards, or review steps you created for the client.",
  },
  {
    eyebrow: "Outcome",
    title: "Time back for the team",
    copy: "Summarise the result: less manual work, cleaner records, faster replies, or a more reliable operating process.",
  },
];

function ArrowIcon({ direction }: { direction: "next" | "previous" }) {
  return (
    <svg
      aria-hidden="true"
      className={direction === "previous" ? "h-5 w-5 rotate-180" : "h-5 w-5"}
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

export default function WorkSlideshow() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  function showPreviousSlide() {
    setActiveSlide((current) => (current === 0 ? slides.length - 1 : current - 1));
  }

  function showNextSlide() {
    setActiveSlide((current) => (current + 1) % slides.length);
  }

  return (
    <section
      aria-label="Client work slideshow"
      className="border border-primary/10 bg-white"
    >
      <div className="grid min-h-[460px] gap-px bg-primary/10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-surface-container-lowest p-6 md:p-10">
          <div className="flex h-full min-h-[340px] flex-col justify-between border border-primary/10 bg-background p-6 md:p-8">
            <div>
              <p className="font-label-caps text-label-caps text-muted-teal">
                {slide.eyebrow}
              </p>
              <h2 className="mt-4 max-w-lg font-headline-lg text-headline-lg text-primary">
                {slide.title}
              </h2>
            </div>

            <div className="mt-12 grid gap-4 border-t border-primary/10 pt-6 md:grid-cols-3">
              {["Input", "System", "Output"].map((label, index) => (
                <div
                  className="min-h-24 border border-primary/10 bg-white p-4"
                  key={label}
                >
                  <span className="font-label-caps text-[10px] text-on-surface-variant">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 font-label-md text-label-md text-primary">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-white p-6 md:p-10">
          <div>
            <p className="font-label-caps text-label-caps text-muted-teal">
              SLIDE {String(activeSlide + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </p>
            <p className="mt-6 font-body-lg text-body-lg text-on-surface-variant">
              {slide.copy}
            </p>
          </div>

          <div className="mt-10 flex items-center justify-between gap-6 border-t border-primary/10 pt-6">
            <div className="flex gap-2">
              {slides.map((item, index) => (
                <button
                  aria-label={`Show slide ${index + 1}: ${item.title}`}
                  className={`h-2.5 w-8 rounded-full transition-colors ${
                    index === activeSlide ? "bg-primary" : "bg-primary/15"
                  }`}
                  key={item.title}
                  onClick={() => setActiveSlide(index)}
                  type="button"
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                aria-label="Show previous slide"
                className="flex h-11 w-11 items-center justify-center rounded-DEFAULT border border-primary text-primary transition-colors hover:border-muted-teal hover:text-muted-teal"
                onClick={showPreviousSlide}
                type="button"
              >
                <ArrowIcon direction="previous" />
              </button>
              <button
                aria-label="Show next slide"
                className="flex h-11 w-11 items-center justify-center rounded-DEFAULT bg-primary text-on-primary transition-colors hover:bg-muted-teal"
                onClick={showNextSlide}
                type="button"
              >
                <ArrowIcon direction="next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
