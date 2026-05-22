"use client";

import Link from "next/link";
import { useEffect } from "react";
import EditorialFooter from "./components/EditorialFooter";

const services = [
  {
    icon: "inbox",
    title: "Unified Clinic Inbox",
    copy: "Instagram, Facebook, email, and enquiry messages in one queue, with the patient context a clinic owner needs before replying.",
    outcome: "Fewer missed leads",
  },
  {
    icon: "reply",
    title: "LLM Reply Drafts",
    copy: "A drafting layer that turns messy inbound messages into clinic-safe replies for bookings, follow-ups, FAQs, and treatment questions.",
    outcome: "Replies in minutes",
  },
  {
    icon: "tasks",
    title: "Action Lists From Conversations",
    copy: "Patient conversations become clear next actions, so the team can book, chase, prep, invoice, or hand over without rereading threads.",
    outcome: "No manual triage",
  },
  {
    icon: "notes",
    title: "Beauty Treatment Notes",
    copy: "Consultation transcripts become structured clinical notes tailored to aesthetics, skin, injectable, and treatment-plan workflows.",
    outcome: "Cleaner records",
  },
  {
    icon: "export",
    title: "Pabau-Ready Exports",
    copy: "Notes and logs are formatted for export, giving clinics a practical route into Pabau or a clean archive when direct sync is not needed.",
    outcome: "Less admin copy-paste",
  },
  {
    icon: "invoice",
    title: "Dropbox Invoice Automator",
    copy: "Invoice files are detected, sorted, renamed, and prepared from Dropbox so finance admin stops living in downloads folders.",
    outcome: "Accounts stay current",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Map the clinic day",
    copy: "I identify where patient enquiries, treatment notes, invoices, and follow-ups currently slow the owner and team down.",
  },
  {
    number: "02",
    title: "Build around existing tools",
    copy: "The automation fits the platforms already in use, including social channels, email, Dropbox, and export paths for Pabau.",
  },
  {
    number: "03",
    title: "Add AI where judgement helps",
    copy: "LLMs draft, summarise, classify, and structure information while keeping human review in the parts that affect patients.",
  },
  {
    number: "04",
    title: "Harden the handover",
    copy: "The finished system includes clear queues, repeatable exports, and workflows the clinic can run without technical support.",
  },
];

const proofPoints = [
  "Built around real clinic owner workflows, not generic AI demos",
  "Designed for social enquiries, consultations, treatment notes, and finance admin",
  "Keeps final patient communication and clinical review with the clinic team",
];

const workHighlights = [
  {
    label: "Inbox Hub",
    title: "One place for social and email enquiries",
    copy: "Messages are pulled into a single queue so booking intent, treatment questions, and follow-ups stop getting split across apps.",
  },
  {
    label: "Clinical Notes",
    title: "Consultations become treatment-ready records",
    copy: "Transcript summaries capture goals, contraindications, products, aftercare, and export-ready notes for clinic systems.",
  },
  {
    label: "Admin Loop",
    title: "Tasks and invoices move without chasing",
    copy: "Conversation context creates next actions, while Dropbox invoice handling keeps finance admin from piling up.",
  },
];

