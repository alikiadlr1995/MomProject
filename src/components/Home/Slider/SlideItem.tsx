import React from "react";

export type SlideItemType = {
  name: string;
  title: string;
  description: string;
};

interface SlideItemProps {
  slideItem: SlideItemType;
}
const SlideItem = ({ slideItem }: SlideItemProps) => {
  return (
    <div className="flex w-full flex-col gap-6 items-center text-center">
      <span className="text-[30px] text-white">{slideItem.name}</span>
      <span className="text-7xl text-white">{slideItem.title}</span>
      <span className="text-[22px] text-white">{slideItem.description}</span>
    </div>
  );
};

export default SlideItem;
