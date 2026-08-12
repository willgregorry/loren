"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);

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

      gsap.utils.toArray(".nav-item").forEach((item: any) => {
        gsap.fromTo(
          item,
          { color: "#000000" },
          {
            color: "#FF2122",
            paused: true,
            duration: 0.3
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 z-50 flex w-full items-center justify-between p-10 opacity-0"
    >
      <span
        ref={titleRef}
        className="font-playfairDisplay text-3xl font-black opacity-0"
      >
        LOREN
      </span>
      <ul className="flex gap-8 text-sm font-semibold tracking-wider">
        <li><a href="#about" className="hover:opacity-70">ABOUT</a></li>
        <li><a href="#collection" className="hover:opacity-70">COLLECTION</a></li>
        <li><a href="#journal" className="hover:opacity-70">JOURNAL</a></li>
        <li><a href="#contact" className="hover:opacity-70">CONTACT</a></li>
      </ul>
    </nav>
  );
}
