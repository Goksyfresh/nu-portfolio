import React from 'react'

const Experience = ({company,role, description, duration}:{company:string, role:string, description:string, duration:string}) => {
  return (
    
           <div className="flex w-full border-t-[1px] py-[16px] lg:py-[20px] border-light-20 justify-between items-center">
              <div className="flex flex-col items-start gap-[8px]">
                <p className="text-p24 font-medium text-light">{company}</p>
                <p className="text-p20 font-regular text-light opacity-60">{role}</p>
              </div>
              <p className="text-p16 hidden lg:block font-regular text-white opacity-70 w-[35%]">
              {description}
              </p>
              <p className="text-p24 font-medium text-light">{duration}</p>
            </div>
    
  )
}

export default Experience
