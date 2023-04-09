import React from 'react'

const ResumeManagementCard = ({heading,subHeading,img,cvCounter}) => {
  return (
    <>
    {/** main div */}
    
      <div className='border border-Bee-Border rounded-xl flex justify-between items-center p-2'>
      {/** section 1 */}
      <div className='flex justify-center gap-2 items-center'>
      <div className=' scale-75 sm:scale-100 '>
      <img src={img} alt="" />
      </div>


      <div className='flex flex-col'>
      <span className='text-Bee-Black font-bold text-sm sm:text-base'> {heading}</span>
      <span className='text-Bee-Gray text-xs sm:text-sm  '>{subHeading}</span>
      </div>
      </div>
      {/** section 3 */}
      <div className=''>
      <span className='text-Bee-Heading font-bold text-base sm:text-sl md:text-2xl '>{cvCounter}</span>
      </div>
      
      
      </div>    
    </>
  )
}

export default ResumeManagementCard