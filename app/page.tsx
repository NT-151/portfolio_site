"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import EditorialFooter from "./components/EditorialFooter";

const services = [
  {
    icon: "settings_input_component",
    title: "Workflow Automation",
    copy: "Eliminate repetitive tasks by mapping and automating cross-platform workflows. We connect your stack to act as a single, cohesive organism.",
  },
  {
    icon: "psychology",
    title: "Custom LLM Development",
    copy: "Fine-tuned language models built on your proprietary data. We deliver context-aware AI that understands your brand voice and technical nuances.",
  },
  {
    icon: "architecture",
    title: "Strategic AI Consulting",
    copy: "Roadmapping your AI transformation. We identify the highest-impact opportunities for automation and guide implementation at scale.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    copy: "Deep-dive into current bottlenecks and data structures to find hidden efficiency gaps.",
  },
  {
    number: "02",
    title: "Architecture",
    copy: "Designing the bespoke AI framework and integration layer tailored to your specific ecosystem.",
  },
  {
    number: "03",
    title: "Implementation",
    copy: "Deployment of custom agents and LLMs with seamless onboarding for your core team.",
  },
  {
    number: "04",
    title: "Optimization",
    copy: "Continuous monitoring and feedback loops to ensure the AI evolves with your business growth.",
  },
];

