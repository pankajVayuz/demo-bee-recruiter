import React from 'react'

const Certificates = ({cardData,title}) => {
  return (
    <>
    {/** main contaner */}
    <div className='flex flex-col gap-2'>
    {/** section 1 */}
    <div className='text-Bee-Black2 font-bold '>{title}</div>
    {/**  section 2  */}
    <div className='flex flex-col gap-2 sm:flex-row '>
    {/**card section */}
    {
     cardData.map((data)=>{
        return(
            <>
            <div className=' border rounded-lg p-2  flex sm:p-4 md:p-6 gap-2 sm:gap-3 md:gap-4  border-Bee-Border  '>
           {/** image section */}
           <div className='  scale-100'>
           <img src={data.img} alt="" />
           </div>
           {/** daitels section */}
           <div className='flex flex-col gap-0'>
           <span className='text-Bee-Black2 font-bold text-sm sm:text-base '>{data.heading}</span>
           <span className='text-Bee-Gray2 text-sm sm:text-base'>{data.insititue}</span>
           <div><span className='text-Bee-Black2 font-bold text-xs sm:text-sm'>Issued</span> <span className='text-Bee-Black2 text-xs sm:text-sm '>{data.issued}</span></div>
           <div><span className='text-Bee-Black2 font-bold text-xs sm:text-sm'>Credential URL</span> <span className='text-Bee-Black2 text-xs sm:text-sm'>{data.credentialUrl}</span></div>
           
           
           
           </div>
            
            </div>
            
            </>
        )
     })
    }
    
    </div>
    
    
    
    </div>
    </>
  )
}

export default Certificates