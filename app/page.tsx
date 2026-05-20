import Link from "next/link";
import Nav from "./components/Nav";
import MotionSection from "./components/MotionSection";

const process = [
  {
    number: "01",
    label: "Map",
    title: "Find the work that keeps repeating.",
    copy: "We start inside the real operating rhythm: inboxes, handoffs, tools, approvals, and the judgement calls that slow the team down.",
  },
  {
    number: "02",
    label: "Shape",
    title: "Turn the pattern into a controlled system.",
    copy: "The first version is narrow on purpose, with clear inputs, review points, and output traces the team can trust.",
  },
  {
    number: "03",
    label: "Run",
    title: "Launch it where the work already happens.",
    copy: "Automations are fitted around existing behaviour, then measured, adjusted, and expanded only when the operating signal is stable.",
  },
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

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-end px-5 pb-10 pt-36 sm:px-7 sm:pb-12 lg:px-10">
          <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.58fr)] lg:items-end">
            <div>
              <p className="studio-kicker studio-reveal mb-6">
                AI operating systems / visual strategy / quiet automation
              </p>
              <h1 className="studio-display studio-reveal studio-display--editorial text-balance">
                Transforming operational drag into cinematic systems.
              </h1>
              <div className="studio-reveal mt-8 flex flex-wrap items-end justify-between gap-6">
                <p className="studio-support max-w-[42ch] text-pretty">
                  Coverl aligns scattered work, team knowledge, and recurring
                  decisions into designed systems that feel calm, legible, and
                  ready to operate.
                </p>
                <Link href="/contact" className="studio-cta studio-cta--primary">
                  Start a conversation
                </Link>
              </div>
            </div>

            <div className="studio-reveal studio-hero-card lg:justify-self-end">
              <p>System direction</p>
              <span>Manual work made visible, shaped, and reduced.</span>
              <span>Automation with a clear operating trace.</span>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="studio-reel">
        <div className="studio-reel__media" aria-hidden="true">
          <video autoPlay loop muted playsInline preload="metadata">
            <source src="/moon.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="studio-reel__caption">
          <p className="studio-kicker">Moving interface / operating atmosphere</p>
          <p>
            An operating system should not explain every mechanism. It should
            make the next move feel directed, precise, and worth trusting.
          </p>
        </div>
      </MotionSection>

      <MotionSection className="studio-manifesto">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-7 lg:px-10 lg:py-28">
          <p className="studio-kicker mb-8">Studio position</p>
          <h2>
            Systems that read the room before they move the work forward.
          </h2>
        </div>
      </MotionSection>

      <MotionSection className="studio-service studio-service--ai">
        <div className="studio-service__grain" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-7 lg:grid-cols-[minmax(0,520px)_minmax(320px,1fr)] lg:items-start lg:px-10 lg:py-28">
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
          <div className="studio-process">
            {process.map((step) => (
              <article className="studio-process__step" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <p className="studio-process__label">{step.label}</p>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="studio-service studio-cta-band">
        <div className="studio-service__grain" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 sm:px-7 lg:grid-cols-[minmax(0,0.78fr)_auto] lg:items-end lg:px-10 lg:py-32">
          <div>
            <p className="studio-kicker mb-5">Commission / next system</p>
            <h2 className="studio-section-title studio-section-title--wide">
              Let&apos;s build the operating layer your team keeps needing.
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