const caseStudies = [
  {
    industry: "Fintech",
    title: "Global Asset Management",
    copy: "Automating complex document triage and risk assessment workflows.",
    metric: "80%",
    metricLabel: "Efficiency Gain",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD67ujTlXNEpb1FnuJ7Rt2AE2NA9iMZceSwUx7W8cJRmkK9rI9urzYVR51_qv2AN8P-y9EBo9AnJ0q3Jw4MkspWqEA-ZuVJpOUm8zhbrFfvTnqaxawSw2F97L1fwJYG-yPWwh2ESI77W6IfTe736l1Ixetw-fYJMIP6GLUsMFTE6xBpnxT8mDDBItsOY3TQc873dDcoqcBiI0A9wl8dluWqFGIYMQfP72AGpKJn6Ykcci5TPsWd8obUkRGLC9d3c4U46EUqepqYNg_f",
    alt: "Data Visualization",
    delay: "",
  },
  {
    industry: "E-Commerce",
    title: "Omnichannel Retailer",
    copy: "Implementing custom LLM agents for hyper-personalized customer support.",
    metric: "4.2x",
    metricLabel: "Conversion Lift",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDiOBS1m74ARXmpZ_ETzI321hkjJwls6s1wxgvU9r6AFOA-N_hkwHCscg1iaxzQD9IHzYS5bpUpd0DtL5Rl8RDjO8SPHuUzvnc0XqUpK_NKlLiI6XeFqOC4_SYbxn8sKNrVrLfClBYXWTpF2Xa_lOeZlezeFJeDiCUT8hwdGCKqaFPm_v8GYZgazF0F6inr5bbiJ1N88Av7SZpt-8B2_-FFo0Nj69EW6uooBeyHlDGBAsgfwdWFTE_eCle9wHN7BF9yBG2VMKOyocWL",
    alt: "Tech Abstraction",
    delay: "reveal-delay-200",
  },
];

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
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

  if (name === "psychology") {
    return (
      <svg {...shared}>
        <path
          d="M16 31v-5.5h-2.5a6.5 6.5 0 0 1-2.2-12.6A7.5 7.5 0 0 1 25.8 11a6.9 6.9 0 0 1 2.7 13.2V31"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M17 15.5h6M17 20h9M21 24.5h5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "architecture") {
    return (
      <svg {...shared}>
        <path
          d="M8 31V14l12-6 12 6v17M13 31V18h14v13M20 8v23"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M16 22h8" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <path
        d="M8 12h11M25 12h7M8 20h7M21 20h11M8 28h15M29 28h3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <circle cx="22" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="18" cy="20" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="26" cy="28" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
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
          <div className="font-headline-md text-headline-md font-bold tracking-tighter text-primary">
            AETHEREAL
          </div>
          <div className="hidden items-center gap-10 md:flex">
            <a
              className="font-label-caps text-label-caps text-on-surface-variant transition-colors duration-200 hover:text-muted-teal"
              href="#services"
            >
              SERVICES
            </a>
            <a
              className="font-label-caps text-label-caps text-on-surface-variant transition-colors duration-200 hover:text-muted-teal"
              href="#process"
            >
              PROCESS
            </a>
            <a
              className="font-label-caps text-label-caps text-on-surface-variant transition-colors duration-200 hover:text-muted-teal"
              href="#portfolio"
            >
              PORTFOLIO
            </a>
            <Link
              className="rounded-DEFAULT bg-primary px-6 py-3 font-label-caps text-label-caps text-white transition-all hover:opacity-80"
              href="/contact"
            >
              CONSULTATION
            </Link>
          </div>
          <button className="text-primary md:hidden" type="button">
            <MenuIcon />
          </button>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-max-width overflow-hidden px-margin-desktop py-32 md:py-48">
          <div className="grid grid-cols-12 items-center gap-gutter">
            <div className="reveal col-span-12 md:col-span-8">
              <h1 className="mb-8 max-w-4xl font-headline-xl text-headline-xl-mobile text-primary md:text-headline-xl">
                INTELLIGENCE,
                <br />
                AUTOMATED.
              </h1>
              <p className="mb-12 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                AETHEREAL architects the next generation of business operations.
                We build custom AI solutions that allow your team to transcend
                routine and focus on innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="rounded-DEFAULT bg-primary px-8 py-4 font-label-caps text-label-caps text-on-primary transition-colors hover:bg-muted-teal"
                  type="button"
                >
                  START THE EVOLUTION
                </button>
                <button
                  className="rounded-DEFAULT border border-primary px-8 py-4 font-label-caps text-label-caps text-primary transition-colors hover:bg-surface-variant"
                  type="button"
                >
                  VIEW CAPABILITIES
                </button>
              </div>
            </div>
            <div className="reveal reveal-delay-200 relative col-span-4 hidden md:block">
              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-full border border-primary/5 bg-surface-container-high">
                <Image
                  alt="AI Abstraction"
                  className="h-full w-full object-cover opacity-80 mix-blend-multiply"
                  fill
                  priority
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKMYgK7msAs6oNfB_INfI68ROtYfu3WBVlpKVh54v6E1z0YM2g3_73wqygVJ814QfKF2yy4meg3O6ykGalrnXhRJynMrGxtLUjHoQqbPiBxD5Cy1eUhqDoJUpA_fFVZ9RBuOshPDP2lJaRvtHJxG9NQ-uR4CmIzqQb0JYen8k0E3cyLE92ubp9RB7b1N9D_ppwbg_DwF1r34wxv1-9d5313quXw4-PkHrRtVnvQM3EzVzr3U2NIqiD8-xgqADBpbT5CQPRykTlN3Dj"
                />
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
                EXPERTISE
              </span>
              <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">
                CORE CAPABILITIES
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {services.map((service, index) => (
                <div
                  className={`reveal reveal-delay-${(index + 1) * 100} group border border-primary/10 p-10 transition-colors hover:border-muted-teal`}
                  key={service.title}
                >
                  <ServiceIcon name={service.icon} />
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
                METHODOLOGY
              </span>
              <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">
                THE ARCHITECTURE OF EFFICIENCY
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {processSteps.map((step, index) => (
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

        <section className="bg-primary py-32 text-on-primary" id="portfolio">
          <div className="mx-auto max-w-max-width px-margin-desktop">
            <div className="reveal mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
              <div>
                <span className="font-label-caps text-label-caps text-muted-teal">
                  IMPACT
                </span>
                <h2 className="mt-4 font-headline-lg text-headline-lg">
                  CASE STUDIES
                </h2>
              </div>
              <button
                className="rounded-DEFAULT border border-on-primary/20 px-8 py-3 font-label-caps text-label-caps text-on-primary transition-colors hover:border-on-primary"
                type="button"
              >
                VIEW ALL RESULTS
              </button>
            </div>
            <div className="grid grid-cols-1 gap-px border border-on-primary/10 bg-on-primary/10 md:grid-cols-2">
              {caseStudies.map((study) => (
                <div
                  className={`reveal ${study.delay} group bg-primary p-12 transition-colors hover:bg-white/[0.02]`}
                  key={study.title}
                >
                  <div className="mb-12">
                    <span className="mb-4 inline-block rounded-full bg-muted-teal/20 px-3 py-1 font-label-caps text-[10px] text-muted-teal">
                      {study.industry.toUpperCase()}
                    </span>
                    <h3 className="mb-2 font-headline-md text-headline-md">
                      {study.title}
                    </h3>
                    <p className="max-w-sm font-body-md text-on-primary/60">
                      {study.copy}
                    </p>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-headline-xl text-headline-xl leading-none">
                      {study.metric}
                    </span>
                    <span className="font-label-caps text-label-caps text-on-primary/60">
                      {study.metricLabel.toUpperCase()}
                    </span>
                  </div>
                  <div className="relative mt-12 h-64 overflow-hidden rounded-lg border border-white/5">
                    <Image
                      alt={study.alt}
                      className="h-full w-full object-cover grayscale brightness-75 transition-transform duration-700 group-hover:scale-105"
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      src={study.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-40">
          <div className="reveal mx-auto max-w-max-width px-margin-desktop text-center">
            <h2 className="mb-8 font-headline-xl text-headline-xl-mobile text-primary md:text-headline-xl">
              Ready to evolve?
            </h2>
            <p className="mx-auto mb-16 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              Our team of architects is ready to map your transformation.
              Schedule a diagnostic audit to see how AI can redefine your
              operational limits.
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <button
                className="rounded-DEFAULT bg-primary px-12 py-5 font-label-caps text-base text-on-primary tracking-widest transition-all hover:bg-muted-teal"
                type="button"
              >
                FREE AUDIT
              </button>
              <button
                className="rounded-DEFAULT border border-primary px-12 py-5 font-label-caps text-base text-primary tracking-widest transition-all hover:bg-surface-variant"
                type="button"
              >
                CONTACT SALES
              </button>
            </div>
          </div>
        </section>
      </main>

      <EditorialFooter />
    </div>
  );
}
