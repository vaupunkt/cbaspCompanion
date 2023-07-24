import Header from "@/components/Header";
import { styled } from "styled-components";
import Link from "next/link";

const NavigationContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 20px;
  bottom: 80px;
`;

const NavigationLink = styled(Link)`
  border-color: var(--mainDarkColor);
  padding: 15px 15px 15px 15px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  color: var(--mainLightColor);
  background-color: var(--mainDarkColor);
  text-decoration: none;
  font-size: 1.3em;
  align-self: flex-start;

  &:hover {
    background-color: color-mix(
      in srgb,
      var(--mainDarkColor) 80%,
      var(--mainLightColor)
    );
  }
  &:active {
    box-shadow: inset 0px 0px 5px var(--mainLightColor);
  }
`;

export default function Home() {
  return (
    <>
      <Header title="CBASP Companion" />
      <NavigationContainer>
        <NavigationLink href="./newanalysis">Neue Analyse ➕ </NavigationLink>
        <NavigationLink href="./myanalyses">Meine Analysen</NavigationLink>
        <NavigationLink href="./chatbot">Chatbot-Test</NavigationLink>
        <NavigationLink href="./kieslerkreis">Kieslerkreis</NavigationLink>
      </NavigationContainer>
    </>
  );
}
