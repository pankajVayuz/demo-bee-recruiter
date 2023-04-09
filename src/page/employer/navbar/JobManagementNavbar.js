import React from 'react'
import logo from '../../../image/navbar logo.svg'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BsTranslate } from "react-icons/bs"
import userImage from "../../../image/demouserimage.svg"
const JobManagementNavbar = () => {
  return (
      <>
          {/** main navbar div */}
          <div className='sm:flex  md:justify-between md:items-center  hidden '>
              {/** logo div */}
              <div className='flex gap-10 items-center'>
              <div className='scale-75'>
              <img src={logo} alt="" />
              </div>
              
              <div className='flex'>
              <ul className='flex gap-2'>
                  <li>Home</li>
                  <li>Reports</li>
                  <li>My Calendar</li>
              </ul>
          </div>
              </div>
              {/** Link section */}
             

              {/** right side div */}
              <div className='flex items-center gap-3 '>
                  <BsTranslate className='text-[25px]' />
                  <IoMdNotificationsOutline className='text-[25px] rotate-12'/>
                  {/** droop down section */}
                  <div className='flex gap-2 justify-center items-center'>
                  <div>
                  <img src={userImage} alt="image" />
                      </div>
                      <div>
                      <select>

       <option value="fruit">Sarah Malik</option>

       <option value="test1">Demo</option>

       <option value="test2">Demo</option>

     </select>
                      </div> 

                  </div>
                 
              
              </div>
          
          </div>
      </>
  )
}

export default JobManagementNavbar