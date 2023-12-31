import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  background-color: var(--primaryColor);
  color: var(--secondaryColor);
  position: sticky;
  top: 0;
  padding: 10px;
  width: 100%;
  height: 60px;
  z-index: 9999;
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
