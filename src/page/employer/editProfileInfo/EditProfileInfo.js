import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import EditProfileInfoComponent from "./EditProfileInfoComponent";

const EditProfileInfo = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <EditProfileInfoComponent></EditProfileInfoComponent>
      </div>
    </>
  );
};

export default EditProfileInfo;
