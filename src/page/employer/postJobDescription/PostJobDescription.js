import React from 'react'
import ButtonM from '../../../components/Button/ButtonM'
import DescriptionInput from '../../../components/Input/DescriptionInput'

const PostJobDescription = () => {
  return (
      <>
        
    
          {/** main div section */}
          <div className=''>
           
            
              {/**  main description section *******************************************************************8 */}
              {/** main div for input */}
              <div className='flex gap-4 justify-center flex-col md:flex-row '>
             {/** first input div */}
             <div className=' flex flex-col justify-center items-center gap-3 '>
               <DescriptionInput placeholder={"Job Title"} />
             <DescriptionInput placeholder={"No.of Openings"}/>
             <DescriptionInput placeholder={"Job Requirement Date"}/>
             <DescriptionInput placeholder={"Job Post Tags"}/>
             <DescriptionInput placeholder={"Pre-Screening Questions (Optional)"}/>
             
             </div>
               {/** second input div */}
             <div className=' flex flex-col gap-3 md:justify-start items-center '>
             <DescriptionInput placeholder={"Job Location*"} />
             <DescriptionInput placeholder={"Valid Date (Optional)"} />
             <DescriptionInput placeholder={"Experience"} />
             <DescriptionInput placeholder={"Type"} />
             
             </div>

               {/** third  input div */}
             <div className='flex flex-col gap-3'> 
             
             <textarea name="description" id="" cols="30" rows="10" placeholder='Job Description' className='bg-[#F6F6F6] rounded-md   focus:outline-none px-3 py-1 '></textarea>
             </div>
              
              </div>

              <div className=' min-h-full min-w-full flex justify-end items-center gap-4  px-10 py-4'>
              
              <ButtonM>Next</ButtonM>
                  </div>


          
          </div>

      
      </>
  )
}

export default PostJobDescription