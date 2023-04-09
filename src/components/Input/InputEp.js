import React from "react";

const InputEp = ({
  className,
  placeholder,
  label,
  type,
  required,
  onChange,
  id,
  value,
  style,
  name,
  onBlur,
}) => {
  return (
    <input
      type={type}
      autoComplete="on"
      onChange={onChange}
      id={id}
      placeholder={placeholder}
      className={
        " w-full mt-2 h-14 px-2 focus:outline-none bg-Bee-Input_Bg1 text-base placeholder:text-base placeholder:pb-[5px] rounded-md  " +
        className
      }
      required={required}
      value={value}
      style={style}
      name={name}
      onBlur={onBlur}
    />
  );
};

export default InputEp;
