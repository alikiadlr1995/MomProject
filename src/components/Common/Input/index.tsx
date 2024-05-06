import React from "react";

interface InputProps {
  placeholder: string;
  type?: "text" | "password";
  label?: string;
}
const Input = ({ placeholder, type = "text", label }: InputProps) => {
  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && <label className="text-[#1E0E62] text-sm">{label}</label>}
      <input
        className="w-full rounded-full h-[50px] border-[2px] border-[#EBEAED] px-6"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;
