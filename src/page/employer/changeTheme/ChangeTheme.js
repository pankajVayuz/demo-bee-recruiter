import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import ChangeThemeComponent from "./ChangeThemeComponent";

const ChangeTheme = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <ChangeThemeComponent></ChangeThemeComponent>
      </div>
    </>
  );
};

export default ChangeTheme;
