import { useRouter } from "next/router";
import Button from "../Button";
import { HeaderTitle, HeaderDate, HeaderContainer } from "./Header.style";

export default function Header({ title, date, backButton, link }) {
  const router = useRouter();

  return (
    <>
      <HeaderContainer>
        {backButton && (
          <Button
            type="button"
            variant="small"
            name="back"
            onClick={() => router.back()}
          >
            ❮
          </Button>
        )}
        {link && (
          <Button
            type="button"
            variant="small"
            name="back"
            onClick={() => (location.href = link)}
          >
            {link === "./" ? "🏠" : "❮"}
          </Button>
        )}
        {title && <HeaderTitle>{title}</HeaderTitle>}
        {date && <HeaderDate>{date}</HeaderDate>}
      </HeaderContainer>
    </>
  );
}
