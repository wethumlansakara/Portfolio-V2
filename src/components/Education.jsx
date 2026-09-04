import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { education } from "../data/portfolio";

export default function Education() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="education" className="mx-auto max-w-6xl px-6 section-space sm:px-12">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-text-muted"
      >
        04 / Education
      </motion.p>

      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {education.map((item, idx) => {
          const hasModules = item.modules && item.modules.length > 0;
          const isOpen = openIndex === idx;
          const panelId = `education-modules-${idx}`;

          return (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`rounded-2xl border border-border px-6 pt-6 transition-colors hover:border-text ${
                isOpen ? "pb-5" : "pb-6"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-16 shrink-0 items-center justify-center">
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-contain"
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold tracking-tight">{item.degree}</h3>
                  <p className="mt-1.5 text-sm font-semibold text-text">
                    {item.institution}
                  </p>
                  <p className="mt-0.5 text-xs text-text-muted">{item.country}</p>
                  <p className="mt-1.5 text-xs font-medium text-text-muted">
                    {item.period}
                  </p>

                  {hasModules && (
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-text-muted underline-offset-4 transition-colors hover:text-text hover:underline"
                    >
                      {isOpen ? "Hide Modules" : "View Modules"}
                      <svg
                        viewBox="0 0 24 24"
                        width="12"
                        height="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  )}

                  <AnimatePresence initial={false}>
                    {hasModules && isOpen && (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 border-t border-border pt-4">
                          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-text-muted">
                            Modules Covered
                          </p>
                          <ul className="grid grid-cols-1 gap-x-6 gap-y-0.5 sm:grid-cols-2">
                            {item.modules.map((mod) => (
                              <li
                                key={mod}
                                className="flex items-start gap-2 text-sm text-text-muted"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-muted"
                                />
                                <span className="min-w-0 flex-1">{mod}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
