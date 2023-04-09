import React, { useState } from "react";

const AfterSignUpSidebar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="sm:flex sm:flex-col xl:flex-shrink-0 sm:bg-Bee-SideBarBackground sm:w-60 sm:text-xs sm:ml-16 sm:font-Nunito sm:px-4 hidden">
        <ul>
          <span>
            <button className=" font-bold text-2xl py-4">Settings</button>
          </span>
          <div>
            <span>
              <p
                onClick={handleClick}
                style={{ backgroundColor: active ? "#FFF" : "#E3F2FF" }}
                className=" cursor-pointer active:bg-white font-bold text-lg"
              >
                Sign In & Security
              </p>
            </span>
            <div className="text-base cursor-pointer">
              <li className="my-6">Change Password</li>
              <li className="my-6">Two-Step Verification</li>
              <li className="my-6">Change Phone Number</li>
            </div>
          </div>
          <div>
            <span>
              <p className="font-bold text-lg">Account Preference</p>
            </span>
            <div className="text-base cursor-pointer" href="#">
              <li className=" my-6">Profile Information</li>
              <li className=" my-6">Change Theme</li>
              <li className=" my-6">Language Preference</li>
              <li className=" my-6">Sync Data</li>
              <li className=" my-6">Subscription & Payments</li>
              <li className=" my-6">Job Posted</li>
              <li className=" my-6">Application Tracking System</li>
              <li className=" my-6">Other Option </li>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default AfterSignUpSidebar;
