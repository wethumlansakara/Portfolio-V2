import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CertificateModal({ cert, onClose, returnFocusEl }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!cert) return;

    const previousOverflow = document.body.style.overflow;
    const triggerEl = returnFocusEl?.current;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerEl?.focus();
    };
  }, [cert, onClose, returnFocusEl]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg-dark/70 p-4 sm:p-8"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${cert.name} certificate`}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative max-h-full max-w-full overflow-auto rounded-2xl border border-border bg-bg p-3 outline-none"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate preview"
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg text-text-muted transition-colors hover:border-text/40 hover:text-text"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <img
              src={cert.certificateImage}
              alt={`${cert.name} certificate`}
              className="block max-h-[78vh] max-w-[90vw] rounded-lg object-contain"
            />

            {(cert.credentialCode || cert.credentialUrl) && (
              <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-1">
                {cert.credentialCode && (
                  <p className="text-xs font-medium text-text-muted">
                    Credential: {cert.credentialCode}
                  </p>
                )}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${cert.name} credential`}
                    className="text-xs font-semibold text-text-muted transition-colors hover:text-text hover:underline"
                  >
                    Verify Credential ↗
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
