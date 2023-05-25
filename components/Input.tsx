"use client";

import { useState } from "react";

interface InputProps {
    type: string,
    name: string,
    value: any,
    placeholder?: string,
    onChange?:  (event: React.ChangeEvent<HTMLInputElement>) => void,
    id: string,
}


const Input = ({type, name, value, placeholder, onChange, id}: InputProps) => {

    const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div>
        <input type={type} name={name} value={value} id={id} placeholder={placeholder} onChange={onChange} className="mt-3 w-full px-4 py-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "/>
    </div>
  )
}

export default Input