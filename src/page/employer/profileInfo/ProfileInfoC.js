import React from "react";
import user_image from "../../../../src/image/Employer/user_image.svg";

const ProfileInfoC = () => {
  return (
    <>
      {/* Main Div */}
      <div className=" flex flex-col p-4 ">
        <div>
          <h1 className=" text-2xl font-bold pb-2 ">Profile Information</h1>
        </div>
        <img
          width={" 60rem"}
          height={"60rem"}
          className=" my-2"
          src={user_image}
          alt=""
        />
        <form className="">
          <div>
            <p className=" text-lg font-bold ">Name</p>
            <p className=" text-base font-semibold text-gray-600 ">
              Aryan Khanna
            </p>
          </div>
          <div>
            <p className=" text-lg font-bold ">Company Name</p>
            <p className=" text-base font-semibold text-gray-600 ">
              Moroccan Agency
            </p>
          </div>
          <div>
            <p className=" text-lg font-bold ">Address</p>
            <p className=" text-base font-semibold text-gray-600 ">
              123 Main St
            </p>
          </div>
          <div>
            <p className=" text-lg font-bold ">City</p>
            <p className=" text-base font-semibold text-gray-600 ">Berlin</p>
          </div>
          <div>
            <p className=" text-lg font-bold ">Country</p>
            <p className=" text-base font-semibold text-gray-600 ">Germany</p>
          </div>
          <div>
            <p className=" text-lg font-bold ">PIN Code</p>
            <p className=" text-base font-semibold text-gray-600 ">100200</p>
          </div>
          <div>
            <p className=" text-lg font-bold ">Email ID</p>
            <p className=" text-base font-semibold text-gray-600 ">
              aryan.khanna@moroccanagency.com
            </p>
          </div>
          <div>
            <p className=" text-lg font-bold ">Phone No</p>
            <p className=" text-base font-semibold text-gray-600 ">
              +1 3478 383 8734
            </p>
          </div>
          <div>
            <p className=" text-lg font-bold ">Alternative Phone No.</p>
            <p className=" text-base font-semibold text-gray-600 ">
              +1 2183 238 3762
            </p>
          </div>
          <div>
            <p className=" text-lg font-bold ">Linkedin</p>
            <p className=" text-base font-semibold text-gray-600 ">
              <a target="_blank" href="https://www.linkedin.com">Click Me!</a>
            </p>
          </div>
          <div>
            <p className=" text-lg font-bold ">Job License</p>
            <p className=" text-base font-semibold text-gray-600 ">None</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileInfoC;
