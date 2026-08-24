import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 text-slate-300 hover:text-white hover:border-teal-400/50 transition-all duration-300"
      aria-label="Scroll to top"
    >
      <ArrowUp size={16} />
    </button>
  );
}
