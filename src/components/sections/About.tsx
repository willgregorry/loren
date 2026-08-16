"use client";

import { useRef } from "react";
import { useGSAP } from "@/lib/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-title", {
        y: 40,
        skewY: 5,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-line", {
        scaleX: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-icon-wrapper", {
        scale: 0,
        rotation: -90,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-item-title", {
        y: "100%",
        skewY: 4,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-item-text", {
        y: "100%",
        skewY: 3,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.35,
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
          <div className="about-icon-wrapper flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full bg-loren-white text-loren-black shadow-xl">
            <Image
              draggable={false}
              src="/home/about/timeless_design.png"
              alt="Premium Materials"
              width={75}
              height={75}
              className="-translate-x-1 select-none"
            />
          </div>
          <div className="flex flex-col items-center gap-1 overflow-hidden py-1">
            <h3 className="about-item-title font-dmSerifDisplay text-[28px] md:text-[42px] font-normal leading-none tracking-[0.01em] text-loren-white">
              Timeless Design
            </h3>
            <p className="about-item-text font-dmSerifText text-[18px] md:text-[28px] italic leading-none tracking-[0.01em] text-loren-white">
              Design Beyond Trends
            </p>
          </div>
        </div>

        <div className="about-item flex md:h-[257px] md:w-[380px] flex-col items-center text-center gap-8 md:gap-[53px]">
          <div className="about-icon-wrapper flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full bg-loren-white text-loren-black shadow-xl">
            <Image
              draggable={false}
              src="/home/about/premium_materials.png"
              alt="Premium Materials"
              width={75}
              height={75}
              className="select-none"
            />
          </div>
          <div className="flex flex-col items-center gap-1 overflow-hidden py-1">
            <h3 className="about-item-title font-dmSerifDisplay text-[28px] md:text-[42px] font-normal leading-none tracking-[0.01em] text-loren-white">
              Premium Materials
            </h3>
            <p className="about-item-text font-dmSerifText text-[18px] md:text-[28px] italic leading-none tracking-[0.01em] text-loren-white">
              Crafted to Endure
            </p>
          </div>
        </div>

        <div className="about-item flex md:h-[257px] md:w-[350px] flex-col items-center text-center gap-8 md:gap-[53px]">
          <div className="about-icon-wrapper flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full bg-loren-white text-loren-black shadow-xl">
            <Image
              draggable={false}
              src="/home/about/quiet_luxury.png"
              alt="Premium Materials"
              width={75}
              height={75}
              className="select-none"
            />
          </div>
          <div className="flex flex-col items-center gap-1 overflow-hidden py-1">
            <h3 className="about-item-title font-dmSerifDisplay text-[28px] md:text-[42px] font-normal leading-none tracking-[0.01em] text-loren-white">
              Quiet Luxury
            </h3>
            <p className="about-item-text font-dmSerifText text-[18px] md:text-[28px] italic leading-none tracking-[0.01em] text-loren-white">
              Luxury in Every Detail
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
