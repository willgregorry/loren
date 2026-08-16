"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@/lib/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Journal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".journal-title", {
        y: "100%",
        skewY: 6,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".journal-subtitle", {
        y: "100%",
        skewY: 4,
        opacity: 0,
        duration: 1.2,
        delay: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".journal-desc", {
        y: "100%",
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".journal-btn", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.45,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".journal-image-container", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".journal-star", {
        scale: 0,
        rotation: (i) => (i === 0 ? 90 : -90),
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
        ease: "back.out(1.7)",
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
      id="journal"
      ref={containerRef}
      className="relative flex min-h-[580px] w-full items-center justify-center bg-loren-primary px-6 py-20 md:px-12 lg:px-[100px] overflow-hidden"
    >
      <div className="grid w-full max-w-[1577px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left z-10 gap-10 md:gap-12">
          <div className="overflow-hidden py-1">
            <h2 className="journal-title font-dmSerifDisplay text-[40px] md:text-[64px] font-normal leading-none tracking-[0.1em] text-loren-white uppercase drop-shadow-sm">
              JOURNAL
            </h2>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <div className="overflow-hidden py-1">
              <h3 className="journal-subtitle font-dmSerifText text-[20px] md:text-[32px] font-normal italic leading-tight tracking-[0.01em] text-loren-white">
                A Quiet Expression of Modern Elegance
              </h3>
            </div>
            <div className="overflow-hidden py-1">
              <p className="journal-desc max-w-[450px] font-sans text-xs md:text-sm font-medium leading-relaxed text-white/80">
                A glimpse into the world of LOREN, where refined silhouettes, considered details, and timeless aesthetics come together.
              </p>
            </div>
          </div>
          <div className="journal-btn">
            <Button variant="secondary" className="px-6 py-4 text-xs md:px-8 md:py-6 md:text-sm">
              EXPLORE JOURNAL
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end z-10 w-full">
          <div className="relative w-full max-w-[450px]">
            <div className="journal-image-container relative w-full aspect-square rounded-t-full overflow-hidden shadow-2xl">
              <Image
                src="/home/journal/journal.png"
                alt="Journal Cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>

            <div
              className="journal-star absolute top-[5%] -right-[6%] z-20 w-14 h-14 md:w-20 md:h-20 bg-white rotate-[15deg]"
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              }}
            />
            <div
              className="journal-star absolute -bottom-[3%] -left-[5%] z-20 w-10 h-10 md:w-14 md:h-14 bg-white -rotate-[15deg]"
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
