import React from "react";
import styled from "styled-components";
import { MOBILE_SCREEN, TABLET_SCREEN } from "../../constant";

const BgEffect = ({ effects }) => {
  return (
    <div>
      {effects.map((effect) => (
        <Effect key={effect.path} src={`images/${effect.path}`} {...effect} />
      ))}
    </div>
  );
};

const Effect = styled.img`
  display: none;

  @media screen and (max-width: ${TABLET_SCREEN}) {
    display: block;
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
  }

  @media screen and (max-width: ${MOBILE_SCREEN}) {
    top: ${(props) => props.mobileTop};
    left: ${(props) => props.mobileLeft};
    right: ${(props) => props.mobileRight};
  }
`;

export default BgEffect;
