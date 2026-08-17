"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@/lib/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Identity() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      tl.from(".identity-image-1", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".identity-image-2",
          {
            y: -40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .from(
          ".identity-text-item",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.6"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="identity"
      ref={containerRef}
      className="relative flex w-full items-center justify-center overflow-hidden bg-loren-white px-6 py-20 md:px-12 lg:px-[100px] lg:py-32"
    >
      <div className="grid w-full max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        
        <div className="relative flex h-[400px] w-full items-center justify-center md:h-[500px] lg:h-[600px]">
          <div className="identity-image-2 absolute right-0 top-0 z-10 h-[65%] w-[60%] overflow-hidden shadow-2xl">
            <Image
              src="/about/identity/identity_2.png"
              alt="Loren Identity Architecture"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="identity-image-1 absolute bottom-0 left-0 z-20 h-[65%] w-[60%] overflow-hidden shadow-2xl">
            <Image
              src="/about/identity/identity_1.png"
              alt="Loren Identity Texture"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-start text-left">
          <h2 className="identity-text-item font-dmSerifDisplay text-[40px] font-normal leading-[1.1] text-loren-black uppercase tracking-[0.02em] md:text-[56px] lg:text-[72px]">
            THE LOREN <br /> IDENTITY
          </h2>
          
          <div className="identity-text-item mt-8 flex flex-col gap-6">
            <p className="font-playfairDisplay font-bold text-sm leading-[180%] text-loren-black/90 md:text-base">
              We believe that true luxury is never defined by excess. It is found in the quiet confidence of thoughtful design, exceptional craftsmanship, and pieces that remain meaningful beyond passing trends.
            </p>
            <p className="font-playfairDisplay font-bold text-sm leading-[180%] text-loren-black/90 md:text-base">
              Inspired by the harmony of modern aesthetics and timeless values, LOREN creates contemporary outerwear designed to accompany every journey. Every silhouette, every fabric, and every detail is carefully considered to become more than something you wear. It becomes part of your identity.
            </p>
          </div>

          <div className="identity-text-item mt-10">
            <Link href="/collection">
              <Button variant="primary" className="px-8 py-5 text-xs md:text-sm">
                EXPLORE COLLECTIONS
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
