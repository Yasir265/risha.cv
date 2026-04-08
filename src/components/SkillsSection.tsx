import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, PenTool, Scissors, Shirt, Brush, Droplets, Frame, Sparkles, Pencil } from "lucide-react";

const skills = [
  { name: "Hand Painted Research Board", icon: Palette },
  { name: "Digital Designs", icon: Frame },
  { name: "Hand Painted Designs", icon: Brush },
  { name: "Fabric Painting", icon: Shirt },
  { name: "Hand Embellishments", icon: Sparkles },
  { name: "Pen and Ink", icon: PenTool },
  { name: "Canvas Paintings", icon: Palette },
  { name: "Water Color Paintings", icon: Droplets },
  { name: "Drawings & Illustrations", icon: Pencil },
  { name: "Fashion Drawings", icon: Shirt },
  { name: "Hand Crafted Bags", icon: Scissors },
  { name: "Thread Work", icon: Scissors },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding noise-bg" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            What I Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            My <span className="text-gradient-gold">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-xl p-6 text-center group hover:border-primary/30 hover:bg-surface-hover transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-body text-sm font-medium">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
