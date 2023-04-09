import React from "react";
import language_icon from "../../../image/Employer/icons/languagePreference/language_icon.svg";
import ButtonP from "../../../components/Button/ButtonP";

const LanguagePreferenceC = () => {
  return (
    <>
      {/* Main DIV */}
      <div className=" flex flex-col p-4">
        {/* Text DIV */}
        <div className="flex flex-col gap-2">
          <p className=" font-bold text-2xl ">Language Preference</p>
          <p className=" font-semibold text-base ">
            Please select the language of your preference.
          </p>
        </div>
        {/* Card DIV */}
        <div className=" flex flex-col md:flex-row mt-4 gap-9">
          <div className=" h-36 w-44 bg-cyan-600 rounded shadow-lg cursor-pointer">
            <div className=" flex p-4 gap-2">
              <img src={language_icon} alt="" />
              <p className=" text-white ">English</p>
            </div>
            <p className=" text-center font-extrabold text-5xl text-white">A</p>
          </div>
          <div className=" h-36 w-44 bg-gray-100 rounded shadow-lg cursor-pointer">
            <div className=" flex p-4 gap-2">
              <img className=" invert " src={language_icon} alt="" />
              <p className=" text-gray-500 font-semibold ">Arabic</p>
            </div>
            <p className=" text-center font-extrabold text-5xl text-gray-500">A</p>
          </div>
          <div className=" h-36 w-44 bg-gray-100 rounded shadow-lg cursor-pointer">
            <div className=" flex p-4 gap-2">
              <img className=" invert " src={language_icon} alt="" />
              <p className=" text-gray-500 font-semibold ">French</p>
            </div>
            <p className=" text-center font-extrabold text-5xl text-gray-500">A</p>
          </div>
          <div></div>
          <div></div>
        </div>

        {/* Button */}
        <div className=" absolute bottom-2 right-4 h-14 w-60 ">
          <ButtonP className={" justify-center items-center"}>Save</ButtonP>
        </div>
      </div>
    </>
  );
};

export default LanguagePreferenceC;
