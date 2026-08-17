import Hero from "@/components/sections/about/Hero";
import Value from "@/components/sections/about/Value";
import Identity from "@/components/sections/about/Identity";
import Quote from "@/components/sections/about/Quote";

export default function AboutPage() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Hero />
      <Value />
      <Identity />
      <Quote />
    </main>
  );
}
