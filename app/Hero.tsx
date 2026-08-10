"use client";
import React, { use, useEffect, useRef, useState } from "react";
import ProjectCard from "./components/projectCard";
import Launchfolio from "../public/images/Launchfolioo.png";
import Oaken from "../public/images/oaken.png";
import Kickabout from "../public/images/kick.png";
import OwnTheFit from "../public/images/otf.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import OyeImage from "../public/images/oyegoat3.png";
import OyeImage2 from '../public/images/Oye.jpg'
import OyeImage3 from '../public/images/oyegoat2.png'
import GetInTouch from "./components/getInTouch";
gsap.registerPlugin(SplitText, ScrollTrigger);
const Hero = () => {
  const projectSectionRef = useRef<HTMLDivElement>(null);
  const heroAboutRef = useRef<HTMLDivElement>(null);
  const aboutContainerRef = useRef<HTMLDivElement>(null);
 const heroCopyRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const split = SplitText.create(heroAboutRef.current, {
      type: "words",
    });
    const heading = heroCopyRef.current?.querySelector("h1");
    const paragraph = heroCopyRef.current?.querySelector("p");
    if(!heading || !paragraph) return;
    gsap.fromTo(heading, { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, duration: 1, ease:"power2.inOut" });
    gsap.fromTo(paragraph, { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, delay:0.7, duration: 1, ease:"power2.inOut" });
    const projects =
      projectSectionRef.current?.querySelectorAll(".griddy div img");
    if (!projects) return;
    gsap.set(split.words, {
      opacity: 0.4,
    });
    const mm = gsap.matchMedia();
     mm.add(
    {
      isMobile: "(max-width: 1023px)",
      isDesktop: "(min-width: 1024px)",
    },
    (context) => {
      const { isMobile } = context.conditions as { isMobile: boolean };

      const trigger = ScrollTrigger.create({
        trigger: aboutContainerRef.current,
        start: isMobile ? "top 90%" : "top 60%",
        end: isMobile ? "bottom 85%" : "bottom 75%",
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const activeIndex = progress * split.words.length;

          split.words.forEach((word, i) => {
            gsap.to(word, {
              opacity: i < activeIndex ? 1 : 0.4,
            });
          });
        },
      });
    return () => {
    trigger.kill();
    };
  }
);
return () => {
    mm.revert();
    split.revert();
  };

  }, []);

  const handleMouseOver = (e: React.MouseEvent<HTMLImageElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      duration: 1,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 1,
      ease: "power2.out",
    });
  };
  return (
    <div className="w-full flex flex-col items-center gap-[96px] lg:px-[28px] px-[16px] pb-[48px] lg:pb-[80px]">
      <div className=" w-full flex flex-col items-center gap-[48px] lg:gap-[80px]">
        <div ref={heroCopyRef} className="flex flex-col items-start lg:items-end gap-[18px] lg:gap-[32px] pt-[96px] lg:pt-[64px]">
          <h1
            className="hidden lg:block font-bold text-heading"
            style={{ letterSpacing: "-0.07em", lineHeight: "0.9em" }}
          >
            opajobi oyegoke
          </h1>
            <h1
            className="font-bold lg:hidden text-[70px]"
            style={{ letterSpacing: "-0.07em", lineHeight: "0.9em" }}
          >
            opajobi 'goke
          </h1>
          <p className="lg:w-[48%] w-full text-start font-regular text-[19px] lg:text-p24 text-light opacity-70"
           style={{ letterSpacing: "-0.04em", lineHeight: "1.2em" }}>
            I’m a frontend developer with a strong software engineering
            foundation and a deep appreciation for how things feel as much as
            how they work. I enjoy building interfaces that don’t just function,
            but engage — often through thoughtful animation, subtle
            interactions, and clean visual flow.
          </p>
        </div>
        <div
          ref={projectSectionRef}
          className="project-hover-zone flex flex-col gap-[24px] lg:gap-[64px] w-full"
        >
          <div className="griddy w-full flex flex-col lg:grid grid-cols-6 items-start gap-[24px]">
            <div className="w-full lg:col-span-4">
              <ProjectCard
              slug="launchfolio"
                image={Launchfolio}
                projectTitle="Launchfolio"
                description="A pixel-accurate rebuild of a Framer template, translated into a fully responsive Next.js site — built to test how closely custom code could match a no-code design system in both fidelity and performance."
                imageHeight={596}
              />
            </div>
            <div className="lg:col-span-2">
              <ProjectCard
              slug="kickabout"
                image={Kickabout}
                projectTitle="Kickabout"
                description="A bright startup idea where users can create 5 aside football sessions with flexibility of time, location and skill level and others can join. Users also have the luxury of rating and reviewing each other after a kickabout session."
                imageHeight={386}
              />
            </div>
          </div>
          <div className="griddy flex flex-col lg:grid grid-cols-6 items-start gap-[24px]">
            <div className="lg:col-span-3">
              <ProjectCard
              slug="oaken"
                image={Oaken}
                projectTitle="Oaken"
                description="A furniture ecommerce site built from a designer-provided concept, with an editorial product presentation and a streamlined checkout experience."
                imageHeight={406}
              />
            </div>
            <div className="lg:col-span-3">
              <ProjectCard
              slug="ownthefit"
                image={OwnTheFit}
                projectTitle="OwnTheFit"
                description="A social community meets Ecommerce web app for streetwear enthusiasts and designers to connect."
                imageHeight={566}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={aboutContainerRef}
        className="flex flex-col w-full items-start lg:items-center lg:justify-center gap-[56px] lg:gap-[72px] lg:py-[80px] lg:px-[28px]"
      >
        <p
          ref={heroAboutRef}
          className="font-medium text-p24 lg:text-heading3 text-light"
          style={{ lineHeight: "1.1em", letterSpacing: "-0.05em" }}
        >i'm Opajobi Oyegoke, a frontend developer based in Lagos, Nigeria. I build interfaces for small businesses and startups that don't just look premium — optimized load times, smooth interactions, and clean code underneath, so the experience holds up as well as it looks
        </p>
        <div className="lg:grid w-full flex flex-col grid-cols-3 lg:h-[384px] gap-[32px] lg:gap-x-[40px] lg:gap-y-[24px]">
          <Image
            className="lg:h- w-full h-[360px] rounded-[8px] lg:rounded-[6px] col-span-1 object-cover"
            src={OyeImage}
            alt=""
          />
          <div className=" flex flex-col items-start gap-[10px] lg:gap-[36px]">
            <p className="opacity-70 font-regular text-p16" style={{letterSpacing:"-0.02em", lineHeight:'1.2em'}}>why work with me</p>
            <p className="font-medium text-[16px] lg:text-p24" style={{lineHeight:'1.2em', letterSpacing:'-0.02em'}}>
             I believe the best products come from true collaboration. When we work together, you're not just getting code, you're getting a partner who takes time to understand your business, your users, and your goals — and builds accordingly.
            </p>
            <a href="/opajobi_resume.pdf" className="hidden lg:block py-[12px] px-[24px] flex items-center justify-center gap-[10px] rounded-[4px] bg-light text-p16 font-medium text-dark-90">
                download resume
            </a>
          </div>
          <div className=" flex flex-col items-start gap-[10px] lg:gap-[36px]">
            <p className="opacity-70 font-regular text-p16"  style={{letterSpacing:"-0.02em", lineHeight:'1.2em'}}>when i'm not developing</p>
            <p className="font-medium text-[16px] lg:text-p24" style={{lineHeight:'1.2em', letterSpacing:'-0.02em'}}>
             You'll find me exploring new music, playing video games, or playing football. I get a lot of my ideas from just using stuff — a transition on an app I open every day, a layout on a site I stumbled onto, a small interaction that makes something feel better than it needs to.
            </p>
          </div>
        </div>
      </div>
   <GetInTouch/>
    </div>
  );
};

export default Hero;
