"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";
import NavSearch from "./NavSearch";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navTheme, setNavTheme] = useState<'default' | 'white' | 'black'>('default');
  const [activeSection, setActiveSection] = useState<string>('hero');

  const pathname = usePathname();

  const getLeftMenuColor = () => {
    if (pathname !== "/") return 'text-loren-black';
    if (navTheme === 'white') return 'text-loren-white';
    return 'text-loren-black';
  };

  const getRightMenuColor = () => {
    if (pathname !== "/") return 'text-loren-black';
    if (navTheme === 'black') return 'text-loren-black';
    return 'text-loren-white';
  };

  const getLogoColor = () => {
    if (pathname !== "/") return 'text-loren-black';
    if (navTheme === 'white') return 'text-loren-white';
    if (navTheme === 'black') return 'text-loren-black';
    return 'text-split';
  };

  const getLinkClass = (section: string) => {
    const isActive = activeSection === section;
    const base = "nav-item block transition-all duration-300 relative z-10 select-none";
    if (isActive) {
      return `${base} text-loren-black font-semibold scale-105`;
    }
    if (pathname !== "/") {
      return `${base} text-loren-black hover:opacity-75`;
    }
    return `${base} ${navTheme === 'white' ? 'text-loren-white hover:opacity-75' : 'text-loren-black hover:opacity-75'}`;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let scrollTriggers: ScrollTrigger[] = [];

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

      if (pathname === '/') {
        const sections = [
          { id: 'hero', theme: 'default' },
          { id: 'about', theme: 'white' },
          { id: 'collection', theme: 'black' },
          { id: 'journal', theme: 'white' },
          { id: 'contact', theme: 'black' },
        ];

        sections.forEach(({ id, theme }) => {
          const trigger = ScrollTrigger.create({
            trigger: `#${id}`,
            start: 'top 30%',
            end: 'bottom 30%',
            onEnter: () => {
              setNavTheme(theme as any);
            },
            onEnterBack: () => {
              setNavTheme(theme as any);
            },
          });
          scrollTriggers.push(trigger);
        });
        setActiveSection('hero');
      } else {
        if (pathname === '/about') {
          setNavTheme('black');
          setActiveSection('about');
        } else if (pathname === '/collection') {
          setNavTheme('black');
          setActiveSection('collection');
        } else if (pathname === '/journal') {
          setNavTheme('white');
          setActiveSection('journal');
        } else if (pathname === '/contact') {
          setNavTheme('black');
          setActiveSection('contact');
        } else {
          setNavTheme('default');
          setActiveSection('hero');
        }
      }
    });

    return () => {
      ctx.revert();
      scrollTriggers.forEach(t => t.kill());
    };
  }, [pathname]);

  useEffect(() => {
    if (!pillRef.current || !navRef.current) return;

    const validSections = ['about', 'collection', 'journal', 'contact'];
    if (!validSections.includes(activeSection)) {
      gsap.to(pillRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.4,
        ease: "power3.inOut"
      });
      return;
    }

    const activeLink = navRef.current.querySelector(`[data-link="${activeSection}"]`);
    if (!activeLink) return;

    const linkRect = activeLink.getBoundingClientRect();

    if (linkRect.width === 0) {
      gsap.to(pillRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.4,
        ease: "power3.inOut"
      });
      return;
    }

    const navRect = navRef.current.getBoundingClientRect();

    const padX = 20;
    const padY = 10;

    const finalLeft = linkRect.left - navRect.left - padX;
    const finalTop = linkRect.top - navRect.top - padY;
    const finalWidth = linkRect.width + (padX * 2);
    const finalHeight = linkRect.height + (padY * 2);

    const isInitial = gsap.getProperty(pillRef.current, "opacity") === 0;

    if (isInitial) {
      gsap.set(pillRef.current, {
        left: finalLeft,
        top: finalTop,
        width: finalWidth,
        height: finalHeight,
        scale: 0.5,
      });
      gsap.to(pillRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.5)",
      });
    } else {
      gsap.killTweensOf(pillRef.current);

      const currentLeft = Number(gsap.getProperty(pillRef.current, "left"));
      const isMovingRight = finalLeft > currentLeft;

      const tl = gsap.timeline();
      tl.to(pillRef.current, {
        width: finalWidth * 0.45,
        height: finalHeight * 0.75,
        left: isMovingRight
          ? finalLeft - (finalWidth * 0.2)
          : finalLeft + (finalWidth * 0.4),
        duration: 0.2,
        ease: "power2.in",
      })
        .to(pillRef.current, {
          left: finalLeft,
          top: finalTop,
          width: finalWidth,
          height: finalHeight,
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.5)",
        });
    }
  }, [activeSection]);

  useEffect(() => {
    const handleResize = () => {
      if (!pillRef.current || !navRef.current) return;
      const activeLink = navRef.current.querySelector(`[data-link="${activeSection}"]`);
      if (!activeLink) return;

      const linkRect = activeLink.getBoundingClientRect();

      if (linkRect.width === 0) {
        gsap.set(pillRef.current, { opacity: 0 });
        return;
      }

      const navRect = navRef.current.getBoundingClientRect();

      const padX = 20;
      const padY = 10;

      gsap.set(pillRef.current, {
        opacity: 1,
        left: linkRect.left - navRect.left - padX,
        top: linkRect.top - navRect.top - padY,
        width: linkRect.width + (padX * 2),
        height: linkRect.height + (padY * 2),
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeSection]);

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
          className="relative grid w-full max-w-[1577px] grid-cols-3 items-center rounded-full border border-white/20 bg-white/5 px-6 py-4 opacity-0 shadow-lg backdrop-blur-md md:px-10 md:py-4"
        >
          <div
            ref={pillRef}
            className="hidden lg:block absolute z-0 bg-loren-primary/20 rounded-full opacity-0 pointer-events-none"
          />

          <div className="lg:hidden"></div>

          <ul className={`hidden w-full items-center justify-between pr-[3vw] font-poppins text-[16px] font-medium leading-none transition-colors duration-300 lg:flex ${getLeftMenuColor()}`}>
            <li>
              <div className="hidden lg:block w-6 h-6"></div>
            </li>
            <li>
              <Link
                href="/about"
                data-link="about"
                className={getLinkClass("about")}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="/collection"
                data-link="collection"
                className={getLinkClass("collection")}
              >
                COLLECTION
              </Link>
            </li>
          </ul>

          <div className="flex justify-center z-10">
            <Link
              href="/"
              ref={titleRef}
              className={`${getLogoColor()} font-dmSerifDisplay text-[40px] font-normal leading-none tracking-[0.01em] opacity-0 transition-colors duration-300 lg:text-[62px]`}
            >
              LOREN
            </Link>
          </div>

          <ul className={`hidden w-full items-center justify-between pl-[3vw] font-poppins text-[16px] font-medium leading-none transition-colors duration-300 lg:flex ${getRightMenuColor()}`}>
            <li>
              <Link
                href="/journal"
                data-link="journal"
                className={getLinkClass("journal")}
              >
                JOURNAL
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                data-link="contact"
                className={getLinkClass("contact")}
              >
                CONTACT
              </Link>
            </li>
            <li>
              <NavSearch colorClass={getRightMenuColor()} />
            </li>
          </ul>

          <div className="lg:hidden flex justify-end z-10">
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className={`h-8 w-8 transition-colors duration-300 ${getRightMenuColor()}`} />
            </button>
          </div>
        </nav>
      </div>

      <div
        ref={menuRef}
        className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-loren-white p-8 invisible opacity-0 -translate-y-full"
      >
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
          <li className="mobile-link">
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
          </li>
          <li className="mobile-link">
            <Link
              href="/collection"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              COLLECTION
            </Link>
          </li>
          <li className="mobile-link">
            <Link
              href="/journal"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              JOURNAL
            </Link>
          </li>
          <li className="mobile-link">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
