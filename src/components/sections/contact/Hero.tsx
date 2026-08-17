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


      gsap.to(".contact-hero-bg", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });


      tl.from(".contact-hero-content", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative flex h-[520px] w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute left-0 right-0 top-[-10%] -z-20 h-[120%] w-full">
        <Image
          src="/contact/hero.png"
          alt="Contact Loren"
          fill
          priority
          className="contact-hero-bg object-cover object-center opacity-70"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-loren-primary/20" />

      <div className="relative z-10 flex w-full max-w-[1000px] flex-col items-center justify-center px-6 text-center mt-12 md:mt-0">
        <h1 className="contact-hero-content font-dmSerifDisplay text-[64px] font-normal leading-[1.1] tracking-[0.02em] text-white drop-shadow-[0_4px_20px_rgba(255,255,255,0.4)] md:text-[96px] lg:text-[120px]">
          GET IN <br /> TOUCH
        </h1>
      </div>
    </section>
  );
}
