import React from "react";
import FormComponent from "./FormComponent";
import ContactImage from "../../assets/images/contact.jpg";
import Image from "next/image";
import { IoIosCall } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { LiaBuildingSolid } from "react-icons/lia";

const ContactPage = () => {
  return (
    <div className="flex flex-row px-[15%] py-[100px]  min-h-screen w-full justify-between relative">
      <div className="flex flex-col gap-8 w-[42.2%] text-white">
        <span className="text-white text-[42px]">Let’s Keep in Touch</span>
        <span className="text-white text-[22px]">
          We have created a new product that will help designers, developers and
          companies create websites for their startups quickly and easily.
        </span>
        <div className="flex gap-3 items-center">
          <IoIosCall className="text-lg text-white" />

          <span className="text-base">+1 555 505 5050</span>
        </div>
        <div className="flex gap-3 items-center">
          <MdMail className="text-lg text-white" />

          <span className="text-base">info@designmodo.com</span>
        </div>
        <div className="flex gap-3 items-start">
          <LiaBuildingSolid className="text-lg text-white" />

          <span className="text-base">
            San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco, 230909
          </span>
        </div>
      </div>
      <div className="w-[48%]">
        <FormComponent />
      </div>
      <Image alt="bg" src={ContactImage} className="absolute inset-0 z-[-1]" />
      <div className="absolute inset-0 z-[-1] opacity-60 bg-[#2F1893]" />
    </div>
  );
};

export default ContactPage;
