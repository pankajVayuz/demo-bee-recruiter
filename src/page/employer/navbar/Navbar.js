import React, { useState } from "react";
import logo from "../../../image/logo_new.svg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsTranslate } from "react-icons/bs";
import userImage from "../../../image/demouserimage.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  // const [HamBurgerOpen, setHamBurger] = useState(false);
  return (
    <>
      {/** main navbar div */}
      <div className="flex h-14 w-full justify-between sm:h-auto sm:justify-between md:justify-between">
        {/** logo div */}
        <div className="flex sm:gap-10 items-center ">
          <div className=" sm:mx-14 p-2">
            <img className=" max-w-xs max-h-14 cursor-pointer" src={logo} alt="moroccan_agency_logo" />
          </div>

          <div className=" sm:hidden md:hidden lg:flex lg:mx-30 hidden pt-1">
            <ul className="flex flex-none sm:gap-4 cursor-pointer">
              <li>Home</li>
              <li>Reports</li>
              <li>Post Job</li>
              <li>My Calendar</li>
              <li>Application Tracking System</li>
            </ul>
          </div>
        </div>
        {/** Link section */}

        {/** right side div */}
        <div className="flex items-center gap-2 mx-2 xl:mx-4 pt-4">
          <BsTranslate className=" w-5 h-5 md:w-6 md:h-6 sm:flex cursor-pointer " />
          <IoMdNotificationsOutline className=" w-5 h-5 sm:flex rotate-12 cursor-pointer " />
          {/** Drop down section */}
          <div className="flex gap-2 justify-center items-center cursor-pointer">
            <div className=" ">
              <img src={userImage} alt="user" />
            </div>
            <div>
              <select className=" cursor-pointer">
                <option value="fruit">Sarah Malik</option>

                <option value="test1">Demo</option>

                <option value="test2">Demo</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* <RxHamburgerMenu
        className="sm:hidden flex mx-3"
        onClick={() => setHamBurger((prev) => !prev)}
      >
        {HamBurgerOpen ? "close" : "open"}
      </RxHamburgerMenu> */}
    </>
  );
};

export default Navbar;
