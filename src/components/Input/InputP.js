import React from "react";

const InputP = ({
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
        " w-full h-9 px-2 indent-4 focus:outline-none bg-Bee-Input_Bg1 text-base placeholder:text-base rounded-md  " +
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

export default InputP;
