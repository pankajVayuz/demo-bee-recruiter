import React from "react";
import ButtonM from "../../../components/Button/ButtonM";
import JobManagementNavbar from "../navbar/JobManagementNavbar";
import Element from "./Element";
import Element2 from "./Element2";
import Element3 from "./Element3";
import {
  condidateRolesData,
  contentData,
  jobGuidelinesData,
  userData,
} from "./userData";

const Index = () => {
  return (
    <>
      <JobManagementNavbar />
      {/** main div */}
      <div className="flex flex-col gap-3 justify-center items-start  px-10 pb-10 ">
        {/** heading */}
        <div className="font-bold text-Bee-Heading text-xl sm:text-2xl md:text-3xl ">
          Preview Job
        </div>
        {/** section 1 */}
        <div>
          {/** internal heading */}
          <div className="font-bold text-Bee-Black2 sm:text-xl md:text-2xl ">
            {" "}
            Junior UI/UX Designer
          </div>
          {/** content section */}
          <div className="flex gap-1 flex-col">
            {/** icon and text div */}

            {userData.map((data) => (
              <Element icon={data.icon} text={data.text} />
            ))}
          </div>
        </div>
        {/** Job Description section */}
        {contentData.map((data) => (
          <Element2 heading={data.heading} text={data.text} />
        ))}
        {condidateRolesData.map((data) => (
          <Element3
            heading1={data.heading1}
            heading2={data.heading2}
            text1={data.text1}
            text2={data.text2}
          />
        ))}

        {jobGuidelinesData.map((data) => (
          <Element2 heading={data.heading} text={data.text} />
        ))}

        <div className=" min-h-full min-w-full flex justify-end items-center gap-4  ">
          <button className="text-[#888888]">Previous</button>
          <ButtonM>Next</ButtonM>
        </div>
      </div>
    </>
  );
};

export default Index;
