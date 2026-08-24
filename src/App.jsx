import { useTheme } from "./hooks/useTheme.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import AIAssistantWidget from "./components/AIAssistantWidget.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  const { dark, toggle } = useTheme();

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        dark ? "bg-ink-900 text-white" : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="relative">
        {dark && (
          <div className="pointer-events-none fixed inset-0 opacity-50 bg-[radial-gradient(ellipse_at_top,_rgba(45,212,191,0.08),transparent_60%)]" />
        )}
        <Navbar dark={dark} toggleTheme={toggle} />
        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <AIAssistantWidget />
        <ScrollToTop />
      </div>
    </div>
  );
}
