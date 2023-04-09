import React, { useEffect, useState } from "react";
import background from "../../../image/background.jpg";
import verifyimage from "../../../image/verify number image.svg";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";

import OTPInput, { ResendOTP } from "otp-input-react";
const VerifyNumber = () => {
  const [userNumber,setUserNumber]=useState("7739616595")
  const [OTP, setOTP] = useState("");
  const [valid, setValid] = useState(true)
  
  useEffect(() => {
    if (OTP.length == 4) {
      setValid(false)
    }

  },[OTP])

  const callLoginApi = () => {
  
  };

  
 

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
          <div className="hidden md:block ">
            <img src={verifyimage} alt="image" />
          </div>
          {/** signup content div */}
          <div className="flex flex-col   ">
            {/** heading div */}
            <div className="flex flex-col justify-center items-center gap-1">
              <h1 className="text-[#2E234E]  font-bold  text-center text-[22px] sm:text-[28px] md:text-[32px]">
                Verify Number
              </h1>
              <p className="text-[#000000]   text-center text-[10px]  sm:text-[13px] md:text-[16px] leading-3 sm:leading-4 md:leading-5 mb-4 ">
                Please enter the 4 digit code sent to <br />
                <span> {userNumber} </span> through SMS
              </p>
            </div>
            {/** main content div */}
            <div className="flex flex-col justify-center items-center gap-5 ">
              {/** number verify input div */}
              <form onSubmit={callLoginApi} className="flex gap-3">
              <label htmlFor="otp" className="sr-only">Input OTP</label>
              <OTPInput id={"otp"} value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false}  inputStyles={{"borderRadious":"13px",borderBottom:"2px solid black", outline:"none"}}   />
                
              </form>

              {/** Resend sms div */}
              <div>
                <span className="text-[8px] text-[#7E7E7E] sm:text-[12px] md:text-[16px]">
                  Didn’t receive a code?
                  <span className="text-[#F78500] cursor-pointer">
                    Resend SMS 
                  </span>
                </span>
              </div>
              {/** action button  */}
              <Link to={"/signin/newpassword"}>
                <Button
                disabled={valid}
                className={"disabled:text-[#F78500]"}
                  type={"submit"}
                >
                  Verify
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyNumber;
