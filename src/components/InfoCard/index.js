import React from "react";
import * as styles from "./styled";

const InfoCard = ({
  number,
  title,
  desc,
  background,
  underlineColor,
  descColor,
}) => {
  return (
    <styles.MainContainer background={background}>
      <styles.InfoContainer>
        <styles.TopicContainer>
          <styles.NumberContainer>
            {number}
            <styles.Underline color={underlineColor} />
          </styles.NumberContainer>
          <styles.Title>{title}</styles.Title>
        </styles.TopicContainer>
        <styles.Description color={descColor}>{desc}</styles.Description>
      </styles.InfoContainer>
    </styles.MainContainer>
  );
};

export default InfoCard;
