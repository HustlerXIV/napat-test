import { styled } from "styled-components";
import { MOBILE_SCREEN, TABLET_SCREEN } from "../../constant";

export const MainTopic = styled.div`
  display: none;

  @media screen and (max-width: ${MOBILE_SCREEN}) {
    display: block;
    color: var(--light-gray);
    width: 100%;
    font-size: 50px;
    line-height: 58.59px;
    margin-bottom: 280px;
    margin-left: 20px;
    width: 200px;
  }
`;

export const OverlapImageContainer = styled.div`
  position: absolute;
  right: 55%;
  z-index: 10;

  @media screen and (max-width: ${TABLET_SCREEN}) {
    top: 15%;
    right: 50%;
  }

  @media screen and (max-width: ${MOBILE_SCREEN}) {
    right: initial;
    top: 37%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const OverlapImage = styled.img`
  position: relative;
  z-index: 10;

  @media screen and (max-width: ${TABLET_SCREEN}) {
    width: 510px;
  }

  @media screen and (max-width: ${MOBILE_SCREEN}) {
    width: ${({ mobileWidth }) => (mobileWidth ? `${mobileWidth}px` : "218px")};
  }
`;

export const SectionContainer = styled.div`
  position: relative;
  padding-top: 60px;

  @media screen and (max-width: ${MOBILE_SCREEN}) {
    padding-top: 20px;
    width: 100%;
  }
`;

export const PlayerOverlapImageContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;

  @media screen and (max-width: 1440px) {
    right: -10%;
  }

  @media screen and (max-width: 1280px) {
    right: -40%;
  }

  @media screen and (max-width: 1100px) {
    right: -50%;
  }

  @media screen and (max-width: 930px) {
    right: -60%;
  }

  @media screen and (max-width: ${TABLET_SCREEN}) {
    top: 15%;
    right: -20%;
  }

  @media screen and (max-width: ${MOBILE_SCREEN}) {
    top: 37%;
    left: 50%;
    transform: translate(-50%, -50%);
    right: initial;
  }
`;
