import React from "react";
import ButtonM from "../../../components/Button/ButtonM";
import CandidateRoles from "../candidateRoles/CandidateRoles";
import JobGuideline from "../jobGuidelines/JobGuideline";
import PostJobDescription from "../postJobDescription/PostJobDescription";
import JobManagementNavbar from "../navbar/JobManagementNavbar";

const JobDescriptionNavbar = () => {
  return (
    <>
      <JobManagementNavbar />
      <div className="px-10  ">
        <div className="flex justify-start items-center px-10 ">
          <h1 className="font-bold text-3xl">Post Job</h1>
        </div>

        <nav className="px-10 py-2 hidden md:block">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link  active "
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Description
            </button>
            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Candidate Roles
            </button>
            <button
              className="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Job Guidelines
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent ">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabindex="0"
          >
            <PostJobDescription />{" "}
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabindex="0"
          >
            <CandidateRoles />
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabindex="0"
          >
            <JobGuideline />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDescriptionNavbar;
