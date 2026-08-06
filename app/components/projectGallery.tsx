// components/ProjectGallery.tsx
import Image from 'next/image';
import { GalleryImage } from '../lib/projects';

const ProjectGallery = ({ images }: { images: GalleryImage[] }) => {
  const desktopImages = images.filter((item) => item.type !== 'mobile');
  const mobileImages = images.filter((item) => item.type === 'mobile');

  return (
    <div className='flex flex-col gap-y-[24px] w-full'>
      {/* Desktop / tablet screenshots — existing 2-col cycling grid */}
      {desktopImages.length > 0 && (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-[16px] gap-x-[24px] lg:gap-[24px] w-full'>
          {desktopImages.map((item, i) => {
            const positionInCycle = i % 3;
            const isLastImage = i === desktopImages.length - 1;
            const isLoneTrailingHalf = positionInCycle === 1 && isLastImage;
            const isFullWidth = positionInCycle === 0 || isLoneTrailingHalf;

            return (
              <div
                key={i}
                className={`relative w-full h-[288px] lg:h-[670px] ${
                  isFullWidth ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                <Image
                  src={item.src}
                  alt=''
                  fill
                  className='rounded-[8px] object-cover'
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Mobile screenshots — own flex layout, 3-4 per row, no background */}
      {mobileImages.length > 0 && (
        <div className='flex flex-wrap gap-[16px] lg:gap-[24px] w-full'>
          {mobileImages.map((item, i) => (
            <div
              key={i}
              className='relative flex-1 min-w-[140px] max-w-[240px] aspect-[9/19.5]'
            >
              <Image
                src={item.src}
                alt=''
                fill
                className='rounded-[8px] object-contain'
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;