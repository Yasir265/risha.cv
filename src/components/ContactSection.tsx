import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Instagram, Linkedin , Phone , Music} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FaTiktok } from "react-icons/fa6";
import emailjs from "emailjs-com";


const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const templateParams = {
    name: form.name,
    email: form.email,
    message: form.message,
  };

  // 1. Send email to YOU
  emailjs.send(
    "service_66ia64x",
    "template_b8k28xq",
    templateParams,
    "nh_sRKDt2oygP0QNo"
  )
  .then(() => {
    // 2. Auto reply to USER
    emailjs.send(
      "service_66ia64x",
      "template_f3qgawt",
      templateParams,
      "nh_sRKDt2oygP0QNo"
    );

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });

    setForm({ name: "", email: "", message: "" });
  })
  .catch((error) => {
    console.error(error);
    toast({
      title: "Error!",
      description: "Something went wrong. Try again."
    });
  });
};

// links
const socialLinks = [
  {
    icon: Instagram,
    link: "https://www.instagram.com/rishajiyana?igsh=NGRoZGUxeGtjaW8z",
  },
  
  {
    icon: FaTiktok,
    link: "https://www.tiktok.com/@r_j_44?_r=1&_t=ZS-95J3dz7OgXV",
  },
];
  return (
    <section id="contact" className="section-padding noise-bg" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Let's Connect
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Let's create something beautiful together
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Whether you need a custom painting, fashion illustration, or handcrafted 
              piece, I'd love to hear about your vision. Feel free to reach out!
            </p>

            <div className="space-y-4">
             <div className="flex items-center gap-4 cursor-pointer group"
     onClick={() => window.location.href = "mailto:risha.designs@email.com"}>
  
  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
    <Mail className="w-4 h-4 text-primary" />
  </div>
  
  <span className="text-foreground font-body text-sm group-hover:text-primary transition-colors">
    malikrimsha001@email.com
  </span>
</div>
</div>
              <div className="flex items-center gap-4 mt-5 cursor-pointer group"
     onClick={() => window.open("https://maps.app.goo.gl/XUuBfKTkah2GrGPA8", "_blank")}>
  
  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
    <MapPin className="w-4 h-4 text-primary" />
  </div>
  
  <span className="text-foreground font-body text-sm group-hover:text-primary transition-colors">
    Saddar Rawalpindi, Punjab, Pakistan
  </span>
</div>

<div className="flex items-center gap-4 cursor-pointer group mt-5"
     onClick={() => window.open("https://wa.me/923150586390", "_blank")}>
  
  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
    <Phone className="w-4 h-4 text-primary" />
  </div>
  
  <span className="text-foreground font-body text-sm group-hover:text-primary transition-colors">
    +92 315 0586390
  </span>
</div>

            <div className="flex gap-3 mt-8">
  {socialLinks.map((item, i) => {
    const Icon = item.icon;
    return (
      <a
        key={i}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all"
      >
        <Icon className="w-4 h-4 text-muted-foreground hover:text-primary" />
      </a>
    );
  })}
</div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-8 space-y-5"
          >
            <div>
              <label className="text-foreground font-body text-sm mb-1.5 block">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-foreground font-body text-sm mb-1.5 block">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-foreground font-body text-sm mb-1.5 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase rounded-lg hover:opacity-90 transition-opacity gold-glow"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
