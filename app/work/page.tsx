import type { Metadata } from "next";
import Link from "next/link";
import EditorialFooter from "../components/EditorialFooter";
import WorkSlideshow from "../components/WorkSlideshow";

export const metadata: Metadata = {
  title: "Work | Allinhaus",
  description:
    "Selected client work from Allinhaus, including workflow automation case studies for beauty clinics.",
};

const navItems = [
  { label: "Services", href: "/#systems" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-muted-teal selection:text-white">
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-surface">
        <nav className="mx-auto flex h-20 max-w-max-width items-center justify-between px-margin-desktop">
          <Link
            className="font-headline-md text-headline-md font-bold text-primary"
            href="/"
          >
            ALLINHAUS
          </Link>
          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <Link
                className={
                  item.href === "/work"
                    ? "border-b border-primary pb-1 font-label-caps text-label-caps text-primary"
                    : "font-label-caps text-label-caps text-on-surface-variant transition-colors duration-200 hover:text-muted-teal"
                }
                href={item.href}
                key={item.label}
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </div>
          <Link
            className="rounded-DEFAULT bg-primary px-6 py-3 font-label-caps text-label-caps text-white transition-all hover:opacity-80"
            href="/contact"
          >
            CLINIC AUDIT
          </Link>
        </nav>
      </header>

      <main className="overflow-x-hidden">
        <section className="mx-auto max-w-max-width px-margin-desktop py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="font-label-caps text-label-caps text-muted-teal">
                CLIENT WORK
              </span>
              <h1 className="mt-5 font-headline-xl text-headline-xl-mobile text-primary md:text-headline-xl">
                Client X
              </h1>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="border-t border-primary/10 pt-8 font-body-lg text-body-lg text-on-surface-variant">
                Use this section to explain what work you did for the client:
                the problem they had, the system you built, and what improved
                after the workflow went live.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <WorkSlideshow />
          </div>
        </section>

        <section className="border-y border-primary/5 bg-white py-24">
          <div className="mx-auto grid max-w-max-width gap-12 px-margin-desktop md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="font-label-caps text-label-caps text-muted-teal">
                SHORT DESCRIPTION
              </span>
              <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">
                What changed for Client X.
              </h2>
            </div>
            <div className="space-y-5 font-body-lg text-body-lg text-on-surface-variant md:col-span-7 md:col-start-6">
              <p>
                Replace this placeholder with a concise case-study description.
                Keep it practical: what was manual before, what you automated,
                and how the client uses it now.
              </p>
              <p>
                You can add specific services here, such as invoice processing,
                message drafting, structured exports, clinical note summaries,
                or follow-up task workflows.
              </p>
            </div>
          </div>
        </section>
      </main>

      <EditorialFooter />
    </div>
  );
}
