import React from 'react'
import {FiMoreHorizontal} from 'react-icons/fi'

const Card = ({index,jobTitle,jobCode,postedOn,jobPostView,Action}) => {
  return (
    <>
    <div className='flex  gap-3 bg-Bee-Main_Bg border rounded-md border-Bee-Border justify-around items-center'>
   
    <span className='text-Bee-Black text-sm p-2 font-[600] items-center' >{index}</span>
    <span className='text-Bee-Black text-sm p-2 font-[600] items-center' >{jobTitle}</span>
    <span className='text-Bee-Black text-sm p-2 font-[600] items-center' >{jobCode}</span>
    <span className='text-Bee-Black text-sm p-2 font-[600] items-center' >{postedOn}</span>
    <span className='text-Bee-Black text-sm p-2 font-[600] items-center' >{jobPostView}</span>
    <span className='text-Bee-Black text-sm p-2 font-[600] items-center' ><FiMoreHorizontal/></span>

   
   </div>
    
    </>
  )
}

export default Card