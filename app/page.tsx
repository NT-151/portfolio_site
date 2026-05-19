import Link from "next/link";
import Nav from "./components/Nav";
import MotionSection from "./components/MotionSection";

const systems = [
  {
    label: "01 / intake architecture",
    title: "Every request arrives shaped, routed, and ready.",
    copy: "AI-assisted intake systems that classify opportunities, brief teams, prepare context, and remove the slow handoff work between forms, inboxes, CRMs, and operators.",
  },
  {
    label: "02 / operating layer",
    title: "A quiet layer for recurring decisions.",
    copy: "Automation maps for approvals, enrichment, summarisation, internal reporting, and exception handling, designed around the way the business already moves.",
  },
  {
    label: "03 / knowledge systems",
    title: "Institutional memory made usable.",
    copy: "Searchable internal assistants, document workflows, and team-facing tools that turn scattered knowledge into structured answers, actions, and evidence.",
  },
];

const cases = [
  {
    label: "case / private clinic",
    metric: "42%",
    title: "Reduced admin load before appointment confirmation.",
  },
  {
    label: "case / property group",
    metric: "18h",
    title: "Weekly reporting compressed into one reviewed workflow.",
  },
  {
    label: "case / creative studio",
    metric: "3.6x",
    title: "Faster brief triage across leads, production, and finance.",
  },
];

const process = [
  "Map the operational surface",
  "Prototype the system logic",
  "Build the controlled workflow",
  "Instrument, train, and refine",
];

const industries = [
  "Clinics",
  "Property",
  "Hospitality",
  "Creative studios",
  "Professional services",
  "Founder-led teams",
];

