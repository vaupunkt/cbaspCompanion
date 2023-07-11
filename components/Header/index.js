import Button from "../Button";
import { HeaderTitle, HeaderDate, HeaderContainer } from "./Header.style";

export default function Header({ title, date, backButton }) {
  return (
    <>
      <HeaderContainer>
        {backButton && <Button buttonType="backButton" />}
        {title && <HeaderTitle>{title}</HeaderTitle>}
        {date && <HeaderDate>{date}</HeaderDate>}
      </HeaderContainer>
    </>
  );
}
