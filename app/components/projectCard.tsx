"use client";
import gsap from 'gsap'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({
  slug,
  image,
  imageHeight,
  projectTitle,
  description,
}: {
  slug: string
  image: StaticImageData
  projectTitle: string
  imageHeight: number
  description: string
}) => {
  const handleMouseOver = (e: React.MouseEvent<HTMLImageElement>) => {
    gsap.to(e.currentTarget, { scale: 1.1, duration: 1, ease: "power2.out" });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 1, ease: "power2.out" });
  };

  return (
    <Link href={`/projects/${slug}`} className='flex flex-col gap-[12px] items-start w-full'>
      <div
        className='project-img-wrapper overflow-hidden relative w-full'
        style={{ ['--card-height' as string]: `${imageHeight}px` }}
      >
        <Image
          src={image}
          alt=''
          onMouseLeave={handleMouseLeave}
          onMouseOver={handleMouseOver}
          fill
          className='project-img rounded-[8px] object-cover'
        />
      </div>
      <div className='flex flex-col items-start gap-[4px]'>
        <p className='text-p24 font-regular'>{projectTitle}</p>
        <p className='text-p16 font-regular opacity-70'>{description}</p>
      </div>
    </Link>
  )
}

export default ProjectCard