function MenuIcon() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const shared = {
    className:
      "mb-6 h-10 w-10 text-primary transition-colors group-hover:text-muted-teal",
    fill: "none",
    viewBox: "0 0 40 40",
    "aria-hidden": true,
  } as const;

  if (name === "reply") {
    return (
      <svg {...shared}>
        <path
          d="M8 12a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H18l-7 6v-6a4 4 0 0 1-3-3.9Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M14 15h12M14 19h8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "tasks") {
    return (
      <svg {...shared}>
        <path
          d="m10 12 3 3 6-7M23 13h7M10 24l3 3 6-7M23 25h7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "notes") {
    return (
      <svg {...shared}>
        <path
          d="M12 7h12l6 6v20H12Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M24 7v7h6M16 19h10M16 24h10M16 29h7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "export") {
    return (
      <svg {...shared}>
        <path
          d="M11 29h18a3 3 0 0 0 3-3v-3M20 7v17m0 0-7-7m7 7 7-7M9 33h22"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "invoice") {
    return (
      <svg {...shared}>
        <path
          d="M12 6h16v28l-4-2-4 2-4-2-4 2Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M16 14h8M16 20h8M16 26h5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <path
        d="M9 11h22v18H9Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="m9 12 11 9 11-9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ClinicOperationsVisual() {
  return (
    <div
      className="clinic-visual"
      aria-label="Clinic AI operations dashboard preview"
    >
      <div className="clinic-visual__header">
        <span>Private aesthetics clinic</span>
        <span>Live queue</span>
      </div>
      <div className="clinic-visual__grid">
        <div className="clinic-visual__panel clinic-visual__panel--wide">
          <div className="clinic-visual__label">Unified inbox</div>
          <div className="clinic-message">
            <span className="clinic-dot" />
            <div>
              <strong>Instagram enquiry</strong>
              <p>Anti-wrinkle consultation request</p>
            </div>
          </div>
          <div className="clinic-message">
            <span className="clinic-dot clinic-dot--email" />
            <div>
              <strong>Email follow-up</strong>
              <p>Post-treatment aftercare question</p>
            </div>
          </div>
        </div>
        <div className="clinic-visual__panel">
          <div className="clinic-visual__label">AI draft</div>
          <p>
            Confirm suitability, offer booking slots, include aftercare note,
            and keep medical claims cautious.
          </p>
        </div>
        <div className="clinic-visual__panel">
          <div className="clinic-visual__label">Next actions</div>
          <ul>
            <li>Book patch test</li>
            <li>Prepare consent form</li>
            <li>Send deposit invoice</li>
          </ul>
        </div>
        <div className="clinic-visual__panel clinic-visual__panel--wide">
          <div className="clinic-visual__label">Clinical note summary</div>
          <p>
            Treatment goals, contraindications discussed, product areas, dosage
            notes, aftercare advice, and export-ready record.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.1 },
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="font-body-md text-body-md bg-background text-on-surface">
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-surface">
        <nav className="mx-auto flex h-20 max-w-max-width items-center justify-between px-margin-desktop">
          <Link
            className="font-headline-md text-headline-md font-bold text-primary"
            href="/"
          >
            ALLINHAUS
          </Link>
          <div className="hidden items-center gap-10 md:flex">
            <a
              className="font-label-caps text-label-caps text-on-surface-variant transition-colors duration-200 hover:text-muted-teal"
              href="#services"
            >
              SERVICES
            </a>
            <a
              className="font-label-caps text-label-caps text-on-surface-variant transition-colors duration-200 hover:text-muted-teal"
              href="#work"
            >
              WORK
            </a>
            <a
              className="font-label-caps text-label-caps text-on-surface-variant transition-colors duration-200 hover:text-muted-teal"
              href="#process"
            >
              PROCESS
            </a>
            <Link
              className="rounded-DEFAULT bg-primary px-6 py-3 font-label-caps text-label-caps text-white transition-all hover:opacity-80"
              href="/contact"
            >
              GET IN TOUCH
            </Link>
          </div>
          <button className="text-primary md:hidden" type="button">
            <MenuIcon />
          </button>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-max-width overflow-hidden px-margin-desktop py-24 md:py-32">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12">
            <div className="reveal min-w-0 md:col-span-6">
              <span className="font-label-caps text-label-caps text-muted-teal">
                AI AUTOMATION FOR BEAUTY CLINICS
              </span>
              <h1 className="mb-8 mt-5 max-w-4xl font-headline-xl text-headline-xl-mobile text-primary md:text-headline-xl">
                More bookings and cleaner admin without hiring another
                coordinator.
              </h1>
              <p className="mb-10 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                I build AI systems for aesthetic clinics that turn scattered
                enquiries, consultation transcripts, clinical notes, and
                invoices into one organised operating workflow.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  className="w-full rounded-DEFAULT bg-primary px-8 py-4 text-center font-label-caps text-label-caps text-on-primary transition-colors hover:bg-muted-teal md:w-auto"
                  href="/contact"
                >
                  CONTACT US
                </Link>
                <a
                  className="w-full rounded-DEFAULT border border-primary px-8 py-4 text-center font-label-caps text-label-caps text-primary transition-colors hover:bg-surface-variant md:w-auto"
                  href="#work"
                >
                  SEE SELECTED WORK
                </a>
              </div>
            </div>
            <div className="reveal reveal-delay-200 min-w-0 md:col-span-6">
              <ClinicOperationsVisual />
            </div>
          </div>
        </section>

        <section className="border-y border-primary/5 bg-white py-14">
          <div className="mx-auto grid max-w-max-width gap-6 px-margin-desktop md:grid-cols-3">
            {proofPoints.map((point) => (
              <p
                className="border-l border-muted-teal pl-5 font-label-md text-label-md text-on-surface-variant"
                key={point}
              >
                {point}
              </p>
            ))}
          </div>
        </section>

        <section
          className="mx-auto max-w-max-width px-margin-desktop py-28"
          id="work"
        >
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="reveal md:col-span-5">
              <span className="font-label-caps text-label-caps text-muted-teal">
                SELECTED WORK
              </span>
              <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">
                A clinic operating system, anonymised.
              </h2>
            </div>
            <div className="reveal reveal-delay-100 md:col-span-6 md:col-start-7">
              <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant">
                Clinic owners lose time in the gap between patient demand and
                operational follow-through. I have built systems that connect
                inbound messages, AI-assisted replies, task creation, clinical
                note summaries, exportable logs, and Dropbox invoice handling
                without exposing the clinic publicly.
              </p>
              <div className="grid gap-px border border-primary/10 bg-primary/10">
                {workHighlights.map((item) => (
                  <div
                    className="grid gap-5 bg-background p-6 md:grid-cols-[160px_1fr]"
                    key={item.title}
                  >
                    <div>
                      <span className="font-label-caps text-label-caps text-muted-teal">
                        {item.label.toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="mb-2 font-headline-md text-headline-md text-primary">
                        {item.title}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {item.copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="border-y border-primary/5 bg-white py-24"
          id="services"
        >
          <div className="mx-auto max-w-max-width px-margin-desktop">
            <div className="reveal mb-16">
              <span className="font-label-caps text-label-caps text-muted-teal">
                WHAT I BUILD
              </span>
              <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">
                Automation that follows the clinic workflow.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {services.map((service, index) => (
                <div
                  className={`reveal reveal-delay-${(index + 1) * 100} group border border-primary/10 bg-white p-8 transition-colors hover:border-muted-teal`}
                  key={service.title}
                >
                  <ServiceIcon name={service.icon} />
                  <span className="mb-4 inline-block rounded-full bg-muted-teal/20 px-3 py-1 font-label-caps text-[10px] text-secondary">
                    {service.outcome.toUpperCase()}
                  </span>
                  <h3 className="mb-4 font-headline-md text-headline-md text-primary">
                    {service.title}
                  </h3>
                  <p className="font-body-md leading-relaxed text-on-surface-variant">
                    {service.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-max-width px-margin-desktop py-32"
          id="process"
        >
          <div className="reveal mb-20 grid grid-cols-1 gap-gutter md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="font-label-caps text-label-caps text-muted-teal">
                HOW IT WORKS
              </span>
              <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">
                Practical automation, not a loose AI demo.
              </h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant md:col-span-6 md:col-start-7">
              The goal is a dependable clinic workflow: less inbox switching,
              less transcript retyping, less invoice sorting, and clearer
              handoff between owner, practitioner, and admin.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <div
                className={`reveal reveal-delay-${(index + 1) * 100} relative`}
                key={step.number}
              >
                <div className="absolute -left-4 -top-8 select-none font-headline-xl text-headline-xl text-primary/5">
                  {step.number}
                </div>
                <div className="relative z-10 border-t border-primary pt-8">
                  <h4 className="mb-4 font-label-caps text-label-caps">
                    {step.title.toUpperCase()}
                  </h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {step.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary py-28 text-on-primary" id="portfolio">
          <div className="mx-auto max-w-max-width px-margin-desktop">
            <div className="reveal mb-16 max-w-3xl">
              <span className="font-label-caps text-label-caps text-muted-teal">
                VALUE
              </span>
              <h2 className="mt-4 font-headline-lg text-headline-lg">
                Built for the admin-heavy parts of aesthetic medicine.
              </h2>
            </div>
            <div className="grid gap-px border border-on-primary/10 bg-on-primary/10 md:grid-cols-3">
              {[
                {
                  title: "Capture demand",
                  copy: "Keep social and email leads visible, sorted, and ready for a fast clinic-approved response.",
                },
                {
                  title: "Protect clinical time",
                  copy: "Convert consultations into structured notes so practitioners spend less time rewriting the same details.",
                },
                {
                  title: "Close the admin loop",
                  copy: "Create tasks and invoice workflows from real activity instead of waiting for someone to remember.",
                },
              ].map((item) => (
                <div className="bg-primary p-10" key={item.title}>
                  <h3 className="mb-4 font-headline-md text-headline-md">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-on-primary/65">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-32">
          <div className="reveal mx-auto max-w-max-width px-margin-desktop text-center">
            <h2 className="mb-8 font-headline-xl text-headline-xl-mobile text-primary md:text-headline-xl">
              Want this inside your clinic?
            </h2>
            <p className="mx-auto mb-14 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              I will map your inboxes, note-taking, patient follow-up, and
              invoice flow, then show where automation can remove admin without
              taking clinical control away from your team.
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <Link
                className="w-full rounded-DEFAULT bg-primary px-12 py-5 font-label-caps text-base text-on-primary transition-all hover:bg-muted-teal md:w-auto"
                href="/contact"
              >
                CONTACT US
              </Link>
              <a
                className="w-full rounded-DEFAULT border border-primary px-12 py-5 font-label-caps text-base text-primary transition-all hover:bg-surface-variant md:w-auto"
                href="#services"
              >
                REVIEW THE SYSTEMS
              </a>
            </div>
          </div>
        </section>
      </main>

      <EditorialFooter />
    </div>
  );
}
