"use client";
import React, { useEffect, useState } from "react";
import GetInTouch from "../components/getInTouch";
import Image from "next/image";
import OyeGoat from "../../public/images/oyegoat3.png";
import Experience from "../components/experience";

const AboutPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOverProjects, setIsOverProjects] = useState(false);
   useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        setIsOverProjects(!!target.closest(".project-hover-zone"));
      };
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseover', handleMouseOver)
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseover', handleMouseOver)
      }
    }, [])
  return (
    <div className="min-h-[100vh] max-w-[100vw] bg-background flex flex-col items-start px-[28px]">
      <div
        className="hidden lg:block"
        style={{
          position: "fixed",
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          pointerEvents: "none",
          zIndex: 50,
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
          transition: "width 0.3s ease, height 0.3s ease",
          width: isOverProjects ? "120px" : "40px",
          height: isOverProjects ? "120px" : "40px",
        }}
      >
        <div className="bg-light rounded-full w-full h-full" />
      </div>
      <div className="lg:py-[80px] py-[48px] flex flex-col items-start gap-[66px]">
        <h1
          className="font-bold text-light text-[80px] lg:mb-[50px] lg:mt-[85px] lg:text-[370px]"
          style={{
            letterSpacing: "-0.06em",
            lineHeight: "0.5em",
          }}
        >
          about me
        </h1>
        <div className="flex lg:flex-row flex-col-reverse  w-full justify-between gap-[24px] items-start">
          <div className="flex flex-col flex-1 items-start gap-[24px] lg:gap-[32px]">
            <p className="font-regular text-p20 lg:text-p32 opacity-60">
             I’m a frontend developer with a strong software engineering foundation
        and a deep appreciation for how things feel as much as how they work.
            </p>
            <p className="font-regular text-p20 lg:text-p32 opacity-60">
              I have been developing websites, apps professionally for two
              years.
            </p>
            <p className="font-regular text-p20 lg:text-p32 opacity-60">
              When I'm not behind a computer screen, I'm usually playing video games or playing football.
            </p>
            <button className="py-[12px] px-[24px] flex items-center justify-center gap-[10px] rounded-[4px] bg-light text-p16 font-medium text-dark-90">
              download resume
            </button>
          </div>
          <div className="flex-1">
            <Image
              src={OyeGoat}
              alt=""
              className="lg:h-[560px] h-[353px] rounded-[8px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex py-[80px] w-full flex-col items-start gap-[48px]">
        <div className="flex flex-col w-full items-start gap-[76px]">
          <h1 className="font-bold text-[48px] lg:text-heading2 text-light">my experience</h1>
          <div className="flex flex-col border-b-[1px] border-light-20 pb-[16px] lg:pb-[20px] w-full items-start gap-[20px]">
       <Experience company="qorporate" role="frontend developer" description=" Built and maintained features for a football turf session management
        platform, collaborating closely with a cross-functional team. Developed
        user interfaces that streamlined booking, match scheduling, and player
        management, ensuring a smooth and engaging experience for users." duration="2025-present"/>
        <Experience company="freelance" role="frontend developer" description="Working with startups and small businesses to create strategic brand identities that help them stand out and connect with their customers." duration="2024-present"/>
          </div>
        </div>
      </div>

      <GetInTouch />
    </div>
  );
};

export default AboutPage;
