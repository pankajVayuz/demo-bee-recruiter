import React from "react";

const ChangeThemeComponent = () => {
  return (
    <div className=" font-Nunito">
      <p className=" font-bold mx-4 sm:text-xl mt-2 ">Change Theme</p>
      <div className=" flex flex-col sm:text-base mx-10">
        <p>
          <input className=" my-2" type="radio" value="Male" name="gender" />{" "}
          Match System{" "}
        </p>
        <p>
          <input className=" my-2" type="radio" value="Female" name="gender" />{" "}
          Always Dark{" "}
        </p>
        <p>
          <input className=" my-2" type="radio" value="Other" name="gender" />{" "}
          Always Light{" "}
        </p>
      </div>
    </div>
  );
};

export default ChangeThemeComponent;
