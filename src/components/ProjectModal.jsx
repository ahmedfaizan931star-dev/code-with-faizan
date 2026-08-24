import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Mail, ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import { PROFILE } from "../data/content.js";
import { accent } from "../data/accents.js";

export default function ProjectModal({ project, onClose }) {
  const [shotIndex, setShotIndex] = useState(0);
  if (!project) return null;

  const a = accent(project.accent);
  const Icon = project.icon;
  const shots = project.screenshots || [];
  const hasShots = shots.length > 0;

  const next = () => setShotIndex((i) => (i + 1) % shots.length);
  const prev = () => setShotIndex((i) => (i - 1 + shots.length) % shots.length);

  const demoSubject = encodeURIComponent(`Demo APK Request — ${project.title}`);
  const demoBody = encodeURIComponent(
    `Hi Faizan,\n\nI'd like to request a demo APK for ${project.title}.\n\nThanks!`
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl bg-ink-900 border border-white/10 shadow-2xl"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-ink-900/95 backdrop-blur-lg">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl border ${a.bg} ${a.border} ${a.text}`}>
                <Icon size={18} />
              </div>
              <div>
                <h3 className="text-white font-semibold leading-tight">{project.title}</h3>
                <p className={`text-xs font-mono ${a.text}`}>{project.tag}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6">
            {hasShots ? (
              <div className="relative mb-6 flex items-center justify-center">
                <div className="relative w-48 sm:w-56">
                  <div className="relative rounded-[1.8rem] border-4 border-ink-700 bg-ink-950 overflow-hidden shadow-2xl">
                    <img
                      src={shots[shotIndex]}
                      alt={`${project.title} screenshot ${shotIndex + 1}`}
                      className="w-full h-auto block"
                    />
                  </div>
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-4 w-20 rounded-b-xl bg-ink-700" />
                </div>

                {shots.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-0 sm:left-4 p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-teal-400/50 transition-colors"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-0 sm:right-4 p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-teal-400/50 transition-colors"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </>
                )}
              </div>
            ) : (
              <div className={`mb-6 h-40 rounded-2xl border ${a.border} ${a.bg} flex items-center justify-center`}>
                <Icon size={40} className={a.text} />
              </div>
            )}

            {hasShots && shots.length > 1 && (
              <div className="flex items-center justify-center gap-1.5 mb-6">
                {shots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setShotIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === shotIndex ? `w-5 ${a.dot}` : "w-1.5 bg-white/20"
                    }`}
                    aria-label={`Go to screenshot ${i + 1}`}
                  />
                ))}
              </div>
            )}

            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              {project.description}
            </p>

            <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
              Feature highlights
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-300 leading-snug">
                  <Check size={14} className={`${a.text} mt-0.5 shrink-0`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-7">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${PROFILE.email}?subject=${demoSubject}&body=${demoBody}`}
                className={`flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-ink-950 bg-gradient-to-r ${a.grad} hover:opacity-90 transition-opacity`}
              >
                <Smartphone size={16} /> Request Demo APK
              </a>
              <a
                href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("Question about " + project.title)}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-200 border border-white/15 hover:border-white/30 transition-colors"
              >
                <Mail size={16} /> Ask a Question
              </a>
            </div>
            <p className="text-[11px] text-slate-600 mt-3 text-center">
              This app isn't on the Play Store yet — reach out and I'll share a build directly.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
