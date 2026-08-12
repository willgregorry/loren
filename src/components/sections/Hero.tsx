"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const textSplitClass =
    "bg-gradient-to-r from-loren-black from-50% to-loren-white to-50% bg-fixed bg-clip-text text-transparent";

  useGSAP(
    () => {
      // Best practice entrance animation
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });
    },
    { scope: containerRef } // Scope to the container for safety and clean-up
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative flex h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-loren-white from-50% to-loren-primary to-50%"
    >
      <h2 className={`absolute top-10 font-playfairDisplay text-3xl font-black ${textSplitClass}`}>
        LOREN
      </h2>

      <h1
        ref={textRef}
        className={`w-full text-center text-[10vw] font-bold tracking-widest ${textSplitClass}`}
      >
        NEW FASHION
      </h1>

      <p className={`mt-4 max-w-2xl text-center font-sans text-lg font-medium ${textSplitClass}`}>
        Contemporary Outwear - The Art of Timeless Outerwear
      </p>
    </section>
  );
}
