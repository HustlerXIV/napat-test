import React from "react";
import styled from "styled-components";

import { MOBILE_SCREEN, TABLET_SCREEN } from "../../constant";

const BgEffect = ({ effects, hideOnDesktop }) => {
  return (
    <div>
      {effects.map((effect) => (
        <Effect
          key={effect.path}
          src={`images/${effect.path}`}
          alt={effect.path}
          hideOnDesktop={hideOnDesktop}
          {...effect}
        />
      ))}
    </div>
  );
};

const Effect = styled.img`
  display: ${({ hideOnDesktop }) => hideOnDesktop && "none"};
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};

  @media screen and (max-width: ${TABLET_SCREEN}) {
    display: block;
  }

  @media screen and (max-width: ${MOBILE_SCREEN}) {
    top: ${({ mobileTop }) => mobileTop};
    left: ${({ mobileLeft }) => mobileLeft};
    right: ${({ mobileRight }) => mobileRight};
    max-width: 100px;
  }
`;

export default BgEffect;
