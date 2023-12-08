import React from "react";
import { styled } from "styled-components";

import InfoCard from "../../components/InfoCard";
import athletes from "./athletes.json";
import useWindowWidth from "../../hooks/useWindowWidth";

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
      <OverlapImage src={IMAGE} width={imageSize} />
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

const OverlapImage = styled.img`
  width: ${({ width }) => `${width}px`};
  max-width: 678px;
  position: absolute;
  right: 55%;
`;

const AthletesContainer = styled.div`
  position: relative;
`;

export default AthletesModule;
