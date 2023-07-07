import { StyledDiv, StyledH2 } from "./SubHeading.style";

export default function SubHeading({ children }) {
  return (
    <StyledDiv>
      <StyledH2>{children}</StyledH2>
      <hr></hr>
    </StyledDiv>
  );
}
