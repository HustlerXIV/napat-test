import React from "react";
import Slider from "react-slick";
import InfoCard from "../InfoCard";

const Swiper = ({ items, topic, cardSize, alignItems, flexDirection }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {items.map(
        ({ number, title, desc, background, underlineColor, descColor }) => (
          <InfoCard
            cardWidth={cardSize}
            key={number}
            displayTopic={topic}
            mainTopic={topic}
            number={number}
            title={title}
            desc={desc}
            background={background}
            underlineColor={underlineColor}
            descColor={descColor}
            alignItems={alignItems}
            flexDirection={flexDirection}
          />
        )
      )}
    </Slider>
  );
};

export default Swiper;
