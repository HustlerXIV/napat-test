import React from "react";

import * as styles from "./styled";
import BgEffect from "../../components/BgEffects/BgEffect";
import athletes from "./athletes.json";
import { FIFTY, FLEX_END, COLUMN, ONE, FLEX_START } from "../../constant";
import useWindowWidth from "../../hooks/useWindowWidth";
import GlobalContainer from "../../components/GlobalContainer";
import Swiper from "../../components/Swiper";
import InfoCard from "../../components/InfoCard";

const AthletesSection = () => {
  const screenWidth = useWindowWidth();
  const isMobile = screenWidth <= 750;
  const cardWidth = Math.floor(screenWidth * FIFTY);

  return (
    <styles.SectionContainer>
      {isMobile && (
        <GlobalContainer
          alignItems={isMobile ? FLEX_START : FLEX_END}
          flexDirection={COLUMN}
          hidePadding
        >
          <styles.MainTopic width={cardWidth}>
            {athletes.mainTopic}
          </styles.MainTopic>
        </GlobalContainer>
      )}
      <styles.OverlapImageContainer>
        <styles.OverlapImage src={athletes.image} />
        <BgEffect effects={athletes.effects} hideOnDesktop />
      </styles.OverlapImageContainer>
      {isMobile ? (
        <Swiper
          topic={athletes.mainTopic}
          items={athletes.steps}
          displayTopic={false}
        />
      ) : (
        athletes.steps.map(
          ({ number, title, desc, background, underlineColor, descColor }) => (
            <InfoCard
              cardWidth={cardWidth}
              key={number}
              displayTopic={number === ONE}
              mainTopic={athletes.mainTopic}
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
