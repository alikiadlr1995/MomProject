import React from "react";
import StarterCart from "./components/starterCart";
import ProfessionalCart from "./components/professionalCart";
import TeamCart from "./components/teamCart";

const Pricing = () => {
  return (
    <div className="flex flex-col w-full items-center relative pb-20 min-h-screen bg-[url('/pricingtable.jpg')] bg-opacity-20 bg-cover">
      <div className="absolute inset-0 z-[0] opacity-50 bg-[#2F1893]" />
      <div className="flex flex-col  items-center text-center w-[42%] py-[100px] z-10">
        <div className="text-[42px] text-white">Plans & Pricing</div>
        <div className="text-[22px] text-white">
          Startup Framework is free forever — you only pay for custom domain
          hosting or to export your site.
        </div>
      </div>
      <div className="flex flex-row w-[84%] gap-[2.5%] z-10">
        <div className="w-[30%]">
          <StarterCart />
        </div>
        <div className="w-[30%]">
          <ProfessionalCart />
        </div>
        <div className="w-[30%]">
          <TeamCart />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
