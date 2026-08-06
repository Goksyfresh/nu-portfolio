// components/ProjectGallery.tsx
import Image, { StaticImageData } from 'next/image';

const ProjectGallery = ({ images }: { images: StaticImageData[] }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-[16px] gap-x-[24px] lg:gap-[24px] w-full'>
      {images.map((img, i) => {
        const positionInCycle = i % 3;
        const isLastImage = i === images.length - 1;

        const isLoneTrailingHalf = positionInCycle === 1 && isLastImage;

        const isFullWidth = positionInCycle === 0 || isLoneTrailingHalf;

        return (
          <div
            key={i}
            className={`relative w-full h-[288px] lg:h-[540px] ${
              isFullWidth ? 'lg:col-span-2' : 'lg:col-span-1'
            }`}
          >
            <Image
              src={img}
              alt=''
              fill
              className='rounded-[8px] object-cover'
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectGallery;