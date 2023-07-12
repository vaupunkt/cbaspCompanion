import { styled } from "styled-components";

export const StyledNavigationContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  ${(props) => (props.right ? "right: 0px" : "")};
  ${(props) => (props.left ? "left: 0px" : "")};
  ${(props) => (props.top ? "top: 60px" : "")};
  ${(props) => (props.bottom ? "bottom: 60px" : "")};
`;
