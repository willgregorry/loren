"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X, Search, ShoppingBag } from "lucide-react";

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
        delay: 0.8,
        ease: "power3.out"
      });

      gsap.to(titleRef.current, {
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="fixed left-0 right-0 top-5 z-50 flex justify-center px-6 md:top-3 md:px-12 lg:px-[100px]">
        <nav
          ref={navRef}
          className="grid w-full max-w-[1577px] grid-cols-3 items-center rounded-full border border-white/20 bg-white/5 px-6 py-4 opacity-0 shadow-lg backdrop-blur-md md:px-10 md:py-4"
        >
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="h-8 w-8 text-loren-black" />
            </button>
          </div>

          <ul className="hidden w-full items-center justify-between pr-[3vw] font-poppins text-[16px] font-medium leading-none text-loren-black md:flex">
            <li>
              <button className="nav-item text-loren-black transition-opacity hover:opacity-70">
                <ShoppingBag className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </li>
            <li><a href="#about" className="nav-item transition-opacity hover:opacity-70">ABOUT</a></li>
            <li><a href="#collection" className="nav-item transition-opacity hover:opacity-70">COLLECTION</a></li>
          </ul>

          <div className="flex justify-center">
            <span
              ref={titleRef}
              className="text-split font-dmSerifDisplay text-[40px] font-normal leading-none tracking-[0.01em] opacity-0 md:text-[62px]"
            >
              LOREN
            </span>
          </div>

          <ul className="hidden w-full items-center justify-between pl-[3vw] font-poppins text-[16px] font-medium leading-none text-loren-white md:flex">
            <li><a href="#journal" className="nav-item transition-opacity hover:opacity-70">JOURNAL</a></li>
            <li><a href="#contact" className="nav-item transition-opacity hover:opacity-70">CONTACT</a></li>
            <li>
              <button className="nav-item text-loren-white transition-opacity hover:opacity-70">
                <Search className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </li>
          </ul>

          <div className="flex justify-end gap-4 md:hidden">
            <button className="nav-item text-loren-white transition-opacity hover:opacity-70">
              <ShoppingBag className="h-7 w-7" strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-loren-white p-8">
          <button
            className="absolute right-6 top-6 text-loren-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="z-999 h-10 w-10 text-loren-black" />
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
