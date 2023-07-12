import { StyledNavigationContainer } from "./NavigationContainer.style";

export default function NavigationContainer({
  top,
  left,
  right,
  bottom,
  children,
}) {
  return (
    <StyledNavigationContainer
      top={top}
      left={left}
      right={right}
      bottom={bottom}
    >
      {children}
    </StyledNavigationContainer>
  );
}
