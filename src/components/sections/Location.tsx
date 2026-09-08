"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-brand-beige/10 dark:bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Location</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">THE SETTING</h2>
            <p className="font-sans text-lg opacity-80 leading-relaxed font-light mb-10 max-w-lg">
              Perched on the western shore of Lake Como, The Aura is perfectly situated to offer both seclusion and accessibility to the region's most enchanting destinations.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-gold shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-serif text-xl mb-1">Address</h4>
                  <p className="font-sans text-sm opacity-70 font-light">
                    Via Regina, 123<br />
                    22016 Tremezzina CO, Italy
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Navigation className="text-brand-gold shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-serif text-xl mb-1">Getting Here</h4>
                  <p className="font-sans text-sm opacity-70 font-light">
                    60 minutes from Milan Malpensa Airport (MXP)<br />
                    Private boat and car transfers available upon request.
                  </p>
                </div>
              </div>
            </div>
            
            <Button variant="outline">Get Directions</Button>
          </motion.div>
        </div>

        <div className="relative h-[50vh] md:h-[70vh] w-full bg-brand-beige/30 dark:bg-black/30 rounded-sm overflow-hidden flex items-center justify-center">
          {/* Map Placeholder */}
          <div className="absolute inset-0 opacity-50 dark:opacity-30 bg-cover bg-center mix-blend-luminosity" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')" }}></div>
          <div className="absolute inset-0 bg-brand-charcoal/10 dark:bg-black/40"></div>
          
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            className="relative z-10 w-16 h-16 bg-white dark:bg-brand-charcoal rounded-full shadow-2xl flex items-center justify-center border-4 border-brand-gold"
          >
            <MapPin className="text-brand-gold" size={24} />
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
