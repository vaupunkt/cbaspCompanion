import { styled } from "styled-components";
import Link from "next/link";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Head from "next/head";

const NavigationContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 50px;
  bottom: 15vh;
`;

const NavigationLink = styled(Link)`
  border-color: var(--primaryColor);
  padding: 15px 15px 15px 15px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  color: var(--secondaryColor);
  background-color: var(--primaryColor);
  text-decoration: none;
  font-size: 1.3em;
  align-self: flex-start;
  &:hover {
    background-color: color-mix(
      in srgb,
      var(--primaryColor) 80%,
      var(--secondaryColor)
    );
  }
  &:active {
    box-shadow: inset 0px 0px 5px var(--secondaryColor);
  }
`;
const TitleBox = styled.div`
  width: 220px;
  margin: 15vh auto;
  padding: 40px;
  border-radius: 25px;
  text-align: center;
  background-color: var(--primaryColor);
  color: var(--secondaryColor);
  box-shadow: 0 0 5px var(--primaryColor);
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
      <Head>
        <title>CBASP Companion</title>
        <meta charSet="UTF-8"></meta>
      </Head>
      <Zoom duration={300}>
        <TitleBox onClick>
          <Fade>
            <Title>CBASP</Title>
            <Subtitle>Companion</Subtitle>
          </Fade>
        </TitleBox>
      </Zoom>
      <NavigationContainer>
        <Slide duration={300} cascade>
          <NavigationLink href="./newanalysis">Neue Analyse ➕ </NavigationLink>
          <NavigationLink href="./mydata">Meine Daten</NavigationLink>
          <NavigationLink href="./moreinformation">Mehr Infos</NavigationLink>
        </Slide>
      </NavigationContainer>
    </>
  );
}
