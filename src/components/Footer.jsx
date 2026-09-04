import { profile } from "../data/portfolio";
import { GithubIcon, LinkedInIcon, WhatsAppIcon, MailIcon } from "./socialIcons";

function ArrowUpIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", href: profile.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInIcon },
  {
    label: "WhatsApp",
    href: "https://wa.me/94743240421",
    Icon: WhatsAppIcon,
    ariaLabel: "Contact Wethum on WhatsApp",
  },
  { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon },
];

function handleBackToTop(e) {
  e.preventDefault();
  document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="border-t border-border-inverse bg-bg-dark px-6 py-12 text-text-inverse sm:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        <a
          href="#top"
          onClick={handleBackToTop}
          aria-label="Back to top"
          className="group flex flex-col items-center gap-2 text-text-inverse-muted transition-colors duration-200 hover:text-text-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text-inverse"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-inverse transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-text-inverse/60">
            <ArrowUpIcon />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-widest">
            Back to Top
          </span>
        </a>

        <div className="flex items-center gap-7">
          {socials.map(({ label, href, Icon, ariaLabel }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={ariaLabel ?? label}
              className="rounded-full p-2 text-text-inverse-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-text-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-inverse"
            >
              <Icon className="h-[22px] w-[22px] sm:h-6 sm:w-6" />
            </a>
          ))}
        </div>

        <p className="text-center text-[11px] font-medium text-text-inverse-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
