import Image from "next/image";
import React from "react";
import facebook from "../../assets/images/fa-facebook-square.png";
import google from "../../assets/images/fa-google-plus.png";
import twitter from "../../assets/images/fa-twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#2F1893] flex flex-col w-full px-[9%]">
      <div className=" pt-[49.4px] flex justify-between items-center">
        <div className="text-[24px] font-bold text-white">Startup 3</div>
        <div className="flex gap-7  items-center ">
          <div className="text-[16px] text-white">Privacy Policy</div>
          <div className="text-[16px] text-white ">Terms</div>
         
            <Image src={twitter} width={17} height={26} alt="socials" />
        
      
            <Image src={facebook} width={11} height={26} alt="socials" />
       
         
            <Image src={google} width={24} height={26} alt="socials" />
        
        </div>
      </div>
      <div className="mt-[40.8px] w-full h-[1px] bg-white"></div>
      <div className=" pt-[47.4px] pb-[44.6px] flex justify-between items-center	">
        <div className="flex justify-between  items-center ">
          <div className="text-[16px] text-white">Tour</div>
          <div className="text-[16px] text-white pl-[30px]">Features</div>
          <div className="text-[16px] text-white pl-[30px]">Pricing Plans</div>
          <div className="text-[16px] text-white pl-[30px]">Our Works</div>
          <div className="text-[16px] text-white pl-[30px]">Brands</div>
          <div className="text-[16px] text-white pl-[30px]">Contacts</div>
        </div>
        <div className="text-[16px] text-white">
          © 2017 Designmodo. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
