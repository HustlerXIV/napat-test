import React from "react";

import * as styles from "./styled";
import GlobalContainer from "../GlobalContainer";
import useWindowWidth from "../../hooks/useWindowWidth";

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
}) => {
  const screenWidth = useWindowWidth();
  const isMobile = screenWidth <= 320;

  return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <styles.MainContainer background={background}>
          <GlobalContainer
            alignItems={alignItems}
            flexDirection={flexDirection}
          >
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
      )}
    </>
  );
};

export default InfoCard;
