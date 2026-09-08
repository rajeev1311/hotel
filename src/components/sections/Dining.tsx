"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Dining() {
  return (
    <section id="dining" className="py-24 md:py-32 bg-brand-beige/20 dark:bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative z-10 h-[60vh] md:h-[70vh] w-full md:w-11/12 overflow-hidden"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80')" }}
            ></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30, y: -30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden md:block absolute top-12 -right-12 h-64 w-64 bg-cover bg-center border-4 border-white dark:border-[#1A1A1A] z-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80')" }}
          ></motion.div>
        </div>

        <div className="flex flex-col justify-center lg:pl-12">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Fine Dining</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">L'ORANGERIE</h2>
            <p className="font-sans text-sm uppercase tracking-widest opacity-60 mb-8">Modern Italian Cuisine</p>
            
            <p className="font-sans text-lg opacity-80 leading-relaxed font-light mb-8">
              Under the guidance of our Michelin-starred Executive Chef, L'Orangerie celebrates the rich culinary heritage of Northern Italy. We source the finest seasonal ingredients from local artisans to create dishes that are both innovative and deeply rooted in tradition.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-gold block mb-2">Breakfast</span>
                <span className="text-sm opacity-80">7:00 AM – 11:00 AM</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-gold block mb-2">Dinner</span>
                <span className="text-sm opacity-80">7:00 PM – 10:30 PM</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button>Reserve a Table</Button>
              <Button variant="outline">View Menu</Button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
