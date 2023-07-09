import BackButton from "../BackButton";
import { HeaderTitle, HeaderDate, HeaderContainer } from "./Header.style";

export default function Header({ title, date, backButton }) {
  return (
    <>
      <HeaderContainer>
        {backButton && <BackButton />}
        {title && <HeaderTitle>{title}</HeaderTitle>}
        {date && <HeaderDate>{date}</HeaderDate>}
      </HeaderContainer>
    </>
  );
}
