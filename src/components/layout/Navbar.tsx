"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, Search, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navTheme, setNavTheme] = useState<'default' | 'white' | 'black'>('default');

  const getLeftMenuColor = () => {
    if (navTheme === 'white') return 'text-loren-white';
    return 'text-loren-black';
  };

  const getRightMenuColor = () => {
    if (navTheme === 'black') return 'text-loren-black';
    return 'text-loren-white';
  };

  const getLogoColor = () => {
    if (navTheme === 'white') return 'text-loren-white';
    if (navTheme === 'black') return 'text-loren-black';
    return 'text-split';
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = [
        { id: 'hero', theme: 'default' },
        { id: 'about', theme: 'white' },
        { id: 'collection', theme: 'black' },
        { id: 'journal', theme: 'white' },
        { id: 'contact', theme: 'black' },
      ];

      sections.forEach(({ id, theme }) => {
        ScrollTrigger.create({
          trigger: `#${id}`,
          start: 'top 15%',
          end: 'bottom 15%',
          onEnter: () => setNavTheme(theme as any),
          onEnterBack: () => setNavTheme(theme as any),
        });
      });

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

  // GSAP animation for opening/closing the mobile menu
  useEffect(() => {
    if (!menuRef.current || !closeBtnRef.current) return;

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";

      gsap.killTweensOf([menuRef.current, ".mobile-link", closeBtnRef.current]);

      gsap.timeline()
        .to(menuRef.current, {
          y: "0%",
          autoAlpha: 1,
          duration: 0.6,
          ease: "power4.out",
        })
        .fromTo(
          ".mobile-link",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .fromTo(
          closeBtnRef.current,
          { opacity: 0, rotate: -45 },
          { opacity: 1, rotate: 0, duration: 0.4, ease: "power2.out" },
          "-=0.4"
        );
    } else {
      document.body.style.overflow = "";

      gsap.killTweensOf([menuRef.current, ".mobile-link", closeBtnRef.current]);

      gsap.timeline()
        .to(".mobile-link", {
          y: -30,
          opacity: 0,
          stagger: 0.05,
          duration: 0.4,
          ease: "power3.in",
        })
        .to(
          menuRef.current,
          {
            y: "-100%",
            autoAlpha: 0,
            duration: 0.6,
            ease: "power4.inOut",
          },
          "-=0.2"
        );
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <div className="fixed left-0 right-0 top-5 z-50 flex justify-center px-6 md:top-3 md:px-12 lg:px-[100px]">
        <nav
          ref={navRef}
          className="grid w-full max-w-[1577px] grid-cols-3 items-center rounded-full border border-white/20 bg-white/5 px-6 py-4 opacity-0 shadow-lg backdrop-blur-md md:px-10 md:py-4"
        >
          {/* Mobile/Tablet Left: Shop Icon */}
          <div className="lg:hidden flex justify-start">
            <button className={`nav-item transition-all duration-300 hover:opacity-70 ${getLeftMenuColor()}`}>
              <ShoppingBag className="h-7 w-7" strokeWidth={1.5} />
            </button>
          </div>

          {/* Desktop Left Links */}
          <ul className={`hidden w-full items-center justify-between pr-[3vw] font-poppins text-[16px] font-medium leading-none transition-colors duration-300 lg:flex ${getLeftMenuColor()}`}>
            <li>
              <button className={`nav-item transition-all duration-300 hover:opacity-70 ${getLeftMenuColor()}`}>
                <ShoppingBag className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </li>
            <li><a href="#about" className="nav-item transition-opacity hover:opacity-70">ABOUT</a></li>
            <li><a href="#collection" className="nav-item transition-opacity hover:opacity-70">COLLECTION</a></li>
          </ul>

          {/* Center Logo */}
          <div className="flex justify-center">
            <span
              ref={titleRef}
              className={`${getLogoColor()} font-dmSerifDisplay text-[40px] font-normal leading-none tracking-[0.01em] opacity-0 transition-colors duration-300 lg:text-[62px]`}
            >
              LOREN
            </span>
          </div>

          {/* Desktop Right Links */}
          <ul className={`hidden w-full items-center justify-between pl-[3vw] font-poppins text-[16px] font-medium leading-none transition-colors duration-300 lg:flex ${getRightMenuColor()}`}>
            <li><a href="#journal" className="nav-item transition-opacity hover:opacity-70">JOURNAL</a></li>
            <li><a href="#contact" className="nav-item transition-opacity hover:opacity-70">CONTACT</a></li>
            <li>
              <button className={`nav-item transition-all duration-300 hover:opacity-70 ${getRightMenuColor()}`}>
                <Search className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </li>
          </ul>

          {/* Mobile/Tablet Right: Hamburger Menu */}
          <div className="lg:hidden flex justify-end">
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className={`h-8 w-8 transition-colors duration-300 ${getRightMenuColor()}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Elegant GSAP Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-loren-white p-8 invisible opacity-0 -translate-y-full"
      >
        {/* Top Header to align Close button precisely with Hamburger */}
        <div className="absolute left-0 right-0 top-5 flex justify-center px-6 md:top-3 md:px-12 lg:px-[100px]">
          <div className="grid w-full max-w-[1577px] grid-cols-3 items-center px-6 py-4 md:px-10 md:py-4">
            <div className="col-span-2"></div>
            <div className="flex justify-end">
              <button
                ref={closeBtnRef}
                className="text-loren-black hover:opacity-75 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>

        <ul className="flex flex-col items-center gap-10 font-dmSerifDisplay text-[36px] sm:text-[48px] uppercase tracking-[0.05em] text-loren-black">
          <li className="mobile-link"><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a></li>
          <li className="mobile-link"><a href="#collection" onClick={() => setIsMobileMenuOpen(false)}>COLLECTION</a></li>
          <li className="mobile-link"><a href="#journal" onClick={() => setIsMobileMenuOpen(false)}>JOURNAL</a></li>
          <li className="mobile-link"><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a></li>
        </ul>
      </div>
    </>
  );
}
