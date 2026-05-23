"use client";

import Link from "next/link";
import { useEffect } from "react";
import EditorialFooter from "./components/EditorialFooter";

const calendlyReviewLink = "https://calendly.com/nayzgi-allinhaus/30min";

const services = [
  {
    icon: "inbox",
    title: "Unified Inbox",
    copy: "Bring Instagram, WhatsApp, email, and client communication into one operational workspace. AI-assisted drafting helps staff respond faster while maintaining clinic tone and consistency.",
    outcome: "Shorter response times",
  },
  {
    icon: "notes",
    title: "Clinical Notes Automation",
    copy: "Generate structured treatment notes and consultation summaries from transcripts tailored specifically for aesthetic treatments.",
    outcome: "Consistent documentation",
  },
  {
    icon: "invoice",
    title: "Invoice Automation",
    copy: "Automatically process and organise invoices linked to your existing storage workflows, reducing manual filing and financial admin.",
    outcome: "Less paperwork",
  },
  {
    icon: "tasks",
    title: "Task & Workflow Automation",
    copy: "Convert conversations and operational events into actionable tasks so follow-ups, approvals, and admin keep moving.",
    outcome: "Fewer missed actions",
  },
  {
    icon: "export",
    title: "Structured Exports",
    copy: "Export records into clinic systems or structured documents so information moves cleanly between the tools your team already uses.",
    outcome: "Cleaner records",
  },
  {
    icon: "reply",
    title: "Client Communication Drafts",
    copy: "Draft replies for enquiries, aftercare questions, appointment admin, and follow-ups while keeping review with the clinic team.",
    outcome: "Less inbox pressure",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Review the workflow",
    copy: "We review how your clinic currently handles messages, notes, invoicing, records, and follow-up admin.",
  },
  {
    number: "02",
    title: "Find the repetitive load",
    copy: "We identify the admin that repeats every week and creates delays, backlog, or staff pressure.",
  },
  {
    number: "03",
    title: "Build around the clinic",
    copy: "The system fits the workflows and tools already in place instead of forcing a full operational reset.",
  },
  {
    number: "04",
    title: "Support the handover",
    copy: "Staff get clear queues, draft outputs, structured records, and task flows they can review and act on.",
  },
];

const testimonialPlaceholder = {
  quote:
    "Placeholder testimonial goes here. Replace this with a real client review that explains what changed, how the process felt, and what result the clinic noticed after working with Allinhaus.",
  name: "Client Name",
  date: "Time since review",
};

const adminCosts = [
  "slower response times",
  "missed enquiries",
  "inconsistent records",
  "delayed invoices",
  "staff overload",
  "reduced treatment capacity",
  "less time spent with clients",
];

