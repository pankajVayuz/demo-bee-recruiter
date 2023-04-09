import React from "react";

const Button = ({ className, children, disabled, type, onClick }) => {
  return (
    <button
      className={
        " bg-gradient-to-r from-[#2193B0] to-[#6DD5ED]   text-white rounded-md w-96 px-5 text-base h-10 disabled:opacity-75 " +
        className
      }
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
