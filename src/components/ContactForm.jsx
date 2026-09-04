import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_LABEL =
  "mb-2 block text-xs font-semibold uppercase tracking-widest text-text-inverse-muted";
const FIELD_INPUT =
  "w-full rounded-lg border border-border-inverse bg-[rgba(243,242,238,0.04)] px-4 py-3 text-sm text-text-inverse placeholder:text-text-inverse-muted/60 outline-none transition-colors duration-200 focus:border-text-inverse/50 focus:bg-[rgba(243,242,238,0.06)]";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((err) => ({ ...err, [name]: undefined }));
  }

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!values.message.trim()) next.message = "Please enter a message.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name} (${values.email})`
    );

    window.setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
    }, 350);
  }

  const buttonLabel =
    status === "sending"
      ? "Sending..."
      : status === "sent"
        ? "Message Sent"
        : "Send Message";

  return (
    <div className="rounded-3xl border border-border-inverse bg-[rgba(243,242,238,0.03)] p-6 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.85)] transition-colors duration-200 focus-within:border-text-inverse/30 sm:p-8">
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-6">
          <label htmlFor="contact-name" className={FIELD_LABEL}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={FIELD_INPUT}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="contact-email" className={FIELD_LABEL}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={FIELD_INPUT}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <div className="mb-7">
          <label htmlFor="contact-message" className={FIELD_LABEL}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            placeholder="Tell me about your project or opportunity..."
            required
            aria-required="true"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className={`${FIELD_INPUT} resize-none`}
          />
          {errors.message && (
            <p id="contact-message-error" className="mt-1.5 text-xs text-red-400">
              {errors.message}
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={status === "sending" ? undefined : { y: -2 }}
          whileTap={status === "sending" ? undefined : { scale: 0.98 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="w-full rounded-lg bg-text-inverse px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-bg-dark transition-opacity duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {buttonLabel}
        </motion.button>
        <p aria-live="polite" className="mt-3 min-h-[1rem] text-center text-xs text-text-inverse-muted">
          {status === "sent" &&
            "This opens your email client so you can send the message directly."}
        </p>
      </form>
    </div>
  );
}
