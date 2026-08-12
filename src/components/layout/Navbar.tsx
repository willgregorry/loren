"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(navRef.current, { autoAlpha: 0, y: -20 });
      gsap.set(titleRef.current, { opacity: 0 });

      gsap.to(navRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        delay: 2,
        ease: "power3.out"
      });

      gsap.to(titleRef.current, {
        opacity: 1,
        duration: 1,
        delay: 2.2,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 z-50 grid w-full grid-cols-3 items-center px-6 py-6 opacity-0 md:px-12 md:py-8 lg:px-[100px]"
      >

        <ul className="hidden w-full items-center justify-between pr-[3vw] font-poppins text-[16px] font-medium leading-none text-loren-black md:flex">
          <li><a href="#about" className="nav-item hover:opacity-70">ABOUT</a></li>
          <li><a href="#collection" className="nav-item hover:opacity-70">COLLECTION</a></li>
        </ul>

        <div className="md:hidden"></div>


        <div className="flex justify-center">
          <span
            ref={titleRef}
            className="text-split font-dmSerifDisplay text-[40px] font-normal leading-none tracking-[0.01em] opacity-0 md:text-[62px]"
          >
            LOREN
          </span>
        </div>


        <ul className="hidden w-full items-center justify-between pl-[3vw] font-poppins text-[16px] font-medium leading-none text-loren-white md:flex">
          <li><a href="#journal" className="nav-item hover:opacity-70">JOURNAL</a></li>
          <li><a href="#contact" className="nav-item hover:opacity-70">CONTACT</a></li>
          <li>
            <button className="nav-item hover:opacity-70 text-loren-white">
              <Search className="h-6 w-6" />
            </button>
          </li>
        </ul>


        <div className="flex justify-end md:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-8 w-8 text-loren-white" />
          </button>
        </div>
      </nav>


      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-loren-white p-8">
          <button
            className="absolute right-6 top-6 text-loren-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="h-10 w-10 text-loren-white z-999" />
          </button>

          <ul className="flex flex-col items-center gap-10 font-poppins text-3xl font-medium text-loren-black">
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a></li>
            <li><a href="#collection" onClick={() => setIsMobileMenuOpen(false)}>COLLECTION</a></li>
            <li><a href="#journal" onClick={() => setIsMobileMenuOpen(false)}>JOURNAL</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a></li>
          </ul>
        </div>
      )}
    </>
  );
}
