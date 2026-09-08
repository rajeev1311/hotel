"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const ROOMS = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    description: "An elegant space offering partial lake views and a serene ambiance, featuring bespoke Italian furnishings.",
    size: "45 sqm",
    capacity: "2 Guests",
    bed: "1 King Bed",
    price: "€450",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80",
    amenities: ["Free Wi-Fi", "Espresso Machine", "Marble Bathroom", "Diptyque Toiletries"]
  },
  {
    id: "premier",
    name: "Premier Room",
    description: "Expansive layouts with panoramic windows framing Lake Como, featuring a private balcony and deep soaking tub.",
    size: "60 sqm",
    capacity: "3 Guests",
    bed: "1 King Bed + 1 Rollaway",
    price: "€650",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80",
    amenities: ["Private Balcony", "Soaking Tub", "In-Room Dining", "Minibar"]
  },
  {
    id: "executive",
    name: "Executive Suite",
    description: "A luxurious suite with separate living areas, double vanities, and uncompromised views of the surrounding mountains.",
    size: "90 sqm",
    capacity: "4 Guests",
    bed: "1 King Bed + Sofa Bed",
    price: "€1,200",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
    amenities: ["Separate Living Area", "Butler Service", "Welcome Champagne", "Walk-in Wardrobe"]
  },
];

export function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<(typeof ROOMS)[0] | null>(null);

  return (
    <section id="rooms" className="py-24 md:py-32 bg-white dark:bg-[#151515]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 md:mb-32 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Accommodation</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">ROOMS & SUITES</h2>
            <p className="font-sans text-lg opacity-70 font-light">
              Spaces designed for stillness, comfort, and effortless luxury. Every room is a curated sanctuary offering respite from the world.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <Button variant="outline">View All Rooms</Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {ROOMS.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer flex flex-col"
              onClick={() => setSelectedRoom(room)}
            >
              <div className="relative h-[60vh] md:h-[50vh] overflow-hidden mb-6">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${room.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <h3 className="font-serif text-2xl mb-2 group-hover:text-brand-gold transition-colors">{room.name}</h3>
                <div className="flex gap-4 text-xs uppercase tracking-widest opacity-60 mb-4">
                  <span>{room.size}</span>
                  <span>&bull;</span>
                  <span>{room.capacity}</span>
                </div>
                <p className="text-sm opacity-80 leading-relaxed font-light mb-6 flex-1 line-clamp-2">
                  {room.description}
                </p>
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-brand-charcoal/10 dark:border-brand-ivory/10">
                  <span className="font-serif italic text-lg">From {room.price} / night</span>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium group-hover:text-brand-gold transition-colors">
                    Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Room Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-brand-ivory dark:bg-brand-charcoal w-full max-w-6xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative"
            >
              <button 
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-brand-charcoal dark:text-white hover:bg-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 h-[40vh] md:h-auto relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${selectedRoom.image}')` }}
                ></div>
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Room Details</span>
                <h3 className="font-serif text-4xl mb-6">{selectedRoom.name}</h3>
                <p className="text-base opacity-80 leading-relaxed font-light mb-8">
                  {selectedRoom.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div>
                    <span className="text-xs uppercase tracking-widest opacity-50 block mb-1">Size</span>
                    <span className="font-medium">{selectedRoom.size}</span>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest opacity-50 block mb-1">Capacity</span>
                    <span className="font-medium">{selectedRoom.capacity}</span>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest opacity-50 block mb-1">Bed Type</span>
                    <span className="font-medium">{selectedRoom.bed}</span>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest opacity-50 block mb-1">Price</span>
                    <span className="font-serif italic text-lg">{selectedRoom.price} / night</span>
                  </div>
                </div>

                <div className="mb-10">
                  <span className="text-xs uppercase tracking-widest opacity-50 block mb-4">Amenities</span>
                  <ul className="grid grid-cols-2 gap-3 text-sm">
                    {selectedRoom.amenities.map((amenity, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 mt-auto">
                  <Button size="lg" className="w-full">Book Now</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
