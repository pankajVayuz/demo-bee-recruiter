import React from 'react'
import ButtonM from '../../../components/Button/ButtonM'

const CandidateRoles = () => {
  return (
    <>
    {/** main div */}
    <div className='flex justify-center gap-4 items-center flex-col md:gap-4 '>
    
   

    <div className='flex flex-col md:flex-row justify-center gap-4  min-w-full min-h-full'>
    {/** secton 1 */}
    <div className='flex'><textarea name="" id="" cols="30" rows="10" className='bg-[#F6F6F6] rounded-md md:w-[580px] md:h-[300px] px-3 py-1' placeholder='You need:'></textarea></div>
   {/** section 2 */}
   <div className='flex'><textarea name="" id="" cols="30" rows="10" className='bg-[#F6F6F6] rounded-md md:w-[580px] md:h-[300px] px-3 py-1 ' placeholder='You will:'></textarea></div>   
    </div>
        
    {/** section -4  */}
    <div className=' min-h-full min-w-full flex justify-end items-center gap-4  px-12'>
    <button className='text-[#888888]'>Previous</button>
    <ButtonM>Next</ButtonM>
        </div>
        </div>
    </>
  )
}

export default CandidateRoles