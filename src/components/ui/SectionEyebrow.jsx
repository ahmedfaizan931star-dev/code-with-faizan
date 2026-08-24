export default function SectionEyebrow({ children }) {
  return (
    <div className="flex items-center gap-2 justify-center mb-3">
      <span className="text-teal-400 font-mono text-xs tracking-[0.3em] uppercase">
        {"// "}
        {children}
      </span>
    </div>
  );
}
