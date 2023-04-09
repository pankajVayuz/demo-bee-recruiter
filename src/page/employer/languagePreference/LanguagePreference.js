import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import LanguagePreferenceC from "../languagePreference/LanguagePreferenceC";

const LanguagePreference = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex">
      <Sidebar></Sidebar>
      <LanguagePreferenceC></LanguagePreferenceC>
      </div>
    </>
  );
};

export default LanguagePreference;
