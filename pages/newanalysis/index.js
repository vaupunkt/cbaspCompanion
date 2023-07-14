import Button from "@/components/Button";
import { HeaderContainer, HeaderDate } from "@/components/Header/Header.style";
import { useState } from "react";
import { styled } from "styled-components";
import { allAnalysisKeys } from "@/lib/allAnalysisKeys";
import EntryContentBlock from "@/components/EntryContentBlock";

const TitleInput = styled.input`
  width: 50%;
  text-align: right;
  margin: 0;
  font-size: 1.3em;
  background-color: var(--mainDarkColor);
  color: var(--mainLightColor);
  border: solid;
  border-width: 2px;
`;

const DateInput = styled.input`
  background-color: var(--mainDarkColor);
  color: var(--mainLightColor);
  border: solid;
  text-align: right;
  border-width: 2px;
  margin-top: 2px;
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
  const [typeOfAnalysis, setTypeOfAnalysis] = useState("");
  function onOptionChange(event) {
    setTypeOfAnalysis(event.target.value);
  }
  const analysisKeys = allAnalysisKeys[typeOfAnalysis];
  const pastAnalysisHeadlines = {
    description: {
      title: "Beschreibe die Situation",
      description: "Was ist in dieser Situation passiert?",
    },
    interpretations: {
      title: "Interpretation",
      description:
        "Wie habe ich die Situation aufgefasst/gelesen/interpretiert?",
    },
    behavior: {
      title: "Verhalten",
      description: "Was habe ich in dieser Situation genau getan?",
    },
    actualResult: {
      title: "Tatsächliches Ergebnis",
      description: "Wie ging die Situation für mich aus?",
    },
    desiredResult: {
      title: "Erwünschtes Ergebnis",
      description: "Welchen Ausgang hätte ich mir gewünscht?",
    },
    comparison: {
      title: "Vergleich des tatsächlichen mit dem erwünschten Ergebnis",
      description: "Habe ich erreicht, was ich wollte?",
    },
    revision: {
      title: "Revision ungeeigneter Interpretationen",
      description:
        "Ist die Interpretation in der Situation verankert? War es wirklich so? Inwieweit trägt diese Interpretation dazu bei, dass ich mein Ziel erreiche? Sehe ich Zusammenhänge zwischen meinen Interpretationen und meinen Prägungen?",
    },
    behaviorChange: {
      title: "Veränderung des Verhaltens",
      description:
        "Nachdem ich nun meine Interpretationen revidiert habe: Wie hätte ich mich verhalten um das zu bekommen, was ich will - also um mein neues Ziel auch tatsächlich zu erreichen?",
    },
    implementation: {
      title: "Umsetzung und Zusammenfassung",
      description: "Was habe ich heute (in der Übung) gelernt?",
    },
    transfer: {
      title: "Generalisierung und Übertragung des Gelernten auf den Alltag",
      description:
        "Kenne ich eine ähnliche Sitation aus meinem Alltag/Leben? Was hätte ich gedacht und gemacht, wenn ich das, was ich heute gelernt habe, damals schon gewusst hätte?",
    },
  };
  const date = new Date();

  return (
    <>
      <form>
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
          <HeaderDate>
            <DateInput
              type="date"
              pattern="\d{4}-\d{2}-\d{2}"
              defaultValue={date.toISOString().slice(0, 10)}
              name="date"
            />
          </HeaderDate>
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
          <>
            {analysisKeys.map((analysisKey) => {
              return (
                <EntryContentBlock
                  analysisHeadings={pastAnalysisHeadlines}
                  analysisKey={analysisKey}
                  key={analysisKey}
                  description={pastAnalysisHeadlines[analysisKey].description}
                  newEntry
                >
                  {pastAnalysisHeadlines[analysisKey].title}
                </EntryContentBlock>
              );
            })}
            <Button variant="big" type="submit">
              💾 Speichern
            </Button>
          </>
        ) : (
          <p>nothing yet</p>
        )}
      </form>
    </>
  );
}
