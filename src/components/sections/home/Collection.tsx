"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tag } from "lucide-react";
import productData from "@/datas/product.json";

export default function Collection() {
  const collectionItems = productData.slice(0, 5);

  return (
    <section id="collection" className="relative flex w-full flex-col border-t-[4px] border-loren-primary bg-white pt-16 pb-0 overflow-hidden">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-20">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">

          <div className="relative flex flex-col justify-end items-center lg:col-span-5 pt-8 lg:pt-0">
            <div className="absolute rotate-45 left-[-15%] top-[-10%] z-0 w-[90%] md:w-[70%] lg:w-[80%] lg:left-[-25%] lg:top-[-15%]">
              <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M250 10 L310 180 L500 190 L350 300 L390 480 L250 380 L110 480 L150 300 L0 190 L190 180 Z" className="fill-loren-primary" />
              </svg>
            </div>

            <div className="relative z-10 w-full max-w-[380px] lg:max-w-[480px]">
              <Image
                src="/home/collection/latest.png"
                alt="Élan Jacket"
                width={500}
                height={700}
                draggable={false}
                className="w-full h-auto object-contain select-none"
                priority
              />

              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-[-10%] md:right-auto z-20 flex flex-col justify-center rounded-sm bg-loren-white p-6 shadow-[0px_10px_30px_rgba(0,0,0,0.1)] border border-zinc-100 min-w-[320px]">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="mb-2 font-sans text-sm md:text-base text-zinc-600">Élan Jacket</span>
                    <span className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-loren-black">Rp 2.490.000</span>
                  </div>
                  <Tag className="mb-1 h-8 w-8 md:h-10 md:w-10 text-loren-primary fill-loren-primary rotate-90" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-center lg:col-span-7 lg:pl-10 pb-12 mt-16 lg:mt-0">
            <div className="absolute left-[-10%] top-[20%] z-0 w-[80%] opacity-90 md:w-[50%] lg:left-[-5%] lg:w-[50%]">
              <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="250" cy="250" r="240" className="stroke-loren-primary" strokeWidth="3" />
              </svg>
            </div>

            <div className="relative z-10 mb-8 text-left mt-10 lg:mt-0">
              <h2 className="mb-2 font-dmSerifDisplay text-3xl tracking-widest text-loren-black md:text-4xl lg:text-[46px] uppercase leading-tight">
                NEW COLLECTION
              </h2>
              <p className="font-dmSerifText text-base italic text-zinc-700 md:text-xl">
                Timeless Pieces for Every Journey
              </p>
            </div>

            <div className="relative w-full">
              <Carousel
                opts={{
                  align: "start",
                  loop: false,
                }}
                className="w-full flex flex-col"
              >
                <CarouselContent className="-ml-4 md:-ml-8">
                  {collectionItems.map((item) => (
                    <CarouselItem key={item.id} className="pl-4 md:pl-8 basis-full sm:basis-1/2">
                      <Link href={`/collection`} className="group flex flex-col h-full">
                        <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100 rounded-sm mb-4">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="font-sans text-base md:text-lg text-zinc-700 mb-2">{item.title}</span>
                          <span className="font-sans text-lg md:text-xl font-bold text-loren-black">
                            Rp {item.price.toLocaleString("id-ID")}
                          </span>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <div className="mt-8 flex justify-center w-full gap-4">
                  <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-full border border-loren-primary bg-loren-white text-loren-primary hover:bg-loren-primary hover:text-loren-white transition-colors duration-300" />
                  <CarouselNext className="static translate-y-0 h-12 w-12 rounded-full border border-loren-primary bg-loren-primary text-loren-white hover:opacity-90 transition-opacity duration-300" />
                </div>
              </Carousel>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
