import { useState } from "react";
import { Mail, Phone, Github, Briefcase, Send, Check } from "lucide-react";
import { PROFILE } from "../data/content.js";
import GlassCard from "./ui/GlassCard.jsx";
import SectionEyebrow from "./ui/SectionEyebrow.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", message: "" });
      }, 2500);
    }, 900);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/-/g, "")}` },
    { icon: Github, label: "GitHub", value: PROFILE.githubHandle, href: PROFILE.github },
    { icon: Briefcase, label: "Fiverr", value: PROFILE.fiverrHandle, href: PROFILE.fiverr },
  ];

  return (
    <section id="contact" className="relative py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <SectionEyebrow>Get In Touch</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let's Build Something</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-2 flex flex-col gap-4">
            {contactInfo.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  <GlassCard className="p-4 flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-teal-400/15 to-amber-400/15 border border-white/10 text-teal-300 shrink-0">
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-500">{c.label}</div>
                      <div className="text-sm text-slate-200 truncate">{c.value}</div>
                    </div>
                  </GlassCard>
                </a>
              );
            })}
          </div>

          <div className="md:col-span-3">
            <GlassCard className="p-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400/60 transition-colors"
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400/60 transition-colors"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={4}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400/60 transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-ink-950 bg-gradient-to-r from-teal-400 to-amber-400 shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transition-all duration-300 disabled:opacity-70"
                >
                  {status === "idle" && (
                    <>
                      <Send size={15} /> Send Message
                    </>
                  )}
                  {status === "sending" && "Sending…"}
                  {status === "sent" && (
                    <>
                      <Check size={15} /> Message Sent
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
