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
  cardWidth,
}) => {
  return (
    <styles.MainContainer background={background}>
      <GlobalContainer alignItems={alignItems} direction="column">
        {mainTopic && (
          <styles.MainTopic width={cardWidth}>{mainTopic}</styles.MainTopic>
        )}
        <styles.InfoContainer width={cardWidth}>
          <styles.TopicContainer>
            <styles.NumberContainer>
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
