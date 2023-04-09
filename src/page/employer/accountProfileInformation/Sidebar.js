import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ title, tabData}) => {
  return (
    <>
      {/** main container */}
      <div className="flex flex-col bg-Bee-SideBarBackground h-screen sm:w-72
      p-4 gap-2">
        {/** title section 1 */}
        <div><span className="text-Bee-Heading font-bold text-2xl ">{title}</span>
        <hr className="bg-Bee-Main_Bg h-[2px]" />
        </div>
        {/** section 2 sign in & security */}
        
          {/** tab heading mapping */}
          <div className="flex flex-col gap-2">
            {

                tabData.map((data) =>{
                return (

                    <>
                    <span className="text-Bee-Black text-xl font-bold p-1">{data.heading}</span>
                     <div className="flex flex-col  gap-1">{data.childTab.map((data)=><NavLink to={"/profile"} className="text-Bee-Black2 p-1 cursor-pointer ">{data.child}</NavLink>)}</div>
                      <hr />
                    
                    </>
                )

                } )

            }
           
          </div>
          
        </div>
     
    </>
  );
};

export default Sidebar;
