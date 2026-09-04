import { motion } from "framer-motion";
import { about, capabilities } from "../data/portfolio";

const icons = {
  brain: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="5" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M6.7 7.2 10.3 10.7M6.7 16.8 10.3 13.3M13.7 10.7 17.3 7.2M13.7 13.3 17.3 16.8" />
    </svg>
  ),
  code: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 18 3 12l6-6" />
      <path d="M15 6l6 6-6 6" />
    </svg>
  ),
  lightbulb: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.472c.667.611 1 1.428 1 2.278V16h6v-.25c0-.85.333-1.667 1-2.278A6 6 0 0 0 12 3Z" />
    </svg>
  ),
};

function Divider() {
  return (
    <div className="about-divider" aria-hidden="true">
      <span className="about-divider__line" />
      <span className="about-divider__diamond" />
      <span className="about-divider__line" />
    </div>
  );
}

function Capability({ item, index }) {
  const Icon = icons[item.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      className="flex flex-col items-center text-center"
    >
      <Icon className="mb-5 h-8 w-8 text-text" strokeWidth={1.5} />
      <h3 className="mb-3 text-xl font-bold uppercase tracking-wide text-text sm:text-2xl">
        {item.title}
      </h3>
      <p className="max-w-[380px] text-base leading-relaxed text-text-muted">
        {item.description}
      </p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="about-capabilities section-space">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center text-xs font-semibold uppercase tracking-widest text-text-muted"
      >
        01 / About me
      </motion.p>

      <div className="mx-auto mt-6 max-w-3xl text-center sm:mt-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-[clamp(1.75rem,3.5vw,3rem)] font-black leading-[1.15] tracking-tight text-text"
        >
          {about.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-[1.7] text-text-muted"
        >
          {about.description}
        </motion.p>
      </div>

      <div className="my-16 sm:my-20">
        <Divider />
      </div>

      <div className="flex flex-col items-center gap-y-14">
        <div className="mx-auto grid w-full max-w-[860px] grid-cols-1 gap-y-14 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-0 lg:gap-x-16">
          <div className="w-full max-w-[420px] justify-self-center">
            <Capability item={capabilities[0]} index={0} />
          </div>
          <div className="w-full max-w-[420px] justify-self-center">
            <Capability item={capabilities[1]} index={1} />
          </div>
        </div>
        <div className="w-full max-w-[420px]">
          <Capability item={capabilities[2]} index={2} />
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <Divider />
      </div>
    </section>
  );
}
