"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-c6a4d27ce6a2?auto=format&fit=crop&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">Begin Your Journey</span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 tracking-wide drop-shadow-lg">
            YOUR ESCAPE AWAITS
          </h2>
          <p className="font-sans text-lg md:text-xl font-light tracking-wide mb-12 opacity-90 max-w-2xl">
            Reserve your stay and experience The Aura at its most magnificent.
          </p>
          <Button size="lg" className="bg-brand-gold text-white hover:bg-white hover:text-black border-transparent shadow-2xl">
            Book Your Stay
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
