const SectionWrapper = ({ id, className = "", innerClassName = "", children }) => (
  <section
    id={id}
    className={`relative py-8 bg-gradient-to-b from-white via-[#f8f5ef] to-white overflow-hidden ${className}`}
  >
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -top-16 left-0 h-32 w-32 rounded-full bg-luxurybronze/10 blur-3xl"
    />
    <span
      aria-hidden="true"
      className="pointer-events-none absolute top-12 right-6 h-40 w-40 rounded-full bg-darkgreen/5 blur-3xl"
    />
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-10 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-luxurybronze/10 blur-3xl"
    />
    <div className={`relative z-10 ${innerClassName}`}>
      {children}
    </div>
  </section>
);

export default SectionWrapper;