const transformationPoints = [
  "More time for treatments",
  "Faster client communication",
  "Less backlog after clinic hours",
  "Reduced staff fatigue",
  "Cleaner operational processes",
  "More consistent documentation",
  "Better use of skilled staff time",
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
        <span>Aesthetic clinic operations</span>
        <span>Live workspace</span>
      </div>
      <div className="clinic-visual__grid">
        <div className="clinic-visual__panel clinic-visual__panel--wide">
          <div className="clinic-visual__label">Unified inbox</div>
          <div className="clinic-message">
            <span className="clinic-dot" />
            <div>
              <strong>Instagram enquiry</strong>
              <p>Consultation request waiting for response</p>
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
            and keep final review with the clinic team.
          </p>
        </div>
        <div className="clinic-visual__panel">
          <div className="clinic-visual__label">Next actions</div>
          <ul>
            <li>Book patch test</li>
            <li>Prepare consent record</li>
            <li>Send deposit invoice</li>
          </ul>
        </div>
        <div className="clinic-visual__panel clinic-visual__panel--wide">
          <div className="clinic-visual__label">Clinical note summary</div>
          <p>
            Treatment goals, contraindications discussed, treatment areas,
            aftercare advice, and export-ready record.
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
    <div className="overflow-x-hidden font-body-md text-body-md bg-background text-on-surface">
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
              href="#systems"
            >
              SERVICES
            </a>
            <a
              className="font-label-caps text-label-caps text-on-surface-variant transition-colors duration-200 hover:text-muted-teal"
              href="#work"
            >
              TESTIMONIALS
            </a>
            <a
              className="font-label-caps text-label-caps text-on-surface-variant transition-colors duration-200 hover:text-muted-teal"
              href="#process"
            >
              PROCESS
            </a>
            <a
              className="rounded-DEFAULT bg-primary px-6 py-3 font-label-caps text-label-caps text-white transition-all hover:opacity-80"
              href={calendlyReviewLink}
              rel="noreferrer"
              target="_blank"
            >
              BOOK A WORKFLOW REVIEW
            </a>
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
                Admin is consuming your clinic.
              </h1>
              <p className="mb-10 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                Automate the repetitive work behind consultations, messages,
                notes, invoices, and follow-ups so your team gets time back
                every week.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="w-full rounded-DEFAULT bg-primary px-8 py-4 text-center font-label-caps text-label-caps text-on-primary transition-colors hover:bg-muted-teal md:w-auto"
                  href={calendlyReviewLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  BOOK A WORKFLOW REVIEW
                </a>
                <a
                  className="w-full rounded-DEFAULT border border-primary px-8 py-4 text-center font-label-caps text-label-caps text-primary transition-colors hover:bg-surface-variant md:w-auto"
                  href="#systems"
                >
                  SEE THE SYSTEMS
                </a>
              </div>
            </div>
            <div className="reveal reveal-delay-200 min-w-0 md:col-span-6">
              <ClinicOperationsVisual />
            </div>
          </div>
        </section>

        <section className="border-y border-primary/5 bg-white py-20">
          <div className="mx-auto grid max-w-max-width gap-12 px-margin-desktop md:grid-cols-12">
            <div className="reveal md:col-span-5">
              <span className="font-label-caps text-label-caps text-muted-teal">
                THE PROBLEM
              </span>
              <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">
                The work behind the treatments is overwhelming the business.
              </h2>
            </div>
            <div className="reveal reveal-delay-100 space-y-6 font-body-lg text-body-lg text-on-surface-variant md:col-span-6 md:col-start-7">
              <p>
                Aesthetic clinics run on constant operational activity:
                Instagram DMs, WhatsApp messages, consultation notes,
                follow-ups, invoice processing, consent records, lot tracking,
                patient communication, and appointment administration.
              </p>
              <p>
                Most clinics manage this across disconnected apps, manual
                exports, spreadsheets, inboxes, and late-night catch-up work
                after treatments finish. As clinics grow, the admin grows
                faster.
              </p>
              <p>
                Owners end up spending hours every week on repetitive tasks
                that do not generate revenue directly, yet still need to be done
                accurately.
              </p>
            </div>
            <div className="reveal reveal-delay-200 grid gap-px border border-primary/10 bg-primary/10 md:col-span-12 md:grid-cols-7">
              {adminCosts.map((cost) => (
                <div className="bg-white p-5" key={cost}>
                  <p className="font-label-md text-label-md text-primary">
                    {cost}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-max-width px-margin-desktop py-28"
          id="services"
        >
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="reveal md:col-span-5">
              <span className="font-label-caps text-label-caps text-muted-teal">
                THE SOLUTION
              </span>
              <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">
                Automate the operational load without changing how your clinic
                works.
              </h2>
            </div>
            <div className="reveal reveal-delay-100 md:col-span-6 md:col-start-7">
              <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
                <p>
                  We build AI-supported systems around the workflows clinics
                  already use.
                </p>
                <p>
                  Instead of forcing teams into entirely new processes, we
                  automate the repetitive tasks happening inside communication,
                  documentation, and administration.
                </p>
                <p>
                  The result is faster operations, cleaner records, reduced
                  manual work, and more time available for client care and
                  growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="border-y border-primary/5 bg-white py-24"
          id="systems"
        >
          <div className="mx-auto max-w-max-width px-margin-desktop">
            <div className="reveal mb-16">
              <span className="font-label-caps text-label-caps text-muted-teal">
                CLINIC AUTOMATIONS
              </span>
              <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">
                Systems for inboxes, notes, invoices, and operational workflow.
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
          id="work"
        >
          <div className="reveal grid grid-cols-1 items-start gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="font-label-caps text-label-caps text-muted-teal">
                TESTIMONIALS
              </span>
              <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">
                What clients say about the workflow.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <article className="rounded-lg border border-primary/10 bg-white p-7 shadow-[0_3px_14px_rgba(0,0,0,0.07)] md:p-8">
                <div
                  aria-label="Five star rating"
                  className="mb-4 flex gap-0.5 text-[15px] leading-none text-[#f7b500]"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span aria-hidden="true" key={star}>
                      &#9733;
                    </span>
                  ))}
                </div>
                <blockquote className="font-body-md text-[16px] italic leading-relaxed text-on-surface-variant">
                  &quot;{testimonialPlaceholder.quote}&quot;
                </blockquote>
                <footer className="mt-6">
                  <p className="font-label-md text-[15px] font-semibold leading-tight text-primary">
                    {testimonialPlaceholder.name}
                  </p>
                  <p className="mt-1 text-[14px] leading-tight text-on-surface-variant/70">
                    {testimonialPlaceholder.date}
                  </p>
                </footer>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-primary py-28 text-on-primary" id="transformation">
          <div className="mx-auto max-w-max-width px-margin-desktop">
            <div className="reveal mb-16 max-w-3xl">
              <span className="font-label-caps text-label-caps text-muted-teal">
                TRANSFORMATION
              </span>
              <h2 className="mt-4 font-headline-lg text-headline-lg">
                What clinics gain when admin pressure decreases.
              </h2>
            </div>
            <div className="grid gap-px border border-on-primary/10 bg-on-primary/10 md:grid-cols-7">
              {transformationPoints.map((point) => (
                <div className="bg-primary p-6" key={point}>
                  <p className="font-label-md text-label-md text-on-primary">
                    {point}
                  </p>
                </div>
              ))}
            </div>
            <p className="reveal mt-12 max-w-2xl font-body-lg text-body-lg text-on-primary/70">
              The goal is not replacing people. The goal is removing the
              repetitive work that prevents clinics from operating efficiently.
            </p>
          </div>
        </section>

        <section
          className="mx-auto max-w-max-width px-margin-desktop py-32"
          id="process"
        >
          <div className="grid gap-16 md:grid-cols-12">
            <div className="reveal md:col-span-5">
              <span className="font-label-caps text-label-caps text-muted-teal">
                HOW IT WORKS
              </span>
              <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">
                Your clinic already has the workflows. Now it needs systems that
                can support them.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-12 md:col-span-7 md:grid-cols-2">
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
          </div>
        </section>

        <section className="bg-white py-32">
          <div className="reveal mx-auto max-w-max-width px-margin-desktop text-center">
            <h2 className="mb-8 font-headline-xl text-headline-xl-mobile text-primary md:text-headline-xl">
              Book a workflow review.
            </h2>
            <p className="mx-auto mb-14 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              We review how your clinic currently handles communication, notes,
              invoicing, and operational admin, then identify where automation
              can immediately reduce workload and save time.
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <a
                className="w-full rounded-DEFAULT bg-primary px-12 py-5 font-label-caps text-base text-on-primary transition-all hover:bg-muted-teal md:w-auto"
                href={calendlyReviewLink}
                rel="noreferrer"
                target="_blank"
              >
                BOOK A WORKFLOW REVIEW
              </a>
              <a
                className="w-full rounded-DEFAULT border border-primary px-12 py-5 font-label-caps text-base text-primary transition-all hover:bg-surface-variant md:w-auto"
                href="#systems"
              >
                VIEW CLINIC AUTOMATIONS
              </a>
            </div>
          </div>
        </section>
      </main>

      <EditorialFooter />
    </div>
  );
}
