import NavigationContainer from "../NavigationContainer";
import { StyledNavigationLink } from "./NavigationLink.style";

export default function NavigationLink({ href, children }) {
  return <StyledNavigationLink href={href}>{children}</StyledNavigationLink>;
}
