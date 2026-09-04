import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-bg-dark px-6 section-space text-text-inverse sm:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-text-inverse-muted"
        >
          06 / Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mt-6 max-w-xl text-center text-[clamp(1.75rem,3.5vw,2.75rem)] font-black leading-[1.15] tracking-tight"
        >
          Let&apos;s build something meaningful.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="mx-auto mt-4 max-w-md text-center text-base leading-relaxed text-text-inverse-muted"
        >
          Have a project, opportunity, or idea in mind? Feel free to get in touch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-14 w-full max-w-[720px]"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
