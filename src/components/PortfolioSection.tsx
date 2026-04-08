import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import dd1 from "@/assets/dd1.jpeg";
import dd2 from "@/assets/dd2.jpeg";
import dd3 from "@/assets/dd3.jpeg";
import dd4 from "@/assets/dd4.jpeg";
import dd5 from "@/assets/dd5.jpeg";
import dd6 from "@/assets/dd6.jpeg";
import dd7 from "@/assets/dd7.jpeg";
import dd8 from "@/assets/dd8.jpeg";

import hd from "@/assets/hd.jpeg";
import hd1 from "@/assets/hd1.jpeg";
import hd2 from "@/assets/hd2.jpeg";
import hd3 from "@/assets/hd3.jpeg";
import hd4 from "@/assets/hd4.jpeg";
import hd5 from "@/assets/hd5.jpeg";

import fb1 from "@/assets/fb1.jpeg";
import fb2 from "@/assets/fb2.jpeg";
import fb3 from "@/assets/fb3.jpeg";
import fb4 from "@/assets/fb4.jpeg";

import he1 from "@/assets/he1.jpeg";
import he2 from "@/assets/he2.jpeg";
import he3 from "@/assets/he3.jpeg";
import he4 from "@/assets/he4.jpeg";
import he5 from "@/assets/he5.jpeg";
import he6 from "@/assets/he6.jpeg";
import he7 from "@/assets/he7.jpeg";
import he8 from "@/assets/he8.jpeg";
import he9 from "@/assets/he9.jpeg";

import hel1 from "@/assets/hel1.jpeg";
import hel2 from "@/assets/hel2.jpeg";
import hel3 from "@/assets/hel3.jpeg";

import p1 from "@/assets/p1.jpeg";
import p2 from "@/assets/p2.jpeg";
import p3 from "@/assets/p3.jpeg";
import p4 from "@/assets/p4.jpeg";

import fi1 from "@/assets/fi1.jpeg";
import fi2 from "@/assets/fi2.jpeg";
import fi3 from "@/assets/fi3.jpeg";
import fi4 from "@/assets/fi4.jpeg";
import fi5 from "@/assets/fi5.jpeg";
import fi6 from "@/assets/fi6.jpeg";
import fi7 from "@/assets/fi7.jpeg";
import fi8 from "@/assets/fi8.jpeg";
import fi9 from "@/assets/fi9.jpeg";
import fi10 from "@/assets/fi10.jpeg";
import fi11 from "@/assets/fi11.jpeg";
import fi12 from "@/assets/fi12.jpeg";
import fi13 from "@/assets/fi13.jpeg";
import fi14 from "@/assets/fi14.jpeg";
import fi15 from "@/assets/fi15.jpeg";
import fi16 from "@/assets/fi16.jpeg";
import fi17 from "@/assets/fi17.jpeg";
import fi18 from "@/assets/fi18.jpeg";
import fi19 from "@/assets/fi19.jpeg";

import hb1 from "@/assets/hb1.png";
import hb2 from "@/assets/hb2.png";
import hb3 from "@/assets/hb3.png";
import hb4 from "@/assets/hb4.png";

import w1 from "@/assets/w1.jpeg";
import w2 from "@/assets/w2.jpeg";
import w3 from "@/assets/w3.jpeg";
import w4 from "@/assets/w4.jpeg";
import w5 from "@/assets/w5.jpeg";

import t1 from "@/assets/t1.jpeg"

import cd1 from "@/assets/cd1.jpeg"
import cd2 from "@/assets/cd2.jpeg"
import cd3 from "@/assets/cd3.jpeg"
import cd4 from "@/assets/cd4.jpeg"
import cd5 from "@/assets/cd5.jpeg"

import pd1 from "@/assets/pd1.jpeg"
import pd2 from "@/assets/pd2.jpeg"
import pd3 from "@/assets/pd3.jpeg"
import pd4 from "@/assets/pd4.jpeg"

import th from "@/assets/th.jpeg"
import th1 from "@/assets/th1.jpeg"
import th2 from "@/assets/th2.jpeg"
import th3 from "@/assets/th3.jpeg"
import th4 from "@/assets/th4.jpeg"
import th5 from "@/assets/th5.jpeg"
import th6 from "@/assets/th6.jpeg"
import th7 from "@/assets/th7.jpeg"
import th8 from "@/assets/th8.jpeg"
import th9 from "@/assets/th9.jpeg"
import th10 from "@/assets/th10.jpeg"
import th11 from "@/assets/th11.jpeg"
import th12 from "@/assets/th12.jpeg"
import th13 from "@/assets/th13.jpeg"
import th14 from "@/assets/th14.jpeg"
import th15 from "@/assets/th15.jpeg"
import th16 from "@/assets/th16.jpeg"
import th17 from "@/assets/th17.jpeg"
import th18 from "@/assets/th18.jpeg"
import th19 from "@/assets/th19.jpeg"
import th20 from "@/assets/th20.jpeg"
import th21 from "@/assets/th21.jpeg"
import th22 from "@/assets/th22.jpeg"
import th23 from "@/assets/th23.jpeg"






