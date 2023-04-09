import React from "react";

const ButtonP = ({ className, children, type, onClick }) => {
  return (
    <button
      className={
        " lg:h-14 h-10 flex justify-center item-center bg-gradient-to-r from-[#2193B0] to-[#6DD5ED]   text-white font-semibold rounded-xl w-full px-5 text-base " +
        className
      }
      // disabled={disabled} type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonP;
