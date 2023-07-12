import { styled } from "styled-components";

export const StyledNavigationContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${(props) => (props.top ? "top: 80px" : "")};
  ${(props) => (props.bottom ? "bottom: 60px" : "")};
`;
