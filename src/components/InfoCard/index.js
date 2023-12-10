import React from "react";

import * as styles from "./styled";
import GlobalContainer from "../GlobalContainer";

const InfoCard = ({
  mainTopic,
  number,
  title,
  desc,
  background,
  underlineColor,
  descColor,
  alignItems,
  flexDirection,
  cardWidth,
  displayTopic,
  numberColor,
}) => {
  return (
    <styles.MainContainer background={background}>
      <GlobalContainer alignItems={alignItems} flexDirection={flexDirection}>
        {mainTopic && displayTopic && (
          <styles.MainTopic width={cardWidth}>{mainTopic}</styles.MainTopic>
        )}
        <styles.InfoContainer width={cardWidth}>
          <styles.TopicContainer>
            <styles.NumberContainer numberColor={numberColor}>
              {number}
              <styles.Underline color={underlineColor} />
            </styles.NumberContainer>
            <styles.Title>{title}</styles.Title>
          </styles.TopicContainer>
          <styles.Description color={descColor}>{desc}</styles.Description>
        </styles.InfoContainer>
      </GlobalContainer>
    </styles.MainContainer>
  );
};

export default InfoCard;
