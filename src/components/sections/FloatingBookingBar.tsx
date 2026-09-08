"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FloatingBookingBar() {
  return (
    <div className="relative z-20 flex justify-center -mt-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white dark:bg-brand-charcoal shadow-2xl w-full max-w-5xl py-6 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-brand-beige/30"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 w-full md:w-auto">
          {/* Check In & Out */}
          <div className="flex items-center gap-4 w-full md:w-auto border-b md:border-b-0 border-brand-beige/40 pb-4 md:pb-0 md:border-r md:pr-8">
            <Calendar className="text-brand-gold" size={24} />
            <div className="flex flex-col cursor-pointer group">
              <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/60 dark:text-brand-ivory/60 mb-1">Dates</span>
              <span className="text-sm font-medium group-hover:text-brand-gold transition-colors">Oct 12 - Oct 15</span>
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-center gap-4 w-full md:w-auto border-b md:border-b-0 border-brand-beige/40 pb-4 md:pb-0 md:border-r md:pr-8">
            <Users className="text-brand-gold" size={24} />
            <div className="flex flex-col cursor-pointer group">
              <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/60 dark:text-brand-ivory/60 mb-1">Guests</span>
              <span className="text-sm font-medium group-hover:text-brand-gold transition-colors">2 Adults</span>
            </div>
          </div>

          {/* Rooms */}
          <div className="flex items-center gap-4 w-full md:w-auto pb-2 md:pb-0">
            <Home className="text-brand-gold" size={24} />
            <div className="flex flex-col cursor-pointer group">
              <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/60 dark:text-brand-ivory/60 mb-1">Rooms</span>
              <span className="text-sm font-medium group-hover:text-brand-gold transition-colors">1 Room</span>
            </div>
          </div>
        </div>

        <Button size="lg" className="w-full md:w-auto mt-4 md:mt-0 shadow-lg">
          Check Availability
        </Button>
      </motion.div>
    </div>
  );
}
