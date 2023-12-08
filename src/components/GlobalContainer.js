import React from "react";
import { styled } from "styled-components";

const GlobalContainer = ({ children, flex, alignItems, flexDirection }) => {
  return (
    <Container
      flex={flex}
      alignItems={alignItems}
      flexDirection={flexDirection}
    >
      {children}
    </Container>
  );
};

GlobalContainer.defaultProps = {
  flex: "flex",
  alignItems: "center",
  flexDirection: "row",
};

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 20px;
  margin: 0 auto;

  display: ${(props) => props.flex};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
`;

export default GlobalContainer;
