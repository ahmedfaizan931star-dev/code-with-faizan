export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`bg-white/[0.04] backdrop-blur-lg border border-white/10 rounded-2xl transition-all duration-300 hover:border-teal-400/40 hover:-translate-y-0.5 hover:bg-white/[0.06] ${className}`}
    >
      {children}
    </div>
  );
}
