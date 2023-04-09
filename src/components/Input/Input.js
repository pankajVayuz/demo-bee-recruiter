import React from 'react'

const Input = ({className,placeholder,label,type,required,onChange,id,value,style,name, onBlur}) => {
  return (
      <div className=''>
        
      <input type={type} autoComplete="on" onChange={onChange} id={id} placeholder={placeholder} className={" focus:outline-none bg-Bee-Input_Bg1 w-44 text-[10px] placeholder:text-[8px] px-5 placeholder:pb-[5px]  sm:px-7 md:px-8 rounded-md h-5 sm:h-8 md:h-10 sm:w-[220px] md:w-[256px] sm:placeholder:text-[12px] md:placeholder:text-[12px] sm:text-[12px] md:text[12px] " + className} required={required} value={value} style={style } name={name}  onBlur={ onBlur} />
      </div>
  )
}

export default Input 