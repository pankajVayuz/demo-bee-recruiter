import React from "react";
import premium_img from "../../../../src/image/Employer/images/subscriptionAndPayment/premium_img.svg";
import gold_img from "../../../../src/image/Employer/images/subscriptionAndPayment/gold_img.svg";
import silver_img from "../../../../src/image/Employer/images/subscriptionAndPayment/silver_img.svg";

const SubscriptionAndPaymentC = () => {
  return (
    <>
      {/* Main DIV */}
      <div className=" flex flex-col w-full m-4 ">
        <div className=" mb-2 ">
          <h1 className=" font-bold text-2xl mb-2 ">Subscription & Payment</h1>
          <h2 className=" font-semibold text-xl ">Hello Sarah,</h2>
          <p className=" font-semibold text-base md:text-lg mb-2 ">
            Thanks for being a Bee Recruiter Premium Plan Member.
          </p>
        </div>

        <div>
          <h1 className=" font-semibold text-lg ">Premium Plan : 450 MAD</h1>
          <div className=" flex justify-between items-center md:justify-between mb-2 ">
            <p className=" font-semibold text-base text-GrayColor ">
              Next Billing date : 10/03/2023{" "}
            </p>
            <p className=" text-CyanColor text-xs md:text-base font-bold cursor-pointer ">
              Cancel Membership
            </p>
          </div>
        </div>

        <hr className=" mt-2 mb-2 "></hr>

        <div className=" flex justify-between ">
          <h1 className=" font-semibold text-lg ">Payment Method</h1>
          <p className=" font-semibold text-lg ">Debit Card</p>
        </div>
        <div className=" flex flex-row-reverse ">
          <p className=" text-CyanColor ">Change Payment Method</p>
        </div>

        <hr className=" mt-2 mb-2 "></hr>
        <div>
          <h1 className=" font-bold text-xl ">Upgrade Existing / New Plan</h1>
        </div>

        {/* Card */}

        <div className=" mt-4 mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-0 gap-6 w-full h-full ">
          <div className=" w-full h-full relative overflow-hidden rounded-lg cursor-pointer ">
            <img className=" object-cover w-full " src={premium_img} alt="" />
            <div className=" absolute top-0 left-0 px-6 py-4 text-center ">
              <h1 className="  text-2xl font-extrabold text-white ">Premium</h1>
              <h2 className=" text-sm font-medium text-white ">
                Unlock all your features to be complete control of your
                experience
              </h2>
              <div className="  bg-white  ">
                <p className="  text-xs font-semibold ">
                  Upgrade from 80.78 MAD
                </p>
              </div>
            </div>
          </div>
          <img src={gold_img} alt="" />
          <img src={silver_img} alt="" />
        </div>
      </div>
    </>
  );
};

export default SubscriptionAndPaymentC;
