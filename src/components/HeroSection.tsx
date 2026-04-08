import { motion } from "framer-motion";
import heroImage from "@/assets/pf11.jpeg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center noise-bg overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-24">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4"
          >
            Welcome to my world
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">I'm </span>
            <span className="text-gradient-gold">Rimsha</span>
            <br />
            <span className="text-foreground text-4xl md:text-5xl font-medium">
              Creative Designer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-muted-foreground font-body text-lg max-w-md mb-8 leading-relaxed"
          >
           Fashion designer specializing in hand-painted art, 
            fabric painting, and handcrafted designs that blend tradition with 
            contemporary aesthetics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-4"
          >
            <a
              href="#portfolio"
              className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase rounded-lg hover:opacity-90 transition-opacity gold-glow"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-primary/30 text-primary font-body text-sm tracking-wider uppercase rounded-lg hover:bg-primary/10 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-full blur-2xl" />
            <img
              src={heroImage}
              alt="Risha - Creative Designer & Visual Artist"
              width={768}
              height={1024}
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-2 border-primary/20"
            />
          </div>
        </motion.div>
      </div>
      
    </section>
  );
};

export default HeroSection;
