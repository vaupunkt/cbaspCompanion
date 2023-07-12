import { StyledNavigationContainer } from "./NavigationContainer.style";

export default function NavigationContainer({
  top,
  left,
  right,
  bottom,
  children,
}) {
  return (
    <StyledNavigationContainer top={top} bottom={bottom}>
      {children}
    </StyledNavigationContainer>
  );
}
