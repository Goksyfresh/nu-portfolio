import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects, getProjectBySlug } from '../../lib/projects';
import ProjectGallery from '@/app/components/projectGallery';
import ProjectCard from '@/app/components/projectCard';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects
    .filter((p) => p.slug !== project!.slug)
    .slice(0, 3);


  return (
    <div className='min-h-[100vh] max-w-[100vw] bg-background text-light px-[16px] lg:px-[28px] pt-[76px] lg:pt-[144px] pb-[80px] flex flex-col items-start gap-[76px]'>
      <div className='w-full flex flex-col items-center gap-[56px] lg:gap-[96px]'>
 <h1
        className='font-bold text-[48px] lg:text-heading2'
        style={{ letterSpacing: '-0.06em', lineHeight: '0.9em' }}
      >
        {project!.projectTitle}
      </h1>
         <Image
          src={project!.image}
          alt={project!.projectTitle}
        
          className='lg:h-[630px] h-[213px] w-full object-cover'
        /> 
      </div>
      <div className='flex flex-col w-full gap-[56px] items-start'>
 <div className='flex flex-col gap-[10px] items-start'>
      <p className='text-p20 font-regular opacity-70' style={{letterSpacing:"-0.04em", lineHeight:"1.2em"}}>project overview</p>
       <p className='lg:text-p44 text-[24px] font-medium w-full' style={{letterSpacing:"-0.02em", lineHeight:"1.2em"}}>
        {project!.description}
      </p>
     </div>
      <div className='lg:flex grid grid-cols-2 grid-rows-2 gap-[24px] w-full items-center justify-between '>
<div className='flex flex-col items-start gap-[10px]'>
<p className='font-regular text-p20 opacity-70' style={{letterSpacing:"-0.04em",lineHeight:"1.2em"}}>project type</p>
<p className='lg:text-p24 text-[19px] font-medium' style={{letterSpacing:"-0.02em",lineHeight:"1.2em"}}>{project.projectType}</p>
</div>
<div className='flex flex-col items-start gap-[10px]'>
<p className='font-regular text-p20 opacity-70' style={{letterSpacing:"-0.04em",lineHeight:"1.2em"}}>year</p>
<p className='lg:text-p24 text-[19px] font-medium' style={{letterSpacing:"-0.02em",lineHeight:"1.2em"}}>{project.year}</p>
</div>
<div className='flex flex-col items-start gap-[10px]'>
<p className='font-regular text-p20 opacity-70' style={{letterSpacing:"-0.04em",lineHeight:"1.2em"}}>my role</p>
<p className='lg:text-p24 text-[19px] font-medium' style={{letterSpacing:"-0.02em",lineHeight:"1.2em"}}>{project.role}</p>
</div>
<div className='flex flex-col items-start gap-[10px]'>
<p className='font-regular text-p20 opacity-70' style={{letterSpacing:"-0.04em",lineHeight:"1.2em"}}>client</p>
<p className='lg:text-p24 text-[19px] font-medium' style={{letterSpacing:"-0.02em",lineHeight:"1.2em"}}>{project.client}</p>
</div>
      </div>
      </div>

    <ProjectGallery images={project!.images} />
     <div className='flex flex-col items-start gap-[56px]'>
      <h1 className='font-bold text-[64px] lg:text-heading2' style={{letterSpacing:"-0.06em", lineHeight:"0.9em"}}>other projects</h1>
      <div className='flex lg:flex-row flex-col items-start gap-[20px] w-full'>
 {otherProjects.map((p) => (
            <ProjectCard
              key={p.slug}
              slug={p.slug}
              image={p.image}
              projectTitle={p.projectTitle}
              description={p.description}
              imageHeight={400}
            />
          ))}
      </div>
     </div>
    </div>
  );
};

export default ProjectDetailsPage;