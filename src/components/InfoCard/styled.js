import { styled } from "styled-components";
import { TABLET_SCREEN } from "../../constant";

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
    background-color: ${(props) => `var(--${props.background})`};
    z-index: -1;
  }

  @media screen and (max-width: ${TABLET_SCREEN}) {
    padding: 32px 0px;
  }
`;

export const MainTopic = styled.div`
  font-size: 5.625rem;
  line-height: 105.47px;
  color: var(--light-gray);
  width: ${({ width }) => `${width}px`};
  max-width: 700px;
  margin-bottom: 60px;
  overflow: hidden;
  white-space: nowrap;

  @media screen and (max-width: ${TABLET_SCREEN}) {
    max-width: 450px;
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
`;

export const Underline = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 4px;
  background: ${(props) => `var(--${props.color})`};
`;

export const Title = styled.div`
  color: var(--approx-silver);
  font-size: 36px;
`;

export const Description = styled.div`
  font-size: 20px;
  color: ${(props) => `var(--${props.color})`};
  line-height: 28px;

  @media screen and (max-width: ${TABLET_SCREEN}) {
    font-size: 18px;
  }
`;
