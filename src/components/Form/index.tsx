import React from "react";
import FormComponent from "./FormComponent";
import FormImage from "../../assets/images/form.jpg";
import Image from "next/image";

const FormPage = () => {
  return (
    <div className="flex flex-row px-[15%] py-[100px]  min-h-screen w-full overflow-hidden justify-between relative">
      <div className="flex flex-col gap-8 w-[38%]">
        <span className="text-white text-[42px]">
          We solve digital problems with an outstanding creative flare
        </span>
        <span className="text-white text-base">
          We have created a new product that will help designers, developers and
          companies create websites for their startups quickly and easily.
        </span>
      </div>
      <div className="w-[48%]">
        <FormComponent />
      </div>
      <Image alt="bg" src={FormImage} className="absolute inset-0 z-[-1]" />
      <div className="absolute inset-0 z-[-1] opacity-60 bg-[#2F1893]" />
    </div>
  );
};

export default FormPage;
