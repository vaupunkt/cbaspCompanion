import Button from "@/components/Button";
import { HeaderContainer, HeaderDate } from "@/components/Header/Header.style";
import { useState } from "react";
import { styled } from "styled-components";

const TitleInput = styled.input`
  width: 50%;
  text-align: right;
  margin: 0;
  font-size: 1.3em;
  background-color: var(--mainDarkColor);
  color: var(--mainLightColor);
  border: solid;
`;

const ChooseTypeOfAnalysisFormfield = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;

const ChooseTypeOfAnalysisInput = styled.section`
  display: flex;
  align-items: center;
  font-size: 1.2em;
`;

export default function NewAnalysis() {
  const pastAnalysisHeadlines = {
    description: "Beschreibe die Situation",
    interpretations: "Interpretation",
    behavior: "Verhalten",
    actualResult: "Tatsächliches Ergebnis",
    desiredResult: "Erwünschtes Ergebnis",
    comparison: "Vergleich des tatsächlichen mit dem erwünschten Ergebnis",
    revision: "Revision ungeeigneter Interpretationen",
    behaviorChange: "Veränderung des Verhaltens",
    implementation: "Umsetzung und Zusammenfassung",
    transfer: "Generalisierung und Übertragung des Gelernten auf den Alltag",
  };
  const date = new Date();
  const dateString = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;

  const [typeOfAnalysis, setTypeOfAnalysis] = useState("");
  function onOptionChange(event) {
    setTypeOfAnalysis(event.target.value);
    console.log(typeOfAnalysis);
  }
  return (
    <>
      <HeaderContainer>
        <Button
          type="button"
          variant="small"
          name="back"
          onClick={() => history.back()}
        >
          ❮
        </Button>
        <TitleInput
          name="title"
          required
          placeholder="Title der Analyse"
        ></TitleInput>
        <HeaderDate>{dateString}</HeaderDate>
      </HeaderContainer>
      <ChooseTypeOfAnalysisFormfield>
        <h2>Was für eine Analyse möchtest du erstellen?</h2>
        <ChooseTypeOfAnalysisInput>
          <input
            type="radio"
            id="pastAnalysis"
            name="type"
            onChange={onOptionChange}
            checked={typeOfAnalysis === "PastAnalysis"}
            value="PastAnalysis"
          />
          <label htmlFor="pastAnalysis">Vergangenheitsanalyse</label>
        </ChooseTypeOfAnalysisInput>
        <ChooseTypeOfAnalysisInput>
          <input
            type="radio"
            id="InnerSituationAnalysis"
            name="type"
            onChange={onOptionChange}
            checked={typeOfAnalysis === "InnerSituationAnalysis"}
            value="InnerSituationAnalysis"
          />
          <label htmlFor="InnerSituationAnalysis">
            Innere Situationsanalyse
          </label>
        </ChooseTypeOfAnalysisInput>
        <ChooseTypeOfAnalysisInput>
          <input
            type="radio"
            id="FutureAnalysis"
            name="type"
            onChange={onOptionChange}
            checked={typeOfAnalysis === "FutureAnalysis"}
            value="FutureAnalysis"
          />
          <label htmlFor="FutureAnalysis">Zukunftsanalyse</label>
        </ChooseTypeOfAnalysisInput>
      </ChooseTypeOfAnalysisFormfield>
      {typeOfAnalysis === "PastAnalysis" ? (
        pastAnalysisHeadlines.map((pastAnalysisHeadline) => {
          return <p>{pastAnalysisHeadline}</p>;
        })
      ) : (
        <p>nothing</p>
      )}
    </>
  );
}
