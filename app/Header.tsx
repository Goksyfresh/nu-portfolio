"use client";
import {Link} from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleModalButton = ()=> {
        setIsModalOpen(!isModalOpen)
    }
    const pathname = usePathname();
     useEffect(() => {
        setIsModalOpen(false);
    }, [pathname]);

  return (
    <nav className='w-full h-full flex items-center justify-between py-3 px-[16px] lg:px-7.25 bg-background'>
        {isModalOpen ?
         <div className='fixed inset-0 w-full bg-background flex flex-col gap-[10px] py-3 px-[16px] z-10'>
            <div className='flex flex-col items-start gap-[32px]'>
                <div className='flex items-center justify-between w-full'>
                    <Link href="/" className='text-p20 font-medium text-light'>oyegoke dev</Link>
                    <div onClick={handleModalButton} className='relative top-0 right-0 w-[32px] h-[32px]'>
                        <div className='absolute top-1/2 left-0 bg-light w-[32px] h-[3px] rotate-45' />
                         <div className='absolute top-1/2 left-0 bg-light w-[32px] h-[3px] -rotate-45' />
                    </div>
                </div>
                <ul className='flex flex-col gap-[10px] font-medium text-p32' style={{letterSpacing:"-0.02em", lineHeight:"1.2em"}}>
 <li>
            <Link href="/work">work</Link>
        </li>
          <li>
            <Link href="/about">about me</Link>
        </li>
          <li>
            <Link href="/#contact">start a project</Link>
        </li>
                </ul>
                 <a href='/opajobi_resume.pdf' className="py-[12px] px-[24px] flex items-center justify-center gap-[10px] rounded-[4px] bg-light text-p16 font-medium text-dark-90">
                download resume
            </a>
            </div>
        </div> :
            <ul className='nav-list flex w-full items-center justify-between text-p20 font-medium text-light'>
        <li>
            <Link href="/">oyegoke dev</Link>
        </li>
          <li className='hidden lg:block'>
            <Link href="/work">work</Link>
        </li>
          <li className='hidden lg:block'>
            <Link href="/about">about me</Link>
        </li>
          <li className='hidden lg:block'>
            <a href="/#contact">start a project</a>
        </li>
        <li className='lg:hidden'>
            <div onClick={handleModalButton} className='flex flex-col items- justify-center gap-[10px] w-[44px] h-[44px]'>
                <div className='w-[32px] h-[3px] bg-light'/>
                  <div className='w-[32px] h-[3px] bg-light'/>
            </div>
        </li>
      </ul>
        }
  
    </nav>
  )
}

export default Header
