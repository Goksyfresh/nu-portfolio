"use client";
import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/projectCard';
import GetInTouch from '../components/getInTouch';
import { projects,  } from '../lib/projects'; 
// ^ adjust relative path to match your actual folder depth

const filters = ['all', 'frontend', 'fullstack', 'animations'] as const;
type Filter = typeof filters[number];

const WorkPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isOverProjects, setIsOverProjects] = useState(false)
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

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

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

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
          mixBlendMode: 'difference',
          transition: "width 0.3s ease, height 0.3s ease",
          width: isOverProjects ? "120px" : "40px",
          height: isOverProjects ? "120px" : "40px",
        }}
      >
        <div className="bg-light rounded-full w-full h-full" />
      </div>

      <h1
        className='font-bold text-light text-[64px] mt-[30px] lg:text-[255px]'
        style={{ letterSpacing: '-0.06em', lineHeight: '0.9em', marginBottom: "-40px" }}
      >
        selected work
      </h1>

      <ul className='flex gap-[20px] items-center font-medium mt-3 text-p16 lg:text-p24'>
        {filters.map((filter) => (
          <li
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`cursor-pointer transition-opacity ${
              activeFilter === filter ? 'opacity-100' : 'opacity-70 hover:opacity-90'
            }`}
          >
            {filter}
          </li>
        ))}
      </ul>

      <div
        className={`project-hover-zone flex flex-col lg:grid w-full gap-[24px] ${
          filteredProjects.length <= 2
            ? 'grid-cols-2 grid-rows-1'
            : 'grid-cols-2 grid-rows-2'
        }`}
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            image={project.image}
            projectTitle={project.projectTitle}
            description={project.description}
            imageHeight={project.imageHeight}
          />
        ))}
      </div>

      <GetInTouch />
    </div>
  )
}

export default WorkPage