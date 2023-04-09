import React from "react";
import JobManagementNavbar from "../navbar/JobManagementNavbar";
import Card from "./Card";
import Element from "./Element";
import { cardData } from "./userData";

const ReportScreen = () => {
  return (
    <>
      <JobManagementNavbar />
      {/** main div */}
      <div className="px-10 pb-10 flex gap-2 flex-col">
        {/** headind div */}
        <div className="md:text-2xl  text-Bee-Heading font-bold">Report</div>
        {/** nav div  */}
        <Element />

        <div className="flex justify-around flex-col gap-2">
          {cardData.map((data, i) => (
            <Card
              index={i}
              jobTitle={data.jobTitle}
              jobCode={data.jobCode}
              jobPostView={data.jobPostView}
              postedOn={data.postedOn}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ReportScreen;
