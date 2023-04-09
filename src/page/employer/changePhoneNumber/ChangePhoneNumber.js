import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import ChangePhoneNumberC from "./ChangePhoneNumberC";

const ChangePhoneNumber = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex">
        <Sidebar />
        <ChangePhoneNumberC />
      </div>
    </>
  );
};

export default ChangePhoneNumber;
