import React from "react";
import { styled } from "styled-components";

const GlobalContainer = ({
  children,
  flex,
  alignItems,
  flexDirection,
  hidePadding,
}) => {
  return (
    <Container
      flex={flex}
      alignItems={alignItems}
      flexDirection={flexDirection}
      hidePadding={hidePadding}
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
  padding: ${({ hidePadding }) => (hidePadding ? "0" : "0 20px")};
  margin: 0 auto;

  display: ${({ flex }) => flex};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
`;

export default GlobalContainer;
