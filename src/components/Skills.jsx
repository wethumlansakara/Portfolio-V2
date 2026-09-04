import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { skillIcons } from "../data/skillIcons";

const ICON_ROW =
  "mx-auto flex w-full max-w-[300px] flex-wrap justify-center gap-x-6 gap-y-8 sm:max-w-[460px] lg:max-w-[680px]";
const CHIP_ROW = "mx-auto flex w-full max-w-[640px] flex-wrap justify-center gap-2.5";

function SkillIcon({ config }) {
  if (config.type === "img") {
    return <img src={config.src} alt="" aria-hidden="true" className="h-6 w-6 object-contain" loading="lazy" />;
  }
  return (
    <svg role="img" viewBox="0 0 24 24" className="h-6 w-6" fill={`#${config.icon.hex}`} aria-hidden="true">
      <path d={config.icon.path} />
    </svg>
  );
}

function SkillBadge({ item, config, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, delay }}
      whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
      className="flex w-20 flex-col items-center gap-2.5 text-center"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border transition-colors duration-200 hover:border-text/25">
        <SkillIcon config={config} />
      </span>
      <span className="text-xs font-medium leading-snug text-text-muted sm:text-sm">
        {item}
      </span>
    </motion.div>
  );
}

function SkillChip({ item, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
      className="rounded-full border border-border bg-bg px-3.5 py-1.5 text-xs font-medium text-text transition-colors duration-200 hover:border-text/30 sm:text-sm"
    >
      {item}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section section-space">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center text-xs font-semibold uppercase tracking-widest text-text-muted"
      >
        02 / Skills
      </motion.p>

      <div className="mt-12 flex flex-col gap-12 sm:mt-14 sm:gap-14">
        {skills.map((group, groupIdx) => {
          const iconItems = group.items.filter((item) => skillIcons[item]);
          const chipItems = group.items.filter((item) => !skillIcons[item]);

          return (
            <div key={group.category}>
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: groupIdx * 0.05 }}
                className="mb-6 text-center text-base font-semibold uppercase tracking-wide text-text"
              >
                {group.category}
              </motion.h3>

              {iconItems.length > 0 && (
                <div className={ICON_ROW}>
                  {iconItems.map((item, i) => (
                    <SkillBadge
                      key={item}
                      item={item}
                      config={skillIcons[item]}
                      delay={groupIdx * 0.05 + i * 0.02}
                    />
                  ))}
                </div>
              )}

              {chipItems.length > 0 && (
                <div className={`${CHIP_ROW} ${iconItems.length > 0 ? "mt-6" : ""}`}>
                  {chipItems.map((item, i) => (
                    <SkillChip
                      key={item}
                      item={item}
                      delay={groupIdx * 0.05 + (iconItems.length + i) * 0.02}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
