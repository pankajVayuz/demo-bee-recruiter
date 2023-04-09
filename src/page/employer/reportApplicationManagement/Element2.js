import React from 'react'

const Element2 = ({cardData,title}) => {
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
            <div className=' border rounded-lg px-4 py-2 flex flex-col border-Bee-Border '>
            <span className='text-Bee-Black font-bold text-sm sm:text-base'>{data.heading}</span>
            <span className='text-Bee-Black2 text-xs sm:text-sm '>{data.university}</span>
            <span className='text-Bee-Black2 text-xs sm:text-sm '>{data.date}</span>
            
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

export default Element2