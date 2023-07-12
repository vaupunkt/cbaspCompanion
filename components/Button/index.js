import { ButtonDescription, ButtonBody } from "./Button.style";

export default function Button({ name, children, variant, onClick }) {
  return (
    <ButtonBody variant={variant} name={name} type="button" onClick={onClick}>
      {variant === "small" ? (
        children
      ) : (
        <ButtonDescription>{children}</ButtonDescription>
      )}
    </ButtonBody>
  );
}
