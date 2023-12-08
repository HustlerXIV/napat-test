import React from "react";
import { styled } from "styled-components";

import InfoCard from "../../components/InfoCard";
import athletes from "./athletes.json";
import useWindowWidth from "../../hooks/useWindowWidth";
import BgEffect from "../../components/BgEffects/BgEffect";

const ONE = "01";
const FIFTY = 0.5;
const ALIGN_INFO_CARD = "flex-end";
const FLEX_DIRECTION = "column";
const IMAGE = "images/athlete.png";

const AthletesModule = () => {
  const screenWidth = useWindowWidth();
  const imageSize = Math.floor(screenWidth * FIFTY);
  const cardSize = Math.floor(screenWidth * FIFTY);

  return (
    <AthletesContainer>
      <OverlapImageContainer>
        <OverlapImage src={IMAGE} width={imageSize} />
        <BgEffect effects={athletes.effects} hideOnDesktop />
      </OverlapImageContainer>
      {athletes.steps.map(
        ({ number, title, desc, background, underlineColor, descColor }) => (
          <InfoCard
            cardWidth={cardSize}
            imageWidth={imageSize}
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
  width: ${({ width }) => `${width}px`};
  position: absolute;
  right: 55%;
`;

const OverlapImage = styled.img`
  position: relative;
  max-width: 678px;
  z-index: 10;
`;

const AthletesContainer = styled.div`
  position: relative;
  padding-top: 60px;
`;

export default AthletesModule;
