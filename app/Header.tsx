import React from 'react'

const Header = () => {
  return (
    <nav className='w-full flex items-center justify-between py-3 px-7.25 bg-background'>
      <ul className='nav-list flex w-full items-center justify-between text-p20 font-medium text-light'>
        <li>
            <a href="#">oyegoke dev</a>
        </li>
          <li className='hidden lg:block'>
            <a href="#">work</a>
        </li>
          <li className='hidden lg:block'>
            <a href="#">about me</a>
        </li>
          <li className='hidden lg:block'>
            <a href="#">start a project</a>
        </li>
        <li>
            <div className='flex flex-col items- justify-center gap-[10px] w-[44px] h-[44px]'>
                <div className='w-[32px] h-[3px] bg-light'/>
                  <div className='w-[32px] h-[3px] bg-light'/>
            </div>
        </li>
      </ul>
    </nav>
  )
}

export default Header
