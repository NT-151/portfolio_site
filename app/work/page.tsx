import Nav from "../components/Nav";

const projects = [
  {
    label: "01 / placeholder",
    title: "A cinematic commerce system.",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum metus vel lectus faucibus, non rhoncus urna luctus.",
  },
  {
    label: "02 / placeholder",
    title: "An operational AI workflow.",
    copy: "Praesent commodo, nibh at porttitor pulvinar, lorem justo tempor sem, vitae volutpat sapien mi vitae nibh.",
  },
];

export default function WorkPage() {
  return (
    <main className="studio-shell bg-[var(--color-bg)] text-[var(--color-fg)]">
      <section className="studio-hero relative isolate min-h-screen overflow-hidden">
        <div className="studio-hero__grain" aria-hidden="true" />
        <div className="studio-hero__glow" aria-hidden="true" />
        <div className="studio-hero__beam" aria-hidden="true" />
        <div className="studio-hero__grid" aria-hidden="true" />

        <Nav current="work" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-center px-5 pb-14 pt-28 sm:px-7 sm:pb-16 lg:px-10 lg:pb-20">
          <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,640px)_minmax(320px,1fr)] lg:items-center">
            <div className="max-w-[640px]">
              <p className="studio-kicker studio-reveal mb-5">
                Work / selected systems / placeholder
              </p>
              <h1 className="studio-display studio-reveal max-w-[12ch] text-balance">
                Designed work, presented with atmosphere.
              </h1>
              <p className="studio-support studio-reveal mt-6 max-w-[36ch] text-pretty">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                finibus, tellus ac consequat viverra, mi lacus facilisis erat,
                sed blandit magna lorem non urna.
              </p>
            </div>

            <div className="studio-rig studio-reveal mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end">
              <div className="studio-rig__lamp" aria-hidden="true" />
              <div className="studio-rig__lens" aria-hidden="true" />
              <div className="studio-rig__panel" aria-hidden="true" />
              <div className="studio-rig__readout" aria-hidden="true">
                <span>archive / two studies</span>
                <span>status / placeholder</span>
                <span>output / visible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="studio-service studio-service--web">
        <div className="studio-service__grain" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-20 sm:px-7 lg:grid-cols-2 lg:px-10 lg:py-24">
          {projects.map((project) => (
            <article className="studio-work-card" key={project.label}>
              <div className="studio-work-card__media" aria-hidden="true">
                <div className="studio-scene studio-scene--web">
                  <div className="studio-scene__frame" />
                  <div className="studio-scene__plate" />
                  <div className="studio-scene__flare" />
                </div>
              </div>
              <div className="studio-work-card__body">
                <p className="studio-kicker">{project.label}</p>
                <h2 className="studio-section-title">{project.title}</h2>
                <p className="studio-section-copy mt-5">{project.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
