import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import background from "../../../image/background.svg";
import signinimage from "../../../image/signin image.svg";
import facebook from "../../../image/facebook.svg";
import linkedin from "../../../image/linkedin.svg";
import google from "../../../image/google.svg";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { HiOutlineLockClosed } from "react-icons/hi";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import authService from "../../../services/authService";

const SignInPage = () => {
  const [passwordType, setPasswordType] = useState("Password");
  const [passwordView, setPasswordView] = useState(false);

  {/** Formik schema */}
  const schema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),

    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "try anothor password"
      ),
  });
 
 
{/** create navigater object  */}
  const navigate = useNavigate();

  const handleLogin = async () => {
   
    try {
      await authService.login(formData).then(
        () => {
          navigate("/home");
          // window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  const callLoginApi = () => {
    handleLogin()
  };

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
      email: "",
      password: "",
    },
    onSubmit: callLoginApi,
    validationSchema: schema,
  });

  
  const formData = {
    email: values.email,
    password: values.password,
  };
  // console.log("call log in api call ....", formData) http:
 

 

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
            "bg-[#FFFFFf] flex justify-center items-center rounded-md   p-10 w-5/6  md:h-5/6  shadow-md shadow-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)]"
          }
        >
          {/** image div */}
          <div className="hidden md:block ">
            <img src={signinimage} alt="image" />
          </div>
          {/** signup content div */}
          <div className="flex flex-col ">
            {/** heading div */}
            <div className="flex flex-col justify-center items-center gap-1">
              <h1 className="text-[#2E234E]  font-bold  text-center text-[22px] sm:text-[28px] md:text-[32px]">
                Sign In
              </h1>
              <p className="text-[#000000]   text-center text-[10px]  sm:text-[13px] md:text-[16px] leading-3 sm:leading-4 md:leading-5 mb-4 ">
                Fill your details or continue with social media
              </p>
            </div>
            {/** forminput filed and button div */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center gap-1 sm:gap-3 md:gap-4 "
            >
              <div className="relative">
                <MdOutlineAlternateEmail className="absolute translate-y-[7px] translate-x-1 text-[#2294B1] text-[12px] sm:text-[16px] md:text-[20px] sm:translate-x-2 sm:translate-y-2" />
                <label htmlFor="email" className="sr-only">email</label>
                <Input
                  placeholder=" Email Id"
                  type={"email"}
                  name={"email"}
                  id={"email"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <div className="flex justify-center">
                    <span className="text-[#EA4335] text-[8px] sm:text-[12px] md:text-[12px]">
                      {errors.email}
                    </span>
                  </div>
                )}
              </div>
              {/** password div */}
              <div className="relative">
                <HiOutlineLockClosed className="absolute translate-y-[7px] translate-x-1 text-[#2294B1] text-[12px] sm:text-[16px] md:text-[20px] sm:translate-x-2 sm:translate-y-2" />
                <label htmlFor="password" className="sr-only">Password</label>
                <Input
                  placeholder="Password"
                  type={passwordType}
                  name={"password"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  id={"password"}
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

                <div className=" flex  w-44 justify-between   sm:w-[220px] md:w-[256px]   ">
                  {touched.password && errors.password && (
                    <div className=" self-start justify-items-start  ">
                      <span className="text-[#EA4335] text-[8px] text-start">
                        {errors.password}
                      </span>
                    </div>
                  )}
                  <div className="self-end justify-items-end">
                    <Link
                      to={"/signin/forgot"}
                      className="text-black text-[8px] self-end"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </div>

              <Button
                className={"text-base disabled:text-gray-200 sm:text-[20px] "}
                disabled={!isValid}
              >
                Sign In
              </Button>

              {/** link  button div */}
              <div className="flex justify-center items-center  ">
                <div className="text-center w-[7px] h-[7px] bg-[#D9D9D9] rounded-full mx-1"></div>
                <span className="text-center text-[#7B7B7B] max-sm:text-[0.4rem] text-[12px]">
                  Or continue with
                </span>
                <div className="text-center w-[7px] h-[7px] bg-[#D9D9D9] rounded-full mx-1"></div>
              </div>
              {/** contect icon link div */}
              <div className="flex  justify-center items-center gap-2 sm:gap-4 md:gap-6 sm:w-[300px] md:w-[340px] ">
                <div className="cursor-pointer w-5 h-5 sm:scale-125 md:scale-150">
                  <img src={facebook} alt="" />
                </div>
                <div className="cursor-pointer w-5 h-5 sm:scale-125 md:scale-150 ">
                  <img src={linkedin} alt="" />
                </div>
                <div className="cursor-pointer w-5 h-5 sm:scale-125 md:scale-150">
                  <img src={google} alt="" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
