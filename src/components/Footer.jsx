import { Github, Youtube, Mail } from "lucide-react";
import { PROFILE } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="relative py-10 px-5 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500 font-mono">
          {"</>"} Built by {PROFILE.name} — {PROFILE.handle}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-teal-300 transition-colors"
          >
            <Github size={17} />
          </a>
          <a
            href={PROFILE.youtube}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-teal-300 transition-colors"
          >
            <Youtube size={17} />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-slate-400 hover:text-teal-300 transition-colors"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
