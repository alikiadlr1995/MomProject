import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideItem, { SlideItemType } from "./SlideItem";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const slides: SlideItemType[] = [
  {
    name: "Startup1",
    title: "Forgr Aboute Code",
    description:
      "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. ",
  },
  {
    name: "Startup2",
    title: "Forgr Aboute Code",
    description:
      "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. ",
  },
  {
    name: "Startup3",
    title: "Forgr Aboute Code",
    description:
      "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. ",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  touchMove: true,
  swipeToSlide: true,
};
const SliderComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const goToNext = () => sliderRef.current?.slickNext();
  const goToPrev = () => sliderRef.current?.slickPrev();

  return (
    <div className="w-full flex flex-row gap-4 items-center pt-[145px] pb-[85px]">
      <div
        role={"button"}
        className="flex aspect-square w-8 items-center justify-between rounded-full"
        onClick={goToPrev}
      >
        <MdNavigateBefore className="text-2xl text-gray-700" />
      </div>
      <div className="w-[80%] overflow-hidden">
        <Slider {...settings} className="m-0" ref={sliderRef}>
          {slides.map((slideItem, index) => (
            <div key={index} className="m-0 flex items-center justify-center">
              <SlideItem slideItem={slideItem} />
            </div>
          ))}
        </Slider>
      </div>
      <div
        role={"button"}
        className="flex aspect-square w-8 items-center justify-center rounded-full"
        onClick={goToNext}
      >
        <MdNavigateNext className="text-2xl text-gray-700" />
      </div>
    </div>
  );
};

export default SliderComponent;
