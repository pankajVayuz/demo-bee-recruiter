import React from 'react'

const Element = ({icon,text}) => {
  return (
    <>
    <div className='flex gap-2'>
    <span className='text-xs sm:text-base md:text-sm text-Bee-Gray'>{icon}</span>
    <span className='text-xs sm:text-base md:text-sm text-Bee-Gray' >{text}</span>
  </div>
    
    </>
  )
}

export default Element