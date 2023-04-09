import React from 'react'
import { userData } from './userData'

const Element = () => {
  return (
   <>
   <div className='flex  gap-3 bg-Bee-NavBackground  justify-around items-center'>
   {
    userData.map((data)=><span className='text-Bee-Heading text-sm p-2 font-[600]' >{data.text}</span>)
   }
   </div>
   
   </>
  )
}

export default Element