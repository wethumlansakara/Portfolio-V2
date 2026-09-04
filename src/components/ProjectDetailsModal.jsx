import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import github from "devicon/icons/github/github-original.svg";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function ExternalLink({ href, children, primary = false, label }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={
        primary
          ? "inline-flex items-center gap-1.5 rounded-full bg-bg-dark px-4 py-2 text-sm font-semibold text-text-inverse transition-colors hover:bg-text"
          : "inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-text/40"
      }
    >
      {children}
    </a>
  );
}

export default function ProjectDetailsModal({ project, onClose, returnFocusEl }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    const triggerEl = returnFocusEl?.current;
    document.body.style.overflow = "hidden";

    const dialogNode = dialogRef.current;
    const focusable = dialogNode?.querySelectorAll(FOCUSABLE_SELECTOR);
    focusable?.[0]?.focus();

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogNode) return;

      const items = dialogNode.querySelectorAll(FOCUSABLE_SELECTOR);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerEl?.focus();
    };
  }, [project, onClose, returnFocusEl]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-bg-dark/60 p-0 sm:items-center sm:p-6"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-border bg-bg sm:max-h-[85vh] sm:rounded-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h3 id="project-modal-title" className="text-lg font-bold tracking-tight">
                {project.title}
              </h3>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-text/40 hover:text-text"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6">
              {project.image && (
                <div className="mb-6 aspect-video w-full overflow-hidden rounded-xl bg-bg-dark">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                </div>
              )}

              <p className="text-base leading-relaxed text-text-muted">
                {project.shortDescription}
              </p>

              <div className="mt-6">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-text-muted">
                  Overview
                </h4>
                <p className="text-sm leading-relaxed text-text">{project.fullDescription}</p>
              </div>

              {project.features?.length > 0 && (
                <div className="mt-6">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-text-muted">
                    Key Features
                  </h4>
                  <ul className="space-y-1.5">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm leading-relaxed text-text">
                        <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-muted" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.highlights?.length > 0 && (
                <div className="mt-6">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-text-muted">
                    Results / Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-relaxed text-text">
                        <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-muted" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-text-muted">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-text px-2.5 py-0.5 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 border-t border-border px-6 py-4">
              <ExternalLink
                href={project.liveDemo}
                primary
                label={`View ${project.title} ${(project.liveDemoLabel || "live demo").toLowerCase()}`}
              >
                {project.liveDemoLabel || "Live Demo"} ↗
              </ExternalLink>
              <ExternalLink
                href={project.demoVideo}
                primary={!project.liveDemo}
                label={`Watch ${project.title} demo video`}
              >
                Watch Demo ↗
              </ExternalLink>
              <ExternalLink href={project.github} label={`View ${project.title} on GitHub`}>
                <img src={github} alt="" aria-hidden="true" className="h-3.5 w-3.5" />
                GitHub ↗
              </ExternalLink>
              <ExternalLink
                href={project.linkedinPost}
                label={`View ${project.title} LinkedIn post`}
              >
                LinkedIn Post ↗
              </ExternalLink>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
