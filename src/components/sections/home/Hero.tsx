"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@/lib/gsap";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {

      gsap.from(textRef.current?.children || [], {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
      });

      gsap.from(imageRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        delay: 0.2,
        ease: "power4.out",
      });

      gsap.from([".star-anim", ...(elementsRef.current?.children || [])], {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-loren-white from-50% to-loren-primary to-50% px-6 md:px-12 lg:px-[100px]"
    >


      <div className="star-anim absolute left-[8%] top-[15%] z-0 w-[25vw] md:w-[18vw]">
        <div
          style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }}
          className="aspect-square w-full rotate-45 bg-loren-primary"></div>
      </div>


      <div ref={textRef} className="pointer-events-none relative z-10 mt-[-5vh] flex w-full flex-col justify-center -translate-y-12">
        <h1 className="text-split text-hero-fluid w-full text-left font-dmSerifDisplay font-normal leading-none tracking-[0.01em]">
          NEW FASHION
        </h1>
        <h1 className="text-split text-hero-fluid w-full text-right font-dmSerifDisplay font-normal leading-none tracking-[0.01em]">
          NEW FASHION
        </h1>
      </div>


      <div className="absolute bottom-0 z-20 h-[65vh] w-auto md:h-[85vh]">
        <div className="absolute bottom-[-1%] left-1/2 z-10 h-[4%] w-[65%] -translate-x-1/2 rounded-[50%] bg-black/60 blur-[15px] md:blur-[25px]" />

        <Image
          ref={imageRef}
          src="/home/hero/new_fashion.webp"
          alt="New Fashion Model"
          width={800}
          height={1200}
          draggable={false}
          className="relative z-20 h-full w-auto select-none object-contain object-bottom drop-shadow-2xl"
          priority
        />
      </div>


      <div ref={elementsRef} className="pointer-events-none absolute inset-0 z-30">


        <div className="pointer-events-auto absolute bottom-8 md:bottom-16 z-30 flex w-full flex-col-reverse items-center justify-between gap-6 px-6 md:flex-row md:items-end md:gap-0 md:px-12 lg:px-[100px]">


          <div className="flex max-w-[420px] flex-col items-center text-center md:items-start md:text-left z-40">
            <p className="mb-8 hidden md:block font-sans text-sm font-medium italic leading-relaxed text-loren-black">
              Designed for those who appreciate timeless craftsmanship and understated elegance, LOREN
              creates premium outerwear that blends modern sophistication with lasting quality. Every piece is
              thoughtfully crafted to become part of your journey, your identity, and the moments that define you.
            </p>
            <Button variant="primary" className="px-6 py-4 text-xs md:px-8 md:py-6 md:text-sm">
              VIEW COLLECTIONS
            </Button>
          </div>


          <div className="text-center md:text-right z-40">
            <h3 className="font-dmSerifDisplay text-[28px] md:text-[52px] font-normal leading-none tracking-[0.01em] text-loren-black drop-shadow-md">
              CONTEMPORARY OUTWEAR
            </h3>
            <p className="mt-2 font-dmSerifText text-[20px] md:text-[40px] font-normal italic leading-none tracking-[0.01em] text-loren-black/90 drop-shadow-md">
              The Art of Timeless Outerwear
            </p>
          </div>
        </div>


        <div className="pointer-events-none absolute bottom-[-5vw] right-[-5vw] w-[25vw] opacity-40">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="99" stroke="white" strokeWidth="1" />
            <circle cx="50" cy="150" r="49" stroke="white" strokeWidth="1" />
            <circle cx="150" cy="50" r="49" stroke="white" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
}
