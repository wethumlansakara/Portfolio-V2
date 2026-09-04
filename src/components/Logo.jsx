export default function Logo({ inverse = false }) {
  return (
    <a
      href="#top"
      aria-label="Wethum Lansakara — home"
      className={`inline-flex h-11 w-11 items-center justify-center rounded-md transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 ${
        inverse
          ? "bg-bg text-text focus-visible:outline-bg"
          : "bg-bg-dark text-text-inverse focus-visible:outline-text"
      }`}
    >
      <svg
        viewBox="0 0 100 100"
        className="h-[56%] w-[56%]"
        fill="none"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 24 L31 78 L50 45 L69 78 L86 24" />
      </svg>
    </a>
  );
}
