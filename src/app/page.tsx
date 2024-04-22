"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainSection from "@/components/MainSection";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="mx-14 my-5">
      <motion.div 
        className="fixed top-0 left-0 bg-white h-1 w-full"
        style={{  scaleX: scrollYProgress }}
      />
      <Header />
      <Hero />
      <MainSection />
      {/* <Footer /> */}
    </main>
  )
}
