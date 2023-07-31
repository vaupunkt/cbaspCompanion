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
  box-shadow: 0 0 20px color-mix(in srgb, var(--secondaryColor) 20%, black);

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
