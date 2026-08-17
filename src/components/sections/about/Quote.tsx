"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@/lib/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Quote() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".quote-bg-container",
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="quote"
      ref={containerRef}
      className="relative flex h-[60vh] min-h-[400px] w-full items-center justify-center overflow-hidden md:h-[80vh] lg:h-screen lg:min-h-[600px]"
    >
      <div className="quote-bg-container absolute left-0 right-0 top-[-20%] -z-20 h-[140%] w-full">
        <Image
          src="/about/quote.png"
          alt="Loren Quote Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-loren-black opacity-35" />

      <div className="relative z-10 w-full max-w-[1200px] px-6 text-center md:px-12 lg:px-[100px]">
        <h2
          ref={textRef}
          className="font-dmSerifText text-[28px] font-normal italic leading-snug tracking-[0.02em] text-loren-white drop-shadow-lg md:text-[40px] lg:text-[56px]"
        >
          &quot;Timeless design begins with intention and lives through every journey.&quot;
        </h2>
      </div>
    </section>
  );
}
