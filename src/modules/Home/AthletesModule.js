import React from "react";
import { styled } from "styled-components";

import InfoCard from "../../components/InfoCard";
import athletes from "./athletes.json";
import useWindowWidth from "../../hooks/useWindowWidth";
import BgEffect from "../../components/BgEffects/BgEffect";
import { TABLET_SCREEN } from "../../constant";

const ONE = "01";
const FIFTY = 0.5;
const ALIGN_INFO_CARD = "flex-end";
const FLEX_DIRECTION = "column";
const IMAGE = "images/athlete.png";

const AthletesModule = () => {
  const screenWidth = useWindowWidth();
  const cardSize = Math.floor(screenWidth * FIFTY);

  return (
    <AthletesContainer>
      <OverlapImageContainer>
        <OverlapImage src={IMAGE} />
        <BgEffect effects={athletes.effects} hideOnDesktop />
      </OverlapImageContainer>
      {athletes.steps.map(
        ({ number, title, desc, background, underlineColor, descColor }) => (
          <InfoCard
            cardWidth={cardSize}
            key={number}
            mainTopic={number === ONE && athletes.mainTopic}
            number={number}
            title={title}
            desc={desc}
            background={background}
            underlineColor={underlineColor}
            descColor={descColor}
            alignItems={ALIGN_INFO_CARD}
            flexDirection={FLEX_DIRECTION}
          />
        )
      )}
    </AthletesContainer>
  );
};

const OverlapImageContainer = styled.div`
  position: absolute;
  right: 55%;

  @media screen and (max-width: ${TABLET_SCREEN}) {
    top: 15%;
    right: 50%;
  }
`;

const OverlapImage = styled.img`
  position: relative;
  z-index: 10;

  @media screen and (max-width: ${TABLET_SCREEN}) {
    width: 510px;
  }
`;

const AthletesContainer = styled.div`
  position: relative;
  padding-top: 60px;
`;

export default AthletesModule;
