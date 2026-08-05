"use client";
import React, { useEffect, useState } from 'react'
import OyeImage from "../../public/images/oyegoat3.png";
import OyeImage2 from '../../public/images/Oye.jpg'
import OyeImage3 from '../../public/images/oyegoat2.png'
import Image from 'next/image';
const GetInTouch = () => {
      const [imageIndex, setImageIndex] = useState(0)
         const data = [
          { index: 1, image: OyeImage },
          { index: 2, image: OyeImage2 },
          { index: 3, image: OyeImage3},
        ];
       useEffect(()=>{
    const timeout = setTimeout(()=>{
      setImageIndex((prev)=>(prev +1) % data.length)

    },450)
     return () => clearTimeout(timeout)
   
  },[imageIndex])
  const currentImage = data[imageIndex].image
  return (
     <div className="lg:py-[280px] lg:px-[28px] flex lg:flex-row flex-col items-start lg:items-center justify-center w-full gap-[32px] lg:gap-[72px]">
<p className="font-bold text-[48px] lg:text-heading4 lowercase" style={{letterSpacing:"-0.06em", lineHeight:"0.9"}}>Get in</p>
<Image src={currentImage} alt="" className="lg:w-[302px] rounded-[8px] w-full h-[230px] object-cover"/>
<p className="font-bold hidden lg:block text-heading4" style={{letterSpacing:"-0.06em", lineHeight:"0.9"}}>touch</p>
      </div>
  )
}

export default GetInTouch
