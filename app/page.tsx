"use client";
import { useEffect, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Lenis from "lenis";


export default function Home() {
  const [mousePosition, setMousePosition] = useState({x:0, y:0})
const [isOverProjects, setIsOverProjects] = useState(false)
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
  useEffect(()=>{
 // Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});
  },[])
 
  return (
    <div className="w-full relative">
       <div
  className="hidden lg:block"
  style={{
    position: 'fixed',
    left: `${mousePosition.x}px`,
    top: `${mousePosition.y}px`,
    pointerEvents: 'none',
    zIndex: 50,
    transform: 'translate(-50%, -50%)',
    mixBlendMode: 'difference', // <-- the key property
       transition: "width 0.3s ease, height 0.3s ease",
      width: isOverProjects ? "120px" : "40px",
          height: isOverProjects ? "120px" : "40px",
  }}
>
  <div className="bg-light rounded-full w-full h-full" />
</div>
  <Hero/>
    </div>
  );
}
