import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-background w-full lg:pt-[80px] pb-[24px] pt-[48px] px-[16px] lg:px-[28px] flex items-center gap-[72px]'>
        <div className='flex w-full flex-col items-center gap-[48px]'>
            <div className='flex w-full flex-col items-start gap-[24px]'>
<div className='w-full flex-col lg:flex-row flex items-start lg:items-center gap-[24px] lg:justify-between'>
<ul className='flex flex-col gap-[16px] font-regular text-p20'>
    <li>email:opajobioyegokeoyebola@gmail.com</li>
    <li>based in: Lagos, Nigeria</li>
    <li>available for: freelance projects & full-time</li>
</ul>
<div className='flex items-center gap-[76px]'>
    <ul className='flex flex-col gap-[10px] font-medium text-p20'>
        <p className='font-regular text-p16'>pages</p>
        <Link href="/">home</Link>
        <Link href='/work'>about</Link>
        <Link href='/work'>work</Link>
    </ul>
    <ul className='flex flex-col gap-[10px] font-medium text-p20'>
        <p className='font-regular text-p16'>socials</p>
        <li><a href="https://instagram.com/oyegoke_xx" target="_blank" rel="noopener noreferrer">instagram</a></li>
        <li><a href="https://twitter.com/oyegoke19" target="_blank" rel="noopener noreferrer">X (twitter)</a></li>
        <li><a href="https://linkedin.com/opajobioyegoke" target="_blank" rel="noopener noreferrer">linkedin</a></li>
    </ul>
</div>
      </div>
       <h1 className='font-semibold hidden lg:block text-heading' style={{letterSpacing:'-0.06em', lineHeight:'0.9em'}}>opajobi oyegoke</h1>
              <h1 className='font-semibold text-[68px] lg:hidden' style={{letterSpacing:'-0.06em', lineHeight:'0.9em'}}>opajobi 'goke</h1>
            </div>

      <div className='flex w-full flex-col items-start gap-[24px]'>
 
      <div className='w-full h-[1px] bg-light-20'/>
      <div className='flex lg:flex-row flex-col w-full items-start gap-[4px] lg:items-center justify-between'>
        <p>© 2026 opajobi oyegoke. all rights reserved</p>
        <p>framer template created by lazar fillipovic</p>
      </div>
      </div>
    
        </div>
      
    </div>
  )
}

export default Footer
