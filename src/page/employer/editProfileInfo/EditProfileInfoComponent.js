import React from "react";
import { CgProfile } from "react-icons/cg";
import ButtonP from "../../../components/Button/ButtonM";
import InputEp from "../../../components/Input/InputEp";

const EditProfileInfoComponent = () => {
  return (
    // Main Div
    <div className="flex w-full">
      <form className="flex flex-col w-full m-2">
        <h1 className=" font-bold text-2xl py-4">Edit Profile Information</h1>
        <div className="flex">
          <div className=" flex items-center justify-center h-20 w-20 rounded-full bg-Bee-Input_Bg1">
            <CgProfile className=" scale-175 "></CgProfile>
          </div>
          <div className="flex flex-col px-2 mx-2 ">
            <p className=" font-bold text-lg">Upload Image</p>
            <p className=" text-sm">Upload a photo under 5 Mb</p>
            <ButtonP className={" flex scale-75 justify-center items-center"}>
              Upload
            </ButtonP>
          </div>
        </div>

        {/* Input div */}
        <div className="flex flex-col ">
          <div className="flex flex-col sm:flex-row gap-2 ">
            <InputEp placeholder={"First Name"}></InputEp>
            <InputEp placeholder={"Last Name"}></InputEp>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <InputEp placeholder={"Company Name"}></InputEp>
            <InputEp placeholder={"Designation"}></InputEp>
          </div>
          <div className="flex flex-col sm:space-x-2">
            <InputEp placeholder={"Company Industry"}></InputEp>
          </div>
          <div className=" flex flex-col">
            <InputEp placeholder={"Address"}></InputEp>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <InputEp placeholder={"City"}></InputEp>
            <InputEp placeholder={"Country"}></InputEp>
            <InputEp placeholder={"Pin Code"}></InputEp>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <InputEp type={"email"} placeholder={"Email ID"}></InputEp>
            <InputEp placeholder={"Phone No."}></InputEp>
            <InputEp placeholder={"Alternative Phone No."}></InputEp>
          </div>
          <div className="flex flex-col">
            <InputEp
              className={" h-56 placeholder:text "}
              placeholder={"About"}
            ></InputEp>
          </div>
          <div className=" flex flex-col sm:flex-row gap-2">
            <InputEp placeholder={"LinkedIn Profile"}></InputEp>
            <InputEp placeholder={"Job License"}></InputEp>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end">
          <ButtonP className={" flex items-center justify-center mt-4 "}>
            Update
          </ButtonP>
        </div>
      </form>
    </div>
  );
};

export default EditProfileInfoComponent;
