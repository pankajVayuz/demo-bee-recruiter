import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import addanewphonenumber from "../../../../src/image/Employer/addanewphonenumber.svg";
import ButtonP from "../../../components/Button/ButtonP";
import InputEp from "../../../components/Input/InputEp";
import  icon_01  from "../../../../src/image/Employer/icons/changePhoneNumber/icon_01.svg";
import  icon_02 from "../../../../src/image/Employer/icons/changePhoneNumber/icon_02.svg";
import  icon_03 from "../../../../src/image/Employer/icons/changePhoneNumber/icon_03.svg";

const ChangePhoneNumberComponent = () => {
  return (
    // Main Div
    <div className=" flex flex-col md:flex-row text-left">
      <div className=" flex flex-col m-4">
        <div>
          <p className=" text-2xl font-bold">Change Phone Numbers</p>
        </div>
        <div>
          <p className=" mt-3 text-base font-medium ">
            Previously added phone numbers.
          </p>
        </div>

        {/* Image div */}

        <div className=" border-BorderColor mt-3 p-2 flex justify-center items-center h-28 w-96 border-2 rounded-2xl ">
          <div className=" flex items-center justify-center h-20 w-20 rounded-full bg-Bee-Input_Bg1">
            <BsFillTelephoneFill className=" text-IconColor text-3xl "></BsFillTelephoneFill>
          </div>
          <div className=" m-3">
            <p className=" text-gray-400">Primary phone number:</p>
            <p>+897 874 1839</p>
          </div>
        </div>
      </div>

      {/* Right Side div */}
      <div className=" ">
        <div className=" m-4">
          <p className=" text-2xl font-bold">Add a new phone number</p>
          <img src={addanewphonenumber} alt="" />
        </div>
        <div className=" justify-center items-center">
          <p className="  text-base font-medium">
            We’ll send a verification code to this number.
          </p>
          <div className=" flex items-center ">
            <img className=" absolute pl-1 pt-2" src={icon_02} alt="" />
            <InputEp
              placeholder={"Phone No."}
              className={" mt-2 indent-4 "}
            ></InputEp>
          </div>
          <p>Confirm your Bee Recruiter password.</p>
          <div>
            <div className=" flex relative items-center">
                  <img
                    className=" absolute pt-2 pl-1 items-center "
                    src={icon_03}
                    alt=""
                  />
                  <InputEp
                    className={" indent-4 "}
                    placeholder={"Password"}
                  ></InputEp>
                  <img
                    className=" absolute right-0 pr-1 pt-2 "
                    src={icon_01}
                    alt=""
                  />
                </div>
          </div>
        </div>
        <ButtonP
          className={
            "text-base md:text-lg lg:text-2xl text-center mt-4 justify-center items-center"
          }
        >
          Send Code
        </ButtonP>
      </div>
    </div>
  );
};

export default ChangePhoneNumberComponent;
