"use client";
import { useEffect, useState } from 'react';

// Custom cursor that follows the mouse and grows when hovering over an
// element tagged with `.project-hover-zone`. Kept as its own client
// component so the parent page can stay a server component (needed for
// generateStaticParams + async data fetching).
const ProjectCursorTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOverProjects, setIsOverProjects] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsOverProjects(!!target.closest('.project-hover-zone'));
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className='hidden lg:block'
      style={{
        position: 'fixed',
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        pointerEvents: 'none',
        zIndex: 50,
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'difference',
        transition: 'width 0.3s ease, height 0.3s ease',
        width: isOverProjects ? '120px' : '40px',
        height: isOverProjects ? '120px' : '40px',
      }}
    >
      <div className='bg-light rounded-full w-full h-full' />
    </div>
  );
};

export default ProjectCursorTracker;