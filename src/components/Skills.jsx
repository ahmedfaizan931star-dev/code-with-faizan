import { motion } from "framer-motion";
import { SKILLS } from "../data/content.js";
import { accent } from "../data/accents.js";
import GlassCard from "./ui/GlassCard.jsx";
import SectionEyebrow from "./ui/SectionEyebrow.jsx";
import SkillBar from "./ui/SkillBar.jsx";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <SectionEyebrow>Technical Proficiency</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What I Build With
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((group, gi) => {
            const Icon = group.icon;
            const a = accent(group.accent);
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: gi * 0.08 }}
              >
                <GlassCard className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2 rounded-xl border ${a.bg} ${a.border} ${a.text}`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="text-white font-semibold">{group.category}</h3>
                  </div>
                  {group.items.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={i * 0.08}
                    />
                  ))}
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
