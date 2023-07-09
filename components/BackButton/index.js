import { BackButtonStyled } from "./BackButton.style";

export default function BackButton() {
  return (
    <BackButtonStyled type="button" name="back" onClick={() => history.back()}>
      ❮
    </BackButtonStyled>
  );
}
