import type { Metadata } from "next";
import Link from "next/link";
import EditorialFooter from "../components/EditorialFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | Allinhaus",
  description:
    "How Allinhaus handles website enquiries, contact details, project information, technical logs, and privacy rights.",
};

const sections = [
  {
    title: "Who We Are",
    body: [
      "Allinhaus provides AI automation and workflow systems for beauty and aesthetics clinics.",
      "For privacy questions, contact Allinhaus through LinkedIn or Instagram using the links on this page.",
    ],
  },
  {
    title: "Information We Collect",
    body: [
      "When you contact us, we may collect your name, clinic name, email address, message, and any project details you choose to provide.",
      "We may also receive basic technical information from the website host, such as IP address, browser type, device information, referring page, and timestamps. This is used to keep the website secure and working properly.",
      "Please do not send patient clinical information, treatment records, consultation transcripts, or other sensitive patient data through the public contact form.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use enquiry information to reply to you, understand your clinic workflow, arrange an audit or call, prepare proposals, and keep records of business conversations.",
      "If you become a client, project data, clinical workflow information, patient-related processing, integrations, and system access will be handled under a separate project agreement or data processing arrangement.",
    ],
  },
  {
    title: "Lawful Basis",
    body: [
      "For enquiries and pre-contract conversations, we rely on taking steps before entering into a contract and our legitimate interest in responding to business enquiries.",
      "For client delivery, we process information to perform the agreed services. Where a project involves patient or special category data, the relevant clinic remains responsible for deciding the appropriate lawful basis for its patient data, unless a separate written agreement says otherwise.",
    ],
  },
  {
    title: "Sharing Information",
    body: [
      "We do not sell personal information.",
      "We may share information with service providers that help operate the website, communications, cloud hosting, file storage, project delivery, accounting, or legal compliance. They should only use the information for the service they provide to us.",
      "We may also share information if required by law, to protect our rights, or to respond to a lawful request.",
    ],
  },
  {
    title: "Retention",
    body: [
      "Website enquiries are normally kept for up to 12 months after the last meaningful contact unless we need them for an active project, legal record, or accounting purpose.",
      "Client and project records may be kept for the duration of the relationship and then for as long as needed for tax, legal, insurance, or dispute purposes.",
      "Technical logs are kept only for as long as needed by the website host for security, diagnostics, and service operation.",
    ],
  },
  {
    title: "Cookies And Analytics",
    body: [
      "The current website does not intentionally use non-essential marketing cookies or analytics scripts.",
      "If analytics, advertising pixels, embedded media, or cookie-based tools are added later, this policy should be updated and visitors should be given any required cookie choices.",
    ],
  },
  {
    title: "International Services",
    body: [
      "Some service providers may process information outside the UK or European Economic Area. Where this happens, we expect appropriate safeguards to be used by those providers.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "Depending on where you live and the information involved, you may have rights to access, correct, delete, restrict, object to, or receive a copy of your personal information.",
      "You may also have the right to complain to a data protection regulator. In the UK, this is the Information Commissioner's Office.",
    ],
  },
  {
    title: "Updates",
    body: [
      "This policy may be updated when the website, services, tools, or legal requirements change. The latest version will be posted on this page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-on-background">
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-surface">
        <nav className="mx-auto flex h-20 max-w-max-width items-center justify-between px-margin-desktop">
          <Link
            className="font-headline-md text-headline-md font-bold text-primary"
            href="/"
          >
            ALLINHAUS
          </Link>
          <div className="hidden items-center gap-10 md:flex">
            <Link
              className="font-label-caps text-label-caps text-on-surface-variant transition-colors duration-200 hover:text-muted-teal"
              href="/#services"
            >
              SERVICES
            </Link>
            <Link
              className="font-label-caps text-label-caps text-on-surface-variant transition-colors duration-200 hover:text-muted-teal"
              href="/#work"
            >
              WORK
            </Link>
            <Link
              className="font-label-caps text-label-caps text-on-surface-variant transition-colors duration-200 hover:text-muted-teal"
              href="/contact"
            >
              CONTACT
            </Link>
          </div>
          <Link
            className="rounded-DEFAULT bg-primary px-6 py-3 font-label-caps text-label-caps text-white transition-all hover:opacity-80"
            href="/contact"
          >
            CLINIC AUDIT
          </Link>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-max-width px-margin-desktop py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="font-label-caps text-label-caps text-muted-teal">
                PRIVACY
              </span>
              <h1 className="mb-8 mt-5 font-headline-xl text-headline-xl-mobile text-primary md:text-headline-xl">
                Privacy policy.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Last updated: 22 May 2026
              </p>
            </div>
            <div className="space-y-12 md:col-span-7 md:col-start-6">
              <div className="border border-primary/10 bg-white p-8">
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  This policy explains how Allinhaus handles personal
                  information from website visitors, clinic owners, and business
                  contacts. It is written for this website and does not replace
                  a separate client data processing agreement for project work.
                </p>
              </div>

              {sections.map((section) => (
                <section
                  className="border-t border-primary/10 pt-8"
                  key={section.title}
                >
                  <h2 className="mb-5 font-headline-md text-headline-md text-primary">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.body.map((paragraph) => (
                      <p
                        className="font-body-md text-body-md text-on-surface-variant"
                        key={paragraph}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              <section className="border-t border-primary/10 pt-8">
                <h2 className="mb-5 font-headline-md text-headline-md text-primary">
                  Contact
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <a
                    className="border border-primary/10 bg-white p-6 font-label-md text-label-md text-primary transition-colors hover:border-muted-teal"
                    href="https://www.linkedin.com/in/nayzgi-teklebrhan-6357a72aa/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="border border-primary/10 bg-white p-6 font-label-md text-label-md text-primary transition-colors hover:border-muted-teal"
                    href="https://www.instagram.com/allinhaus_com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <EditorialFooter />
    </div>
  );
}
