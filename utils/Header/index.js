import { StyledDiv, StyledDate, StyledH1 } from "./Header.style";

export default function Header({ title, date }) {
  return (
    <StyledDiv>
      <StyledH1>{title}</StyledH1>
      <StyledDate>{date}</StyledDate>
    </StyledDiv>
  );
}
