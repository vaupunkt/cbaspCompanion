import { useState } from "react";
import GlobalStyle from "../styles";
import initialEntries from "@/lib/initialEntries";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export default function App({ Component, pageProps }) {
  const [allEntries, setAllEntries] = useState(initialEntries);
  const allFutureAnalysisEntries = allEntries.filter(
    (initialEntry) => initialEntry.type === "FutureAnalysis"
  );
  const allPastAnalysisEntries = allEntries.filter(
    (initialEntry) => initialEntry.type === "PastAnalysis"
  );
  const allInnerAnalysisEntries = allEntries.filter(
    (initialEntry) => initialEntry.type === "InnerSituationAnalysis"
  );
  const [editMode, setEditMode] = useState(false);
  function toggleEditMode() {
    setEditMode(!editMode);
  }
  function handleDelete(id) {
    confirmAlert({
      message: "Sicher, dass du diesen Eintrag löschen willst?",
      buttons: [
        { label: "Abbrechen" },
        {
          label: "Löschen",
          onClick: () =>
            setAllEntries(allEntries.filter((entry) => entry.id !== id)),
        },
      ],
    });
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        allEntries={allEntries}
        allFutureAnalysisEntries={allFutureAnalysisEntries}
        allPastAnalysisEntries={allPastAnalysisEntries}
        allInnerAnalysisEntries={allInnerAnalysisEntries}
        onDelete={handleDelete}
        editMode={editMode}
        toggleEditMode={toggleEditMode}
      />
    </>
  );
}
