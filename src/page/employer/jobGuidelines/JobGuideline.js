import React from 'react'
import ButtonM from '../../../components/Button/ButtonM'

const JobGuideline = () => {
  return (
   <>
   {/** main div */}
   <div className='px-10 flex flex-col gap-4'>
   {/** section 1 div */}
    <div className=' ' >
    <textarea name="" id="" cols="30" rows="10" className='min-h-full min-w-full px-6 py-2 bg-[#F6F6F6] rounded-md ' placeholder='Guidelines for the specific job post:' ></textarea>
    </div>
  {/** section 2 div */}
    <div className='flex gap-3 justify-end'>
    <button className='text-[#888888]'>Previous</button>
    <button className='text-[#888888]'>Preview</button>
    <ButtonM>Post</ButtonM>
    </div>
   
   </div>
   
   </>
  )
}

export default JobGuideline