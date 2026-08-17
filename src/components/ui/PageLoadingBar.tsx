"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function PageLoadingBar({ imagesToLoad }: { imagesToLoad: string[] }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (imagesToLoad.length === 0) {
      setProgress(100);
      setIsLoading(false);
      return;
    }

    let loadedCount = 0;
    const totalImages = imagesToLoad.length;

    const handleImageLoad = () => {
      loadedCount++;
      const currentProgress = (loadedCount / totalImages) * 100;
      setProgress(currentProgress);

      if (loadedCount === totalImages) {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad;
    });
  }, [imagesToLoad]);

  useEffect(() => {
    gsap.to(".loading-bar-progress", {
      width: `${progress}%`,
      duration: 0.3,
      ease: "power2.out",
    });

    if (!isLoading) {
      gsap.to(".loading-bar-container", {
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        onComplete: () => {
          gsap.set(".loading-bar-container", { display: "none" });
        },
      });
    }
  }, [progress, isLoading]);

  return (
    <div className="loading-bar-container fixed left-0 top-0 z-[100] h-1.5 w-full bg-zinc-200/50">
      <div className="loading-bar-progress h-full w-0 bg-loren-primary" />
    </div>
  );
}
