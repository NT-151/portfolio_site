import Link from "next/link";

const primaryLinks = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Work", href: "/#case-study" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nayzgi-teklebrhan-6357a72aa/",
  },
  { label: "Instagram", href: "https://www.instagram.com/allinhaus_com/" },
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
              <h2 className="font-headline-xl text-[56px] font-light leading-none md:text-[104px]">
                AUTOMATE
              </h2>
              <Link
                className="rounded-full bg-muted-teal px-8 py-5 font-headline-md text-[18px] font-medium leading-none text-primary transition-colors hover:bg-secondary-fixed-dim md:px-10"
                href="/contact"
              >
                BOOK AUDIT
              </Link>
            </div>
            <h2 className="self-start font-headline-xl text-[48px] font-bold leading-none md:self-center md:pl-[34%] md:text-[96px]">
              THE ADMIN
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
                      rel="noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-4 text-[12px] font-medium uppercase leading-tight text-on-surface-variant md:col-span-12 md:flex-row md:items-center md:justify-between">
            <p>
              © ALLINHAUS AI. ALL RIGHTS RESERVED ·{" "}
              <Link
                className="transition-colors hover:text-primary"
                href="/privacy"
              >
                PRIVACY
              </Link>
            </p>
            <p>AI SYSTEMS FOR BEAUTY CLINICS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
