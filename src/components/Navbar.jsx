import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { PROFILE } from "../data/content.js";

export default function Navbar({ dark, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ["About", "Skills", "Projects", "Experience", "Contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center justify-between rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-3">
          <button
            onClick={() => scrollTo("hero")}
            className="group flex items-center gap-2 font-mono text-lg font-bold text-white"
          >
            <span className="text-teal-400 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]">
              {"</>"}
            </span>
            <span className="tracking-wide">{PROFILE.initials}</span>
          </button>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
              >
                {l}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-teal-400/50 transition-all duration-200"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => scrollTo("Contact")}
              className="relative px-4 py-2 rounded-full text-sm font-semibold text-ink-950 bg-gradient-to-r from-teal-400 to-amber-400 shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transition-shadow duration-300"
            >
              Contact Me
            </button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-2 overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <div className="flex flex-col p-4 gap-1">
                {links.map((l) => (
                  <button
                    key={l}
                    onClick={() => scrollTo(l)}
                    className="text-left px-3 py-2.5 rounded-lg text-slate-200 hover:bg-white/10 transition-colors"
                  >
                    {l}
                  </button>
                ))}
                <div className="flex items-center justify-between px-3 pt-2">
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-300"
                  >
                    {dark ? <Sun size={16} /> : <Moon size={16} />}
                  </button>
                  <button
                    onClick={() => scrollTo("Contact")}
                    className="px-4 py-2 rounded-full text-sm font-semibold text-ink-950 bg-gradient-to-r from-teal-400 to-amber-400"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
