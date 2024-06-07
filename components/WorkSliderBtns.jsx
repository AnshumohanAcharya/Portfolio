"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ totalStyles, containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={totalStyles}>
      <div className={containerStyles}>
        <button className={btnStyles} onClick={() => swiper.slidePrev()}>
          <PiCaretLeftBold className={iconStyles} />
        </button>
        <button className={btnStyles} onClick={() => swiper.slideNext()}>
          <PiCaretRightBold className={iconStyles} />
        </button>
      </div>
    </div>
  );
};

export default WorkSliderBtns;
