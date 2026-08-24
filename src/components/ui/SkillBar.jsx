import { motion } from "framer-motion";

export default function SkillBar({ name, level, delay }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between mb-1.5 text-sm">
        <span className="text-slate-200 font-medium">{name}</span>
        <span className="text-teal-300 font-mono">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-teal-400 to-amber-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
