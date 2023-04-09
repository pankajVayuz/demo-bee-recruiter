import React from 'react'

const Element2 = ({heading,text}) => {
  return (
    <>
    <div className="flex flex-col gap-1">
    <h1 className='text-sm sm:text-base md:text-xl font-bold text-Bee-Black2  ' >{heading}</h1>
    <p className='text-xs sm:text-sm md:text-base text-Bee-Gray '>{text}</p>
    
    </div>
    </>
  )
}

export default Element2