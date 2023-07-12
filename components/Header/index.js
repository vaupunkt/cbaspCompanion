import Button from "../SmallButton";
import { HeaderTitle, HeaderDate, HeaderContainer } from "./Header.style";

export default function Header({ title, date, backButton }) {
  return (
    <>
      <HeaderContainer>
        {backButton && (
          <Button variant="small" name="back" onClick={() => history.back()}>
            ❮
          </Button>
        )}
        {title && <HeaderTitle>{title}</HeaderTitle>}
        {date && <HeaderDate>{date}</HeaderDate>}
      </HeaderContainer>
    </>
  );
}
