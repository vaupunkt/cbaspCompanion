import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import { styled } from "styled-components";
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
export default function mydata() {
  return (
    <>
      <Head>
        <title>Meine Daten</title>
        <meta charSet="UTF-8"></meta>
      </Head>
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
