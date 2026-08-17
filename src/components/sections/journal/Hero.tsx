"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@/lib/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();


      gsap.to(".journal-hero-bg", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });


      tl.from(".journal-hero-content", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden"
    >

      <div className="absolute left-0 right-0 top-[-10%] -z-20 h-[120%] w-full">
        <Image
          src="/journal/hero.jpg"
          alt="The Loren Journal"
          fill
          priority
          className="journal-hero-bg object-cover object-center"
        />
      </div>


      <div className="absolute inset-0 -z-10 bg-white opacity-30" />


      <div className="relative z-10 flex w-full max-w-[1000px] flex-col items-center justify-center px-6 text-center mt-12 md:mt-0">
        <div className="journal-hero-content mb-6 inline-block border border-loren-white px-4 md:px-4">
          <p className="font-dmSerifText text-md font-normal uppercase tracking-widest text-loren-white md:text-2xl">
            THE LOREN JOURNAL
          </p>
        </div>

        <h1 className="journal-hero-content font-dmSerifDisplay text-[40px] font-normal leading-[1.1] tracking-[0.02em] text-loren-black drop-shadow-sm md:text-[64px] lg:text-[80px]">
          WHERE LOREN COMES <br /> TO LIFE
        </h1>
      </div>
    </section>
  );
}
