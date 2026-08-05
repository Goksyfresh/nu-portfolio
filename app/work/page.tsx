"use client";
import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/projectCard';
import Launchfolio from "../../public/images/Launchfolioo.png";
import Kickabout from "../../public/images/kick.png";
import Oaken from "../../public/images/oaken.png";
import OwnTheFit from "../../public/images/otf.png";
import GetInTouch from '../components/getInTouch';
import screenshot1 from '../../public/images/screenshot1.png'
import screenshot2 from '../../public/images/screenshot2.png'
import screenshot3 from '../../public/images/screenshot3.png'
import screenshot4 from '../../public/images/screenshot4.png'
type Category = 'frontend' | 'fullstack' | 'animations';

const projects: {
  image: any;
  projectTitle: string;
  description: string;
  imageHeight: number;
  category: Category;
}[] = [
  {
    image: Launchfolio,
    projectTitle: "Launchfolio",
    description: "A framer template recreate",
    imageHeight: 520,
    category: 'frontend',
  },
  {
    image: Kickabout,
    projectTitle: "Kickabout",
    description: "A bright startup idea where users can create 5 aside football sessions with flexibility of time, location and skill level and others can join. Users also have the luxury of rating and reviewing each other after a kickabout session.",
    imageHeight: 520,
    category: 'fullstack',
  },
  {
    image: Oaken,
    projectTitle: "Oaken",
    description: "An ecommerce furniture website designed by a twitter mutual.",
    imageHeight: 520,
    category: 'frontend',
  },
  {
    image: OwnTheFit,
    projectTitle: "OwnTheFit",
    description: "A social community meets Ecommerce web app for streetwear enthusiasts and designers to connect.",
    imageHeight: 520,
    category: 'fullstack',
  },
   {
    projectTitle: "Image Hover Effect",
    image:screenshot1,
    description:
      "Interactive image gallery with smooth hover transitions and scale animations.",
   imageHeight:520,
   category:'animations'
  },
   {
    projectTitle: "Image Gallery with Selection",
    image:screenshot2,
    description:
      "Interactive archive gallery allowing image selection with keyboard navigation and animated preview.",
      imageHeight:520,
      category:"animations"
  },
   {
    projectTitle: "Hero Section with Text Animation",
    image:screenshot3,
    description:
      "Full-screen hero section featuring character-by-character text animation and scroll-triggered reveals.",
   imageHeight:520,
   category:"animations"
    },
  {
    projectTitle: "Progress Indicator Animation",
    image:screenshot4,
    description:
      "Dynamic progress animation with visual feedback and state management.",
  imageHeight:520,
  category:"animations"
    },
];

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
            key={project.projectTitle}
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