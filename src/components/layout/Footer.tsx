"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@/lib/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".footer-col", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });

      gsap.from(".footer-bottom", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-loren-primary text-loren-white pt-28 pb-10 px-6 md:px-12 lg:px-[100px] overflow-hidden"
    >
      <div className="grid w-full max-w-[1577px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        {/* Column 1: Brand & Socials */}
        <div className="footer-col flex flex-col items-start text-left">
          <h2 className="font-dmSerifDisplay text-[28px] md:text-[36px] font-normal leading-none tracking-[0.1em] uppercase">
            LOREN
          </h2>
          <p className="font-sans text-xs md:text-sm text-white/80 mt-4 leading-relaxed">
            The Art of Timeless Outerwear
          </p>
          
          <div className="flex items-center gap-3 mt-6">
            <a
              href="https://wa.me/#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-[8px] bg-white flex items-center justify-center hover:scale-105 transition-transform duration-200 shadow-md"
            >
              <Image
                src="/home/footer/whatsapp.png"
                alt="WhatsApp Icon"
                width={20}
                height={20}
                className="select-none"
              />
            </a>

            <a
              href="https://instagram.com/loren.official"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-[8px] bg-white flex items-center justify-center hover:scale-105 transition-transform duration-200 shadow-md"
            >
              <Image
                src="/home/footer/instagram.png"
                alt="Instagram Icon"
                width={20}
                height={20}
                className="select-none"
              />
            </a>

            <a
              href="https://twitter.com/#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-[8px] bg-white flex items-center justify-center hover:scale-105 transition-transform duration-200 shadow-md"
            >
              <Image
                src="/home/footer/twitter.png"
                alt="Twitter Icon"
                width={20}
                height={20}
                className="select-none"
              />
            </a>
          </div>
        </div>

        {/* Column 2: Explore */}
        <div className="footer-col flex flex-col items-start text-left">
          <h3 className="font-dmSerifDisplay text-sm md:text-base font-bold tracking-[0.1em] uppercase">
            EXPLORE
          </h3>
          <div className="flex flex-col gap-3 mt-6">
            <a href="#hero" className="font-sans text-xs md:text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 uppercase">
              HOME
            </a>
            <a href="#about" className="font-sans text-xs md:text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 uppercase">
              ABOUT
            </a>
            <a href="#collection" className="font-sans text-xs md:text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 uppercase">
              COLLECTION
            </a>
            <a href="#journal" className="font-sans text-xs md:text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 uppercase">
              JOURNAL
            </a>
            <a href="#contact" className="font-sans text-xs md:text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 uppercase">
              CONTACT
            </a>
          </div>
        </div>

        {/* Column 3: Connect */}
        <div className="footer-col flex flex-col items-start text-left">
          <h3 className="font-dmSerifDisplay text-sm md:text-base font-bold tracking-[0.1em] uppercase">
            CONNECT
          </h3>
          <div className="flex flex-col gap-4 mt-6">
            <a
              href="https://instagram.com/loren.official"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-sans text-xs md:text-sm text-white/80 hover:text-white transition-colors duration-200"
            >
              <Image
                src="/home/footer/instagram_white.png"
                alt="Instagram Icon"
                width={18}
                height={18}
                className="select-none"
              />
              <span>loren.official</span>
            </a>
            
            <a
              href="mailto:hello@loren.com"
              className="flex items-center gap-3 font-sans text-xs md:text-sm text-white/80 hover:text-white transition-colors duration-200"
            >
              <Image
                src="/home/footer/mail_white.png"
                alt="Mail Icon"
                width={18}
                height={18}
                className="select-none"
              />
              <span>hello@loren.com</span>
            </a>
          </div>
        </div>

        {/* Column 4: Information */}
        <div className="footer-col flex flex-col items-start text-left">
          <h3 className="font-dmSerifDisplay text-sm md:text-base font-bold tracking-[0.1em] uppercase">
            INFORMATION
          </h3>
          <div className="flex flex-col gap-3 mt-6">
            <a href="#" className="font-sans text-xs md:text-sm font-medium text-white/80 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-xs md:text-sm font-medium text-white/80 hover:text-white transition-colors duration-200">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom w-full max-w-[1577px] mx-auto mt-16">
        <div className="w-full h-[1px] bg-white/20 mb-8" />
        <p className="font-sans text-xs md:text-sm text-white/60 text-center leading-relaxed">
          &copy; {new Date().getFullYear()} LOREN Designed with intention. Made to endure.
        </p>
      </div>
    </footer>
  );
}
