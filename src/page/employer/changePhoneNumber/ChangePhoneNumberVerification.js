import React from "react";
import ChangePhoneNumber from "./ChangePhoneNumber";
import icon_01 from "../../../../src/image/Employer/icons/changePhoneNumberVerify/icon_01.svg";
import ButtonP from "../../../components/Button/ButtonP";
const ChangePhoneNumberVerification = () => {
  return (
    <>
      {/* Main Div */}
      <div className=" flex relative ">
        <div className="blur">
          <ChangePhoneNumber></ChangePhoneNumber>
        </div>

        {/* Pop-Up Screen */}
        <div className=" p-6 flex flex-col rounded-3xl drop-shadow-xl bg-white absolute top-2/4 left-1/2 -translate-y-2/4 -translate-x-2/4 ">
          <div className=" flex flex-col rounded-3xl ">
            <div className=" flex flex-col rounded-3xl text-center ">
              <div className=" flex flex-row-reverse  ">
                <img className=" cursor-pointer " src={icon_01} alt="" />
              </div>
              <p className=" font-extrabold text-2xl pt-10 ">Verify Number</p>
              <p className=" font-semibold text-base ">
                Please enter the 4 digit code sent on phone no.{" "}
              </p>
            </div>

            {/* Form */}
            <form className=" flex items-center justify-center p-20 gap-4 ">
              <input className=" w-11 border-gray-400 border-b-2 " type="text" />
              <input className=" w-11 border-gray-400 border-b-2 " type="text" />
              <input className=" w-11 border-gray-400 border-b-2 " type="text" />
              <input className=" w-11 border-gray-400 border-b-2 " type="text" />
            </form>

            <div className=" flex justify-center items-center ">
              <p className=" text-sm font-bold text-gray-400 ">Didn’t receive a code?</p>
              <span className=" text-orange-400 pl-1 cursor-pointer ">Resend</span>
            </div>

            <ButtonP className={" justify-center items-center text-xl "}>Verify</ButtonP>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePhoneNumberVerification;
