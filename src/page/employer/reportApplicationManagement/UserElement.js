import React from "react";

const UserElement = ({ heading, mail, address, img, code }) => {
  return (
    <>
      <div className="md:flex md:justify-between min-h-full min-w-full ">
        <div className="flex justify-center items-center flex-col sm:flex-row sm:gap-5 md:gap-10">
          <div className=" w-16 h-16 rounded-full sm:scale-125 md:scale-175 ">
            <img src={img} alt="user image" className="" />
          </div>
          <div className="flex flex-col justify-center items-center sm:items-start sm:justify-start p-2 ">
            <span className="text-Bee-Heading font-bold text-base sm:text-xl md:text-2xl md:mb-2  ">
              {heading}
            </span>
            <span className="text-Bee-Black text-xs sm:text-sm md:text-base">
              {mail}
            </span>
            <span className="text-Bee-Black2 text-center text-xs sm:text-sm md:text-base">
              {address}
            </span>
          </div>
        </div>
        <div className="md:flex justify-end items-center hidden  ">
          <span className="text-Bee-Gray">{code}</span>
        </div>
      </div>
    </>
  );
};

export default UserElement;
