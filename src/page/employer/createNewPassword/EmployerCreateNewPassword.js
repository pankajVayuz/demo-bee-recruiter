import React, { useState,useEffect } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import background from "../../../image/background.svg";
import newpasswordimage from "../../../image/Employer/createNewPassword.svg";
import { HiOutlineLockClosed } from "react-icons/hi";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { employerCreateNewPassword } from "../../../actions/employer/employer";

const EmployerCreateNewPassword = () => {
  const [passwordView, setPasswordView] = useState(false);
  const [confirmPasswordView, setConfirmPasswordView] = useState(false);

  const [passwordType, setPasswordType] = useState("Password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("Password");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading,error,userInfo,success}= useSelector((state)=>state.employerAuth)
  const employer = localStorage.getItem("employer");


 
  const callLoginApi = () => {
      
    (userInfo?.email)?dispatch(employerCreateNewPassword(formData2)):dispatch(employerCreateNewPassword(formData1))

   
  };

  const schema = Yup.object().shape({
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

  

    const formData1 = {
      type: "contact",
      email:userInfo?.phone,
      password: values.password,
  
    };
    const formData2 = {
      type:"email",
      email:userInfo?.email,
      password: values.password,
    }

   
  
 
    useEffect(() => {
      if (error) {
        toast(error, { type: "error" });
      }
    }, [error]);
  
    useEffect(() => {
      if (success) {
  
        toast(success, { type: "success" });
       
      }
    }, [success]);
  

    useEffect(() => {
      if (success=="Password reset successfully.") {
  
        navigate("/employer/signin")
       
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
            "bg-[#FFFFFf] flex justify-center items-center rounded-md   p-10 w-5/6  md:h-5/6  shadow-md shadow-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)] "
          }
        >
          {/** image div */}
          <div className=" hidden md:block scale-75 ">
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
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
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
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
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

              <Button
                className={"max-sm:text-xs disabled:text-indigo-200"}
                disabled={!isValid}
              >
              {loading && loading?"Loading...":"Continue"}  
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerCreateNewPassword;
