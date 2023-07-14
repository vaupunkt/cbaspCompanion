import { allAnalysisKeys } from "@/lib/allAnalysisKeys";
import EntryContentBlock from "../EntryContentBlock";
import { styled } from "styled-components";
import {
  ContentHeadline,
  EntryContent,
} from "../EntryContentBlock/EntryContentBlock.style";
import { useState } from "react";
import EntryInput from "../EntryInput";

const InterpretationsContentBlock = styled.div`
  margin: 20px 0;
  padding: 10px;
  border-top: solid;
  position: relative;
`;

const InterpretationsContentBlockHeadline = styled.label`
  background-color: var(--mainLightColor);
  text-align: center;
  font-size: 0.8em;
  margin: 0;
  padding: 5px 10px;
  position: absolute;
  top: 0px;
  left: 50%;
  font-weight: bold;
  transform: translate(-50%, -50%);
`;

export default function PastAnalysisForm({ typeOfAnalysis }) {
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

  const numberOfInterpretations = 3;
  const [interpretations, setInterpretations] = useState(
    Array(numberOfInterpretations).fill({ interpretation: "" })
  );

  function handleInterpretationChange(index, value) {
    setInterpretations((prevInterpretations) =>
      prevInterpretations.map((prevInterpretation, i) =>
        i === index
          ? { ...prevInterpretation, interpretation: value }
          : prevInterpretation
      )
    );
  }

  return (
    <>
      {analysisKeys.map((analysisKey) => {
        analysisKey === "interpretations" ? (
          <EntryContent>
            <ContentHeadline htmlFor={analysisKey}>
              {pastAnalysisHeadlines[analysisKey].title}
            </ContentHeadline>
            <p>{pastAnalysisHeadlines[analysisKey].description}</p>
            <ol>
              {interpretations.map((_, index) => (
                <li key={index}>
                  <label htmlFor={index + 1}>Interpretation:</label>
                  <EntryInput
                    required
                    type="text"
                    name={analysisKey + " " + (index + 1)}
                    id={index + 1}
                    short
                    maxLength="200"
                  />
                </li>
              ))}
            </ol>
          </EntryContent>
        ) : (
          ""
        );
      })}
      ;
      {analysisKeys.map((analysisKey) => {
        analysisKey === "revision" ? (
          <EntryContent>
            <ContentHeadline htmlFor={analysisKey}>
              {pastAnalysisHeadlines[analysisKey].title}
            </ContentHeadline>
            <p>{pastAnalysisHeadlines[analysisKey].description}</p>
            <ol>
              {interpretations.map(({ interpretation }, index) => (
                <>
                  <li key={index}>
                    <label htmlFor={index + 1}>Revision:</label>
                    <p>Die Interpretation lautete: {interpretation}</p>
                    <EntryInput
                      required
                      type="text"
                      name={"revision " + (index + 1)}
                      id={index + 1}
                      short
                      maxLength="200"
                    />
                  </li>
                </>
              ))}
            </ol>
          </EntryContent>
        ) : (
          ""
        );
      })}
      {analysisKeys.map((analysisKey) => {
        analysisKey !== "revision" || analysisKey !== "interpretations" ? (
          <EntryContent>
            <ContentHeadline htmlFor={analysisKey}>
              {pastAnalysisHeadlines[analysisKey].title}
            </ContentHeadline>
            <EntryInput long type="text" name={analysisKey} id={analysisKey} />
          </EntryContent>
        ) : (
          ""
        );
      })}
    </>
  );
}
