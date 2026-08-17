"use client";

import { useState, useRef, FormEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface NavSearchProps {
  colorClass: string;
}

export default function NavSearch({ colorClass }: NavSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!overlayRef.current || !dialogRef.current) return;

    if (isOpen) {
      gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.3, ease: "power2.out" });
      gsap.fromTo(
        dialogRef.current,
        { y: -20, scale: 0.95, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.4, ease: "power3.out", onComplete: () => inputRef.current?.focus() }
      );
    } else {
      gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.2, ease: "power2.in" });
      gsap.to(dialogRef.current, { y: -10, scale: 0.98, opacity: 0, duration: 0.2, ease: "power2.in" });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/collection?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
      setQuery("");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`nav-item transition-all duration-300 hover:opacity-70 ${colorClass}`}
      >
        <Search className="h-6 w-6" strokeWidth={1.5} />
      </button>

      {mounted && createPortal(
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[100] invisible opacity-0 flex items-start justify-center pt-[15vh] bg-black/20 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === overlayRef.current) setIsOpen(false);
          }}
        >
          <div
            ref={dialogRef}
            className="w-full max-w-2xl overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl mx-4"
          >
            <form onSubmit={handleSubmit} className="flex items-center px-4 py-4">
              <Search className="mr-3 h-5 w-5 text-zinc-500" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 bg-transparent font-sans text-lg text-loren-black outline-none placeholder:text-zinc-400"
              />
              <div className="ml-4 flex items-center gap-1 rounded border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs text-zinc-500">
                <span className="text-[10px]">ESC</span>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
