import GlobalStyle from "../styles";
import initialEntries from "@/lib/initialEntries";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import useLocalStorageState from "use-local-storage-state";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [allEntries, setAllEntries] = useLocalStorageState("Entries", {
    defaultValue: initialEntries,
  });
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
    allEntries.map((entry) => entry.actionInterpretation)
  );

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
        />
      </StyleSheetManager>
    </>
  );
}
