import React from "react";
import JobManagementNavbar from "../navbar/JobManagementNavbar";
import Certificates from "./Certificates";
import Element1 from "./Element1";
import Element2 from "./Element2";
import JobSeekerManagement from "./JobSeekerManagement";
import ResumeApproved from "./ResumeApproved";
import ResumeManagementCard from "./ResumeManagementCard";
import Skills from "./Skills";
import {
  cardData,
  cardData2,
  cardData3,
  cretificateData,
  hobbies,
  jobSeekerData,
  listData,
  resumeApprovedData,
  resumeManagementData,
  skills,
  userData,
} from "./userData";
import UserElement from "./UserElement";

const ReportApplicationManagement = () => {
  return (
    <>
      {/** container */}
      <div className="sm:ml-12 sm:mr-8 md:ml-16 md:mb-10 md:mr-10 sm:flex sm:flex-col sm:gap-3 p-4">
        <div className="">
          <JobManagementNavbar />
        </div>
        <div className=" sm:ml-12 sm:mr-8 md:ml-12 md:mr-10  flex justify-center sm:justify-start ">
          {userData.map((data) => (
            <UserElement
              mail={data.mail}
              heading={data.heading}
              address={data.address}
              img={data.img}
              code={data.code}
            />
          ))}
        </div>
        <hr className="ml-8 mt-8 hidden sm:block bg-Bee-Border h-[3px]" />

        <div>
          {cardData.map((data) => (
            <Element1
              list={data.listData}
              platform={data.platform}
              mad={data.mad}
              city={data.city}
              date={data.date}
              img={data.img}
              title={data.title}
              heading={data.heading}
            />
          ))}
        </div>
        <hr className="ml-8 mt-8 hidden sm:block bg-Bee-Border h-[3px]" />

        <div>
          {cardData2.map((data) => (
            <Element1
              list={data.listData}
              platform={data.platform}
              mad={data.mad}
              city={data.city}
              date={data.date}
              img={data.img}
              heading={data.heading}
            />
          ))}
        </div>

        <div>
          {cardData3.map((data) => (
            <Element2 cardData={data.cardData} title={data.title} />
          ))}
        </div>
        <div>
          {cretificateData.map((data) => (
            <Certificates title={data.title} cardData={data.cardData} />
          ))}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 sm:justify-between">
          <div className="flex sm:w-2/4">
            {skills.map((data) => (
              <Skills title={data.title} skills={data.skills} />
            ))}
          </div>

          <div className="flex sm:w-2/4">
            {hobbies.map((data) => (
              <Skills title={data.title} skills={data.hobbies} />
            ))}
          </div>
        </div>

        <div className="flex ">
          {jobSeekerData.map((data) => (
            <JobSeekerManagement title={data.title} card={data.cardData} />
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {/** section 1 */}
          <span className="text-Bee-Black2 font-bold text-sm sm:text-base md:text-xl">
            Resume Management
          </span>
          {/** section 2 */}
          <span className="text-Bee-Black2 text-xs sm:text-sm md:text-base">
            Resume Downloaded
          </span>
          {/** section 3 */}
          <div className="flex flex-col gap-2 sm:flex-row">
            {resumeManagementData.map((data) => (
              <ResumeManagementCard
                heading={data.heading}
                subHeading={data.subHeading}
                cvCounter={data.cvCounter}
                img={data.img}
              />
            ))}
          </div>
        </div>
        {/**resume approved section */}
        <div className="flex flex-col">
          <div>
            <span className="text-Bee-Black2">Resume Approved</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            {resumeApprovedData.map((data) => (
              <ResumeApproved
                name={data.name}
                email={data.email}
                img={data.img}
                status={data.status}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportApplicationManagement;
