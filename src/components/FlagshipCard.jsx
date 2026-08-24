import { motion } from "framer-motion";
import { Github, ExternalLink, Check } from "lucide-react";
import { FLAGSHIP_PROJECT } from "../data/content.js";
import { accent } from "../data/accents.js";
import GlassCard from "./ui/GlassCard.jsx";

export default function FlagshipCard() {
  const p = FLAGSHIP_PROJECT;
  const a = accent(p.accent);
  const Icon = p.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="mb-10"
    >
      <GlassCard className={`overflow-hidden ${a.borderHover}`}>
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div
            className={`relative lg:col-span-2 flex flex-col justify-between p-8 bg-gradient-to-br ${a.grad} bg-opacity-10`}
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(245,158,11,0.14), transparent 60%), radial-gradient(circle at 80% 80%, rgba(45,212,191,0.1), transparent 55%)",
            }}
          >
            <div>
              <span className={`inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full ${a.bg} ${a.border} border ${a.text} mb-5`}>
                <Icon size={12} /> Flagship Product
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {p.title}
              </h3>
              <p className={`text-sm font-mono ${a.text} mb-4`}>{p.subtitle}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{p.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full text-ink-950 bg-gradient-to-r ${a.grad}`}
              >
                Live Demo <ExternalLink size={12} />
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full text-slate-200 border border-white/15 hover:border-white/30 transition-colors"
              >
                <Github size={13} /> GitHub
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 p-8 border-t lg:border-t-0 lg:border-l border-white/10">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4">
              Feature highlights
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-300 leading-snug">
                  <Check size={14} className={`${a.text} mt-0.5 shrink-0`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
