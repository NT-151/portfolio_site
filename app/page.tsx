import Link from "next/link";
import Nav from "./components/Nav";
import MotionSection from "./components/MotionSection";
import StudioAnimations from "./components/StudioAnimations";

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

const projects = [
  {
    number: "01",
    name: "Intake layer",
    label: "Classification / routing",
    year: "2026",
  },
  {
    number: "02",
    name: "Decision rhythm",
    label: "Approvals / review",
    year: "2026",
  },
  {
    number: "03",
    name: "Knowledge trace",
    label: "Search / evidence",
    year: "2026",
  },
];

function SplitWords({ text }: { text: string }) {
  return (
    <span className="studio-split" aria-label={text}>
      {text.split(" ").map((word, index) => (
        <span className="studio-split__mask" aria-hidden="true" key={`${word}-${index}`}>
          <span className="studio-split__word">{word}</span>
        </span>
      ))}
    </span>
  );
}

export default function HomePage() {
  return (
    <main className="studio-shell bg-[var(--color-bg)] text-[var(--color-fg)]">
      <StudioAnimations />
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
                <SplitWords text="Transforming operational drag into cinematic systems." />
              </h1>
              <div className="studio-reveal mt-8 flex flex-wrap items-end justify-between gap-6">
                <p className="studio-support max-w-[42ch] text-pretty">
                  allinhaus aligns scattered work, team knowledge, and recurring
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
        <div className="studio-reel__stage" aria-hidden="true">
          <div className="studio-flow studio-flow--intake">
            <span>intake</span>
            <strong>classify request</strong>
          </div>
          <div className="studio-flow studio-flow--route">
            <span>routing</span>
            <strong>assign owner</strong>
          </div>
          <div className="studio-flow studio-flow--trace">
            <span>trace</span>
            <strong>review output</strong>
          </div>
          <div className="studio-node studio-node--one" />
          <div className="studio-node studio-node--two" />
          <div className="studio-node studio-node--three" />
          <div className="studio-orbit studio-orbit--one" />
          <div className="studio-orbit studio-orbit--two" />
          <div className="studio-scanline" />
          <div className="studio-marquee">
            <span>signal stable / handoff reduced / context ready /</span>
            <span>signal stable / handoff reduced / context ready /</span>
          </div>
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
            <SplitWords text="Systems that read the room before they move the work forward." />
          </h2>
        </div>
      </MotionSection>

      <MotionSection className="studio-projects" id="work">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-7 lg:grid-cols-[minmax(0,0.72fr)_minmax(360px,1fr)] lg:px-10 lg:py-28">
          <div className="studio-projects__sticky">
            <p className="studio-kicker mb-5">Selected motion systems</p>
            <h2 className="studio-section-title studio-section-title--wide">
              <SplitWords text="Work that moves like a directed sequence." />
            </h2>
          </div>
          <div className="studio-project-stack">
            {projects.map((project) => (
              <article className="studio-project-card" key={project.number}>
                <div className="studio-project-card__visual" aria-hidden="true">
                  <div className="studio-project-card__grid" />
                  <div className="studio-project-card__pulse" />
                  <div className="studio-project-card__marquee">
                    <span>view project / view project / view project /</span>
                    <span>view project / view project / view project /</span>
                  </div>
                </div>
                <div className="studio-project-card__body">
                  <p className="studio-kicker">{project.number}</p>
                  <h3>{project.name}</h3>
                  <div>
                    <span>{project.label}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
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

      <MotionSection className="studio-footer">
        <div className="studio-service__grain" aria-hidden="true" />
        <div className="studio-footer__mark" aria-hidden="true" />
        <div className="studio-footer__inner">
          <Link href="/contact" className="studio-footer__headline">
            <h2>
              <span>Let&apos;s work</span>
              <span>together</span>
            </h2>
          </Link>

          <div className="studio-footer__links" aria-label="Footer navigation">
            <nav>
              <Link href="/work">Work</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <nav>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </nav>
          </div>

          <div className="studio-footer__meta">
            <p>©allinhaus. All rights reserved · <Link href="/contact">Privacy</Link></p>
            <p>Website by <Link href="/">allinhaus</Link></p>
          </div>
        </div>
      </MotionSection>
    </main>
  );
}
