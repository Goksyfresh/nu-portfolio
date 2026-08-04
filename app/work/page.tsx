"use client";
import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/projectCard';
import Launchfolio from "../../public/images/Launchfolioo.png";
import Kickabout from "../../public/images/kick.png";
import Oaken from "../../public/images/oaken.png";
import OwnTheFit from "../../public/images/otf.png";
import GetInTouch from '../components/getInTouch';
const WorkPage = () => {
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
  return (
    <div className='min-h-[100vh] max-w-[100vw] bg-background flex flex-col items-start gap-[32px] px-[28px]'>
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
      <h1 className='font-bold text-light text-[64px] lg:text-[255px]' style={{letterSpacing:'-0.06em', lineHeight:'0.9em', marginBottom:"-40px"}}>selected work</h1>
    
        <ul className='flex gap-[20px] items-center font-medium text-p16 lg:text-p24'>
            <li>all</li>
            <li className='opacity-70'>frontend</li>
            <li className='opacity-70'>fullstack</li>
        </ul>
    <div className='project-hover-zone flex flex-col lg:grid w-full grid-cols-2 grid-rows-2 gap-[24px]'>
          <ProjectCard
                image={Launchfolio}
                projectTitle="Launchfolio"
                description="A framer template recreate"
                imageHeight={520}
              />
                <ProjectCard
                image={Kickabout}
                projectTitle="Kickabout"
                description="A bright startup idea where users can create 5 aside football sessions with flexibility of time, location and skill level and others can join. Users also have the luxury of rating and reviewing each other after a kickabout session."
                imageHeight={520}
              />
               <ProjectCard
                image={Oaken}
                projectTitle="Oaken"
                description="An ecommerce furniture website designed by a twitter mutual."
                imageHeight={520}
              />
              <ProjectCard
                image={OwnTheFit}
                projectTitle="OwnTheFit"
                description="A social community meets Ecommerce web app for streetwear enthusiasts and designers to connect."
                imageHeight={520}
              />
    </div>
    <GetInTouch/>
    </div>
  )
}

export default WorkPage
