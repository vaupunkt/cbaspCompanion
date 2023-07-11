import {
  BigButtonDescription,
  BigButtonIcon,
  BigButtonBody,
} from "./BigButton.style";

export default function BigButton({ name, children, icon, onClick }) {
  return (
    <BigButtonBody name={name} type="button" onClick={onClick}>
      <BigButtonDescription>{children}</BigButtonDescription>
      <BigButtonIcon>{icon}</BigButtonIcon>
    </BigButtonBody>
  );
}
