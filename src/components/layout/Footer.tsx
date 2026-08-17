"use client";

import { useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useGSAP } from "@/lib/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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
    { scope: footerRef, dependencies: [pathname] }
  );

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-loren-primary text-loren-white pt-28 pb-10 px-6 md:px-12 lg:px-[100px] overflow-hidden"
    >
      <div className="grid w-full max-w-[1577px] mx-auto grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">

        <div className="footer-col col-span-2 lg:col-span-1 order-1 lg:order-1 flex flex-col items-start text-left">
          <h2 className="font-dmSerifDisplay text-[31px] font-normal leading-none tracking-[0em] uppercase">
            LOREN
          </h2>
          <p className="font-poppins font-light text-[12px] leading-[200%] text-white/80 mt-3 max-w-[280px]">
            The Art of Timeless Outerwear
          </p>
          
          <div className="flex items-center gap-[10px] mt-4">
            <a
              href="https://wa.me/#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] rounded-[10px] bg-white flex items-center justify-center hover:scale-105 transition-transform duration-200 shadow-sm"
            >
              <Image
                src="/home/footer/whatsapp.png"
                alt="WhatsApp Icon"
                width={24}
                height={24}
                className="w-[24px] h-[24px] select-none"
              />
            </a>

            <a
              href="https://instagram.com/loren.official"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] rounded-[10px] bg-white flex items-center justify-center hover:scale-105 transition-transform duration-200 shadow-sm"
            >
              <Image
                src="/home/footer/instagram.png"
                alt="Instagram Icon"
                width={24}
                height={24}
                className="w-[24px] h-[24px] select-none"
              />
            </a>

            <a
              href="https://twitter.com/#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] rounded-[10px] bg-white flex items-center justify-center hover:scale-105 transition-transform duration-200 shadow-sm"
            >
              <Image
                src="/home/footer/twitter.png"
                alt="Twitter Icon"
                width={24}
                height={24}
                className="w-[24px] h-[24px] select-none"
              />
            </a>
          </div>
        </div>


        <div className="footer-col col-span-1 lg:col-span-1 order-2 lg:order-2 flex flex-col items-start text-left">
          <h3 className="font-dmSerifDisplay text-[22px] font-normal leading-none tracking-[0.1em] uppercase">
            EXPLORE
          </h3>
          <div className="flex flex-col gap-1 mt-4">
            <a href="#hero" className="font-poppins font-light text-[12px] leading-[200%] text-white/80 hover:text-white transition-colors duration-200 uppercase">
              HOME
            </a>
            <a href="#about" className="font-poppins font-light text-[12px] leading-[200%] text-white/80 hover:text-white transition-colors duration-200 uppercase">
              ABOUT
            </a>
            <a href="#collection" className="font-poppins font-light text-[12px] leading-[200%] text-white/80 hover:text-white transition-colors duration-200 uppercase">
              COLLECTION
            </a>
            <a href="#journal" className="font-poppins font-light text-[12px] leading-[200%] text-white/80 hover:text-white transition-colors duration-200 uppercase">
              JOURNAL
            </a>
            <a href="#contact" className="font-poppins font-light text-[12px] leading-[200%] text-white/80 hover:text-white transition-colors duration-200 uppercase">
              CONTACT
            </a>
          </div>
        </div>


        <div className="footer-col col-span-1 lg:col-span-1 order-4 lg:order-3 flex flex-col items-start text-left">
          <h3 className="font-dmSerifDisplay text-[22px] font-normal leading-none tracking-[0.1em] uppercase">
            CONNECT
          </h3>
          <div className="flex flex-col gap-2 mt-4">
            <a
              href="https://instagram.com/loren.official"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-poppins font-light text-[12px] leading-[200%] text-white/80 hover:text-white transition-colors duration-200"
            >
              <Image
                src="/home/footer/instagram_white.png"
                alt="Instagram Icon"
                width={14}
                height={14}
                className="w-[14px] h-[14px] select-none"
              />
              <span>loren.official</span>
            </a>
            
            <a
              href="mailto:hello@loren.com"
              className="flex items-center gap-2 font-poppins font-light text-[12px] leading-[200%] text-white/80 hover:text-white transition-colors duration-200"
            >
              <Image
                src="/home/footer/mail_white.png"
                alt="Mail Icon"
                width={14}
                height={14}
                className="w-[14px] h-[14px] select-none"
              />
              <span>hello@loren.com</span>
            </a>
          </div>
        </div>


        <div className="footer-col col-span-1 row-span-2 lg:row-span-1 lg:col-span-1 order-3 lg:order-4 flex flex-col items-start text-left">
          <h3 className="font-dmSerifDisplay text-[22px] font-normal leading-none tracking-[0.1em] uppercase">
            INFORMATION
          </h3>
          <div className="flex flex-col gap-1 mt-4">
            <a href="#" className="font-poppins font-light text-[12px] leading-[200%] text-white/80 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="font-poppins font-light text-[12px] leading-[200%] text-white/80 hover:text-white transition-colors duration-200">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>


      <div className="footer-bottom w-full max-w-[1577px] mx-auto mt-12">
        <div className="w-full h-[1px] bg-white/20 mb-6" />
        <p className="font-poppins font-light text-[12px] text-white/60 text-center leading-relaxed">
          &copy; {new Date().getFullYear()} LOREN Designed with intention. Made to endure.
        </p>
      </div>
    </footer>
  );
}
