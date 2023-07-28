import Header from "@/components/Header";
import { styled, css } from "styled-components";

const SymptomGrid = styled.section`
  display: grid;

  grid-template-columns: 25vh 25vh;
  grid-template-rows: 25vh 25vh;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  padding-top: 40px;
  height: calc(100vh - 60px);
`;

const SymptomBlock = styled.div`
  border: solid;
  text-align: center;
  border-radius: 25px;
  border-width: 3px;
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

export default function MySymptomsPage() {
  return (
    <>
      <Header backButton title="Meine Symptome" />
      <SymptomGrid lang="de">
        <SymptomBlock color="#8FA8FF">
          <h3>Körperliche Ebene</h3>
        </SymptomBlock>
        <SymptomBlock color="#FF9191">
          <h3>Gefühlsebene</h3>
        </SymptomBlock>
        <SymptomBlock color="#FFEA9C">
          <h3>gedankliche Ebene</h3>
        </SymptomBlock>
        <SymptomBlock color="#92D58E">
          <h3>Verhaltensebene</h3>
        </SymptomBlock>
      </SymptomGrid>
    </>
  );
}
