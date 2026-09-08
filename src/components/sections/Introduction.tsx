"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/link";

export function Introduction() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-5 lg:col-start-2 order-2 lg:order-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              WHERE TIME <br />
              <span className="text-brand-gold italic">SLOWS DOWN</span>
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold mb-8"></div>
            <p className="font-sans text-lg opacity-80 leading-relaxed mb-6 font-light">
              Nestled on the serene shores of Lake Como, The Aura is a sanctuary of refined elegance and quiet luxury. 
              Our 19th-century villa has been meticulously restored to offer a harmonious blend of historical grandeur and contemporary design.
            </p>
            <p className="font-sans text-lg opacity-80 leading-relaxed font-light mb-10">
              Here, every detail is considered, and every experience is tailored to ensure absolute tranquility. Discover a place where architecture, nature, and personalized hospitality converge.
            </p>
            
            <a href="#about" className="inline-flex items-center text-sm uppercase tracking-widest font-medium group transition-colors hover:text-brand-gold">
              Discover Our Story
              <span className="ml-4 w-12 h-[1px] bg-current group-hover:w-16 transition-all duration-300"></span>
            </a>
          </motion.div>
        </div>

        {/* Image Content */}
        <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] w-full overflow-hidden"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')" }}
            ></div>
          </motion.div>
          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-32 h-32 md:w-48 md:h-48 bg-brand-beige/20 -z-10"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
