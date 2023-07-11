import { ButtonStyled } from "./Button.style";

export default function Button({ name, children, onClick }) {
  return (
    <ButtonStyled type="button" name={name} aria-label={name} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}
