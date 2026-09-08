"use client";

import React from "react";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    id: "spa",
    title: "Spa & Wellness",
    description: "Rejuvenate your body and mind in our subterranean spa, featuring a heated indoor pool, holistic treatments, and panoramic relaxation rooms.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80",
  },
  {
    id: "pool",
    title: "Infinity Pool",
    description: "Suspended over the lake, our infinity pool offers a seamless visual connection to the water, surrounded by private cabanas and ancient olive trees.",
    image: "https://images.unsplash.com/photo-1582662057764-f6b3b5c6579b?auto=format&fit=crop&q=80",
  },
  {
    id: "lake",
    title: "Private Boat Tours",
    description: "Explore the hidden villas and picturesque villages of Lake Como aboard our custom mahogany Riva speedboat, complete with champagne and a private captain.",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&q=80",
  }
];

export function Experiences() {
  return (
    <section id="experiences" className="py-24 md:py-32 overflow-hidden bg-brand-charcoal text-brand-ivory">
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Curated Activities</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">THE EXPERIENCES</h2>
          <p className="font-sans text-lg opacity-70 font-light max-w-2xl mx-auto">
            Beyond your suite, discover a world of tailored experiences designed to connect you deeply with the beauty of Lake Como.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-24 md:gap-32">
        {EXPERIENCES.map((exp, index) => (
          <div key={exp.id} className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2 lg:pl-12'}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
              >
                <h3 className="font-serif text-3xl md:text-4xl mb-6 text-brand-ivory">{exp.title}</h3>
                <div className="w-12 h-[1px] bg-brand-gold mb-6"></div>
                <p className="text-lg opacity-80 leading-relaxed font-light mb-8">
                  {exp.description}
                </p>
                <a href="#" className="inline-flex items-center text-sm uppercase tracking-widest font-medium group transition-colors hover:text-brand-gold">
                  Explore {exp.title}
                  <span className="ml-4 w-12 h-[1px] bg-current group-hover:w-16 transition-all duration-300"></span>
                </a>
              </motion.div>
            </div>

            <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative h-[50vh] md:h-[60vh] overflow-hidden"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
                  style={{ backgroundImage: `url('${exp.image}')` }}
                ></div>
              </motion.div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
