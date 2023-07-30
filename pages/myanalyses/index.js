import Header from "@/components/Header";
import { styled } from "styled-components";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import Head from "next/head";

const NavigationContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 50px;
  top: 100px;
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

export default function MyAnalysesPage() {
  return (
    <>
      <Head>
        <title>Meine Situationsanalysen</title>
        <meta charSet="UTF-8"></meta>
      </Head>
      <Header backButton title="Meine Situationsanalysen" />
      <NavigationContainer>
        <Slide duration={300} cascade>
          <NavigationLink href="./pastanalyses">
            Vergangenheitsanalysen
          </NavigationLink>
          <NavigationLink href="./innersituationanalyses">
            Innere Situationsanalysen
          </NavigationLink>
          <NavigationLink href="./futureanalyses">
            Zukunftsanalysen
          </NavigationLink>
          <NavigationLink href="./allentries">Alle Analysen</NavigationLink>
        </Slide>
      </NavigationContainer>
    </>
  );
}
