import { ButtonDescription, ButtonBody } from "./Button.style";

export default function Button({ name, children, variant, onClick, type }) {
  return (
    <ButtonBody variant={variant} name={name} type={type} onClick={onClick}>
      {variant === "small" ? (
        children
      ) : (
        <ButtonDescription>{children}</ButtonDescription>
      )}
    </ButtonBody>
  );
}
