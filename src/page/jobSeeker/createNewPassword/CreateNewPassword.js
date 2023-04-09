import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import background from "../../../image/background.svg";
import newpasswordimage from "../../../image/create-new-password-image.svg";
import { HiOutlineLockClosed } from "react-icons/hi";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup";

const CreateNewPassword = () => {

  const [passwordView, setPasswordView] = useState(false);
  const [confirmPasswordView, setConfirmPasswordView] = useState(false);

  const [passwordType, setPasswordType] = useState("Password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("Password");
  const callLoginApi = () => {
    const formData = {
      password: values.password,
      confirmPassword: values.confirmPassword,
    };
    console.log("call log in api call ....", formData);
  };

  const schema = Yup.object().shape({
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "try anothor password"
      ),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    isValid,
    values,
    errors,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: callLoginApi,
    validationSchema: schema,
  });

  return (
    <>
      {/**main screen div */}
      <div
        className={
          "h-screen  w-screen flex justify-center items-center bg-no-repeat bg-center bg-cover "
        }
        style={{ backgroundImage: `url(${background})` }}
      >
        {/** main  content div */}
        <div
          className={
            "bg-[#FFFFFf] flex justify-center items-center rounded-md   p-10 w-5/6  md:h-5/6  shadow-md shadow-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)] "
          }
        >
          {/** image div */}
          <div className=" hidden md:block ">
            <img src={newpasswordimage} alt="image" />
          </div>
          {/** signup content div */}
          <div className="flex flex-col   ">
            {/** heading div */}
            <div className="flex flex-col justify-center items-center gap-1">
              <h1 className="text-[#2E234E]  font-bold  text-center text-[22px] sm:text-[28px] md:text-[32px]">
                Create New Password
              </h1>
              <p className="text-[#000000]   text-center text-[10px]  sm:text-[13px] md:text-[16px] leading-3 sm:leading-4 md:leading-5 mb-4 ">
                Create your new password to sign in
              </p>
            </div>
            {/** forminput filed and button div */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center gap-1 sm:gap-3 md:gap-4"
            >
              {/** password div */}
              <div className="relative">
                <HiOutlineLockClosed className="absolute translate-y-[7px] translate-x-1 text-[#2294B1] text-[12px] sm:text-[16px] md:text-[20px] sm:translate-x-2 sm:translate-y-2" />
                <label htmlFor="password" className="sr-only">Password</label>
              <Input
                  placeholder="Password"
                  id={"password"}
                type={passwordType}
                name={"password"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {passwordView ? (
                <BiShow
                  className="  text-[#888888] absolute  translate-x-[157px] -translate-y-[18px]  sm:translate-x-[195px] sm:-translate-y-[26px]  sm:text-xl cursor-pointer md:translate-x-[230px] md:-translate-y-[30px]"
                  onClick={() => {
                    setPasswordView(!passwordView);
                    setPasswordType("password");
                    console.log("cnfirm view   ...", passwordView);
                  }}
                />
              ) : (
                <BiHide
                className="  text-[#888888] absolute  translate-x-[157px] -translate-y-[18px]  sm:translate-x-[195px] sm:-translate-y-[26px]  sm:text-xl cursor-pointer md:translate-x-[230px] md:-translate-y-[30px]"
                  onClick={() => {
                    setPasswordView(!passwordView);
                    setPasswordType("text");
                    console.log("cnfirm view   ...", passwordView);
                  }}
                />
              )}
              {touched.password && errors.password && (
                <div className="flex justify-center ">
                  <span className="text-[#EA4335] text-[8px] sm:text-[12px] md:text-[12px] ">
                    {errors.password}
                  </span>
                </div>
              )}
            </div>

            <div className="relative">
              <HiOutlineLockClosed className="absolute translate-y-[7px] translate-x-1 text-[#2294B1] text-[12px] sm:text-[16px] md:text-[20px] sm:translate-x-2 sm:translate-y-2" />
              <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
              <Input
                placeholder=" Confirm Password"
                type={confirmPasswordType}
                  name={"confirmPassword"}
                  id={"confirmPassword"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {confirmPasswordView ? (
                <BiShow
                className="  text-[#888888] absolute  translate-x-[157px] -translate-y-[18px]  sm:translate-x-[195px] sm:-translate-y-[26px]  sm:text-xl cursor-pointer md:translate-x-[230px] md:-translate-y-[30px]"
                  onClick={() => {
                    setConfirmPasswordView(!confirmPasswordView);
                    setConfirmPasswordType("password");
                    console.log("cnfirm view   ...", confirmPasswordView);
                  }}
                />
              ) : (
                <BiHide
                className="  text-[#888888] absolute  translate-x-[157px] -translate-y-[18px]  sm:translate-x-[195px] sm:-translate-y-[26px]  sm:text-xl cursor-pointer md:translate-x-[230px] md:-translate-y-[30px]"
                  onClick={() => {
                    setConfirmPasswordView(!confirmPasswordView);
                    setConfirmPasswordType("text");
                    console.log("cnfirm view   ...", confirmPasswordView);
                  }}
                />
              )}
              {touched.confirmPassword && errors.confirmPassword && (
                <div className="flex justify-center">
                  <span className="text-[#EA4335] text-[8px] sm:text-[12px] md:text-[12px]">
                    {errors.confirmPassword}
                  </span>
                </div>
              )}
            </div>

              <Button className={"max-sm:text-xs disabled:text-indigo-200"}  disabled={!isValid}>Continue</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewPassword;
