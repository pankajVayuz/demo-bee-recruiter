import React from "react";

const ResumeApproved = ({ img, name, email,status }) => {
  return (
    <>
      {/** main div */}
      <div className=" border border-Bee-Border rounded-xl p-2 flex">
        {/** section 1 */}
        <div>
          <img src={img} alt="" />
        </div>
        {/**section 2 */}
        <div className="flex flex-col gap-1">
          <span className="text-Bee-Black font-bold text-sm">{name}</span>
          <span className="text-xs text-Bee-Black">{email}</span>
          <span className="text-xs self-end bg-Bee-Background2 text-Bee-Green rounded-xl px-4 py-2 ">{status}</span>
        </div>
        
      
      </div>
    </>
  );
};

export default ResumeApproved;
