import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";
import { profile } from "../data/portfolio";

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-dvh overflow-hidden bg-bg-dark text-text-inverse">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(184,239,229,0.16),transparent_28%),radial-gradient(circle_at_15%_90%,rgba(255,184,107,0.08),transparent_25%)]" />
      <div className="relative mx-auto flex min-h-dvh max-w-7xl flex-col justify-center px-6 pb-16 pt-28 sm:px-12 lg:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-[#b8efe5]"><span className="h-2 w-2 animate-pulse rounded-full bg-[#b8efe5] shadow-[0_0_18px_#b8efe5]" />Available for meaningful work</motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="mb-5 text-sm text-text-inverse-muted">Hello, I&apos;m</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.7 }} className="max-w-3xl text-[clamp(3.5rem,10vw,8rem)] font-bold leading-[0.88] tracking-[-0.06em]">Wethum<br /><span className="text-[#b8efe5]">Lansakara.</span></motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="mt-8 max-w-xl text-xl leading-relaxed text-text-inverse-muted sm:text-2xl">{profile.title}. {profile.tagline}</motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }} className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-[#b8efe5] px-6 py-3.5 text-sm font-bold text-[#081018] transition-transform hover:-translate-y-1">Explore my work <span className="transition-transform group-hover:translate-x-1">-&gt;</span></a>
              <a href={profile.resumeUrl} download target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#b8efe5] hover:text-[#b8efe5]">Download CV</a>
            </motion.div>
            <div className="mt-12 flex items-center gap-5 text-sm text-text-inverse-muted">{socials.map((social) => <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="transition-colors hover:text-[#b8efe5]">{social.label}</a>)}</div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-5 rounded-[2rem] border border-[#b8efe5]/10" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#101b23] shadow-2xl shadow-black/40"><img src={profileImg} alt={`Portrait of ${profile.name}, ${profile.title}`} className="h-full w-full object-cover object-top grayscale-[15%] transition duration-700 hover:scale-105" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#05080d] via-[#05080d]/80 to-transparent px-6 pb-6 pt-20"><p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b8efe5]">AI / ML / WEB</p><p className="mt-2 text-sm text-white/70">Turning complex problems into useful products.</p></div></div>
            <div className="absolute -right-4 top-10 hidden rounded-xl border border-white/15 bg-[#101b23]/90 p-4 font-mono text-xs text-text-inverse-muted backdrop-blur-md sm:block"><span className="text-[#ffb86b]">const</span> mindset = <span className="text-[#b8efe5]">&quot;curious&quot;</span>;</div>
          </motion.div>
        </div>
        <a href="#about" className="absolute bottom-8 left-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-text-inverse-muted sm:left-12 lg:left-16"><span className="h-px w-10 bg-[#b8efe5]" /> Scroll to discover</a>
      </div>
    </section>
  );
}
