import Header from "@/components/Header";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import { styled } from "styled-components";
const NavigationContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 50px;
  bottom: 150px;
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
export default function mydata() {
  return (
    <>
      <Header link="./" title="Meine Daten" />
      <NavigationContainer>
        <Slide duration={300} cascade>
          <NavigationLink href="./mysymptoms">Meine Symptome</NavigationLink>
          <NavigationLink href="./myanalyses">Meine Analysen</NavigationLink>
          <NavigationLink href="./kieslerkreis">Kieslerkreis</NavigationLink>
        </Slide>
      </NavigationContainer>
    </>
  );
}
