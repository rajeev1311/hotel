import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-ivory pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl tracking-widest uppercase block">
                The Aura
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase font-sans opacity-70 mt-1 block">
                Lake Como
              </span>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed font-sans max-w-xs">
              An intimate escape shaped by exceptional design, thoughtful hospitality, and unforgettable experiences.
            </p>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="font-serif text-lg mb-6 text-brand-gold">Contact</h4>
            <address className="not-italic text-sm opacity-80 leading-loose font-sans">
              Via Regina, 123<br />
              22016 Tremezzina CO<br />
              Italy<br />
              <br />
              <a href="tel:+390311234567" className="hover:text-brand-gold transition-colors block">+39 031 123 4567</a>
              <a href="mailto:reservations@theaura.com" className="hover:text-brand-gold transition-colors block">reservations@theaura.com</a>
            </address>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h4 className="font-serif text-lg mb-6 text-brand-gold">Explore</h4>
            <ul className="text-sm opacity-80 space-y-4 font-sans">
              <li><Link href="#rooms" className="hover:text-brand-gold transition-colors">Rooms & Suites</Link></li>
              <li><Link href="#dining" className="hover:text-brand-gold transition-colors">Dining</Link></li>
              <li><Link href="#experiences" className="hover:text-brand-gold transition-colors">Experiences</Link></li>
              <li><Link href="#gallery" className="hover:text-brand-gold transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-1">
            <h4 className="font-serif text-lg mb-6 text-brand-gold">Connect</h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors font-sans text-xs" aria-label="Instagram">
                IG
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors font-sans text-xs" aria-label="Facebook">
                FB
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors font-sans text-xs" aria-label="Twitter">
                X
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60 font-sans tracking-wide">
          <p>&copy; {new Date().getFullYear()} The Aura Hotel. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
