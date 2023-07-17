import { allAnalysisKeys } from "@/lib/allAnalysisKeys";
import {
  ContentHeadline,
  EntryContent,
} from "../EntryContentBlock/EntryContentBlock.style";
import { useState } from "react";
import EntryInput from "../EntryInput";
import { uid } from "uid";
import { styled } from "styled-components";

const StyledList = styled.ol`
  padding: 20px;
  margin: 0px;
`;

const InterpretationToRevise = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9em;
  word-wrap: normal;
`;

export default function InnerSituationAnalysisForm({ typeOfAnalysis }) {
  const analysisKeys = allAnalysisKeys[typeOfAnalysis];
  const innerSituationAnalysisHeadlines = {
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
    Array(numberOfInterpretations)
      .fill()
      .map((interpretation) => ({ id: uid(), interpretation: "" }))
  );

  const [revisions, setRevisions] = useState(
    Array(numberOfInterpretations)
      .fill()
      .map((revision) => ({ id: uid(), revision: "" }))
  );

  function handleRevisionChange(index, value) {
    setRevisions((prevRevisions) =>
      prevRevisions.map((prevRevision, i) =>
        i === index ? { ...prevRevision, revision: value } : prevRevision
      )
    );
  }

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
        if (analysisKey === "interpretations") {
          return (
            <EntryContent>
              <ContentHeadline htmlFor={analysisKey}>
                {innerSituationAnalysisHeadlines[analysisKey].title}
              </ContentHeadline>
              <p>{innerSituationAnalysisHeadlines[analysisKey].description}</p>
              <StyledList>
                {interpretations.map(({ id }, index) => (
                  <li key={id}>
                    <label htmlFor={id}>Interpretation:</label>
                    <EntryInput
                      required={index === 0}
                      type="text"
                      name={analysisKey + " " + id}
                      id={id}
                      short
                      onChange={(event) =>
                        handleInterpretationChange(index, event.target.value)
                      }
                    />
                  </li>
                ))}
              </StyledList>
            </EntryContent>
          );
        }
        if (analysisKey === "revision") {
          return (
            <>
              <EntryContent>
                <ContentHeadline htmlFor={analysisKey}>
                  {innerSituationAnalysisHeadlines[analysisKey].title}
                </ContentHeadline>
                <p>
                  {innerSituationAnalysisHeadlines[analysisKey].description}
                </p>
                <StyledList>
                  {interpretations.map(({ id, interpretation }, index) => (
                    <>
                      <li key={id}>
                        <label htmlFor={id}>Revision:</label>
                        <InterpretationToRevise>
                          Die Interpretation lautete:{" "}
                          <span
                            style={{
                              textDecoration: revisions[index].revision
                                ? "line-through"
                                : null,
                            }}
                          >
                            {interpretation}
                          </span>
                        </InterpretationToRevise>
                        <EntryInput
                          type="text"
                          name={"revision " + (index + 1)}
                          id={id}
                          short
                          placeholder="(wenn nötig)"
                          onChange={(event) =>
                            handleRevisionChange(index, event.target.value)
                          }
                        />
                      </li>
                    </>
                  ))}
                </StyledList>
              </EntryContent>
              <EntryContent>
                <ContentHeadline htmlFor="actionInterpretation">
                  Handlungsinterpretationen bzw. Meine "Schlachtrufe"
                </ContentHeadline>
                <EntryInput
                  required
                  type="text"
                  name="actionInterpretation"
                  short
                />
              </EntryContent>
            </>
          );
        }
        return (
          <EntryContent>
            <ContentHeadline htmlFor={analysisKey}>
              {innerSituationAnalysisHeadlines[analysisKey].title}
            </ContentHeadline>
            <p>{innerSituationAnalysisHeadlines[analysisKey].description}</p>
            <EntryInput
              long
              required
              type="text"
              name={analysisKey}
              id={analysisKey}
            />
          </EntryContent>
        );
      })}
    </>
  );
}
