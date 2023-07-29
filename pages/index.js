import Header from "@/components/Header";
import { styled } from "styled-components";
import Link from "next/link";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const NavigationContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 50px;
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
const TitleBox = styled.div`
  width: 220px;
  margin: 15vh auto;
  padding: 40px;
  border-radius: 25px;
  text-align: center;
  background-color: var(--mainDarkColor);
  color: var(--mainLightColor);
  box-shadow: 0 0 5px var(--mainDarkColor);
`;

const Title = styled.h1`
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 2em;
  text-transform: uppercase;
`;

const Subtitle = styled.h2`
  margin: 0;
  padding: 0;
  width: 100%;
  font-size: 1.1em;
  text-transform: uppercase;
`;

export default function Home() {
  return (
    <>
      <Zoom duration={300}>
        <TitleBox>
          <Fade>
            <Title>CBASP</Title>
            <Subtitle>Companion</Subtitle>
          </Fade>
        </TitleBox>
      </Zoom>
      <NavigationContainer>
        <Slide duration={300} cascade>
          <NavigationLink href="./newanalysis">Neue Analyse ➕ </NavigationLink>
          <NavigationLink href="./myanalyses">Meine Analysen</NavigationLink>
          <NavigationLink href="./kieslerkreis">Kieslerkreis</NavigationLink>
        </Slide>
      </NavigationContainer>
    </>
  );
}
