import { SmallButtonStyled } from "./SmallButton.style";

export default function SmallButton({ name, children, onClick }) {
  return (
    <SmallButtonStyled
      type="button"
      name={name}
      aria-label={name}
      onClick={onClick}
    >
      {children}
    </SmallButtonStyled>
  );
}
