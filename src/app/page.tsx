import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import Collection from "@/components/sections/home/Collection";
import Journal from "@/components/sections/home/Journal";
import Contact from "@/components/sections/home/Contact";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Hero />
      <About />
      <Collection />
      <Journal />
      <Contact />
    </main>
  );
}
