import Nav from "../components/Nav";

export default function ContactPage() {
  return (
    <main className="studio-shell bg-[var(--color-bg)] text-[var(--color-fg)]">
      <section className="studio-hero relative isolate min-h-screen overflow-hidden">
        <div className="studio-hero__grain" aria-hidden="true" />
        <div className="studio-hero__glow" aria-hidden="true" />
        <div className="studio-hero__beam" aria-hidden="true" />
        <div className="studio-hero__grid" aria-hidden="true" />

        <Nav current="contact" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-center px-5 pb-14 pt-28 sm:px-7 sm:pb-16 lg:px-10 lg:pb-20">
          <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,560px)_minmax(320px,1fr)] lg:items-center">
            <div className="max-w-[560px]">
              <p className="studio-kicker studio-reveal mb-5">
                Work with us / contact / placeholder
              </p>
              <h1 className="studio-display studio-reveal max-w-[12ch] text-balance">
                Tell us what needs to move.
              </h1>
              <p className="studio-support studio-reveal mt-6 max-w-[36ch] text-pretty">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque luctus, ipsum vitae lacinia tincidunt, justo massa
                gravida lacus, eget aliquet sem magna id est.
              </p>
            </div>

            <form className="studio-contact studio-reveal" action="#">
              <div className="studio-contact__row">
                <label className="studio-contact__label" htmlFor="name">
                  Name
                </label>
                <input
                  className="studio-contact__input"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Lorem Ipsum"
                />
              </div>
              <div className="studio-contact__row">
                <label className="studio-contact__label" htmlFor="email">
                  Email
                </label>
                <input
                  className="studio-contact__input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="lorem@example.com"
                />
              </div>
              <div className="studio-contact__row">
                <label className="studio-contact__label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="studio-contact__textarea"
                  id="message"
                  name="message"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  rows={6}
                />
              </div>
              <button className="studio-cta studio-cta--primary" type="submit">
                Send placeholder
              </button>
            </form>
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
            <p className="studio-kicker mb-5">Next / placeholder</p>
            <h2 className="studio-section-title">
              We start with the shape of the problem.
            </h2>
            <p className="studio-section-copy mt-5 max-w-[34ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consequat risus at augue tincidunt, in facilisis magna varius.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
