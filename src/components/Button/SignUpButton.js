import React from 'react'

const SignUpButton = ({ className, children,disabled,type }) => {
  return (
      <>
      <button
      className={
        " bg-gradient-to-r from-[#2193B0] to-[#6DD5ED]   text-white rounded-md w-44  px-5 text-[10px] sm:text-[13px] md:text-[16px] h-5 sm:h-6 md:h-6 sm:w-[220px] md:w-[256px]  "+ className
      }
      disabled={disabled} type={type}
    >
      {children}
    </button>
      </>
  )
}

export default SignUpButton