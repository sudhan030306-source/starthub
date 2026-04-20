"use client";
import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import About         from "@/components/About";
import Services      from "@/components/Services";
import Projects      from "@/components/Projects";
import WhyChooseMe   from "@/components/WhyChooseMe";
import Process       from "@/components/Process";
import Pricing       from "@/components/Pricing";
import Contact       from "@/components/Contact";
import Footer        from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <WhyChooseMe/>
      <Process/>
      <Pricing/>
      <Contact/>
      <Footer/>
      <WhatsAppButton/>
    </main>
  );
}
