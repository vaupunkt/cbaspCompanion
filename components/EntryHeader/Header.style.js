import { styled } from "styled-components";

export const Header = styled.div`
  background-color: var(--mainDarkColor);
  color: var(--mainLightColor);
  position: sticky;
  top: 0;
  padding: 10px;
  width: 100%;
  height: 60px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 1.3em;
  text-align: right;
`;

export const HeaderDate = styled.p`
  margin: 0;
  font-size: 0.8em;
  text-align: right;
`;
