import React, { useEffect, useState } from "react";
import background from "../../../image/background.svg";
import verifyimage from "../../../image/Employer/verifyNumperScreen.svg";
import Button from "../../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../image/logo.svg";

import OTPInput, { ResendOTP } from "otp-input-react";
import { useDispatch, useSelector } from "react-redux";
import { employerForgotOtpResend, employerForgotPasswordVerifyNumber, employerVerifyOtpResend } from "../../../actions/employer/employer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmployerForgotOtpVerifyScreen = () => {
  const [userNumber, setUserNumber] = useState("");
  const [OTP, setOTP] = useState("");
  const [valid, setValid] = useState(true);
  const dispatch = useDispatch();
  const { loading, error, userInfo, success } = useSelector(
    (state) => state.employerAuth
  );
  const navigate = useNavigate();
  const employer = JSON.parse(localStorage.getItem("employer"));

  useEffect(() => {
    if (employer?.body?.email || employer?.body?.user_contact) {
      setUserNumber(employer?.body?.email);
      if (employer?.body?.user_contact) {
        setUserNumber(employer?.body?.user_contact);
      }
    }

    if (OTP.length == 4) {
      setValid(false);
    }
  }, [OTP, userNumber]);

  useEffect(() => {
    if (error) {
      toast(error, { type: "error" });
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      toast(success, { type: "info" });
    }
  }, [success]);


  useEffect(() => {
    if (success == "OTP Verified Successfully.") {
      toast(success, { type: "success" });

      navigate("/employer/newpassword");
    }
  }, [success]);




  const resendOtp = () => {
    if (userNumber && !userInfo?.otp) {
      isNaN(userNumber)
        ? dispatch(employerForgotOtpResend(resendOtpBodyData))
        : dispatch(employerVerifyOtpResend({ otpfor: "verify_number" }));
    }
    setOTP("");
  };


  const formData1 = { type: "contact", email: userNumber, otp: +OTP };
  const formData2 = {
    type: "email",
    email: userNumber,
    otp: +OTP,
  };
  const resendOtpBodyData = {
    type:"email",
    otpfor:"forgotpassword",
    email:userNumber
  }

  console.log("user number",resendOtpBodyData);

  const handelSubmit = () => {
    if (userNumber) {
      isNaN(userNumber)
        ? dispatch(employerForgotPasswordVerifyNumber(formData2))
        : dispatch(employerForgotPasswordVerifyNumber(formData1));
    }
    setOTP("");

    // );
  };

 

  return (
    <>
      {/**main screen div */}
      <div
        className={
          "h-screen  w-screen flex justify-center items-center bg-no-repeat bg-cover bg-center "
        }
        style={{ backgroundImage: `url(${background})` }}
      >
        <ToastContainer />
        {/** main  content div */}
        <div
          className={
            "bg-[#FFFFFf] flex justify-center items-center rounded-md md:justify-around  p-10 w-5/6  md:h-5/6 shadow-md shadow-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)]"
          }
        >
          {/** image div */}
          <div className="hidden md:block ">
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              <img src={verifyimage} alt="image" />
            </div>
          </div>
          {/** signup content div */}
          <div className="flex flex-col   ">
            {/** heading div */}
            <div className="flex flex-col justify-center items-center gap-1">
              <h1 className="text-[#2E234E]  font-bold  text-center text-[22px] sm:text-[28px] md:text-[32px]">
                {userInfo && userInfo?.phone ? "Verify Number" : "Verify Email"}
              </h1>
              <p className="text-[#000000]   text-center text-[10px]  sm:text-[13px] md:text-[16px] leading-3 sm:leading-4 md:leading-5 mb-4 ">
                Please enter the 4 digit code sent to <br />
                <span> {userNumber} </span>
              </p>
            </div>
            {/** main content div */}
            <div className="flex flex-col justify-center items-center gap-5 ">
              {/** number verify input div */}
              <form onSubmit={handelSubmit} className="flex gap-3">
                <label htmlFor="otp" className="sr-only">
                  Input OTP
                </label>
                <OTPInput
                  id={"otp"}
                  value={OTP}
                  onChange={setOTP}
                  autoFocus
                  OTPLength={4}
                  otpType="number"
                  disabled={false}
                  inputStyles={{
                    borderRadious: "13px",
                    borderBottom: "2px solid black",
                    outline: "none",
                  }}
                />
              </form>

              {/** Resend sms div */}
              <div>
                <span className="text-[8px] text-[#7E7E7E] sm:text-[12px] md:text-[16px]">
                  Didn’t receive a code?
                  <span className="text-[#F78500] cursor-pointer">
                    <ResendOTP onResendClick={resendOtp} />
                  </span>
                </span>
              </div>
              {/** action button  */}

              <Button
                disabled={valid}
                className={"disabled:text-[#F78500]"}
                type={"submit"}
                onClick={handelSubmit}
              >
                {loading && loading ? "Loading..." : "Verify"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerForgotOtpVerifyScreen;
