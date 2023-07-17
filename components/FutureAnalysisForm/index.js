import { allAnalysisKeys } from "@/lib/allAnalysisKeys";
import {
  ContentHeadline,
  EntryContent,
} from "../EntryContentBlock/EntryContentBlock.style";
import { useState } from "react";
import EntryInput from "../EntryInput";
import { uid } from "uid";
import { styled } from "styled-components";
import { useRouter } from "next/router";

const StyledList = styled.ol`
  padding: 20px;
  margin: 0px;
`;

export default function FutureAnalysisForm({ typeOfAnalysis }) {
  const analysisKeys = allAnalysisKeys[typeOfAnalysis];
  const futureAnalysisHeadlines = {
    description: {
      title: "Beschreibe die Situation",
      description:
        "Was wird voraussichtlich passieren? (mit Anfangs- und Endpunkt, rein beschreibend)",
    },
    desiredResult: {
      title: "Erwünschtes Ergebnis",
      description:
        "Welchen Ausgang des Ereignisseswünsche ich mir? Was ist mein Ziel in dieser Situation? (In Verhaltensbegriffen formulieren, realistisch durch mich erreichbar und in mir verankert)",
    },
    behavior: {
      title: "Verhalten",
      description: "Wie kann ich mich verhalten, um mein Ziel zu erreichen?",
    },
    interpretations: {
      title: "Interpretation",
      description:
        "Welche Interpretationen »Schlachtrufe« helfen mir, mein Ziel zu erreichen?",
    },
    rolePlay: {
      title: "Rollenspiel",
      description:
        "Übe die Situation in einem Rollenspiel mit eine:r Freund:in, einem Familienmitglied oder deine:r Therapeut:in.",
    },
    implementation: {
      title: "Umsetzung und Zusammenfassung",
      description:
        "Was habe ich durch diese Zukunfts-Situationsanalyse gelernt?",
    },
    transfer: {
      title: "Übertragung des Gelernten auf den Alltag",
      description:
        "Traue ich mir nun zu, diese Situation auch tatsächlich anzugehen? Fühle ich mich nun besser vorbereitet auf diese Situation? Kenne ich eine ähnliche Situation aus meinem Leben? Was hätte ich gemacht, wenn ich das, was ich heute gelernt habe, damals schon gewusst hätte?",
    },
  };

  const numberOfInterpretations = 3;
  const [interpretations, setInterpretations] = useState(
    Array(numberOfInterpretations)
      .fill()
      .map((interpretation) => ({ id: uid(), interpretation: "" }))
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
        console.log(futureAnalysisHeadlines[analysisKey]);
        if (analysisKey === "interpretations") {
          return (
            <EntryContent>
              <ContentHeadline htmlFor={analysisKey}>
                {futureAnalysisHeadlines[analysisKey].title}
              </ContentHeadline>
              <p>{futureAnalysisHeadlines[analysisKey].description}</p>
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
        if (analysisKey === "rolePlay") {
          return (
            <EntryContent>
              <ContentHeadline htmlFor={analysisKey}>
                {futureAnalysisHeadlines[analysisKey].title}
              </ContentHeadline>
              <p>{futureAnalysisHeadlines[analysisKey].description}</p>
              <EntryInput
                short
                type="text"
                name={analysisKey}
                id={analysisKey}
              />
            </EntryContent>
          );
        }
        return (
          <EntryContent>
            <ContentHeadline htmlFor={analysisKey}>
              {futureAnalysisHeadlines[analysisKey].title}
            </ContentHeadline>
            <p>{futureAnalysisHeadlines[analysisKey].description}</p>
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
