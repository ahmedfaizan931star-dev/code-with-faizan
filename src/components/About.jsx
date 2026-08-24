import { motion } from "framer-motion";
import SectionEyebrow from "./ui/SectionEyebrow.jsx";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-ink-900/80 backdrop-blur-lg shadow-2xl">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10 bg-white/[0.03]">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal-400/70" />
              <span className="ml-3 text-[11px] font-mono text-slate-500">Profile.kt</span>
            </div>
            <div className="px-4 py-4 font-mono text-[12px] leading-relaxed">
              <p><span className="text-violet-400">class</span> <span className="text-teal-300">Faizan</span> {"{"}</p>
              <p className="pl-4 text-slate-400">
                <span className="text-amber-300">val</span> role = <span className="text-teal-300">"Android Dev"</span>
              </p>
              <p className="pl-4 text-slate-400">
                <span className="text-amber-300">val</span> base = <span className="text-teal-300">"Chakwal, PK"</span>
              </p>
              <p className="pl-4 text-slate-400">
                <span className="text-amber-300">val</span> stack = listOf(
              </p>
              <p className="pl-8 text-slate-400">
                <span className="text-teal-300">"Kotlin"</span>, <span className="text-teal-300">"Compose"</span>, <span className="text-teal-300">"React"</span>
              </p>
              <p className="pl-4 text-slate-400">)</p>
              <p>{"}"}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-3 text-center md:text-left"
        >
          <SectionEyebrow>About Me</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Android Developer & AI-Driven Builder
          </h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            I'm an independent Android developer based in Chakwal, Pakistan,
            working primarily in Kotlin and Jetpack Compose. My apps —
            ScanMate AI Pro, PowerMate AI, VaultClean AI, and Multi-Habit
            Tracker — span scanning, diagnostics, storage and habit tracking,
            each pushed through real engineering audits rather than left as
            first drafts.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Alongside native Android work, I build full-stack products with
            React, Node.js and Python — including ArtifactLoop, an AI coding
            assistant SaaS — and I'm building a public presence as a
            developer and educator for beginners across Pakistan and India,
            working toward becoming an AI Engineer and Entrepreneur.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
