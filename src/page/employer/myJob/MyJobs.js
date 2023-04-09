import React from "react";
import Button from "../../../components/Button/Button";
import EmployerJobManagementCard from "../../../components/Card/EmployerJobManagementCard";
import JobManagementNavbar from "../navbar/JobManagementNavbar";
import { AiOutlineDown } from "react-icons/ai";

const MyJobs = () => {
  return (
    <>
      <JobManagementNavbar />
      {/** main section   */}
      <div className="p-10">
        {/** heading section */}
        <div className="flex justify-between py-8">
          <span className="font-bold text-2xl">My Jobs</span>
          <Button className={" w-20 text-[8px] md:w-[170px] "}>
            Post Jobs
          </Button>
        </div>

        {/** sub title div */}
        <div className="">
          <div className="flex justify-between">
            <span className="text-[#888888] text-xs">Feb 02, 2023</span>
            <AiOutlineDown />
          </div>
          <hr className="text-[3px]" />

          {/** Card div  */}
          <div className="flex justify-center items-center mt-4 flex-wrap gap-1 sm:gap-4 md:gap-x-4">
            <EmployerJobManagementCard
              view={"450 view"}
              application={"4000 aplication"}
              saved={"450 saved"}
              title={"UI/UX Assistant Manager"}
            />
            <EmployerJobManagementCard
              view={"450 view"}
              application={"4000 aplication"}
              saved={"450 saved"}
              title={"UI/UX Assistant Manager"}
            />
            <EmployerJobManagementCard
              view={"450 view"}
              application={"4000 aplication"}
              saved={"450 saved"}
              title={"UI/UX Assistant Manager"}
            />
            <EmployerJobManagementCard
              view={"450 view"}
              application={"4000 aplication"}
              saved={"450 saved"}
              title={"UI/UX Assistant Manager"}
            />
            <EmployerJobManagementCard
              view={"450 view"}
              application={"4000 aplication"}
              saved={"450 saved"}
              title={"UI/UX Assistant Manager"}
            />
            <EmployerJobManagementCard
              view={"450 view"}
              application={"4000 aplication"}
              saved={"450 saved"}
              title={"UI/UX Assistant Manager"}
            />
            <EmployerJobManagementCard
              view={"450 view"}
              application={"4000 aplication"}
              saved={"450 saved"}
              title={"UI/UX Assistant Manager"}
            />

            <EmployerJobManagementCard
              view={"450 view"}
              application={"4000 aplication"}
              saved={"450 saved"}
              title={"UI/UX Assistant Manager"}
            />
            <EmployerJobManagementCard
              view={"450 view"}
              application={"4000 aplication"}
              saved={"450 saved"}
              title={"UI/UX Assistant Manager"}
            />
          </div>
        </div>

        {/** section 2 */}

        <div>
          <div className="flex justify-between mt-4">
            <span className="text-[#888888] text-xs">Feb 10, 2023</span>
            <AiOutlineDown />
          </div>
          <hr className="text-[3px] " />

          {/** Card div  */}
          <div className="flex justify-center items-center mt-4 flex-wrap gap-1 sm:gap-4 md:gap-x-4">
            <EmployerJobManagementCard
              view={"450 view"}
              application={"4000 aplication"}
              saved={"450 saved"}
              title={"UI/UX Assistant Manager"}
            />
            <EmployerJobManagementCard
              view={"450 view"}
              application={"4000 aplication"}
              saved={"450 saved"}
              title={"UI/UX Assistant Manager"}
            />
            <EmployerJobManagementCard
              view={"450 view"}
              application={"4000 aplication"}
              saved={"450 saved"}
              title={"UI/UX Assistant Manager"}
            />
            <EmployerJobManagementCard
              view={"450 view"}
              application={"4000 aplication"}
              saved={"450 saved"}
              title={"UI/UX Assistant Manager"}
            />
            <EmployerJobManagementCard
              view={"450 view"}
              application={"4000 aplication"}
              saved={"450 saved"}
              title={"UI/UX Assistant Manager"}
            />
            <EmployerJobManagementCard
              view={"450 view"}
              application={"4000 aplication"}
              saved={"450 saved"}
              title={"UI/UX Assistant Manager"}
            />
            <EmployerJobManagementCard
              view={"450 view"}
              application={"4000 aplication"}
              saved={"450 saved"}
              title={"UI/UX Assistant Manager"}
            />

            <EmployerJobManagementCard
              view={"450 view"}
              application={"4000 aplication"}
              saved={"450 saved"}
              title={"UI/UX Assistant Manager"}
            />
            <EmployerJobManagementCard
              view={"450 view"}
              application={"4000 aplication"}
              saved={"450 saved"}
              title={"UI/UX Assistant Manager"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyJobs;