export default function HomePage() {
  return (
    <main className="studio-shell bg-[var(--color-bg)] text-[var(--color-fg)]">
      <section className="studio-hero relative isolate min-h-screen overflow-hidden">
        <div className="studio-hero__grain" aria-hidden="true" />
        <div className="studio-hero__glow" aria-hidden="true" />
        <div className="studio-hero__beam" aria-hidden="true" />
        <div className="studio-hero__grid" aria-hidden="true" />

        <Nav />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-start px-5 pb-14 pt-44 sm:items-center sm:px-7 sm:pb-16 sm:pt-28 lg:px-10 lg:pb-20">
          <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,640px)_minmax(320px,1fr)] lg:items-center">
            <div className="max-w-[640px]">
              <p className="studio-kicker studio-reveal mb-5">
                Coverl / AI systems studio / operational automation
              </p>
              <h1 className="studio-display studio-reveal max-w-[12ch] text-balance">
                Systems for work that should move by itself.
              </h1>
              <p className="studio-support studio-reveal mt-6 max-w-[34ch] text-pretty">
                Coverl designs premium AI operating systems for teams carrying
                too much manual coordination, scattered knowledge, and repetitive
                decision work.
              </p>
              <div className="studio-reveal mt-9 flex flex-wrap items-center gap-3">
                <Link href="#selected-systems" className="studio-cta studio-cta--primary">
                  View selected systems
                </Link>
                <Link href="/contact" className="studio-cta studio-cta--ghost">
                  Start a conversation
                </Link>
              </div>
            </div>

            <div className="studio-rig studio-reveal mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end">
              <div className="studio-rig__lamp" aria-hidden="true" />
              <div className="studio-rig__lens" aria-hidden="true" />
              <div className="studio-rig__panel" aria-hidden="true" />
              <div className="studio-rig__readout" aria-hidden="true">
                <span>ops layer / active</span>
                <span>handoff / reduced</span>
                <span>signal / stable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MotionSection
        className="studio-service studio-service--web"
        id="selected-systems"
      >
        <div className="studio-service__grain" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-7 lg:grid-cols-[minmax(0,560px)_minmax(320px,1fr)] lg:items-end lg:px-10 lg:py-24">
          <div className="max-w-[520px]">
            <p className="studio-kicker mb-5">Selected systems</p>
            <h2 className="studio-section-title">
              Services presented as working studio objects.
            </h2>
            <p className="studio-section-copy mt-5 max-w-[34ch]">
              Each engagement is designed like an operating instrument: precise
              enough for daily use, restrained enough to disappear into the
              background.
            </p>
          </div>
          <div className="studio-system-stack">
            {systems.map((system) => (
              <article className="studio-system" key={system.label}>
                <p className="studio-kicker">{system.label}</p>
                <h3>{system.title}</h3>
                <p>{system.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="studio-service studio-service--ai">
        <div className="studio-service__grain" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-7 lg:grid-cols-[minmax(320px,1fr)_minmax(0,560px)] lg:items-end lg:px-10 lg:py-24">
          <div
            className="studio-scene studio-scene--ai order-2 lg:order-1"
            aria-hidden="true"
          >
            <div className="studio-scene__rack" />
            <div className="studio-scene__pulse" />
            <div className="studio-scene__trace" />
          </div>
          <div className="order-1 max-w-[540px] lg:order-2 lg:justify-self-end">
            <p className="studio-kicker mb-5">Case studies</p>
            <h2 className="studio-section-title">
              Quiet machinery, measured after it starts running.
            </h2>
            <p className="studio-section-copy mt-5 max-w-[34ch]">
              Placeholder studies for intake, reporting, and internal knowledge
              systems, framed by the operational pressure they remove.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1440px] gap-4 px-5 pb-20 sm:px-7 lg:grid-cols-3 lg:px-10 lg:pb-24">
          {cases.map((study) => (
            <article className="studio-case" key={study.label}>
              <p className="studio-kicker">{study.label}</p>
              <strong>{study.metric}</strong>
              <h3>{study.title}</h3>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="studio-service studio-service--web">
        <div className="studio-service__grain" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 sm:px-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,1.1fr)] lg:px-10 lg:py-28">
          <div className="max-w-[560px]">
            <p className="studio-kicker mb-5">Operational transformation</p>
            <h2 className="studio-section-title">
              Less drag. More visible operating rhythm.
            </h2>
          </div>
          <div className="studio-metrics">
            <div>
              <strong>31%</strong>
              <span>fewer manual handoffs</span>
            </div>
            <div>
              <strong>12k</strong>
              <span>records structured monthly</span>
            </div>
            <div>
              <strong>4.8h</strong>
              <span>average response time recovered</span>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="studio-service studio-service--ai">
        <div className="studio-service__grain" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-7 lg:grid-cols-[minmax(320px,1fr)_minmax(0,560px)] lg:items-start lg:px-10 lg:py-28">
          <div className="studio-process">
            {process.map((step, index) => (
              <div className="studio-process__step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
          <div className="max-w-[540px] lg:justify-self-end">
            <p className="studio-kicker mb-5">Process / engagement model</p>
            <h2 className="studio-section-title">
              A studio cadence for systems that touch real operations.
            </h2>
            <p className="studio-section-copy mt-5 max-w-[35ch]">
              We begin with the actual operating texture, then design controlled
              automations that can be observed, adjusted, and trusted before
              they scale.
            </p>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="studio-service studio-founder">
        <div className="studio-service__grain" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-7 lg:grid-cols-[minmax(0,0.76fr)_minmax(320px,1.24fr)] lg:items-end lg:px-10 lg:py-28">
          <p className="studio-kicker">Founder note</p>
          <blockquote>
            &quot;The best AI system does not announce itself. It gives a team
            back its attention, makes the next action obvious, and leaves a
            clearer trace than the process it replaced.&quot;
          </blockquote>
        </div>
      </MotionSection>

      <MotionSection className="studio-service studio-service--web">
        <div className="studio-service__grain" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-7 lg:grid-cols-[minmax(0,560px)_minmax(320px,1fr)] lg:items-start lg:px-10 lg:py-28">
          <div>
            <p className="studio-kicker mb-5">Client industries</p>
            <h2 className="studio-section-title">
              Built for teams where operations shape the brand.
            </h2>
          </div>
          <div className="studio-industries">
            {industries.map((industry) => (
              <span key={industry}>{industry}</span>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="studio-service studio-cta-band">
        <div className="studio-service__grain" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 sm:px-7 lg:grid-cols-[minmax(0,720px)_auto] lg:items-end lg:px-10 lg:py-32">
          <div>
            <p className="studio-kicker mb-5">Commission / next system</p>
            <h2 className="studio-section-title">
              Commission an operating system with atmosphere.
            </h2>
            <p className="studio-section-copy mt-5 max-w-[38ch]">
              Bring the workflows that feel too slow, too manual, or too
              dependent on one person. We will turn them into a designed system.
            </p>
          </div>
          <Link href="/contact" className="studio-cta studio-cta--primary">
            Work with us
          </Link>
        </div>
      </MotionSection>
    </main>
  );
}
