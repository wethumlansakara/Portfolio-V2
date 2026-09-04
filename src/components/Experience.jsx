import { motion } from "framer-motion";

const milestones = [
  { year: "NOW", title: "Independent AI Engineer", detail: "Designing and shipping intelligent products that connect machine learning with thoughtful user experiences." },
  { year: "BUILD", title: "Full-stack product work", detail: "From FastAPI backends and data pipelines to React interfaces, turning ideas into usable, deployed software." },
  { year: "ALWAYS", title: "Learning in public", detail: "Exploring LLM systems, computer vision, model evaluation, and the craft of making technology feel simple." },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 section-space sm:px-12">
      <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8efe5]">04 / Experience</motion.p>
      <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <h2 className="max-w-md text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.05em]">A practice built around <span className="text-[#ffb86b]">curiosity.</span></h2>
        <div className="relative border-l border-white/15 pl-7 sm:pl-10">
          {milestones.map((item, index) => (
            <motion.article key={item.title} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.1 }} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[2.1rem] top-1 h-3 w-3 rounded-full border-2 border-[#b8efe5] bg-bg sm:-left-[2.6rem]" />
              <p className="font-mono text-xs tracking-[0.2em] text-[#b8efe5]">{item.year}</p>
              <h3 className="mt-3 text-xl font-semibold text-text">{item.title}</h3>
              <p className="mt-3 max-w-xl leading-relaxed text-text-muted">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
