"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import OyeImage from "../public/images/oyegoat3.png";
import OyeImage2 from "../public/images/Oye.jpg";
import OyeImage3 from "../public/images/oyegoat2.png";

const images = [OyeImage, OyeImage2, OyeImage3];
const LOAD_DURATION = 2200; // ms — total time the preloader stays up
const IMAGE_CYCLE_INTERVAL = 400; // ms — how fast the image swaps

const Preloader = ({ onComplete }: { onComplete?: () => void }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [percent, setPercent] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // Cycle through the images while loading
  useEffect(() => {
    if (isDone) return;
    const timeout = setTimeout(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, IMAGE_CYCLE_INTERVAL);
    return () => clearTimeout(timeout);
  }, [imageIndex, isDone]);

  // Animate percentage 0 -> 100 over LOAD_DURATION
  useEffect(() => {
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / LOAD_DURATION, 1);
      setPercent(Math.floor(progress * 100));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setIsDone(true);
        onComplete?.();
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  // Lock scroll while the preloader is up
  useEffect(() => {
    document.body.style.overflow = isDone ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-[24px] bg-background transition-opacity duration-700 ${
        isDone ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] rounded-[8px] overflow-hidden">
        <Image
          src={images[imageIndex]}
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>
      <p
        className="font-bold text-[64px] lg:text-heading4 text-light"
        style={{ letterSpacing: "-0.06em", lineHeight: "0.9em" }}
      >
        {percent}%
      </p>
    </div>
  );
};

export default Preloader;