import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  background-color: var(--mainDarkColor);
  color: var(--mainLightColor);
  position: sticky;
  top: 0;
  padding: 10px;
  width: 100%;
  height: 60px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 1.3em;
  display: table-cell;
  vertical-align: middle;
`;

export const HeaderDate = styled.p`
  margin: 0;
  font-size: 0.8em;
`;
