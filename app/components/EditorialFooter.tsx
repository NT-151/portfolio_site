import Link from "next/link";

const primaryLinks = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function EditorialFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-primary/10 bg-background px-margin-desktop py-12 text-primary md:py-16">
      <div
        className="pointer-events-none absolute left-1/2 top-8 h-72 w-[110vw] max-w-[1180px] -translate-x-1/2 rotate-[-8deg] rounded-[50%] border-[32px] border-primary/[0.045]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[460px] max-w-max-width flex-col justify-between gap-20">
        <div>
          <div className="flex flex-col items-start md:items-center">
            <div className="flex flex-col items-start gap-5 md:flex-row md:items-center">
              <h2 className="font-headline-xl text-[clamp(56px,9vw,118px)] font-light leading-[0.86] tracking-[-0.04em]">
                LET&apos;S WORK
              </h2>
              <Link
                className="rounded-full bg-muted-teal px-8 py-5 font-headline-md text-[18px] font-medium leading-none text-primary transition-colors hover:bg-secondary-fixed-dim md:px-10"
                href="/contact"
              >
                BOOK A CALL
              </Link>
            </div>
            <h2 className="self-start font-headline-xl text-[clamp(52px,8.5vw,112px)] font-bold leading-[0.86] tracking-[-0.045em] md:self-center md:pl-[34%]">
              TOGETHER
            </h2>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="grid grid-cols-2 gap-12 md:col-span-5">
            <nav aria-label="Footer primary">
              <ul className="space-y-1">
                {primaryLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="font-label-md text-[18px] uppercase leading-tight text-primary transition-colors hover:text-muted-teal"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Footer social">
              <ul className="space-y-1">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      className="font-label-md text-[18px] uppercase leading-tight text-primary transition-colors hover:text-muted-teal"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-4 text-[12px] font-medium uppercase leading-tight text-on-surface-variant md:col-span-12 md:flex-row md:items-center md:justify-between">
            <p>© AETHEREAL AI. ALL RIGHTS RESERVED · PRIVACY</p>
            <p>WEBSITE BY AETHEREAL</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
