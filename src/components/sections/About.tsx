"use client";

import { useRef } from "react";
import { useGSAP } from "@/lib/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-line", {
        scaleX: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-item", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative flex min-h-[580px] w-full flex-col items-center justify-center bg-loren-primary px-6 py-20 md:px-12 lg:px-[100px]"
    >
      <div className="flex w-full flex-col items-center justify-center text-center">
        <h2 className="about-title font-dmSerifDisplay text-[32px] md:text-[56px] font-normal leading-none tracking-[0.1em] text-loren-white uppercase drop-shadow-sm">
          OUR VALUES
        </h2>
        <div className="about-line mt-6 h-[1px] w-[80%] max-w-[350px] origin-center bg-white/40" />
      </div>

      <div className="mt-16 flex w-full flex-wrap items-center justify-between gap-12 md:gap-12 lg:gap-16">
        <div className="about-item flex md:h-[257px] md:w-[350px] flex-col items-center text-center gap-8 md:gap-[53px]">
          <div className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full bg-loren-white text-loren-black shadow-xl">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21v-4"/>
              <path d="M9 21h6"/>
              <path d="M10 3a2 2 0 0 1 4 0c0 1.5 1 2 2 2 1 0 1.5.5 1.5 2v2c0 2-1 2-1 4v3c0 1.5-1 2-2 2H8.5c-1 0-2-.5-2-2v-3c0-2-1-2-1-4V7c0-1.5.5-2 1.5-2 1 0 2-.5 2-2z"/>
              <path d="M5 9l1 1m0-1l-1 1"/>
              <path d="M19 13l1 1m0-1l-1 1"/>
            </svg>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-dmSerifDisplay text-[28px] md:text-[42px] font-normal leading-none tracking-[0.01em] text-loren-white">
              Timeless Design
            </h3>
            <p className="font-dmSerifText text-[18px] md:text-[28px] italic leading-none tracking-[0.01em] text-loren-white">
              Design Beyond Trends
            </p>
          </div>
        </div>

        <div className="about-item flex md:h-[257px] md:w-[380px] flex-col items-center text-center gap-8 md:gap-[53px]">
          <div className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full bg-loren-white text-loren-black shadow-xl">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 13l8 3 8-3"/>
              <path d="M3 17l8 3 8-3"/>
              <path d="M11 5L3 8l8 3 8-3-8-3z"/>
              <path d="M18 20v-8c0-1.5 1-2.5 2-3"/>
              <path d="M18 16c-1 0-2-1-2-2s1-2 2-2"/>
              <path d="M18 16c1 0 2-1 2-2s-1-2-2-2"/>
            </svg>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-dmSerifDisplay text-[28px] md:text-[42px] font-normal leading-none tracking-[0.01em] text-loren-white">
              Premium Materials
            </h3>
            <p className="font-dmSerifText text-[18px] md:text-[28px] italic leading-none tracking-[0.01em] text-loren-white">
              Crafted to Endure
            </p>
          </div>
        </div>

        <div className="about-item flex md:h-[257px] md:w-[350px] flex-col items-center text-center gap-8 md:gap-[53px]">
          <div className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full bg-loren-white text-loren-black shadow-xl">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v2"/>
              <path d="M12 4a2 2 0 0 0-2 2"/>
              <path d="M5 10l7-4 7 4"/>
              <path d="M7 10v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9"/>
              <path d="M19 10l2 2-2 2"/>
              <path d="M5 10L3 12l2 2"/>
              <path d="M19 5l1 1m0-1l-1 1"/>
            </svg>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-dmSerifDisplay text-[28px] md:text-[42px] font-normal leading-none tracking-[0.01em] text-loren-white">
              Quiet Luxury
            </h3>
            <p className="font-dmSerifText text-[18px] md:text-[28px] italic leading-none tracking-[0.01em] text-loren-white">
              Luxury in Every Detail
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
