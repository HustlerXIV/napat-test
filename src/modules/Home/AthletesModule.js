import React from "react";

import * as styles from "./styled";
import BgEffect from "../../components/BgEffects/BgEffect";
import athletes from "./athletes.json";
import {
  FIFTY,
  FLEX_END,
  COLUMN,
  ONE,
  FLEX_START,
  MOBILE_SCREEN_WIDTH,
} from "../../constant";
import useWindowWidth from "../../hooks/useWindowWidth";
import GlobalContainer from "../../components/GlobalContainer";
import Swiper from "../../components/Swiper";
import InfoCard from "../../components/InfoCard";

const AthletesSection = () => {
  const screenWidth = useWindowWidth();
  const isMobile = screenWidth <= MOBILE_SCREEN_WIDTH;
  const cardWidth = Math.floor(screenWidth * FIFTY);

  const { mainTopic, image, effects, steps } = athletes;

  return (
    <styles.SectionContainer>
      {isMobile && (
        <GlobalContainer
          alignItems={isMobile ? FLEX_START : FLEX_END}
          flexDirection={COLUMN}
          hidePadding
        >
          <styles.MainTopic width={cardWidth}>{mainTopic}</styles.MainTopic>
        </GlobalContainer>
      )}
      <styles.OverlapImageContainer>
        <styles.OverlapImage src={image} />
        <BgEffect effects={effects} hideOnDesktop />
      </styles.OverlapImageContainer>
      {isMobile ? (
        <Swiper topic={mainTopic} items={steps} displayTopic={false} />
      ) : (
        steps.map(
          ({ number, title, desc, background, underlineColor, descColor }) => (
            <InfoCard
              cardWidth={cardWidth}
              key={number}
              displayTopic={number === ONE}
              mainTopic={mainTopic}
              number={number}
              title={title}
              desc={desc}
              background={background}
              underlineColor={underlineColor}
              descColor={descColor}
              alignItems={FLEX_END}
              flexDirection={COLUMN}
            />
          )
        )
      )}
    </styles.SectionContainer>
  );
};

export default AthletesSection;
