"use client";
import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import About         from "@/components/About";
import Services      from "@/components/Services";
import Projects      from "@/components/Projects";
import WhyChooseMe   from "@/components/WhyChooseMe";
import Process       from "@/components/Process";
import Pricing       from "@/components/Pricing";
import FAQ           from "@/components/FAQ";
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
      <FAQ/>
      <Contact/>
      <Footer/>
      <WhatsAppButton/>
    </main>
  );
}
