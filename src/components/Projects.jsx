import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import ProjectDetailsModal from "./ProjectDetailsModal";
import github from "devicon/icons/github/github-original.svg";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const viewDetailsRefs = useRef({});
  const returnFocusEl = useRef(null);

  function openProject(project) {
    returnFocusEl.current = viewDetailsRefs.current[project.title] ?? null;
    setActiveProject(project);
  }

  function closeProject() {
    setActiveProject(null);
  }

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 section-space sm:px-12">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-text-muted"
      >
        03 / Projects
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
            className="group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-bg transition-all duration-200 hover:border-text/60 hover:shadow-[0_12px_28px_-16px_rgba(10,10,10,0.25)] sm:w-[calc(50%-12px)]"
          >
            <button
              type="button"
              onClick={() => openProject(project)}
              aria-haspopup="dialog"
              className="flex flex-1 flex-col text-left"
            >
              {project.image ? (
                <div className="aspect-video w-full overflow-hidden bg-bg-dark">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex aspect-video w-full items-center justify-center bg-bg-dark">
                  <span className="font-mono text-3xl font-bold text-text-inverse/30">
                    {project.title
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                </div>
              )}
              <div className="flex flex-1 flex-col px-6 pb-5 pt-5">
                <div className="mb-2 flex flex-wrap items-start justify-between gap-x-2 gap-y-1.5">
                  <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
                  {project.badge && (
                    <span className="shrink-0 rounded-full bg-bg-dark px-2.5 py-0.5 text-xs font-semibold text-text-inverse">
                      {project.badge}
                    </span>
                  )}
                </div>
                <p className="line-clamp-3 text-sm leading-relaxed text-text-muted">
                  {project.shortDescription}
                </p>
              </div>
            </button>

            <div className="mt-auto flex flex-col gap-4 px-6 pb-6">
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

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  ref={(el) => (viewDetailsRefs.current[project.title] = el)}
                  onClick={() => openProject(project)}
                  aria-label={`View details for ${project.title}`}
                  className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-bg-dark px-3 text-sm font-semibold text-text-inverse shadow-sm transition-all duration-200 ease-out hover:-translate-y-[2px] hover:scale-[1.025] hover:shadow-[0_10px_22px_-10px_rgba(10,10,10,0.45)] active:translate-y-0 active:scale-100 sm:flex-none sm:px-5"
                >
                  View Details
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-border px-3 text-sm font-semibold text-text transition-all duration-200 ease-out hover:-translate-y-[2px] hover:scale-[1.025] hover:border-text/70 hover:shadow-[0_10px_22px_-14px_rgba(10,10,10,0.25)] active:translate-y-0 active:scale-100 sm:flex-none sm:px-5"
                >
                  <img src={github} alt="" aria-hidden="true" className="h-4 w-4" />
                  GitHub ↗
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectDetailsModal
        project={activeProject}
        onClose={closeProject}
        returnFocusEl={returnFocusEl}
      />
    </section>
  );
}
