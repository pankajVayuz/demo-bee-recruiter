import React from 'react'

const Element1 = ({title,heading,platform,city,mad,date,list,img}) => {
  return (

    <>
    <div className='flex flex-col gap-3 '>
    {/** section 1 */}
    <div className='text-Bee-Black2 font-bold text-base flex justify-start items-start sm:justify-start sm:items-start sm:text-xl md:text-2xl'>
    {title}
    </div>
    {/** section 2 */}
    <div className='flex  flex-col justify-start items-start sm:justify-start sm:items-start sm:flex-row sm:gap-12'>
    {/** card section  */}
    <div className='flex  justify-start items-start sm:flex-row sm:items-start sm:gap-2'>
    {/** card image section  */}
    <div className='flex justify-start items-start scale-75 sm:scale-100'>
    <img src={img} alt="" />
    </div>
    {/** card details seacti */}
    <div className='flex flex-col items-start justify-start sm:justify-start sm:items-start sm:gap-1'>
    <span className='text-Bee-Black2 text-sm sm:text-base font-bold'>{heading}</span>
    <span className='text-Bee-Black2 text-sm  sm:text-base'>{platform}</span>
    <span className='text-Bee-Black2 text-sm sm:text-base'>{city}</span>
    <span className='text-Bee-Black2 text-sm sm:text-base'>{mad}</span>
    <span className='text-Bee-Black2 text-sm sm:text-base'>{date}</span>
    
    </div>
    
    
    </div>
{/** details section  */}    
    <div className='flex flex-wrap   justify-center items-center flex-col sm:flex-row sm:justify-start sm:items-start sm:w-2/3 sm:gap-2 '>
   {
    list.map((list)=><ul className='list-disc sm:w-1/3 '><li className='text-xs sm:text-sm text-Bee-Black2 m-1'>{list.details}</li></ul>)
   }
    
    </div>
    </div>

    
    </div>
    
    </>
  )
}

export default Element1