import React from "react";

const ButtonM = ({ className, children, disabled, type }) => {
  return (
    <button
      className={
        " bg-gradient-to-r from-[#2193B0] to-[#6DD5ED] text-white rounded-md w-20 text-center px-5 text-base h-10 " +
        className
      }
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default ButtonM;
