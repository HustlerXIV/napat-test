import React, { useState } from "react";
import Slider from "react-slick";
import InfoCard from "../InfoCard";

const Swiper = ({ items, topic, alignItems, flexDirection, displayTopic }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current),
    beforeChange: (current, next) => setActiveSlide(current),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {dots}
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`custom-dots ${i === activeSlide ? "active-dots" : ""}`}
      ></div>
    ),
  };

  return (
    <Slider {...settings}>
      {items.map(
        ({
          number,
          title,
          desc,
          background,
          underlineColor,
          descColor,
          numberColor,
        }) => (
          <InfoCard
            key={number}
            displayTopic={displayTopic}
            mainTopic={topic}
            number={number}
            title={title}
            desc={desc}
            background={background}
            underlineColor={underlineColor}
            descColor={descColor}
            alignItems={alignItems}
            flexDirection={flexDirection}
            numberColor={numberColor}
          />
        )
      )}
    </Slider>
  );
};

export default Swiper;
