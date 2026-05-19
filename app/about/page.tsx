import Nav from "../components/Nav";

export default function AboutPage() {
  return (
    <main className="studio-shell bg-[var(--color-bg)] text-[var(--color-fg)]">
      <section className="studio-hero relative isolate min-h-screen overflow-hidden">
        <div className="studio-hero__grain" aria-hidden="true" />
        <div className="studio-hero__glow" aria-hidden="true" />
        <div className="studio-hero__beam" aria-hidden="true" />
        <div className="studio-hero__grid" aria-hidden="true" />

        <Nav current="about" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-start px-5 pb-14 pt-44 sm:items-center sm:px-7 sm:pb-16 sm:pt-28 lg:px-10 lg:pb-20">
          <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,640px)_minmax(320px,1fr)] lg:items-center">
            <div className="max-w-[640px]">
              <p className="studio-kicker studio-reveal mb-5">
                About / studio notes / placeholder
              </p>
              <h1 className="studio-display studio-reveal max-w-[12ch] text-balance">
                A small studio for deliberate digital systems.
              </h1>
              <p className="studio-support studio-reveal mt-6 max-w-[36ch] text-pretty">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere, sapien non pulvinar luctus, neque lorem tincidunt
                velit, sed luctus justo erat at magna.
              </p>
            </div>

            <div className="studio-rig studio-reveal mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end">
              <div className="studio-rig__lamp" aria-hidden="true" />
              <div className="studio-rig__lens" aria-hidden="true" />
              <div className="studio-rig__panel" aria-hidden="true" />
              <div className="studio-rig__readout" aria-hidden="true">
                <span>profile / placeholder</span>
                <span>method / iterative</span>
                <span>signal / focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="studio-service studio-service--web">
        <div className="studio-service__grain" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-7 lg:grid-cols-[minmax(0,560px)_minmax(320px,1fr)] lg:items-end lg:px-10 lg:py-24">
          <div className="max-w-[520px]">
            <p className="studio-kicker mb-5">01 / approach</p>
            <h2 className="studio-section-title">
              Placeholder strategy, shaped with care.
            </h2>
            <p className="studio-section-copy mt-5 max-w-[34ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempor, metus vitae posuere mattis, justo lectus volutpat arcu, in
              facilisis lorem ipsum at neque.
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
            <p className="studio-kicker mb-5">02 / values</p>
            <h2 className="studio-section-title">
              Systems that stay quiet until needed.
            </h2>
            <p className="studio-section-copy mt-5 max-w-[34ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              pretium risus vel libero fermentum, eget mattis justo posuere.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
