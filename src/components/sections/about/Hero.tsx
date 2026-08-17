"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
    const container = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(
                ".hero-subtitle",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
            )
                .fromTo(
                    ".hero-title-line",
                    { yPercent: 100 },
                    { yPercent: 0, duration: 1, stagger: 0.15, ease: "power4.out" },
                    "-=0.6"
                )
                .fromTo(
                    ".hero-desc",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.6"
                )
                .fromTo(
                    ".hero-image-container",
                    { scale: 0.9, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 1.2, ease: "expo.out" },
                    "-=1"
                )
                .fromTo(
                    ".hero-image",
                    { scale: 1.1 },
                    { scale: 1, duration: 1.2, ease: "expo.out" },
                    "<"
                );
        },
        { scope: container }
    );

    return (
        <section
            ref={container}
            className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-loren-white px-6 pb-12 pt-32 md:px-12 lg:px-24"
        >
            <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
                <div className="flex flex-col space-y-4 lg:space-y-6">
                    <div className="overflow-hidden">
                        <span className="hero-subtitle inline-block font-playfairDisplay text-xs font-bold uppercase tracking-[0.2em] text-loren-primary md:text-sm">
                            Our Story
                        </span>
                    </div>

                    <h1 className="flex flex-col font-dmSerifDisplay text-5xl leading-[1.1] md:text-6xl lg:text-7xl xl:text-[5.5rem]">
                        <div className="overflow-hidden">
                            <span className="hero-title-line inline-block uppercase text-loren-black">
                                The Art
                            </span>
                        </div>
                        <div className="overflow-hidden">
                            <span className="hero-title-line inline-block uppercase text-loren-black">
                                Of
                            </span>
                        </div>
                        <div className="overflow-hidden">
                            <span className="hero-title-line inline-block uppercase italic text-loren-primary">
                                Timeless
                            </span>
                        </div>
                        <div className="overflow-hidden">
                            <span className="hero-title-line inline-block uppercase text-loren-black">
                                Legacy
                            </span>
                        </div>
                    </h1>

                    <div className="overflow-hidden">
                        <p className="hero-desc max-w-md font-playfairDisplay font-bold text-sm leading-relaxed text-loren-black md:text-base">
                            LOREN is a contemporary premium outerwear brand for modern individuals.
                            We combine timeless design with refined craftsmanship.
                        </p>
                    </div>
                </div>

                <div className="flex w-full items-center justify-center md:justify-end">
                    <div className="hero-image-container relative aspect-square w-full max-w-[500px] bg-loren-primary p-4 md:p-6 lg:p-8">
                        <div className="relative h-full w-full overflow-hidden bg-zinc-200">
                            <Image
                                src="/about/hero.png"
                                alt="Loren Model"
                                fill
                                priority
                                draggable={false}
                                className="hero-image select-none object-cover grayscale"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
