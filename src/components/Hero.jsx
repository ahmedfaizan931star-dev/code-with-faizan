import { motion } from "framer-motion";
import { useTypingEffect } from "../hooks/useTypingEffect.js";
import { PROFILE, ROLES, STATS } from "../data/content.js";
import GlassCard from "./ui/GlassCard.jsx";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  const typed = useTypingEffect(ROLES);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-5 pt-32 pb-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-teal-500/15 blur-[110px]" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-amber-500/10 blur-[110px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14 items-center"
      >
        {/* Left: text content */}
        <div className="lg:col-span-3 text-center lg:text-left">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
            </span>
            <span className="text-xs font-mono text-teal-300 tracking-wide">
              OPEN TO NEW OPPORTUNITIES
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="font-mono text-amber-400 text-sm tracking-[0.3em] uppercase mb-4"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.05] mb-5"
          >
            {PROFILE.name}
          </motion.h1>

          <motion.div variants={item} className="h-9 md:h-10 mb-6">
            <span className="text-xl md:text-2xl font-mono text-slate-200">
              {typed}
              <span className="inline-block w-[2px] h-6 md:h-7 align-middle bg-teal-400 ml-1 animate-pulse" />
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            I build native Android apps with Kotlin and Jetpack Compose, and
            full-stack products with React, Node.js and Python — shipping
            fast, then hardening with real audits, real fixes, and
            AI-assisted engineering.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
          >
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-full font-semibold text-ink-950 bg-gradient-to-r from-teal-400 to-amber-400 shadow-[0_0_25px_rgba(45,212,191,0.35)] hover:shadow-[0_0_35px_rgba(45,212,191,0.55)] hover:-translate-y-0.5 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-full font-semibold text-slate-200 bg-white/5 border border-white/15 hover:border-teal-400/50 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Me
            </button>
            <a
              href={`mailto:${PROFILE.email}?subject=Resume%20Request`}
              className="px-6 py-3 rounded-full font-semibold text-slate-200 border border-white/15 hover:border-amber-400/50 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              Resume / CV
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="grid grid-cols-3 gap-3 md:gap-4 max-w-md mx-auto lg:mx-0"
          >
            {STATS.map((s) => (
              <GlassCard key={s.label} className="px-3 py-5">
                <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-teal-300 to-amber-300 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-[11px] md:text-xs text-slate-400 mt-1 leading-tight">
                  {s.label}
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>

        {/* Right: terminal signature card + real screenshot strip */}
        <motion.div variants={item} className="lg:col-span-2">
          <div className="rounded-xl overflow-hidden border border-white/10 bg-ink-900/80 backdrop-blur-lg shadow-2xl mb-5">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10 bg-white/[0.03]">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal-400/70" />
              <span className="ml-3 text-[11px] font-mono text-slate-500">whoami.sh</span>
            </div>
            <div className="px-4 py-3.5 font-mono text-[13px] leading-relaxed">
              <p className="text-slate-500">
                <span className="text-teal-400">faizan@chakwal</span>
                <span className="text-slate-600">:~$</span> whoami
              </p>
              <p className="text-slate-300">Android developer · Kotlin · Jetpack Compose</p>
              <p className="text-slate-500 mt-1.5">
                <span className="text-teal-400">faizan@chakwal</span>
                <span className="text-slate-600">:~$</span> cat goals.txt
              </p>
              <p className="text-slate-300">
                Ship clean apps. Fix what's broken. Become an{" "}
                <span className="text-amber-300">AI Engineer &amp; Entrepreneur</span>.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="relative w-24 rotate-[-6deg] rounded-2xl border-[3px] border-ink-700 bg-ink-950 overflow-hidden shadow-2xl transition-transform duration-300 hover:rotate-0 hover:scale-105">
              <img
                src="/screenshots/scanmate-1.jpg"
                alt="ScanMate AI Pro screenshot"
                className="w-full h-auto block"
              />
            </div>
            <div className="relative w-24 rotate-[5deg] translate-y-3 rounded-2xl border-[3px] border-ink-700 bg-ink-950 overflow-hidden shadow-2xl transition-transform duration-300 hover:rotate-0 hover:scale-105">
              <img
                src="/screenshots/powermate-1.jpg"
                alt="PowerMate AI screenshot"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
