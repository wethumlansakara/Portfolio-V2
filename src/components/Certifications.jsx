import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { certifications } from "../data/portfolio";
import CertificateModal from "./CertificateModal";

const CARD_WIDTH =
  "basis-full sm:basis-[calc(50%_-_8px)] lg:basis-[calc(33.333%_-_10.667px)]";
const CARD_BASE =
  "relative flex min-h-[5.5rem] items-center gap-3 rounded-xl border border-border px-4 py-3.5 text-left transition-[border-color,box-shadow] duration-200 hover:border-text/60 hover:shadow-[0_10px_24px_-16px_rgba(10,10,10,0.2)]";

function PreviewIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="13"
      height="13"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CertCard({ cert, idx, onOpenImage, triggerRef }) {
  const hasImage = Boolean(cert.certificateImage);

  const motionProps = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.4, delay: idx * 0.06 },
    whileHover: { y: -3, transition: { duration: 0.2, ease: "easeOut" } },
  };

  const textBlock = (
    <>
      {cert.logo && (
        <div className="flex h-9 w-16 shrink-0 items-center justify-center">
          <img
            src={cert.logo}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain"
          />
        </div>
      )}
      <div className={`min-w-0 flex-1 ${hasImage ? "pr-4" : ""}`}>
        <p className="text-sm font-semibold text-text">{cert.name}</p>
        <p className="mt-1 text-xs font-medium text-text-muted">{cert.org}</p>
      </div>
    </>
  );

  if (hasImage) {
    return (
      <motion.button
        {...motionProps}
        type="button"
        ref={triggerRef}
        onClick={() => onOpenImage(cert)}
        aria-label={`View ${cert.name} certificate`}
        className={`group ${CARD_WIDTH} ${CARD_BASE} cursor-pointer`}
      >
        {textBlock}
        <PreviewIcon className="absolute right-3.5 top-3.5 text-text-muted transition-[color,transform] duration-200 group-hover:scale-110 group-hover:text-text" />
      </motion.button>
    );
  }

  return (
    <motion.div {...motionProps} className={`${CARD_WIDTH} ${CARD_BASE}`}>
      {textBlock}
    </motion.div>
  );
}

export default function Certifications() {
  const [activeImageCert, setActiveImageCert] = useState(null);
  const imageTriggerRefs = useRef({});
  const returnFocusEl = useRef(null);

  function openImage(cert) {
    returnFocusEl.current = imageTriggerRefs.current[cert.name] ?? null;
    setActiveImageCert(cert);
  }

  function closeImage() {
    setActiveImageCert(null);
  }

  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 section-space sm:px-12">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-text-muted"
      >
        05 / Certifications
      </motion.p>

      <div className="flex flex-wrap justify-center gap-4">
        {certifications.map((cert, idx) => (
          <CertCard
            key={cert.name}
            cert={cert}
            idx={idx}
            onOpenImage={openImage}
            triggerRef={(el) => (imageTriggerRefs.current[cert.name] = el)}
          />
        ))}
      </div>

      <CertificateModal
        cert={activeImageCert}
        onClose={closeImage}
        returnFocusEl={returnFocusEl}
      />
    </section>
  );
}
