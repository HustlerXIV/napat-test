import React from "react";
import { styled } from "styled-components";

import InfoCard from "../../components/InfoCard";
import athletes from "./athletes.json";
import useWindowWidth from "../../hooks/useWindowWidth";
import BgEffect from "../../components/BgEffects/BgEffect";
import {
  TABLET_SCREEN,
  ONE,
  FIFTY,
  FLEX_END,
  COLUMN,
  MOBILE_SCREEN,
  FLEX_START,
} from "../../constant";
import Swiper from "../../components/Swiper";

const IMAGE = "images/athlete.png";

const AthletesModule = () => {
  const screenWidth = useWindowWidth();
  const isMobile = screenWidth <= 360;
  const cardSize = Math.floor(screenWidth * FIFTY);

  return (
    <AthletesContainer>
      <OverlapImageContainer>
        <OverlapImage src={IMAGE} />
        <BgEffect effects={athletes.effects} hideOnDesktop />
      </OverlapImageContainer>
      {isMobile ? (
        <Swiper topic={athletes.mainTopic} items={athletes.steps} />
      ) : (
        athletes.steps.map(
          ({ number, title, desc, background, underlineColor, descColor }) => (
            <InfoCard
              cardWidth={cardSize}
              key={number}
              displayTopic={number === ONE}
              mainTopic={athletes.mainTopic}
              number={number}
              title={title}
              desc={desc}
              background={background}
              underlineColor={underlineColor}
              descColor={descColor}
              alignItems={isMobile ? FLEX_START : FLEX_END}
              flexDirection={COLUMN}
            />
          )
        )
      )}
    </AthletesContainer>
  );
};

const OverlapImageContainer = styled.div`
  position: absolute;
  right: 55%;
  z-index: 10;

  @media screen and (max-width: ${TABLET_SCREEN}) {
    top: 15%;
    right: 50%;
  }

  @media screen and (max-width: ${MOBILE_SCREEN}) {
    right: initial;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const OverlapImage = styled.img`
  position: relative;
  z-index: 10;

  @media screen and (max-width: ${TABLET_SCREEN}) {
    width: 510px;
  }

  @media screen and (max-width: ${MOBILE_SCREEN}) {
    width: 218px;
  }
`;

const AthletesContainer = styled.div`
  position: relative;
  padding-top: 60px;

  @media screen and (max-width: ${MOBILE_SCREEN}) {
    padding-top: 360px;
  }
`;

export default AthletesModule;
