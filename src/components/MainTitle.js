import React from "react";
import { styled } from "styled-components";

const MainTitle = () => {
  return <Title>ATHLETS</Title>;
};

const Title = styled.div`
  font-size: 90px;
  color: var(--light-gray);
  width: 100%;
  max-width: 700px;
`;

export default MainTitle;
