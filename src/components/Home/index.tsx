import React from "react";
import Header from "./Header";
import SliderComponent from "./Slider";
import Image from "next/image";
import LandingImage from "../../assets/images/landing_page.jpg";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-screen py-20 min-h-screen overflow-hidden relative px-[115px]">
      <Header />
      <SliderComponent />
      <div>
        <button className="px-[35px] py-[17px] rounded-full bg-[#482BE7] text-white text-lg">
          Create an Account
        </button>
      </div>

      <Image alt="bg" src={LandingImage} className="absolute inset-0 z-[-1]" />
      <div className="absolute inset-0 z-[-1] opacity-50 bg-[#2F1893]" />
    </div>
  );
};

export default HomePage;
