import Link from "next/link";
import Nav from "./components/Nav";
import MotionSection from "./components/MotionSection";

const process = [
  "Map the operational surface",
  "Prototype the system logic",
  "Build the controlled workflow",
  "Instrument, train, and refine",
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
                <Link href="/contact" className="studio-cta studio-cta--primary">
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
