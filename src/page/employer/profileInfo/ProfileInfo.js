import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import ProfileInfoC from "../profileInfo/ProfileInfoC"

const ProfileInfo = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <ProfileInfoC></ProfileInfoC>
      </div>
    </>
  );
};

export default ProfileInfo;
