import React from "react";
import InputP from "../../../components/Input/InputP";
import ButtonP from "../../../components/Button/ButtonP";
import changePasswordImg from "../../../image/Employer/changePasswordImg.svg";
import icon_1 from "../../../image/Employer/icons/changePassword/icon_1.svg";
import icon_2 from "../../../image/Employer/icons/changePassword/icon_2.svg";
import icon_3 from "../../../image/Employer/icons/changePassword/icon_3.svg";
import icon_4 from "../../../image/Employer/icons/changePassword/icon_4.svg";

const ChangePasswordC = () => {
  return (
    // Main Div
    <>
      <div className=" flex flex-col m-4 ">
        {/* Upper Section */}
        <div className=" px-3 pb-2 border rounded-xl ">
          <div className="flex items-center justify-between">
            <p className=" pt-4 text-xl font-bold">Note</p>
            <span>
              <img className=" cursor-pointer" src={icon_3} alt="" />
            </span>
          </div>
          <div>
            <p>
              Great! We appreciate your efforts into keeping your account secure
              by engaging into the practice of changing password. Now, please
              follow following set of rules to keep it absolutely secure.
            </p>
          </div>
          <div>
            <div>
              <div className="flex items-center gap-2">
                <span>
                  <img src={icon_2} alt="" />
                </span>
                <p>Atleast 6 characters.</p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <img src={icon_2} alt="" />
                </span>
                <p>Atleast 1 upper case (A-Z) & lower case (a-z) letter.</p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <img src={icon_2} alt="" />
                </span>
                <p>Atleast 1 number (0-9).</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex items-center my-2 ">
          {/* Lower Section */}
          <div className=" flex flex-col">
            <div>
              <p className=" text-2xl font-bold ">Change Your Password</p>
            </div>
            <form className=" text-gray-500">
              <div className=" my-2">
                <label>Enter your current password.</label>
                <div className=" flex relative">
                  <img
                    className=" absolute pt-2 pl-1 items-center "
                    src={icon_4}
                    alt=""
                  />
                  <InputP
                    className={" indent-"}
                    placeholder={"Current Password"}
                  ></InputP>
                  <img
                    className=" absolute right-0 pr-1 pt-2 "
                    src={icon_1}
                    alt=""
                  />
                </div>
              </div>
              <div className=" my-2">
                <label>Enter your new password.</label>
                <div className="flex relative">
                  <img
                    className=" absolute pt-2 pl-1 items-center "
                    src={icon_4}
                    alt=""
                  />
                  <InputP placeholder={"New Password"}></InputP>
                  <img
                    className=" absolute right-0 pr-1 pt-2 "
                    src={icon_1}
                    alt=""
                  />
                </div>
              </div>
              <div className=" my-2">
                <label>Confirm your new password.</label>
                <div className=" flex relative ">
                  <img
                    className=" absolute pt-2 pl-1 items-center "
                    src={icon_4}
                    alt=""
                  />
                  <InputP placeholder={"Confirm Password"}></InputP>
                  <img
                    className=" absolute right-0 pr-1 pt-2"
                    src={icon_1}
                    alt=""
                  />
                </div>
              </div>
              <ButtonP className={" w-full mt-8 items-center justify-center"}>
                Update Password
              </ButtonP>
            </form>
          </div>

          {/* Right Side Image */}

          <div>
            <img
              className=" sm:flex w-full hidden"
              src={changePasswordImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePasswordC;
