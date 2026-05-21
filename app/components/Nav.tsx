import Link from "next/link";

type Page = "home" | "work" | "about" | "contact";

export default function Nav({
  current,
}: {
  current?: Page;
} = {}) {
  const brandClass = "text-[var(--color-fg)]";
  const linkBase =
    "px-0 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition-colors sm:text-[11px]";
  const inactiveLink = "!text-[rgba(17,16,14,0.64)] hover:!text-[var(--color-fg)]";
  const activeLink = "!text-[var(--color-fg)]";
  const navShell = "border-black/12";
  const ctaClass = "!text-[var(--color-fg)] hover:!text-[#9a5f09]";
  const aria = (page: Page) =>
    current === page ? { "aria-current": "page" as const } : {};

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex w-full max-w-[1280px] items-start justify-between px-5 pt-6 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6 sm:gap-y-4">
          <Link
            href="/"
            className="flex min-h-[52px] items-center gap-3"
            aria-label="allinhaus home"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              aria-hidden="true"
              className={`shrink-0 ${brandClass}`}
            >
              <circle
                cx="11"
                cy="11"
                r="9"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M11 3.5c2.6 2.4 2.6 12.6 0 15"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M11 3.5c-2.6 2.4-2.6 12.6 0 15"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M2.2 11h17.6"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <span
              className={`font-[IBM_Plex_Mono,JetBrains_Mono,SFMono-Regular,Menlo,Consolas,monospace] text-[12px] font-semibold tracking-[0.26em] sm:text-[13px] ${brandClass}`}
            >
              allinhaus
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className={`flex min-h-[44px] w-full flex-wrap items-center gap-x-5 gap-y-2 border-b px-0 py-0 sm:min-h-[52px] sm:w-auto sm:gap-7 ${navShell}`}
          >
            <Link
              href="/about"
              className={`${linkBase} ${current === "about" ? activeLink : inactiveLink}`}
              {...aria("about")}
            >
              About
            </Link>
            <Link
              href="/work"
              className={`${linkBase} ${current === "work" ? activeLink : inactiveLink}`}
              {...aria("work")}
            >
              Work
            </Link>
            <Link
              href="/contact"
              className={`flex min-h-[42px] items-center py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition-colors sm:text-[11px] ${ctaClass}`}
              {...aria("contact")}
            >
              Work with us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
