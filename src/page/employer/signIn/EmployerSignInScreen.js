import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import background from "../../../image/background.svg";
import signinimage from "../../../image/Employer/employerSigninImage.svg";
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
import { useDispatch, useSelector } from "react-redux";
import {
  employerSignin,
  employerVerifyOtpResend,
} from "../../../actions/employer/employer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { EMPLOYER_ERROR_RESET } from "../../../constant/employerConstant";

const EmployerSignInScreen = () => {
  const [passwordType, setPasswordType] = useState("Password");
  const [passwordView, setPasswordView] = useState(false);
  const { success, loading, error, userInfo } = useSelector(
    (state) => state.employerAuth
  );

  const dispatch = useDispatch();

  {
    /** Formik schema */
  }
  const schema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),

    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "try anothor password"
      ),
  });

  {
    /** create navigater object  */
  }
  const navigate = useNavigate();

  const callLoginApi = () => {
    dispatch(employerSignin(formData));

    console.log("callloginApi.......");
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
  useEffect(() => {
    if (error) {
      toast(error, { type: "error" });
      console.log("error.....", error);
    }
  }, [error]);

  useEffect(() => {
    if ( userInfo?.isDashboardOpen) {
      navigate("/employer/dashboard")
    }
  }, [userInfo?.isDashboardOpen]);
  
  useEffect(() => {
    if ( userInfo?.isPhoneVerified && userInfo?.token) {
      navigate("/employer/dashboard")
    }
  }, [userInfo?.isPhoneVerified]);

  useEffect(() => {
    if ( !userInfo?.isPhoneVerified && userInfo?.token) {
      dispatch(employerVerifyOtpResend({otpfor:"verify_number"}))
      navigate("/employer/verify")
    }
  }, [userInfo?.isPhoneVerified,userInfo?.token]);

  useEffect(() => {
    if (success) {

      toast(success, { type: "success" });
     
    }
  }, [success]);
 
  
  

  return (
    <>
      {/**main screen div */}
      <div
        className={
          "h-screen  w-screen flex justify-center items-center bg-no-repeat bg-center bg-cover "
        }
        style={{ backgroundImage: `url(${background})` }}
      >
        <ToastContainer />
        {/** main  content div */}
        <div
          className={
            "bg-Bee-Main_Bg flex justify-center items-center rounded-md   p-10 w-5/6  md:h-5/6  shadow-md shadow-black "
          }
        >
          {/** image div */}
          <div className="hidden md:block scale-75 ">
            <img src={signinimage} alt="image" />
          </div>
          {/** signup content div */}
          <div className="flex flex-col ">
            {/** heading div */}
            <div className="flex flex-col justify-center items-center gap-1">
              <h1 className="text-Bee-Heading  font-bold  text-center text-[22px] sm:text-[28px] md:text-[32px]">
                Sign In
              </h1>
              <p className="text-Bee-Black   text-center text-[10px]  sm:text-[13px] md:text-[16px] leading-3 sm:leading-4 md:leading-5 mb-4 ">
                Fill your details or continue with social media
              </p>
            </div>
            {/** forminput filed and button div */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center gap-1 sm:gap-3 md:gap-4 "
            >
              <div className="relative">
                <MdOutlineAlternateEmail className="absolute translate-y-[7px] translate-x-1 text-Bee-Gray text-[12px] sm:text-[16px] md:text-[20px] sm:translate-x-2 sm:translate-y-2" />
                <label htmlFor="email" className="sr-only">
                  email
                </label>
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
                    <span className="text-Bee-Error text-[8px] sm:text-[12px] md:text-[12px]">
                      {errors.email}
                    </span>
                  </div>
                )}
              </div>
              {/** password div */}
              <div className="relative">
                <HiOutlineLockClosed className="absolute translate-y-[7px] translate-x-1 text-Bee-Gray text-[12px] sm:text-[16px] md:text-[20px] sm:translate-x-2 sm:translate-y-2" />
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
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
                    className="  text-Bee-Gray absolute  translate-x-[157px] -translate-y-[18px]  sm:translate-x-[195px] sm:-translate-y-[26px]  sm:text-xl cursor-pointer md:translate-x-[230px] md:-translate-y-[30px]"
                    onClick={() => {
                      setPasswordView(!passwordView);
                      setPasswordType("password");
                      console.log("cnfirm view   ...", passwordView);
                    }}
                  />
                ) : (
                  <BiHide
                    className="  text-Bee-Gray absolute  translate-x-[157px] -translate-y-[18px]  sm:translate-x-[195px] sm:-translate-y-[26px]  sm:text-xl cursor-pointer md:translate-x-[230px] md:-translate-y-[30px]"
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
                      <span className="text-Bee-Error text-[8px] text-start">
                        {errors.password}
                      </span>
                    </div>
                  )}
                  <div className="self-end justify-items-end">
                    <Link
                      to={"/employer/forgotpassword"}
                      className="text-Bee-Black text-[8px] self-end"
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
                {loading && loading ? "Loading..." : "Sign In"}
              </Button>

              {/** link  button div */}
              <div className="flex justify-center items-center  ">
                <div className="text-center w-[7px] h-[7px] bg-Bee-Dot rounded-full mx-1"></div>
                <span className="text-center text-Bee-Continue max-sm:text-[0.4rem] text-[12px]">
                  Or continue with
                </span>
                <div className="text-center w-[7px] h-[7px] bg-Bee-Dot rounded-full mx-1"></div>
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

export default EmployerSignInScreen;
