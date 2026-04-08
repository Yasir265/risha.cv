import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "2023 – Present",
    title: "Freelance Creative Designer",
    description: "Working with clients worldwide on custom art pieces, fashion illustrations, and handcrafted accessories.",
    type: "work",
  },
  {
    year: "2021 – 2023",
    title: "Visual Artist & Textile Designer",
    description: "Specialized in fabric painting, hand embellishments, and creating unique textile art pieces for fashion brands.",
    type: "work",
  },
  {
    year: "2020 – 2025",
    title: "Bachelor of Science in Textile and Fashion Designing",
    description: "Focused on traditional art techniques, fashion design, and contemporary visual arts. Graduated with distinction.",
    type: "education",
  },
  {
    year: "2017 – 2019",
    title: "Intermediate In Fine Arts",
    description: "Built a strong foundation in drawing, color theory, illustration, and design principles.",
    type: "education",
  },
  {
    year: "2017 – 2019",
    title: "Diploma in Textile & Fashion Designing",
    description: "Built a strong foundation in drawing, color theory, illustration, and design principles.",
    type: "education",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding noise-bg" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            My Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Experience & <span className="text-gradient-gold">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10 mt-2" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="glass-card rounded-xl p-6 hover:border-primary/20 transition-colors">
                  <span className="text-primary text-xs font-body tracking-widest uppercase">
                    {item.year}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <span className={`inline-block mt-3 text-xs font-body tracking-wider uppercase px-3 py-1 rounded-full ${
                    item.type === "work" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                  }`}>
                    {item.type === "work" ? "Experience" : "Education"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
