import React from 'react'

const InputSmall = ({className,placeholder,label,type,required,onChange,id,value,style,name,onBlur,disabled,onfocus ,autoFocus}) => {
  return (
      <>
      <div className=''>
      <label htmlFor={id}>{label}</label>
  <input type={type}  autoComplete="on" onChange={onChange} id={id} placeholder={placeholder} className={" focus:outline-none bg---white border-b-[#353535] border-2 border-[#FFFFFF] h-8 max-sm:h-6 w-[30px] max-sm:text-[8px] text-[12px] text-center font-bold max-sm:w-[15px] " + className} required={required} value={value} style={style } name={name}  onBlur={ onBlur}  disabled={disabled} maxLength={1}  onFocus={onfocus} autoFocus={autoFocus} />
  </div>
      
      </>
  )
}

export default InputSmall