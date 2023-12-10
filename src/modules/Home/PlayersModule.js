import React from "react";

import * as styles from "./styled";
import BgEffect from "../../components/BgEffects/BgEffect";
import players from "./players.json";
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

const PlayersModule = () => {
  const screenWidth = useWindowWidth();
  const isMobile = screenWidth <= MOBILE_SCREEN_WIDTH;
  const width = Math.floor(screenWidth * FIFTY);

  const { mainTopic, image, effects, steps } = players;

  return (
    <styles.SectionContainer style={{ overflow: "hidden" }}>
      {isMobile && (
        <GlobalContainer
          alignItems={isMobile ? FLEX_START : FLEX_END}
          flexDirection={COLUMN}
          hidePadding
        >
          <styles.MainTopic>{mainTopic}</styles.MainTopic>
        </GlobalContainer>
      )}
      <styles.PlayerOverlapImageContainer>
        <styles.OverlapImage src={image} mobileWidth={300} />
        <BgEffect effects={effects} widthEffect={width} />
      </styles.PlayerOverlapImageContainer>
      {isMobile ? (
        <Swiper topic={mainTopic} items={steps} displayTopic={false} />
      ) : (
        steps.map(
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
              cardWidth={width}
              key={number}
              displayTopic={number === ONE}
              mainTopic={players.mainTopic}
              number={number}
              title={title}
              desc={desc}
              background={background}
              underlineColor={underlineColor}
              descColor={descColor}
              alignItems={FLEX_START}
              flexDirection={COLUMN}
              numberColor={numberColor}
            />
          )
        )
      )}
    </styles.SectionContainer>
  );
};

export default PlayersModule;
