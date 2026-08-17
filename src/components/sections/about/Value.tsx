"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@/lib/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Value() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".value-title", {
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

      gsap.from(".value-line", {
        scaleX: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".value-icon-wrapper", {
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

      gsap.from(".value-item-title", {
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

      gsap.from(".value-item-subtitle", {
        y: "100%",
        skewY: 4,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".value-item-text", {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.45,
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
      id="value"
      ref={containerRef}
      className="relative flex min-h-[580px] w-full flex-col items-center justify-center bg-loren-primary px-6 py-20 md:px-12 lg:px-[100px]"
    >
      <div className="flex w-full flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left max-w-[1200px] mx-auto">
        <div className="overflow-hidden py-1">
          <h2 className="value-title font-dmSerifDisplay text-[32px] md:text-[56px] font-normal leading-none tracking-[0.05em] text-loren-white uppercase drop-shadow-sm">
            BRAND VALUE
          </h2>
        </div>
        <div className="value-line mt-6 h-[1px] w-full max-w-[375px] origin-center md:origin-left bg-white/40" />
      </div>

      <div className="mt-16 grid w-full grid-cols-1 justify-items-center gap-12 md:grid-cols-2 md:justify-items-start lg:grid-cols-3 md:gap-8 lg:gap-16 max-w-[1200px] mx-auto">
        <div className="value-item flex w-full flex-col items-center text-center md:items-start md:text-left gap-6 md:gap-8">
          <div className="value-icon-wrapper flex h-[90px] w-[90px] md:h-[110px] md:w-[110px] shrink-0 items-center justify-center rounded-full bg-loren-white text-loren-black shadow-xl">
            <Image
              draggable={false}
              src="/home/about/timeless_design.png"
              alt="Timeless Design"
              width={75}
              height={75}
              className="-translate-x-1 select-none w-[60%] h-[60%] object-contain"
            />
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="overflow-hidden py-1">
              <h3 className="value-item-title font-dmSerifDisplay text-[24px] md:text-[28px] lg:text-[32px] font-normal leading-none tracking-[0.01em] text-loren-white">
                Timeless Design
              </h3>
            </div>
            <div className="overflow-hidden py-1">
              <p className="value-item-subtitle font-dmSerifText text-[16px] md:text-[18px] lg:text-[20px] italic leading-none tracking-[0.01em] text-loren-white">
                Design Beyond Trends
              </p>
            </div>
            <p className="value-item-text mt-3 font-playfairDisplay font-normal text-xs md:text-sm text-loren-white/90 leading-[180%] max-w-[300px]">
              Every silhouette is created to remain relevant across seasons, embracing simplicity that never fades with time.
            </p>
          </div>
        </div>

        <div className="value-item flex w-full flex-col items-center text-center md:items-start md:text-left gap-6 md:gap-8">
          <div className="value-icon-wrapper flex h-[90px] w-[90px] md:h-[110px] md:w-[110px] shrink-0 items-center justify-center rounded-full bg-loren-white text-loren-black shadow-xl">
            <Image
              draggable={false}
              src="/home/about/premium_materials.png"
              alt="Premium Materials"
              width={75}
              height={75}
              className="select-none w-[60%] h-[60%] object-contain"
            />
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="overflow-hidden py-1">
              <h3 className="value-item-title font-dmSerifDisplay text-[24px] md:text-[28px] lg:text-[32px] font-normal leading-none tracking-[0.01em] text-loren-white">
                Premium Materials
              </h3>
            </div>
            <div className="overflow-hidden py-1">
              <p className="value-item-subtitle font-dmSerifText text-[16px] md:text-[18px] lg:text-[20px] italic leading-none tracking-[0.01em] text-loren-white">
                Crafted to Endure
              </p>
            </div>
            <p className="value-item-text mt-3 font-playfairDisplay font-normal text-xs md:text-sm text-loren-white/90 leading-[180%] max-w-[300px]">
              Carefully selected fabrics provide lasting comfort, refined texture, and quality that grows more beautiful with every wear.
            </p>
          </div>
        </div>

        <div className="value-item flex w-full flex-col items-center text-center md:items-start md:text-left gap-6 md:gap-8 md:col-span-2 lg:col-span-1">
          <div className="value-icon-wrapper flex h-[90px] w-[90px] md:h-[110px] md:w-[110px] shrink-0 items-center justify-center rounded-full bg-loren-white text-loren-black shadow-xl">
            <Image
              draggable={false}
              src="/home/about/quiet_luxury.png"
              alt="Quiet Luxury"
              width={75}
              height={75}
              className="select-none w-[60%] h-[60%] object-contain"
            />
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="overflow-hidden py-1">
              <h3 className="value-item-title font-dmSerifDisplay text-[24px] md:text-[28px] lg:text-[32px] font-normal leading-none tracking-[0.01em] text-loren-white">
                Quiet Luxury
              </h3>
            </div>
            <div className="overflow-hidden py-1">
              <p className="value-item-subtitle font-dmSerifText text-[16px] md:text-[18px] lg:text-[20px] italic leading-none tracking-[0.01em] text-loren-white">
                Luxury in Every Detail
              </p>
            </div>
            <p className="value-item-text font-playfairDisplay font-normal mt-3 text-xs md:text-sm text-loren-white/90 leading-[180%] max-w-[300px]">
              True elegance is expressed through subtle refinement, thoughtful craftsmanship, and confidence that speaks without excess.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
