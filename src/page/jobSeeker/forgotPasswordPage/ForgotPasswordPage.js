import React from "react";
import Button from "../../../components/Button/Button";
import background from "../../../image/background.svg";
import forgatepasswordimage from "../../../image/forgate password image.svg";
import emailicon from "../../../image/forgate password email icon.svg";
import smsicon from "../../../image/forgate password sms icon.svg";
import {Link} from "react-router-dom"
const ForgotPasswordPage = () => {
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
            "bg-[#FFFFFF] flex justify-center items-center rounded-md   p-10 w-5/6 sm:h-5/6 md:h-5/6  shadow-md shadow-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)] "
          }
        >
          {/** image div */}
          <div className="hidden md:block">
            <img src={forgatepasswordimage} alt="image" />
          </div>
          {/** signup content div */}
          <div className="flex flex-col   ">
            {/** heading div */}
            <div className="flex flex-col justify-center items-center gap-1">
              <h1 className="text-[#2E234E]  font-bold  text-center text-[22px] sm:text-[28px] md:text-[32px]">
                Forgot Password
              </h1>
              <p className="text-[#000000]   text-center text-[10px]  sm:text-[13px] md:text-[16px] leading-3 sm:leading-4 md:leading-5 mb-4 ">
                Select which contact details should we use to reset your
                password
              </p>
            </div>
            {/** main content div */}
            <div className="flex flex-col justify-center items-center gap-4 sm:gap-3 md:gap-4">
              {/** sms  div */}
              <div className="relative cursor-pointer ">
                <div className="flex  absolute w-[20px] h-[20px] translate-y-[5px] translate-x-1 sm:w-[32px] sm:h-[32px] sm:translate-x-[6px] sm:translate-y-[7px] md:w-[40px] md:h-[40px] md:translate-x-[10px] md:translate-y-[12px] ">
                  <img src={smsicon} alt="image" className="" />
                </div>
                <div   className={
                  "flex flex-col justify-center bg-white border border-[#6BD4EC] w-44 h-8 rounded-md pl-6  sm:h-12 md:h-16 sm:w-[220px] md:w-[256px]"
                }>
                <Link to={"/signin/verify"}
              
              >
                    <div className="flex flex-col justify-cente items-start">
                    
                    <span className="text-[#888888 text-[8px] pl-3 sm:pl-5 sm:text-[12px] md:text-[16px] md:pl-8"> via SMS:</span>
                    <span className="text-[#212121] mx-2 font-bold text-[8px] sm:text-[12px] sm:pl-3 md:text-[16px] md:pl-6 ">
                      +6737*****892
                      </span>
                    </div>
              </Link>
                
                </div>
               
              </div>
              {/** email div */}
              <div className="relative cursor-pointer ">
              <div className="flex  absolute w-[20px] h-[20px] translate-y-[5px] translate-x-1 sm:w-[32px] sm:h-[32px] sm:translate-x-[6px] sm:translate-y-[7px] md:w-[40px] md:h-[40px] md:translate-x-[10px] md:translate-y-[12px] ">
                <img src={emailicon} alt="image" className="" />
              </div>
              <div   className={
                "flex flex-col justify-center bg-white border border-[#6BD4EC] w-44 h-8 rounded-md pl-6  sm:h-12 md:h-16 sm:w-[220px] md:w-[256px]"
              }>
              <Link to={"/signin/verify"}
            
            >
                  <div className="flex flex-col justify-cente items-start">
                  
                  <span className="text-[#888888 text-[8px] pl-3 sm:pl-5 sm:text-[12px] md:text-[16px] md:pl-8"> via Email::</span>
                  <span className="text-[#212121] mx-2 font-bold text-[8px] sm:text-[12px] sm:pl-3 md:text-[14px] md:pl-6 ">
                  Aya******iz@gmail.com
                    </span>
                  </div>
            </Link>
              
              </div>
             
            </div>

              <Button className={"text-base disabled:text-gray-200 sm:text-[20px]"}>Continue</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
