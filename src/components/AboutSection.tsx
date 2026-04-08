import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding noise-bg" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Get to Know Me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            About <span className="text-gradient-gold">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card rounded-2xl p-8"
          >
         <div className="w-full h-80 rounded-xl overflow-hidden">
  <img 
    src="/src/assets/rb1.jpeg" 
    alt="profile"
    className="w-full h-full object-cover scale-125"
  />
</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Passionate Artist and   Designer
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              I am a multidisciplinary creative designer and visual artist with a deep 
              passion for blending traditional art forms with modern design sensibilities. 
              My journey in art began with a fascination for colors, textures, and the 
              stories they can tell.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              From hand-painted research boards and fabric painting to fashion illustrations 
              and handcrafted accessories, I pour my heart into every piece I create. My work 
              is a celebration of craftsmanship, creativity, and the beauty found in 
              meticulous detail.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: "50+", label: "Projects" },
                { num: "5+", label: "Years Exp." },
                { num: "30+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center glass-card rounded-xl p-4">
                  <p className="font-display text-2xl font-bold text-primary">{stat.num}</p>
                  <p className="text-muted-foreground text-xs font-body mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
