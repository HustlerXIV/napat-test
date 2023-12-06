import { styled } from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  padding: 64px 0px;
  background: ${(props) => `var(--${props.background})`};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 700px;
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
`;
