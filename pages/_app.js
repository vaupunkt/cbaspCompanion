import GlobalStyle from "../styles";
import initialEntries from "@/lib/initialEntries";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import useLocalStorageState from "use-local-storage-state";
import isPropValid from "@emotion/is-prop-valid";
import { useState } from "react";
import { StyleSheetManager } from "styled-components";

export default function App({ Component, pageProps }) {
  const [allEntries, setAllEntries] = useLocalStorageState("Entries", {
    defaultValue: initialEntries,
  });
  const [mySymptoms, setMySymptoms] = useLocalStorageState("Symptoms", {
    defaultValue: [
      { category: "physicalLevel", symptoms: {} },
      { category: "emotionalLevel", symptoms: {} },
      { category: "mentalLevel", symptoms: {} },
      { category: "behavioralLevel", symptoms: {} },
    ],
  });
  function handleSymptomChange(newSymptoms) {
    setMySymptoms(newSymptoms);
  }
  const allFutureAnalysisEntries = allEntries.filter(
    (initialEntry) => initialEntry.type === "FutureAnalysis"
  );
  const allPastAnalysisEntries = allEntries.filter(
    (initialEntry) => initialEntry.type === "PastAnalysis"
  );
  const allInnerAnalysisEntries = allEntries.filter(
    (initialEntry) => initialEntry.type === "InnerSituationAnalysis"
  );

  function handleAllEntriesChange(updatedEntries) {
    setAllEntries(updatedEntries);
  }

  const [allActionInterpretations, setAllActionInterpretations] = useState(
    allEntries
      .flatMap(({ actionInterpretation }) =>
        Array.isArray(actionInterpretation)
          ? actionInterpretation.map(
              (actionInterpretationsArray) =>
                actionInterpretationsArray.actionInterpretation
            )
          : [actionInterpretation]
      )
      .filter((str) => str !== "")
  );

  function handleSymptomDelete(id) {
    confirmAlert({
      message: "Sicher, dass du diesen Eintrag löschen willst?",
      buttons: [
        { label: "Abbrechen" },
        {
          label: "Löschen",
          onClick: () => {
            handleSymptomChange((prevMySymptoms) =>
              prevMySymptoms.map((category) => ({
                ...category,
                symptoms:
                  category.symptoms.length > 0
                    ? category.symptoms.filter((symptom) => symptom.id !== id)
                    : [],
              }))
            );
          },
        },
      ],
    });
  }

  function handleDelete(id, currentPage) {
    confirmAlert({
      message: "Sicher, dass du diesen Eintrag löschen willst?",
      buttons: [
        { label: "Abbrechen" },
        {
          label: "Löschen",
          onClick: () => {
            setAllEntries(allEntries.filter((entry) => entry.id !== id));
            if (currentPage === "entry") {
              history.back();
            }
          },
        },
      ],
    });
  }
  return (
    <>
      <GlobalStyle />
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <Component
          {...pageProps}
          allEntries={allEntries}
          allFutureAnalysisEntries={allFutureAnalysisEntries}
          allPastAnalysisEntries={allPastAnalysisEntries}
          allInnerAnalysisEntries={allInnerAnalysisEntries}
          onDelete={handleDelete}
          handleAllEntriesChange={handleAllEntriesChange}
          allActionInterpretations={allActionInterpretations}
          setAllActionInterpretations={setAllActionInterpretations}
          handleSymptomChange={handleSymptomChange}
          mySymptoms={mySymptoms}
          handleSymptomDelete={handleSymptomDelete}
        />
      </StyleSheetManager>
    </>
  );
}
