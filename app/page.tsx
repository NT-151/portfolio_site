import Link from "next/link";
import Nav from "./components/Nav";

export default function HomePage() {
  return (
    <main className="studio-shell bg-[var(--color-bg)] text-[var(--color-fg)]">
      <section className="studio-hero relative isolate min-h-screen overflow-hidden">
        <div className="studio-hero__grain" aria-hidden="true" />
        <div className="studio-hero__glow" aria-hidden="true" />
        <div className="studio-hero__beam" aria-hidden="true" />
        <div className="studio-hero__grid" aria-hidden="true" />

        <Nav />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-center px-5 pb-14 pt-28 sm:px-7 sm:pb-16 lg:px-10 lg:pb-20">
          <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,640px)_minmax(320px,1fr)] lg:items-center">
            <div className="max-w-[640px]">
              <p className="studio-kicker studio-reveal mb-5">
                Coverl / design studio / web systems / intelligent operations
              </p>
              <h1 className="studio-display studio-reveal max-w-[12ch] text-balance">
                Engineering desire through design and intelligence.
              </h1>
              <p className="studio-support studio-reveal mt-6 max-w-[34ch] text-pretty">
                Coverl builds cinematic web experiences and quiet AI automations
                for brands that want presence, precision, and less admin.
              </p>
              <div className="studio-reveal mt-9 flex flex-wrap items-center gap-3">
                <Link href="/work" className="studio-cta studio-cta--primary">
                  Explore web design
                </Link>
                <Link href="/contact" className="studio-cta studio-cta--ghost">
                  Explore AI automation
                </Link>
              </div>
            </div>

            <div className="studio-rig studio-reveal mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end">
              <div className="studio-rig__lamp" aria-hidden="true" />
              <div className="studio-rig__lens" aria-hidden="true" />
              <div className="studio-rig__panel" aria-hidden="true" />
              <div className="studio-rig__readout" aria-hidden="true">
                <span>tungsten / 3200k</span>
                <span>exposure / 1.4</span>
                <span>signal / stable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="studio-service studio-service--web">
        <div className="studio-service__grain" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-7 lg:grid-cols-[minmax(0,560px)_minmax(320px,1fr)] lg:items-end lg:px-10 lg:py-24">
          <div className="max-w-[520px]">
            <p className="studio-kicker mb-5">01 / web design</p>
            <h2 className="studio-section-title">
              Designed like a film. Built like an instrument.
            </h2>
            <p className="studio-section-copy mt-5 max-w-[34ch]">
              Editorial, conversion-focused websites with deliberate pacing,
              physical atmosphere, and frontend systems that hold up under real
              traffic.
            </p>
          </div>
          <div className="studio-scene studio-scene--web" aria-hidden="true">
            <div className="studio-scene__frame" />
            <div className="studio-scene__plate" />
            <div className="studio-scene__flare" />
          </div>
        </div>
      </section>

      <section className="studio-service studio-service--ai">
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
            <p className="studio-kicker mb-5">02 / AI automation</p>
            <h2 className="studio-section-title">
              Quiet machinery, running in the background.
            </h2>
            <p className="studio-section-copy mt-5 max-w-[34ch]">
              AI workflows, internal tools, and operational systems that remove
              repetitive load, connect the messy parts, and leave your team with
              signal instead of noise.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
