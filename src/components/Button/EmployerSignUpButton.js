import React from 'react'

const EmployerSignUpButton = ({ className, children,disabled,type }) => {
  return (
      <>
      <button
      className={
        " bg-gradient-to-r from-[#2193B0] to-[#6DD5ED]   text-white rounded-md w-44   px-5 text-[10px] sm:text-[9px] md:text-[16px] h-5 sm:h-[18px] md:h-[22px] sm:w-[220px] md:w-[256px] disabled:opacity-75  "+ className
      }
      disabled={disabled} type={type}
    >
      {children}
    </button>
      </>
  )
}

export default EmployerSignUpButton