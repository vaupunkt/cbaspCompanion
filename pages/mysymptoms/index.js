import Header from "@/components/Header";
import Link from "next/link";
import { styled, css } from "styled-components";

const SymptomGrid = styled.section`
  display: grid;

  grid-template-columns: 25vh 25vh;
  grid-template-rows: 25vh 25vh;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  padding-top: 40px;
`;

const SymptomBlock = styled(Link)`
  text-align: center;
  border-radius: 25px;
  text-decoration: none;
  color: black;
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  hyphens: auto;
  word-wrap: break-word;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}
`;
const SeeAllSymptomLink = styled.div`
  border-color: var(--mainDarkColor);
  padding: 15px 40px 15px 15px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  color: var(--mainLightColor);
  background-color: var(--mainDarkColor);
  text-decoration: none;
  position: fixed;
  left: 0px;
  font-weight: 500;
  bottom: 80px;
  font-size: 1.5em;
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

const AddNewSymptomLink = styled.div`
  border-color: var(--mainDarkColor);
  padding: 15px 40px 15px 15px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  color: var(--mainLightColor);
  background-color: var(--mainDarkColor);
  text-decoration: none;
  position: fixed;
  right: 0px;
  font-weight: 800;
  bottom: 80px;
  font-size: 1.5em;
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

export default function MySymptomsPage() {
  return (
    <>
      <Header backButton title="Meine Symptome" />
      <SymptomGrid lang="de">
        <SymptomBlock
          href={`/mysymptoms/physicalLevel`}
          color="var(--physicalLevel)"
        >
          <h3>Körperliche Ebene</h3>
        </SymptomBlock>

        <SymptomBlock
          href={`/mysymptoms/emotionalLevel`}
          color="var(--emotionalLevel)"
        >
          <h3>Gefühlsebene</h3>
        </SymptomBlock>
        <SymptomBlock
          href={`/mysymptoms/mentalLevel`}
          color="var(--mentalLevel)"
        >
          <h3>gedankliche Ebene</h3>
        </SymptomBlock>
        <SymptomBlock
          href={`/mysymptoms/behavioralLevel`}
          color="var(--behavioralLevel)"
        >
          <h3>Verhaltensebene</h3>
        </SymptomBlock>
      </SymptomGrid>
      <Link href="./addsymptom">
        <AddNewSymptomLink>+</AddNewSymptomLink>
      </Link>
      <Link href="./mysymptoms/all">
        <SeeAllSymptomLink>Alle</SeeAllSymptomLink>
      </Link>
    </>
  );
}
