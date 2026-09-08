"use client";

import React from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "A true sanctuary. Every detail, from the bespoke furnishings to the impeccable service, is thoughtfully curated to provide an unparalleled experience.",
    author: "Elena R.",
    location: "Milan, Italy"
  },
  {
    quote: "The Aura manages to feel both incredibly luxurious and completely unpretentious. Waking up to the view of Lake Como from our suite was unforgettable.",
    author: "James & Sarah M.",
    location: "New York, USA"
  },
  {
    quote: "Dining at L'Orangerie was a highlight of our trip. The culinary creativity matched only by the stunning architecture of the hotel.",
    author: "David L.",
    location: "London, UK"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-brand-charcoal text-brand-ivory">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-12 block">Guest Perspectives</span>
        </motion.div>

        <div className="space-y-24">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex flex-col items-center"
            >
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8 italic opacity-90">
                "{t.quote}"
              </p>
              <div className="flex flex-col items-center">
                <span className="font-sans text-sm font-medium tracking-widest uppercase">{t.author}</span>
                <span className="font-sans text-xs opacity-50 mt-1">{t.location}</span>
              </div>
              {i !== TESTIMONIALS.length - 1 && (
                <div className="w-12 h-[1px] bg-white/20 mt-24"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
