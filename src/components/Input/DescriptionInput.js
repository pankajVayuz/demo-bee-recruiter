import React from 'react'

const DescriptionInput = ({className,placeholder,label,type,required,onChange,id,value,style,name, onBlur}) => {
  return (
      <div className=''>
        
      <input type={type} autoComplete="on" onChange={onChange} id={id} placeholder={placeholder} className={" focus:outline-none bg-[#F6F6F6] w-44 text-[10px] placeholder:text-[8px]  placeholder:pb-[5px]   rounded-md h-6 sm:h-8 md:h-10 sm:w-[220px] md:w-[420px] sm:placeholder:text-[12px] md:placeholder:text-[12px] md:px-4 sm:text-[12px] md:text[12px] px-2 " + className} required={required} value={value} style={style } name={name}  onBlur={ onBlur} />
      </div>
  )
}

export default DescriptionInput 