import React, { useEffect, useState } from "react";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

import background from "../../../image/background.svg";
import signupimage from "../../../image/Employer/SignUpImage.svg";
import facebook from "../../../image/facebook.svg";
import linkedin from "../../../image/linkedin.svg";
import google from "../../../image/google.svg";
import { BiHide } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { HiOutlineLockClosed } from "react-icons/hi";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { FaRegBuilding } from "react-icons/fa";
import { BsBagDash } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BiShow } from "react-icons/bi";

import EmployerInput from "../../../components/Input/EmployerInput";
import EmployerSignUpButton from "../../../components/Button/EmployerSignUpButton";
import logo from "../../../image/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { employerSignup } from "../../../actions/employer/employer";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SignUpScreenEmployer = () => {
  const [passwordView, setPasswordView] = useState(false);
  const [confirmPasswordView, setConfirmPasswordView] = useState(false);

  const [passwordType, setPasswordType] = useState("Password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("Password");
  const dispatch = useDispatch()
  const {userInfo,loading,error}= useSelector((state)=>state.employerAuth)
   const navigate = useNavigate();


  
  const schema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().email().required("Email is required"),
    user_contact: Yup.number().required("Phone Number is required"),

    user_nationality: Yup.string().required(),
    personal_email: Yup.string().email().required(),
    user_company_industry: Yup.string().required(),
    user_company: Yup.string().required(),
    department: Yup.string().required(),
    termsAccepted:Yup .bool()
    .oneOf([true], 'You need to accept the terms and conditions').required(),

    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "try another password"
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
    resetForm,
  } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      user_company: "",
      user_company_industry: "",
      personal_email: "",
      user_contact: "",
      email: "",
      password: "",
      confirmPassword: "",
      user_nationality:"",
      department: "",
      termsAccepted:false
    },
    onSubmit: callLoginApi,
    validationSchema: schema,
  });
  const formData = {
    email: values.email,
    password: values.password,
    user_contact: values.user_contact,
    first_name: values.first_name,
    last_name: values.last_name,
    user_role: "Employer",
    personal_email: values.personal_email,
    user_company_industry: values.user_company_industry,
    user_nationality: values.user_nationality,
    department:values.department,
    termsAccepted: values.termsAccepted,
  };


  useEffect(() => {
    if ( userInfo?.isDashboardOpen) {
      navigate("/employer/dashboard")
    }
  }, [userInfo?.isDashboardOpen]);
  useEffect(()=>{
    if(error){
      toast(error,{type:"error",position:"bottom-left",theme:"dark"})
    }
    if(userInfo?.token && userInfo?.otp){
      
      navigate("/employer/verify")
     
    }
  
  },[error,userInfo?.token,userInfo?.otp])

  
  function callLoginApi() {

    dispatch(employerSignup(formData))
  }

  return (
    <>
      {/**main screen div */}
      <body
        className={
          "h-screen  w-screen flex justify-center items-center bg-cover bg-center  "
        }
        style={{ backgroundImage: `url(${background})` }}
      >
      <ToastContainer />
        {/** main  content div */}
        <div
          className={
            " bg-Bee-Main_Bg flex justify-center items-center rounded-md   p-10 w-5/6 shadow-md shadow-black   "
          }
        >
          {/** image div */}
          <div className="hidden md:block  blur-none ">
            <div className="flex justify-center items-center scale-75  ">
              <img src={logo} alt="" />
            </div>
            <div className="scale-75">
              <img src={signupimage} alt="image" />
            </div>
          </div>
          {/** signup content div */}
          <div className="flex flex-col    ">
            {/** heading div */}
            <div className="flex flex-col justify-center items-center gap-1">
              <h1 className="text-Bee-Heading  font-bold  text-center text-[14px] sm:text-[20px] md:text-[24px] ">
                Sign Up
              </h1>
              <p className="text-Bee-Black   text-center text-[8px]  sm:text-[10px] md:text-[12px] leading-3 sm:leading-3 md:leading-3 mb-2 ">
                Fill your details or continue with social media
              </p>
            </div>
            {/** forminput filed and button div */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center  sm:gap-1 md:gap-1 "
            >
              <div className="relative">
                <CiUser className="absolute translate-y-[7px] translate-x-1 text-Bee-Gray text-[12px] sm:text-[12px] md:text-[14px] sm:translate-x-2 sm:translate-y-2 md:translate-x-[7px] md:translate-y-[6px]" />
                <label htmlFor="fname" className="sr-only">
                  First Name
                </label>
                <EmployerInput
                  placeholder="First Name"
                  type={"text"}
                  name={"first_name"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                  id={"fname"}
                />
                {touched.first_name && errors.first_name && (
                  <div className="flex justify-center">
                    <span className="text-Bee-Error text-[8px] sm:text-[8px] md:text-[8px]">
                      {errors.first_name}
                    </span>
                  </div>
                )}
              </div>

              <div className="relative">
                <CiUser className="absolute translate-y-[7px] translate-x-1 text-Bee-Gray text-[12px] sm:text-[12px] md:text-[14px] sm:translate-x-[7px] sm:translate-y-[7px] md:translate-x-[7px] md:translate-y-[6px]" />
                <label htmlFor="lname" className="sr-only">
                  Last Name
                </label>
                <EmployerInput
                  placeholder="Last Name"
                  type={"text"}
                  name={"last_name"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                  id={"lname"}
                />
                {touched.last_name && errors.last_name && (
                  <div className="flex justify-center">
                    <span className="text-Bee-Error text-[8px] sm:text-[8px] md:text-[8px]">
                      {errors.last_name}
                    </span>
                  </div>
                )}
              </div>
              <div className="relative">
                <CiGlobe className="absolute translate-y-[7px] translate-x-1 text-Bee-Gray text-[12px] sm:text-[12px] md:text-[14px] sm:translate-x-[7px] sm:translate-y-[7px] md:translate-x-[7px] md:translate-y-[6px]" />
                <label htmlFor="cname" className="sr-only">
                  Nationality
                </label>
                <EmployerInput
                  placeholder="Nationality"
                  type={"text"}
                  name={"user_nationality"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.user_nationality}
                  id={"cname"}
                />
                {touched.user_nationality && errors.user_nationality && (
                  <div className="flex justify-center">
                    <span className="text-Bee-Error text-[8px] sm:text-[8px] md:text-[8px]">
                      {errors.user_nationality}
                    </span>
                  </div>
                )}
              </div>

              <div className="relative">
                <FaRegBuilding className="absolute translate-y-[7px] translate-x-1 text-Bee-Gray text-[12px] sm:text-[12px] md:text-[14px] sm:translate-x-[7px] sm:translate-y-[7px] md:translate-x-[7px] md:translate-y-[6px]" />
                <label htmlFor="cname" className="sr-only">
                  Company Name
                </label>
                <EmployerInput
                  placeholder="Company Name"
                  type={"text"}
                  name={"user_company"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.user_company}
                  id={"cname"}
                />
                {touched.user_company && errors.user_company && (
                  <div className="flex justify-center">
                    <span className="text-Bee-Error text-[8px] sm:text-[8px] md:text-[8px]">
                      {errors.user_company}
                    </span>
                  </div>
                )}
              </div>

              <div className="relative">
                <FaRegBuilding className="absolute translate-y-[7px] translate-x-1 text-Bee-Gray text-[12px] sm:text-[12px] md:text-[14px] sm:translate-x-[7px] sm:translate-y-[7px] md:translate-x-[7px] md:translate-y-[6px]" />
                <label htmlFor="cname" className="sr-only">
                  Company Industry
                </label>
                <EmployerInput
                  placeholder="Company Industry"
                  type={"text"}
                  name={"user_company_industry"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.user_company_industry}
                  id={"cname"}
                />
                {touched.user_company_industry &&
                  errors.user_company_industry && (
                    <div className="flex justify-center">
                      <span className="text-Bee-Error text-[8px] sm:text-[8px] md:text-[8px]">
                        {errors.user_company_industry}
                      </span>
                    </div>
                  )}
              </div>

              <div className="relative">
                <BsBagDash className="absolute translate-y-[7px] translate-x-1 text-Bee-Gray text-[12px] sm:text-[12px] md:text-[14px] sm:translate-x-[7px] sm:translate-y-[7px] md:translate-x-[7px] md:translate-y-[6px]" />
                <label htmlFor="cname2" className="sr-only">
                  Departments
                </label>
                <EmployerInput
                  placeholder="Departments"
                  type={"text"}
                  name={"department"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.department}
                  id={"cname2"}
                />
                {touched.department && errors.department && (
                  <div className="flex justify-center">
                    <span className="text-Bee-Error text-[8px] sm:text-[8px] md:text-[8px]">
                      {errors.department}
                    </span>
                  </div>
                )}
              </div>

              <div className="relative">
                <MdOutlineAlternateEmail className="absolute translate-y-[7px] translate-x-1 text-Bee-Gray text-[12px] sm:text-[12px] md:text-[14px] sm:translate-x-[7px] sm:translate-y-[7px] md:translate-x-[7px] md:translate-y-[6px]" />
                <label htmlFor="wemail" className="sr-only">
                  Work Email Id
                </label>
                <EmployerInput
                  placeholder=" Work Email Id"
                  type={"email"}
                  name={"email"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  id={"wemail"}
                />
                {touched.email && errors.email && (
                  <div className="flex justify-center">
                    <span className="text-Bee-Error text-[8px] sm:text-[8px] md:text-[8px] ">
                      {errors.email}
                    </span>
                  </div>
                )}
              </div>

              {/**
              Phone div
              */}

              <div className="relative">
                <FiPhone className="absolute translate-y-[7px] translate-x-1 text-Bee-Gray text-[12px] sm:text-[12px] md:text-[14px] sm:translate-x-[7px] sm:translate-y-[7px] md:translate-x-[7px] md:translate-y-[6px]" />
                <label htmlFor="email" className="sr-only">
                  Enter Phone Number
                </label>
                <EmployerInput
                  placeholder="Phone No"
                  type={"number"}
                  name={"user_contact"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.user_contact}
                  id={"phone"}
                />
                {touched.user_contact && errors.user_contact && (
                  <div className="flex justify-center">
                    <span className="text-Bee-Error text-[8px] sm:text-[8px] md:text-[8px] ">
                      {errors.user_contact}
                    </span>
                  </div>
                )}
              </div>

              <div className="relative">
                <MdOutlineAlternateEmail className="absolute translate-y-[7px] translate-x-1 text-Bee-Gray text-[12px] sm:text-[12px] md:text-[14px] sm:translate-x-[7px] sm:translate-y-[7px] md:translate-x-[7px] md:translate-y-[6px]" />
                <label htmlFor="email" className="sr-only">
                  Personal Email Id
                </label>
                <EmployerInput
                  placeholder="Personal Email Id"
                  type={"email"}
                  name={"personal_email"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.personal_email}
                  id={"email"}
                />
                {touched.personal_email && errors.personal_email && (
                  <div className="flex justify-center">
                    <span className="text-Bee-Error text-[8px] sm:text-[8px] md:text-[8px] ">
                      {errors.personal_email}
                    </span>
                  </div>
                )}
              </div>

              {/** password div */}
              <div className="relative">
                <HiOutlineLockClosed className="absolute translate-y-[7px] translate-x-1 text-Bee-Gray text-[12px] sm:text-[12px] md:text-[14px] sm:translate-x-[7px] sm:translate-y-[7px] md:translate-x-[7px] md:translate-y-[6px]" />
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <EmployerInput
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
                    className="  text-Bee-Gray absolute  translate-x-[157px] -translate-y-[18px]  sm:translate-x-[198px] sm:-translate-y-[16px]  sm:text-[12px] cursor-pointer md:translate-x-[233px] md:-translate-y-[20px] md:text-[16px] "
                    onClick={() => {
                      setPasswordView(!passwordView);
                      setPasswordType("password");
                      console.log("cnfirm view   ...", passwordView);
                    }}
                  />
                ) : (
                  <BiHide
                    className="  text-Bee-Gray absolute  translate-x-[157px] -translate-y-[18px]  sm:translate-x-[198px] sm:-translate-y-[16px]  sm:text-[12px] cursor-pointer md:translate-x-[233px] md:-translate-y-[20px] md:text-[16px] "
                    onClick={() => {
                      setPasswordView(!passwordView);
                      setPasswordType("text");
                      console.log("cnfirm view   ...", passwordView);
                    }}
                  />
                )}
                {touched.password && errors.password && (
                  <div className="flex justify-center ">
                    <span className="text-Bee-Error text-[8px] sm:text-[8px] md:text-[8px] ">
                      {errors.password}
                    </span>
                  </div>
                )}
              </div>

              <div className="relative">
                <HiOutlineLockClosed className="absolute translate-y-[7px] translate-x-1 text-Bee-Gray text-[12px] sm:text-[12px] md:text-[14px] sm:translate-x-[7px] sm:translate-y-[7px] md:translate-x-[7px] md:translate-y-[6px]" />
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <EmployerInput
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
                    className="  text-Bee-Gray absolute  translate-x-[157px] -translate-y-[18px]  sm:translate-x-[198px] sm:-translate-y-[16px]  sm:text-[12px] cursor-pointer md:translate-x-[233px] md:-translate-y-[20px] md:text-[16px] "
                    onClick={() => {
                      setConfirmPasswordView(!confirmPasswordView);
                      setConfirmPasswordType("password");
                      console.log("cnfirm view   ...", confirmPasswordView);
                    }}
                  />
                ) : (
                  <BiHide
                    className="  text-Bee-Gray absolute  translate-x-[157px] -translate-y-[18px]  sm:translate-x-[198px] sm:-translate-y-[16px]  sm:text-[12px] cursor-pointer md:translate-x-[233px] md:-translate-y-[20px] md:text-[16px] "
                    onClick={() => {
                      setConfirmPasswordView(!confirmPasswordView);
                      setConfirmPasswordType("text");
                      console.log("cnfirm view   ...", confirmPasswordView);
                    }}
                  />
                )}
                {touched.confirmPassword && errors.confirmPassword && (
                  <div className="flex justify-center">
                    <span className="text-Bee-Error text-[8px] sm:text-[8px] md:text-[8px]">
                      {errors.confirmPassword}
                    </span>
                  </div>
                )}
              </div>

              <div className="w-48   sm:w-[220px] md:w-[220px]  flex justify-center ">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  className="mx-1 scale-75 sm:scale-75 md:scale-75 self-start sm:mt-[3px] md:mt-[5px]"
                  name="termsAccepted"
                  value={values.termsAccepted}
                  onChange={handleChange}
                />
                <label
                  htmlFor="termsAccepted"
                  className="text-[8px]  sm:text-[8px] md:text-[8px]   "
                >
                  By continuing you confirm that you agree with our{" "}
                  <b>Terms and Conditions</b>
                </label>
              </div>
              {touched.termsAccepted && errors.termsAccepted && (
                <div className="flex justify-center">
                  <span className="text-Bee-Error text-[8px] sm:text-[8px] md:text-[8px] ">
                    {errors.termsAccepted}
                  </span>
                </div>
              )}

              <EmployerSignUpButton
                className={
                  " text-base disabled:text-Bee-Disabled sm:text-[20px] "
                }
                disabled={!isValid}
              >
                {loading && loading? "Loading...":"Sign Up"}
              </EmployerSignUpButton>

              {/** link  content with div */}
              <div className="flex justify-center items-center  ">
                <div className="text-center w-[4px] h-[4px] bg-Bee-Dot rounded-full mx-1 sm:w-[6px] sm:h-[6px] md:w-[6px] md:h-[6px] "></div>
                <span className="text-center text-Bee-Continue text-[8px] sm:text-[10px] md:text-[10px] ">
                  Or continue with
                </span>
                <div className="text-center w-[4px] h-[4px] bg-Bee-Dot rounded-full mx-1 sm:w-[6px] sm:h-[6px] md:w-[6px] md:h-[6px]"></div>
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
                  to={"/employer/signin"}
                  className="text-Bee-Gray text-center text-[8px] sm:text-[8px] md:text-[8px]"
                >
                  Already a member?
                  <b className="text-Bee-Heading font-extrabold">Sign in</b>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
};

export default SignUpScreenEmployer;
