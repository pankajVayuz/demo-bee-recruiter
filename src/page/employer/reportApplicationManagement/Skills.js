import React from 'react'

const Skills = ({skills,title}) => {
  return (
   <>
   {/** main section div */}
    <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 '>
    {/** title */}
    <div className='font-bold text-Bee-Black2 text-sm sm:text-base md:text-xl'>{title}</div>
    {/** skills section  */}
    <div className='flex gap-2 flex-wrap'>
    {
  skills.map((data)=><span className='bg-Bee-Background text-Bee-Main_Bg rounded-xl p-2 text-xs sm:text-sm md:text-base'>{data.skills}</span>)

    }
    </div>
    
    </div>   
   </>
  )
}

export default Skills