const categories = ["All",'Thesis Work', "Digital Designs", "Painted Designs", "Fabric painted", "Hand Embroidery",
  'Hand Embellishments','Pen and ink','Fashion Illustration','Hand Crafted Bags','Weaving',
  'Thread Work', 'Canvas Drawing','Pencil Drwaing'];


const projects = [


  //Thesis Work
  { title: "Thesis Work 1", category: "Thesis Work", image: th1 },
  { title: "Thesis Work 2", category: "Thesis Work", image: th2 },
  { title: "Thesis Work 3", category: "Thesis Work", image: th3 },
  { title: "Thesis Work 4", category: "Thesis Work", image: th4 },
  { title: "Thesis Work 5", category: "Thesis Work", image: th5 },
  { title: "Thesis Work 6", category: "Thesis Work", image: th6 },
  { title: "Thesis Work 7", category: "Thesis Work", image: th7 },
  { title: "Thesis Work 8", category: "Thesis Work", image: th8 },
  { title: "Thesis Work 9", category: "Thesis Work", image: th9 },
  { title: "Thesis Work 10", category: "Thesis Work", image: th10 },
  { title: "Thesis Work 11", category: "Thesis Work", image: th11 },
  { title: "Thesis Work 12", category: "Thesis Work", image: th12 },
  { title: "Thesis Work 13", category: "Thesis Work", image: th13 },
  { title: "Thesis Work 14", category: "Thesis Work", image: th14 },
  { title: "Thesis Work 15", category: "Thesis Work", image: th15 },
  { title: "Thesis Work 16", category: "Thesis Work", image: th16 },
  { title: "Thesis Work 17", category: "Thesis Work", image: th17 },
  { title: "Thesis Work 18", category: "Thesis Work", image: th18 },
  { title: "Thesis Work 19", category: "Thesis Work", image: th19 },
  { title: "Thesis Work 20", category: "Thesis Work", image: th20 },
  { title: "Thesis Work 21", category: "Thesis Work", image: th21 },
  { title: "Thesis Work 22", category: "Thesis Work", image: th22 },
  { title: "Thesis Work 23", category: "Thesis Work", image: th23 },



  



  //  Digital Designs
  { title: "Digital 1", category: "Digital Designs", image: dd1 },
  { title: "Digital 2", category: "Digital Designs", image: dd2 },
  { title: "Digital 3", category: "Digital Designs", image: dd3 },
  { title: "Digital 4", category: "Digital Designs", image: dd4 },
  { title: "Digital 5", category: "Digital Designs", image: dd5 },
  { title: "Digital 6", category: "Digital Designs", image: dd6 },
  { title: "Digital 7", category: "Digital Designs", image: dd7 },
  { title: "Digital 8", category: "Digital Designs", image: dd8 },
//hand painted designs
  { title: "Handpainted 1", category: "Painted Designs", image: hd1 },
  { title: "Handpainted 2", category: "Painted Designs", image: hd },
  { title: "Handpainted 3", category: "Painted Designs", image: hd2 },
  { title: "Handpainted 4", category: "Painted Designs", image: hd3 },
  { title: "Handpainted 5", category: "Painted Designs", image: hd4 },
  { title: "Handpainted 6", category: "Painted Designs", image: hd5 },
  

  //Fabric painted designs

  { title: "Fabric painted 1", category: "Fabric painted", image: fb1 },
  { title: "Fabric painted 2", category: "Fabric painted", image: fb2 },
  { title: "Fabric painted 3", category: "Fabric painted", image: fb3 },
  { title: "Fabric painted 4", category: "Fabric painted", image: fb4 },

//Hand embroidery
{ title: "Hand Embroidery 1", category: "Hand Embroidery", image: he1 },
{ title: "Hand Embroidery 2", category: "Hand Embroidery", image: he2 },
{ title: "Hand Embroidery 3", category: "Hand Embroidery", image: he4 },
{ title: "Hand Embroidery 4", category: "Hand Embroidery", image: he3 },
{ title: "Hand Embroidery 5", category: "Hand Embroidery", image: he7 },
{ title: "Hand Embroidery 6", category: "Hand Embroidery", image: he6 },
{ title: "Hand Embroidery 7", category: "Hand Embroidery", image: he8 },
{ title: "Hand Embroidery 8", category: "Hand Embroidery", image: he9 },

//Hand embellishments
  { title: "Hand Embellishments 1", category: "Hand Embellishments", image: hel1 },
  { title: "Hand Embellishments 2", category: "Hand Embellishments", image: hel2 },
  { title: "Hand Embellishments 3", category: "Hand Embellishments", image: hel3 },

//Pen and ink
  { title: "Pen maker 1", category: "Pen and ink", image: p1 },
  { title: "Pen maker 2", category: "Pen and ink", image: p2 },
  { title: "Pen maker 3", category: "Pen and ink", image: p3 },
  { title: "Pen maker 4", category: "Pen and ink", image: p4 },

//Fashion Illustration
  { title: "Fashion 1", category: "Fashion Illustration", image: fi1 },
  { title: "Fashion 2", category: "Fashion Illustration", image: fi2 },
  { title: "Fashion 3", category: "Fashion Illustration", image: fi3 },
  { title: "Fashion 4", category: "Fashion Illustration", image: fi4 },
  { title: "Fashion 5", category: "Fashion Illustration", image: fi5 },
  { title: "Fashion 6", category: "Fashion Illustration", image: fi6 },
  { title: "Fashion 7", category: "Fashion Illustration", image: fi7 },
  { title: "Fashion 8", category: "Fashion Illustration", image: fi8 },
  { title: "Fashion 9", category: "Fashion Illustration", image: fi9 },
  { title: "Fashion 10", category: "Fashion Illustration", image: fi10 },
  { title: "Fashion 11", category: "Fashion Illustration", image: fi11 },
  { title: "Fashion 12", category: "Fashion Illustration", image: fi12 },
  { title: "Fashion 13", category: "Fashion Illustration", image: fi13 },
  { title: "Fashion 14", category: "Fashion Illustration", image: fi14 },
  { title: "Fashion 15", category: "Fashion Illustration", image: fi15 },
  { title: "Fashion 16", category: "Fashion Illustration", image: fi16 },
  { title: "Fashion 17", category: "Fashion Illustration", image: fi17 },
  { title: "Fashion 18", category: "Fashion Illustration", image: fi18 },
  { title: "Fashion 19", category: "Fashion Illustration", image: fi19 },

//Hand Crafted Bags
  { title: "Hand Crafted Bags 1", category: "Hand Crafted Bags", image: hb1 },
  { title: "Hand Crafted Bags 2", category: "Hand Crafted Bags", image: hb2 },
  { title: "Hand Crafted Bags 3", category: "Hand Crafted Bags", image: hb3 },
  { title: "Hand Crafted Bags 4", category: "Hand Crafted Bags", image: hb4 },
// Weaving 
{ title: "Weaving 1", category:   "Weaving", image: w1 },
{ title: "Weaving 2", category: "Weaving", image: w5 },
{ title: "Weaving 3", category: "Weaving", image: w4 },
{ title: "Weaving 4", category: "Weaving", image: w2 },
{ title: "Weaving 5", category: "Weaving", image: w3 }, 

//Thread work
{ title: "Thread 1", category:   "Thread Work", image: t1 },

//Canvas Drawing
  { title: "Canvas Drawing 1", category: "Canvas Drawing", image: cd1 },
  { title: "Canvas Drawing 2", category: "Canvas Drawing", image: cd2 },
  { title: "Canvas Drawing 3", category: "Canvas Drawing", image: cd3 },
  { title: "Canvas Drawing 4", category: "Canvas Drawing", image: cd4 },
  // { title: "Canvas Drawing 5", category: "Canvas Drawing", image: cd5 },

// Pencil Drwaing

  { title: "Pencil Drwaing 1", category: "Pencil Drwaing", image: pd1 },
  { title: "Pencil Drwaing 2", category: "Pencil Drwaing", image: pd2 },
  { title: "Pencil Drwaing 3", category: "Pencil Drwaing", image: pd3 },
  { title: "Pencil Drwaing 4", category: "Pencil Drwaing", image: pd4 },

];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding noise-bg" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            My Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            <span className="text-gradient-gold">Portfolio</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-body tracking-wider transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-xl glass-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <p className="text-primary text-xs font-body tracking-widest uppercase mb-1">
                      {project.category}
                    </p>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
