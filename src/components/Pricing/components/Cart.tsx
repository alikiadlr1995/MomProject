import clsx from "clsx";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
export type ItemType = {
  title: string;
  checked: boolean;
};
interface CartProps {
  title: string;
  price: number;
  items: ItemType[];
  isColorFull?: boolean;
}
const Cart = ({ title, price, items, isColorFull }: CartProps) => {
  return (
    <div className="flex flex-col border-2 border-white rounded-[5px]">
      <div className=" flex flex-col gap-[22.6px] px-[19%] pt-[64.2px]">
        <div className="text-[22px] text-white"> {title}</div>
        <div className="text-[58px] text-white flex gap-1 items-start">{price} <span className="text-[14px] mt-4">$</span></div>
      </div>

      <div className="flex flex-col gap-4 px-[13%] pt-[64.2px]">
        {items.map((item, index) => (
          <div key={index} className="flex items-center  ">
            <div className="w-8">
              {item?.checked ? <FaCheck className="text-green-500" /> : ""}
            </div>
            <div className={clsx("text-[16p] text-white",{"opacity-70":!item.checked})}>{item?.title}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-[31px]">
        <button
          className={clsx(
            "px-[65px] py-[15px] rounded-full  border-[2px]   text-white text-lg",{
              "bg-[#E93A7D] border-[#E93A7D]":isColorFull,
              " border-white":!isColorFull
            }
          )}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Cart;
