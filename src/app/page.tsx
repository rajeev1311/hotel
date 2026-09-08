import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FloatingBookingBar } from "@/components/sections/FloatingBookingBar";
import { Introduction } from "@/components/sections/Introduction";
import { Rooms } from "@/components/sections/Rooms";
import { Experiences } from "@/components/sections/Experiences";
import { Dining } from "@/components/sections/Dining";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Location } from "@/components/sections/Location";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FloatingBookingBar />
        <Introduction />
        <Rooms />
        <Experiences />
        <Dining />
        <Gallery />
        <Testimonials />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
