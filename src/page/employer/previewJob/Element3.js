import React from 'react'

const Element3 = ({heading1,heading2,text1,text2}) => {
  return (
   <>

   <div className='flex flex-col justify-center gap-2 items-center'>
   <div className='flex flex-col justify-center items-start' >
    <h1 className='text-sm font-bold text-Bee-Black2 sm:text-base md:text-xl' >{heading1}</h1>
    <p className='text-xs sm:text-sm md:text-base text-Bee-Gray'>{text1}</p>
    
   </div>

   <div className='flex flex-col justify-center items-start'>
   <h1 className='text-xs font-bold sm:text-sm md:text-base text-Bee-Black2' >{heading2}</h1>
   <p className='text-xs  sm:text-sm md:text-base text-Bee-Gray '>{text2}</p>
   
   </div>
   </div>
   
   
   </>
   )
}

export default Element3