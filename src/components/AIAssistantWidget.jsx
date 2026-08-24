import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageSquare, X, Mail } from "lucide-react";
import { PROFILE } from "../data/content.js";

export default function AIAssistantWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold text-ink-950 bg-gradient-to-r from-teal-400 to-amber-400 shadow-[0_0_25px_rgba(45,212,191,0.45)] hover:shadow-[0_0_35px_rgba(45,212,191,0.65)] transition-shadow duration-300"
      >
        <Bot size={16} />
        <span className="hidden sm:inline">Ask {PROFILE.name}'s AI Assistant</span>
        <MessageSquare size={14} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end bg-black/50 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:w-96 bg-ink-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-teal-400/15 via-amber-400/10 to-transparent border-b border-white/10">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Bot size={16} className="text-teal-300" /> {PROFILE.name}'s AI Assistant
                </div>
                <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white">
                  <X size={16} />
                </button>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <div className="bg-white/5 border border-white/10 rounded-xl rounded-tl-sm px-4 py-3 text-sm text-slate-300 max-w-[85%]">
                  Hey! 👋 I'm a preview assistant for {PROFILE.name}'s portfolio.
                  Ask about his Android apps, stack, or availability for
                  freelance work.
                </div>
                <div className="bg-gradient-to-r from-teal-400/15 to-amber-400/15 border border-teal-400/25 rounded-xl rounded-tr-sm px-4 py-3 text-sm text-slate-200 max-w-[85%] self-end">
                  What's he working on right now?
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl rounded-tl-sm px-4 py-3 text-sm text-slate-300 max-w-[85%]">
                  Currently building ArtifactLoop, an AI coding-assistant SaaS,
                  alongside a lineup of Android apps like ScanMate AI Pro and
                  PowerMate AI.
                </div>
              </div>
              <div className="px-5 pb-5">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-ink-950 bg-gradient-to-r from-teal-400 to-amber-400"
                >
                  <Mail size={14} /> Email {PROFILE.name} Directly
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
