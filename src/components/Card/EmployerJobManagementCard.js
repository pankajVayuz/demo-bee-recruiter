import React from "react";
import userimg from "../../image/Employer/usersvg.svg";
import viewimg from "../../image/Employer/eye.svg";
import savedimg from "../../image/Employer/saved.svg";
import cardImage from "../../image/Employer/cardImage.svg";

const EmployerJobManagementCard = ({ view, application, saved,title }) => {
  return (
    <>
      {/** main card div */}
      <div className="flex border-2 justify-center items-center gap-3 rounded-md w-[250px] md:w-[300px]  p-1 ">
        {/** image div section  */}
        <div>
          <div>
            <img src={cardImage} alt="" />
          </div>
        </div>

        {/** detils section */}
        <div className="flex flex-col">
          {/** detiles heading section  */}
          <div>
                      <span className="font-bold text-[14px]">{title }</span>
          </div>
          {/** detils info div view and saved div */}
          <div className="flex flex-wrap">
            <div className="flex gap-1 items-center justify-center">
              <div className="scale-75">
                <img src={viewimg} alt="" />
              </div>
              <span className="text-[10px]">{view}</span>
            </div>
            <div className="flex gap-1 items-center justify-center">
              <div className="scale-75">
                <img src={userimg} alt="" />
              </div>
              <span className="text-[10px]" >{application}</span>
            </div>

            <div className="flex gap-1 items-center justify-center">
              <div className="scale-75">
                <img src={savedimg} alt="" />
              </div>
              <span className="text-[10px]">{saved}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerJobManagementCard;
