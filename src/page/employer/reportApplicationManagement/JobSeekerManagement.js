import React from "react";

const JobSeekerManagement = ({ card, title }) => {
  return (
    <>
      {/** main div section  */}
      <div className="flex flex-col gap-2 ">
        {/** title and option section  */}
        <div className=" flex flex-col gap-2 sm:flex-row sm:justify-between">
          <div>
          <span className="text-Bee-Black2 font-bold text-sm sm:text-base md:text-xl">{title}</span>
          </div>
          <div className="flex">
            <form action="" className="flex">
              <label htmlFor="shortlisted" className="sr-only">
                Shortlisted
              </label>
              <select name="shortlisted" id="shortlisted" className="border-2 rounded-lg text-sm sm:text-base md:text-xl">
                <option value="sortlisted" className="text-xs sm:text-sm md:text-base">Shortlisted</option>
                <option value="demo" className="text-xs sm:text-sm md:text-base">Demo</option>
              </select>
            </form>
          </div>
        </div>
        {/** section 2 card section  */}

        <div className="flex gap-2 flex-col sm:flex-row  flex-wrap   ">
          {card.map((data) => {
            return (
              <>
              <div className="border border-Bee-Border rounded-xl flex  gap-2 p-2 sm:p-4 md:p-4 sm:gap-3 md:gap-4  items-center ">
                <div>
                  <div className="flex justify-center items-center w-10 h-10 rounded-full sm:scale-125  ">
                  <img src={data.img} alt="image" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-Bee-Black font-bold text-sm sm:text-base md:text-xl">{data.name}</span>
                  <span className="text-Bee-Black text-xs sm:text-sm md:text-base">{data.email}</span>
                </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default JobSeekerManagement;
