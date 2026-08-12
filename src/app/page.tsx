import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Collection from "@/components/sections/Collection";
import Journal from "@/components/sections/Journal";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Navbar />
      

      <Hero />
      <About />
      <Collection />
      <Journal />
      <Contact />

      <Footer />
    </main>
  );
}
