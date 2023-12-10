import { styled } from "styled-components";
import { MOBILE_SCREEN, TABLET_SCREEN } from "../../constant";

export const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 64px 0px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: ${({ background }) => `var(--${background})`};
    z-index: -1;
  }

  @media screen and (max-width: ${TABLET_SCREEN}) {
    padding: 32px 0px;
  }

  @media screen and (max-width: ${MOBILE_SCREEN}) {
    height: 280px;
  }
`;

export const MainTopic = styled.div`
  font-size: 90px;
  line-height: 105.47px;
  color: var(--light-gray);
  width: ${({ width }) => `${width}px`};
  max-width: 700px;
  margin-bottom: 60px;
  white-space: nowrap;

  @media screen and (max-width: ${TABLET_SCREEN}) {
    width: auto;
    max-width: 450px;
  }

  @media screen and (max-width: ${MOBILE_SCREEN}) {
    width: 100%;
    font-size: 50px;
    line-height: 58.59px;
    margin-bottom: 280px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: ${({ width }) => `${width}px`};
  max-width: 700px;
  word-wrap: break-word;

  @media screen and (max-width: ${TABLET_SCREEN}) {
    max-width: 450px;
  }

  @media screen and (max-width: ${MOBILE_SCREEN}) {
    width: 100%;
  }
`;

export const TopicContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const NumberContainer = styled.div`
  padding-top: 8px;
  font-size: 18px;
  width: 22px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${({ numberColor }) => `var(--${numberColor})`};
`;

export const Underline = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 4px;
  background: ${({ color }) => `var(--${color})`};
`;

export const Title = styled.div`
  color: var(--approx-silver);
  font-size: 36px;

  @media screen and (max-width: ${MOBILE_SCREEN}) {
    font-size: 28px;
  }
`;

export const Description = styled.div`
  font-size: 20px;
  color: ${({ color }) => `var(--${color})`};
  line-height: 28px;

  @media screen and (max-width: ${TABLET_SCREEN}) {
    font-size: 18px;
  }
`;
