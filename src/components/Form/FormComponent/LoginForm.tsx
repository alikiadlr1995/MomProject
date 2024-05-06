import Input from "@/components/Common/Input";
import React from "react";

const LoginForm = () => {
  return (
    <div className="flex flex-col gap-[30px] px-[15%] pt-[70px] pb-[80px]">
      <Input placeholder="Your Email" />

      <Input placeholder="Your Password" type="password" />
      <button className="px-[35px] py-[17px] mt-[10px] rounded-full bg-[#25DAC5] text-white text-lg">
        Create an Account
      </button>
      <div className="flex flex-row gap-4 items-center">
        <div className="h-[1px] bg-[#141414] flex-1 opacity-10" />
        <span className="text-[#141414] opacity-10">or</span>
        <div className="h-[1px] bg-[#141414] flex-1 opacity-10" />
      </div>
      <button className="px-[35px] py-[17px] rounded-full bg-[#1DA1F2] text-white text-lg">
        Login via Twitter
      </button>
    </div>
  );
};

export default LoginForm;
