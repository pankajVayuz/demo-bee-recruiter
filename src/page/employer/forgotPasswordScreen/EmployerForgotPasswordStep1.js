import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import background from "../../../image/background.svg";
import forgotImage from "../../../image/Employer/forgetPasswordImage.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { employerForgotPasswordAction } from "../../../actions/employer/employer";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
const EmployerForgotPasswordScreen1 = () => {
  const {loading,error,success}= useSelector((state)=>state.employerAuth)
  const employer = JSON.parse(localStorage.getItem("employer"));

 

   const navigate = useNavigate();

  const dispatch = useDispatch();

  const schema=Yup.object().shape({
    emailAndNumber:Yup.string().required()
  })

  const forgotPasswordApiCall = (event) => {
  
    if (values.emailAndNumber) {
      isNaN(values.emailAndNumber)
        ? dispatch(employerForgotPasswordAction(formDataEmail))
        : dispatch(employerForgotPasswordAction(formDataNumber));
    }
    resetForm()

    
  };

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
     emailAndNumber:"",
    },
    onSubmit: forgotPasswordApiCall,
    validationSchema: schema,
  });
  const formDataNumber = {
    type: "contact",
    user_contact: values.emailAndNumber,
  };
  const formDataEmail = { type: "email", email:values.emailAndNumber };
 
  useEffect(()=>{
    if(error?.email){
      toast(error?.email[0],{type:"error"})
    }

   else if(error?.user_contact){
      toast(error?.user_contact[0],{type:"error"})
    }
    
  
  },[error?.email,error?.user_contact])

  
  useEffect(()=>{
   
    if(success){
      toast(success,{type:"info"})
      setTimeout(() => {
        
        navigate("/employer/forgot/verify")
      },3000);
      
    }
  
  },[success])


  useEffect(()=>{
   
    if(employer?.body?.email ||employer?.body?.user_contact ){
     navigate("/employer/forgot/verify")
      
    }
  
  },[employer?.body?.email ,employer?.body?.user_contact])
  
  return (
    <>
      {/**main screen div */}
      <div
        className={
          "h-screen  w-screen flex justify-center items-center bg-no-repeat bg-center bg-cover"
        }
        style={{ backgroundImage: `url(${background})` }}
      >
      <ToastContainer />
        {/** main  content div */}
        <div
          className={
            "bg-[#FFFFFf] flex justify-center items-center rounded-md   p-10 w-5/6  md:h-5/6  shadow-md shadow-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)]"
          }
        >
          {/** image div */}
          <div className="hidden md:block scale-75 ">
            <img src={forgotImage} alt="image" />
          </div>
          {/** signup content div */}
          <div className="flex flex-col ">
            {/** heading div */}
            <div className="flex flex-col justify-center items-center gap-1">
              <h1 className="text-[#2E234E]  font-bold  text-center text-[22px] sm:text-[28px] md:text-[32px]">
                Forgot Password
              </h1>
              <p className="text-[#000000]   text-center text-[10px]  sm:text-[13px] md:text-[16px] leading-3 sm:leading-4 md:leading-5 mb-4 ">
                Please enter your registered mobile number or email id.
              </p>
            </div>
            {/** forminput filed and button div */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-between items-center gap-10 sm:gap-16 md:gap-y-28 "
            >
              <div>
                <input
                  type="text"
                  className={
                    " focus:outline-none bg-[#FFFFFF] w-44 text-[10px] placeholder:text-[8px] px-5 placeholder:pb-[5px]  sm:px-7 md:px-8 rounded-md h-5 sm:h-8 md:h-10 sm:w-[220px] md:w-[256px] sm:placeholder:text-[12px] md:placeholder:text-[12px] sm:text-[12px] md:text[12px] border border-[#2294B1] "
                  }
                  placeholder={"Enter Mobile or email Id"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.emailAndNumber}
                  name="emailAndNumber"
                />
                {touched.emailAndNumber && errors.emailAndNumber && (
                  <div className="flex justify-center">
                    <span className="text-Bee-Error text-[8px] sm:text-[8px] md:text-[8px]">
                      {errors.emailAndNumber}
                    </span>
                  </div>
                )}
              
              </div>


              <div>
               
                  <Button onClick={handleSubmit}>  {loading && loading? "Loading...":"Continue"}</Button>
              
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerForgotPasswordScreen1;
