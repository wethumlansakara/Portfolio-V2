import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2";

function navLinkClass(isDark) {
  return `relative text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full focus-visible:after:w-full ${focusRing} ${
    isDark
      ? "text-text-inverse after:bg-text-inverse focus-visible:outline-text-inverse"
      : "text-text after:bg-text focus-visible:outline-text"
  }`;
}

function contactPillClass(isDark) {
  const base =
    "inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-semibold backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-[2px] hover:scale-[1.02] active:translate-y-0 active:scale-100";
  return isDark
    ? `${base} border-white/30 bg-white/10 text-text-inverse hover:border-white/45 hover:bg-white/[0.18] ${focusRing} focus-visible:outline-text-inverse`
    : `${base} border-black/20 bg-black/[0.05] text-text hover:border-black/35 hover:bg-black/[0.09] ${focusRing} focus-visible:outline-text`;
}

// Each section's navbar theme: "dark" section -> white nav text, "light" section -> black nav text.
const SECTION_THEME = {
  top: "dark",
  about: "dark",
  skills: "dark",
  projects: "dark",
  experience: "dark",
  education: "dark",
  certifications: "dark",
  contact: "dark",
};

// Below the `md` breakpoint, Hero stacks its light text block ABOVE the dark
// portrait image instead of splitting them side-by-side, so the header sits
// over a light background at the top of the page on mobile/tablet.
function themeForSection(id) {
  return SECTION_THEME[id] ?? "light";
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 12);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = Object.keys(SECTION_THEME);
    let observer;

    function setup() {
      observer?.disconnect();

      const headerH = headerRef.current?.offsetHeight ?? 76;
      // A thin detection band directly beneath the fixed header: whichever
      // section is currently crossing it determines the navbar theme.
      const bottomMargin = Math.max(window.innerHeight - headerH - 1, 0);

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((entry) => entry.isIntersecting);
          if (visible.length === 0) return;
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          const id = visible[0].target.id;
          setTheme(themeForSection(id));
        },
        { rootMargin: `-${headerH}px 0px -${bottomMargin}px 0px`, threshold: 0 }
      );

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }

    setup();
    window.addEventListener("resize", setup);
    return () => {
      window.removeEventListener("resize", setup);
      observer?.disconnect();
    };
  }, []);

  const handleMobileNavClick = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  // Close the mobile menu on Escape, on an outside click, and if the viewport
  // grows past the mobile/tablet breakpoint into desktop nav territory.
  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }

    function handlePointerDown(e) {
      const insideHeader = headerRef.current?.contains(e.target);
      const insideMenu = menuRef.current?.contains(e.target);
      if (!insideHeader && !insideMenu) {
        setMenuOpen(false);
      }
    }

    function handleResize() {
      if (window.innerWidth >= 1025) setMenuOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const isDark = theme === "dark";

  return (
    <header
      ref={headerRef}
      className="site-header"
      data-theme={theme}
      data-scrolled={scrolled}
    >
      <nav
        aria-label="Primary"
        className="relative mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 sm:h-[76px] sm:px-12"
      >
        <Logo />

        <div className="hidden items-center gap-4 min-[1025px]:flex lg:gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass(isDark)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={contactPillClass(isDark)}>
            Contact Me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className={`flex h-11 w-11 items-center justify-center rounded-md transition-all duration-200 ease-out hover:scale-110 active:scale-90 min-[1025px]:hidden ${focusRing} ${
            isDark
              ? "text-text-inverse focus-visible:outline-text-inverse"
              : "text-text focus-visible:outline-text"
          }`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mobile-menu-glass absolute inset-x-3 top-full max-h-[calc(100vh-4rem)] overflow-y-auto rounded-b-2xl border shadow-[0_12px_30px_rgba(0,0,0,0.08)] min-[1025px]:hidden sm:inset-x-auto sm:right-6 sm:top-[calc(100%+6px)] sm:w-[360px] sm:max-w-[calc(100vw-40px)] sm:rounded-2xl"
            >
              <div className="flex flex-col gap-0.5 px-4 py-3 sm:px-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleMobileNavClick(e, link.href)}
                    className={`rounded-md px-3 py-2.5 text-base font-medium text-text-inverse transition-colors hover:bg-white/[0.08] ${focusRing} focus-visible:outline-text-inverse`}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleMobileNavClick(e, "#contact")}
                  className={`mt-2 rounded-full border border-[#b8efe5] bg-[#b8efe5] px-5 py-2.5 text-center text-sm font-semibold text-[#081018] shadow-sm transition-colors hover:bg-white hover:border-white sm:w-[88%] sm:self-center ${focusRing} focus-visible:outline-text-inverse`}
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
