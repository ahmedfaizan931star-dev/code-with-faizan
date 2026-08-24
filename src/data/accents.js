export const ACCENTS = {
  teal: {
    text: "text-teal-300",
    bg: "bg-teal-400/15",
    border: "border-teal-400/30",
    borderHover: "hover:border-teal-400/60",
    ring: "shadow-[0_0_25px_rgba(45,212,191,0.35)]",
    ringStrong: "shadow-[0_0_35px_rgba(45,212,191,0.55)]",
    grad: "from-teal-400 to-teal-500",
    dot: "bg-teal-400",
  },
  amber: {
    text: "text-amber-300",
    bg: "bg-amber-400/15",
    border: "border-amber-400/30",
    borderHover: "hover:border-amber-400/60",
    ring: "shadow-[0_0_25px_rgba(245,158,11,0.35)]",
    ringStrong: "shadow-[0_0_35px_rgba(245,158,11,0.55)]",
    grad: "from-amber-400 to-amber-500",
    dot: "bg-amber-400",
  },
  violet: {
    text: "text-violet-300",
    bg: "bg-violet-400/15",
    border: "border-violet-400/30",
    borderHover: "hover:border-violet-400/60",
    ring: "shadow-[0_0_25px_rgba(139,124,246,0.35)]",
    ringStrong: "shadow-[0_0_35px_rgba(139,124,246,0.55)]",
    grad: "from-violet-400 to-violet-500",
    dot: "bg-violet-400",
  },
};

export function accent(name) {
  return ACCENTS[name] || ACCENTS.teal;
}
