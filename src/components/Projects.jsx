import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Smartphone, ArrowUpRight } from "lucide-react";
import { PROJECTS, PROJECT_FILTERS } from "../data/content.js";
import { accent } from "../data/accents.js";
import GlassCard from "./ui/GlassCard.jsx";
import SectionEyebrow from "./ui/SectionEyebrow.jsx";
import FlagshipCard from "./FlagshipCard.jsx";
import ProjectModal from "./ProjectModal.jsx";

export default function Projects() {
  const [filter, setFilter] = useState("ALL");
  const [active, setActive] = useState(null);

  const visible =
    filter === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(filter));

  const showFlagship = filter === "ALL" || filter === "AI" || filter === "WEB";

  return (
    <section id="projects" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <SectionEyebrow>Impactful Creations</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projects & Products
          </h2>
          <p className="text-sm text-slate-500 mt-3 max-w-md mx-auto">
            Tap any project for screenshots, full details, and to request a demo APK.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-all duration-200 border ${
                filter === f
                  ? "bg-gradient-to-r from-teal-400 to-amber-400 text-ink-950 border-transparent shadow-[0_0_18px_rgba(45,212,191,0.35)]"
                  : "bg-white/5 text-slate-400 border-white/10 hover:text-white hover:border-teal-400/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {showFlagship && <FlagshipCard />}

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => {
              const a = accent(p.accent);
              const Icon = p.icon;
              const hasShots = p.screenshots && p.screenshots.length > 0;

              return (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    onClick={() => setActive(p)}
                    className="w-full text-left"
                  >
                    <GlassCard
                      className={`group overflow-hidden h-full flex flex-col cursor-pointer ${a.borderHover}`}
                    >
                      <div
                        className="relative h-44 flex items-center justify-center overflow-hidden"
                        style={{
                          background:
                            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.06), transparent 60%)",
                        }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${a.grad} opacity-[0.12]`} />

                        {hasShots ? (
                          <div className="relative h-full flex items-center justify-center py-3">
                            <div className="relative w-24 rounded-2xl border-[3px] border-ink-700 bg-ink-950 overflow-hidden shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                              <img
                                src={p.screenshots[0]}
                                alt={`${p.title} screenshot`}
                                className="w-full h-auto block"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className={`relative p-3 rounded-2xl border ${a.border} ${a.bg}`}>
                            <Icon
                              size={26}
                              className={`${a.text} transition-transform duration-500 group-hover:scale-110`}
                            />
                          </div>
                        )}

                        <span className="absolute top-3 right-3 text-[10px] font-mono px-2 py-1 rounded-full bg-black/40 border border-white/10 text-slate-300">
                          {p.tag}
                        </span>
                        {hasShots && (
                          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 text-[10px] font-mono px-2 py-1 rounded-full bg-black/40 border border-white/10 text-slate-300">
                            <Smartphone size={10} /> {p.screenshots.length} screens
                          </span>
                        )}
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-white font-semibold">{p.title}</h3>
                          <ArrowUpRight
                            size={16}
                            className={`shrink-0 mt-0.5 text-slate-600 transition-all duration-300 group-hover:${a.text} group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
                          />
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed mb-3">
                          {p.description}
                        </p>
                        <ul className="space-y-1.5 mb-4">
                          {p.features.slice(0, 2).map((f) => (
                            <li key={f} className="flex items-start gap-1.5 text-xs text-slate-400 leading-snug">
                              <Check size={12} className={`${a.text} mt-0.5 shrink-0`} />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          {p.stack.slice(0, 4).map((s) => (
                            <span
                              key={s}
                              className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
