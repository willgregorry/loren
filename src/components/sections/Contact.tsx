"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@/lib/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".contact-title", {
        y: 40,
        skewY: 3,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".contact-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1.2,
        delay: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".contact-card", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power4.out",
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
      id="contact"
      ref={containerRef}
      className="relative flex w-full flex-col items-center justify-center bg-loren-white px-6 pt-20 md:pt-32 pb-0 md:px-12 lg:px-[100px] overflow-visible"
    >
      <div className="flex w-full max-w-[1577px] flex-col items-center justify-center text-center">
        <div className="overflow-hidden py-1">
          <h2 className="contact-title font-dmSerifDisplay text-[36px] md:text-[60px] font-normal leading-none tracking-[10%] text-loren-black">
            Let’s Begin a Conversation
          </h2>
        </div>

        <p className="contact-subtitle font-semibold tracking-[5%] font-sans text-sm md:text-lg text-loren-black/60 italic max-w-[850px] mt-6 md:mt-8 leading-[200%]">
          Whether you have a question about our pieces, need assistance, or simply want to learn more about LOREN, we would be glad to hear from you.
        </p>

        <div className="contact-card relative z-30 mt-16 md:mt-20 translate-y-1/2 mx-auto max-w-[800px] w-full bg-white rounded-[8px] shadow-[0px_10px_35px_rgba(8,8,8,0.08)] border border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 py-6 px-10">
          <a
            href="mailto:hello@loren.com"
            className="flex items-center gap-3 group transition-colors duration-200"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 group-hover:bg-red-50 transition-colors duration-200">
              <Image
                src="/home/contact/mail.png"
                alt="Mail Icon"
                width={20}
                height={20}
                className="select-none"
              />
            </div>
            <span className="font-sans text-sm md:text-base font-medium text-gray-600 group-hover:text-loren-primary transition-colors duration-200">
              hello@loren.com
            </span>
          </a>

          <a
            href="https://instagram.com/loren.official"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group transition-colors duration-200"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 group-hover:bg-red-50 transition-colors duration-200">
              <Image
                src="/home/contact/instagram.png"
                alt="Instagram Icon"
                width={20}
                height={20}
                className="select-none"
              />
            </div>
            <span className="font-sans text-sm md:text-base font-medium text-gray-600 group-hover:text-loren-primary transition-colors duration-200">
              loren.official
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
