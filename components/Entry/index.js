import EntryContentBlock from "../EntryContentBlock";
import EditEntry from "../EditEntry";
import { useState } from "react";

const analysisHeadings = {
  description: "Beschreibung",
  interpretations: "Interpretation",
  behavior: "Verhalten",
  actualResult: "Tatsächliches Ergebnis",
  desiredResult: "Gewünschtes Ergebnis",
  comparison: "Vergleich des tatsächlichen mit dem erwünschten Ergebnis",
  revision: "Revision ungeeigneter Interpretationen",
  behaviorChange: "Veränderung des Verhaltens",
  implementation: "Umsetzung und Zusammenfassung",
  transfer: "Generalisierung und Übertragung des Gelernten auf den Alltag",
  rolePlay: "Rollenspiel",
};

export default function Entry({ data, editMode, handleSubmit }) {
  const { type } = data;

  const analysisKeys = {
    PastAnalysis: [
      "description",
      "interpretations",
      "behavior",
      "actualResult",
      "desiredResult",
      "comparison",
      "revision",
      "behaviorChange",
      "implementation",
      "transfer",
    ],
    InnerSituationAnalysis: [
      "description",
      "interpretations",
      "behavior",
      "actualResult",
      "desiredResult",
      "comparison",
      "revision",
      "behaviorChange",
      "implementation",
      "transfer",
    ],
    FutureAnalysis: [
      "description",
      "desiredResult",
      "behavior",
      "interpretations",
      "rolePlay",
      "implementation",
      "transfer",
    ],
  }[type];
  const [updatedData, setUpdatedData] = useState(data);

  return (
    <>
      {editMode ? (
        <form id="editEntryForm" onSubmit={handleSubmit}>
          {analysisKeys.map((analysisKey) => {
            return (
              <EditEntry
                analysisHeadings={analysisHeadings}
                analysisKey={analysisKey}
                editMode={editMode}
                updatedData={updatedData}
                setUpdatedData={setUpdatedData}
              />
            );
          })}
        </form>
      ) : (
        analysisKeys.map((analysisKey) => {
          return (
            <EntryContentBlock content={data[analysisKey]}>
              {analysisHeadings[analysisKey]}
            </EntryContentBlock>
          );
        })
      )}
    </>
  );
}
