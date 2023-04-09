import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import ChangePasswordC from "../changePassword/ChangePasswordC"

const ChangePassword = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <ChangePasswordC></ChangePasswordC>
      </div>
    </>
  );
};

export default ChangePassword;
