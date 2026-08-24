import { motion } from "framer-motion";
import { TIMELINE } from "../data/content.js";
import GlassCard from "./ui/GlassCard.jsx";
import SectionEyebrow from "./ui/SectionEyebrow.jsx";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <SectionEyebrow>Journey So Far</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-teal-400/60 via-slate-600/40 to-amber-400/60" />

          {TIMELINE.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-10 last:mb-0"
              >
                <span className="absolute -left-8 top-1.5 flex items-center justify-center h-6 w-6 rounded-full bg-ink-950 border border-teal-400/60 shadow-[0_0_12px_rgba(45,212,191,0.4)]">
                  <Icon size={12} className="text-teal-300" />
                </span>
                <GlassCard className="p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <span className="text-[11px] font-mono text-amber-300">{item.period}</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">{item.place}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
