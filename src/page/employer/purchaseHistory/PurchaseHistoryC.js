import React from "react";
import back_arrow_icon from "../../../image/Employer/icons/purchaseHistory/back_arrow_icon.svg";
import download_invoice_icon from "../../../image/Employer/icons/purchaseHistory/download_invoice_icon.svg";
import visa_icon from "../../../image/Employer/icons/purchaseHistory/visa_icon.svg";

const PurchaseHistoryC = () => {
  // const user = [
  //     {"name" : "Sarah Malik", "plan" : "Premium Plan"}
  // ]
  return (
    <>
      {/* Main  DIV */}
      <div className=" flex flex-col w-full m-4 ">
        <div className=" flex pb-3 gap-4 ">
          <img className=" cursor-pointer " src={back_arrow_icon} alt="" />
          <p className=" font-bold text-2xl ">Purchase History</p>
        </div>

        <div>
          <p className=" font-bold text-xl pt-2 pb-2 ">Your Plan</p>
          <p className=" font-semibold text-lg ">Premium Plan : 450 MAD</p>
          <p className=" font-semibold text-base text-gray-400 pb-2 ">
            Next Billing date : 10/03/2023{" "}
          </p>
        </div>
        {/* Horizontal Line */}
        <hr className=" pb-2 "></hr>

        {/* Plan Row */}

        <div className=" pt-2 pb-2 ">
          <div className=" flex justify-between ">
            <p className=" text-CyanColor ">10/02/2023</p>
            <p className=" flex gap-2 text-CyanColor ">
              Download Invoice
              <img
                className=" cursor-pointer "
                src={download_invoice_icon}
                alt=""
              />
            </p>
          </div>
          <div className=" flex justify-between pt-2 ">
            <p className=" font-semibold text-lg ">Premium Plan : 450 MAD</p>
            <div className=" flex justify-center items-center ">
              <p className="">BMCE Bank Debit Card ****1023</p>
              <img className=" w-10 h-3 " src={visa_icon} alt="visa" />
            </div>
          </div>
          <div className=" flex justify-between ">
            <p className=" font-semibold text-base text-gray-400 pb-2 ">
              Next Billing date : 10/03/2023
            </p>
            <p className=" font-medium text-base ">Sarah Malik</p>
          </div>
        </div>

        {/* Plan Row End */}

        <hr className=" pb-2 "></hr>

        {/* Plan Row */}

        <div className=" pt-2 pb-2 ">
          <div className=" flex justify-between ">
            <p className=" text-CyanColor ">10/01/2023</p>
            <p className=" flex gap-2 text-CyanColor ">
              Download Invoice
              <img
                className=" cursor-pointer "
                src={download_invoice_icon}
                alt=""
              />
            </p>
          </div>
          <div className=" flex justify-between pt-2 ">
            <p className=" font-semibold text-lg ">Premium Plan : 450 MAD</p>
            <div className=" flex justify-center items-center ">
              <p className="">BMCE Bank Debit Card ****1023</p>
              <img className=" w-10 h-3 " src={visa_icon} alt="visa" />
            </div>
          </div>
          <div className=" flex justify-between ">
            <p className=" font-semibold text-base text-gray-400 pb-2 ">
              Next Billing date : 10/02/2023
            </p>
            <p className=" font-medium text-base ">Sarah Malik</p>
          </div>
        </div>

        {/* Plan Row End */}

        <hr className=" pb-2 "></hr>

        {/* Plan Row */}

        <div className=" pt-2 pb-2 ">
          <div className=" flex justify-between ">
            <p className=" text-CyanColor ">10/12/2022</p>
            <p className=" flex gap-2 text-CyanColor ">
              Download Invoice
              <img
                className=" cursor-pointer "
                src={download_invoice_icon}
                alt=""
              />
            </p>
          </div>
          <div className=" flex justify-between pt-2 ">
            <p className=" font-semibold text-lg ">Premium Plan : 450 MAD</p>
            <div className=" flex justify-center items-center ">
              <p className="">BMCE Bank Debit Card ****1023</p>
              <img className=" w-10 h-3 " src={visa_icon} alt="visa" />
            </div>
          </div>
          <div className=" flex justify-between ">
            <p className=" font-semibold text-base text-gray-400 pb-2 ">
              Next Billing date : 10/01/2023
            </p>
            <p className=" font-medium text-base ">Sarah Malik</p>
          </div>
        </div>

        {/* Plan Row End */}

        <hr className=" pb-2 "></hr>

        {/* Plan Row */}

        <div className=" pt-2 pb-2 ">
          <div className=" flex justify-between ">
            <p className=" text-CyanColor ">10/12/2022</p>
            <p className=" text-CyanColor flex gap-2 ">
              Download Invoice
              <img
                className="  cursor-pointer "
                src={download_invoice_icon}
                alt=""
              />
            </p>
          </div>
          <div className=" flex justify-between pt-2 ">
            <p className=" font-semibold text-lg ">Premium Plan : 450 MAD</p>
            <div className=" flex justify-center items-center ">
              <p className="">BMCE Bank Debit Card ****1023</p>
              <img className=" w-10 h-3 " src={visa_icon} alt="visa" />
            </div>
          </div>
          <div className=" flex justify-between ">
            <p className=" font-semibold text-base text-gray-400 pb-2 ">
              Next Billing date : 10/01/2023
            </p>
            <p className=" font-medium text-base ">Sarah Malik</p>
          </div>
        </div>

        {/* Plan Row End */}

        <div className=" flex flex-row-reverse pt-4 ">
          <p className=" text-CyanColor font-bold text-sm cursor-pointer ">
            View all
          </p>
        </div>
      </div>
    </>
  );
};

export default PurchaseHistoryC;
