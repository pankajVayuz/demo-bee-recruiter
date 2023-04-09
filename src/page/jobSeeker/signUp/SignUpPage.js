import React, { useEffect, useState } from "react";

import background from "../../../image/background.svg";
import signupimage from "../../../image/signup image.png";
import facebook from "../../../image/facebook.svg";
import linkedin from "../../../image/linkedin.svg";
import google from "../../../image/google.svg";
import { BiHide } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { HiOutlineLockClosed } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BiShow } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import SignUpInput from "../../../components/Input/SignUpInput";
import SignUpButton from "../../../components/Button/SignUpButton";
// import Api from "../../Services/Services";
import authService from "../../../services/authService";
import ReCAPTCHA from "react-google-recaptcha";

const SignUpPage = () => {
  const [passwordView, setPasswordView] = useState(false);
  const [confirmPasswordView, setConfirmPasswordView] = useState(false);

  const [passwordType, setPasswordType] = useState("Password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("Password");

  const navigate = useNavigate();

  {
    /**user schema validation  */
  }
  const schema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email().required("Email is required"),
    phone: Yup.number().required("Phone Number is required"),
    location: Yup.string(),
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

  {
    /** api call for add new user */
  }
  const handleSignup = async () => {
    try {
      await authService.signup(formData).then(
        (res) => {
          console.log("sign up sucessfull..");
          localStorage.setItem("userNumber",values.phone)
          navigate("/home");
          // window.location.reload();
          if (res) {
            resetForm()
          }
        },
        (errors) => {
          console.log("Throw error", errors);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const callLoginApi = () => {
    handleSignup();
  };

  {
    /** desctructru function from  useFormic hooks */
  }
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    isValid,
    values,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      location: "",
    },
    onSubmit: callLoginApi,
    validationSchema: schema,
  });

  {
    /** form data object */
  }
  const formData = {
    email: values.email,
    password: values.password,
    user_contact: values.phone,
    first_name: values.firstName,
    last_name: values.lastName,
    user_role: "Jobseeker",
    user_current_location: values.location,
  };
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <>
      {/**main screen div */}
      <div
        className={"h-screen  w-screen flex justify-center items-center bg-cover bg-center "}
        style={{ backgroundImage: `url(${background})`}}
      >
        {/** main  content div */}
        <div
          className={
            " bg-[#FFFFFF] flex justify-center items-center rounded-md   p-10 w-5/6  shadow-md shadow-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)] "
          }
          style={{zIndex:5}}
        >
          {/** image div */}
          <div className="hidden md:block  ">
            <img src={signupimage} alt="image" />
          </div>
          {/** signup content div */}
          <div className="flex flex-col    ">
            {/** heading div */}
            <div className="flex flex-col justify-center items-center gap-1">
              <h1 className="text-[#2E234E]  font-bold  text-center text-[22px] sm:text-[24px] md:text-[24px] ">
                Sign Up
              </h1>
              <p className="text-[#000000]   text-center text-[10px]  sm:text-[12px] md:text-[12px] leading-3 sm:leading-3 md:leading-3 mb-2 ">
                Fill your details or continue with social media
              </p>
            </div>
            {/** forminput filed and button div */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center  sm:gap-2 md:gap-2 "
            >
              <div className="relative">
                <CiUser className="absolute translate-y-[7px] translate-x-1 text-[#2294B1] text-[12px] sm:text-[16px] md:text-[14px] sm:translate-x-2 sm:translate-y-2 md:translate-x-[7px] md:translate-y-[6px]" />
                <label htmlFor="fname" className="sr-only">First Name</label>
                <SignUpInput
                  placeholder="First Name"
                  type={"text"}
                  name={"firstName"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  id={"fname"}
                />
                {touched.firstName && errors.firstName && (
                  <div className="flex justify-center">
                    <span className="text-[#EA4335] text-[8px] sm:text-[8px] md:text-[8px]">
                      {errors.firstName}
                    </span>
                  </div>
                )}
              </div>

              <div className="relative">
                <CiUser className="absolute translate-y-[7px] translate-x-1 text-[#2294B1] text-[12px] sm:text-[14px] md:text-[14px] sm:translate-x-[7px] sm:translate-y-[6px] md:translate-x-[7px] md:translate-y-[6px]" />
                <label htmlFor="lname" className="sr-only">Last Name</label>
                <SignUpInput
                  placeholder="Last Name"
                  type={"text"}
                  name={"lastName"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  id={"lname"}
                />
                {touched.lastName && errors.lastName && (
                  <div className="flex justify-center">
                    <span className="text-[#EA4335] text-[8px] sm:text-[8px] md:text-[8px]">
                      {errors.lastName}
                    </span>
                  </div>
                )}
              </div>

              <div className="relative">
                <FiPhone className="absolute translate-y-[7px] translate-x-1 text-[#2294B1] text-[12px] sm:text-[14px] md:text-[14px] sm:translate-x-[7px] sm:translate-y-[6px] md:translate-x-[7px] md:translate-y-[6px]" />
                <label htmlFor="phone" className="sr-only">Phone</label>
                <SignUpInput
                  placeholder=" Phone No."
                  type={"number"}
                  name={"phone"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  id={"phone"}
                />
                {touched.phone && errors.phone && (
                  <div className="flex justify-center">
                    <span className="text-[#EA4335] text-[8px] sm:text-[8px] md:text-[8px]">
                      {errors.phone}
                    </span>
                  </div>
                )}
              </div>

              <div className="relative">
                <MdOutlineAlternateEmail className="absolute translate-y-[7px] translate-x-1 text-[#2294B1] text-[12px] sm:text-[14px] md:text-[14px] sm:translate-x-[7px] sm:translate-y-[6px] md:translate-x-[7px] md:translate-y-[6px]" />
                <label htmlFor="email" className="sr-only">Email</label>
                <SignUpInput
                  placeholder=" Email Id"
                  type={"email"}
                  name={"email"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  id={"email"}
                />
                {touched.email && errors.email && (
                  <div className="flex justify-center">
                    <span className="text-[#EA4335] text-[8px] sm:text-[8px] md:text-[8px] ">
                      {errors.email}
                    </span>
                  </div>
                )}
              </div>
              {/** map field */}
              <div className="relative">
                <GoLocation className="absolute translate-y-[7px] translate-x-1 text-[#2294B1] text-[12px] sm:text-[14px] md:text-[14px] sm:translate-x-[7px] sm:translate-y-[6px] md:translate-x-[7px] md:translate-y-[6px]" />
                <label htmlFor="location" className="sr-only">Location</label>
                <SignUpInput
                  placeholder=" Location"
                  type={"text"}
                  name={"location"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.location}
                  id={"location"}
                />
              </div>
              {/** password div */}
              <div className="relative">
                <HiOutlineLockClosed className="absolute translate-y-[7px] translate-x-1 text-[#2294B1] text-[12px] sm:text-[14px] md:text-[14px] sm:translate-x-[7px] sm:translate-y-[6px] md:translate-x-[7px] md:translate-y-[6px]" />
                <label htmlFor="password" className="sr-only">Password</label>
                <SignUpInput
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
                    className="  text-[#888888] absolute  translate-x-[157px] -translate-y-[18px]  sm:translate-x-[195px] sm:-translate-y-[20px]  sm:text-[16px] cursor-pointer md:translate-x-[233px] md:-translate-y-[20px] md:text-[16px] "
                    onClick={() => {
                      setPasswordView(!passwordView);
                      setPasswordType("password");
                      console.log("cnfirm view   ...", passwordView);
                    }}
                  />
                ) : (
                  <BiHide
                    className="  text-[#888888] absolute  translate-x-[157px] -translate-y-[18px]  sm:translate-x-[195px] sm:-translate-y-[20px]  sm:text-[16px] cursor-pointer md:translate-x-[233px] md:-translate-y-[20px] md:text-[16px] "
                    onClick={() => {
                      setPasswordView(!passwordView);
                      setPasswordType("text");
                      console.log("cnfirm view   ...", passwordView);
                    }}
                  />
                )}
                {touched.password && errors.password && (
                  <div className="flex justify-center ">
                    <span className="text-[#EA4335] text-[8px] sm:text-[8px] md:text-[8px] ">
                      {errors.password}
                    </span>
                  </div>
                )}
              </div>

              <div className="relative">
                <HiOutlineLockClosed className="absolute translate-y-[7px] translate-x-1 text-[#2294B1] text-[12px] sm:text-[14px] md:text-[14px] sm:translate-x-[7px] sm:translate-y-[6px] md:translate-x-[7px] md:translate-y-[6px]" />
                <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                <SignUpInput
                  placeholder=" Confirm Password"
                  type={confirmPasswordType}
                  name={"confirmPassword"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  id={"confirmPassword"}
                />
                {confirmPasswordView ? (
                  <BiShow
                    className="  text-[#888888] absolute  translate-x-[157px] -translate-y-[18px]  sm:translate-x-[195px] sm:-translate-y-[20px]  sm:text-[16px] cursor-pointer md:translate-x-[233px] md:-translate-y-[20px] md:text-[16px] "
                    onClick={() => {
                      setConfirmPasswordView(!confirmPasswordView);
                      setConfirmPasswordType("password");
                      console.log("cnfirm view   ...", confirmPasswordView);
                    }}
                  />
                ) : (
                  <BiHide
                    className="  text-[#888888] absolute  translate-x-[157px] -translate-y-[18px]  sm:translate-x-[195px] sm:-translate-y-[20px]  sm:text-[16px] cursor-pointer md:translate-x-[233px] md:-translate-y-[20px] md:text-[16px] "
                    onClick={() => {
                      setConfirmPasswordView(!confirmPasswordView);
                      setConfirmPasswordType("text");
                      console.log("cnfirm view   ...", confirmPasswordView);
                    }}
                  />
                )}
                {touched.confirmPassword && errors.confirmPassword && (
                  <div className="flex justify-center">
                    <span className="text-[#EA4335] text-[8px] sm:text-[8px] md:text-[8px]">
                      {errors.confirmPassword}
                    </span>
                  </div>
                )}
              </div>

              <div className="w-48   sm:w-[220px] md:w-[220px]  flex justify-center ">
                <input
                  type="checkbox"
                  id="termsAndCondiation"
                  className="mx-1 scale-75 sm:scale-75 md:scale-75 self-start sm:mt-[3px] md:mt-[5px]"
                  name="termsAndCondiation"
                />
                <label
                  htmlFor="termsAndCondiation"
                  className="text-[8px]  sm:text-[8px] md:text-[8px]   "
                >
                  By continuing you confirm that you agree with our Terms and
                  Conditions
                </label>
              </div>
              {/** google captcha  div */}
              <div >
              <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChange}
                  
            />
              </div>

              <SignUpButton
                className={" text-base disabled:text-gray-200 sm:text-[20px] "}
                disabled={!isValid}
              >
                Sign Up
              </SignUpButton>

              {/** link  content with div */}
              <div className="flex justify-center items-center  ">
                <div className="text-center w-[4px] h-[4px] bg-[#D9D9D9] rounded-full mx-1 sm:w-[6px] sm:h-[6px] md:w-[6px] md:h-[6px] "></div>
                <span className="text-center text-[#7B7B7B] text-[8px] sm:text-[10px] md:text-[10px] ">
                  Or continue with
                </span>
                <div className="text-center w-[4px] h-[4px] bg-[#D9D9D9] rounded-full mx-1 sm:w-[6px] sm:h-[6px] md:w-[6px] md:h-[6px]"></div>
              </div>

              {/** contect icon link div */}
              <div className="flex  justify-center items-center gap-2 sm:gap-2 md:gap-3 sm:w-[300px] md:w-[340px] ">
                <div className="cursor-pointer w-5 h-5 sm:scale-75 md:scale-75">
                  <img src={facebook} alt="" />
                </div>
                <div className="cursor-pointer w-5 h-5 sm:scale-75 md:scale-75 ">
                  <img src={linkedin} alt="" />
                </div>
                <div className="cursor-pointer w-5 h-5 sm:scale-75 md:scale-75">
                  <img src={google} alt="" />
                </div>
              </div>
              {/** sign in link div */}
              <div className="flex justify-center items-center sm:w-[300px] md:w-[340px]">
                <Link
                  to={"/signin"}
                  className="text-[#888888] text-center text-[8px] sm:text-[8px] md:text-[8px]"
                >
                  Already a member?
                  <b className="text-[#2E234E] font-extrabold">Sign in</b>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
