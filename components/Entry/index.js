import EntryContentBlock from "../EntryContentBlock";
import EditEntry from "../EditEntry";
import { useState } from "react";
import Button from "../Button";

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

export default function Entry({
  data,
  editMode,
  setEditedData,
  handleDataUpdate,
}) {
  const { type } = data;
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let dataset = Object.fromEntries(formData);
    dataset = { ...dataset, id: data.id };
    console.log("Dataset", dataset);
    setEditedData(dataset);
    handleDataUpdate();
  }

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
          <Button name="save" variant="big" form="editEntryForm" type="submit">
            💾 Speichern
          </Button>
          {analysisKeys.map((analysisKey) => {
            return (
              <EditEntry
                key={analysisKey}
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
            <EntryContentBlock key={analysisKey} content={data[analysisKey]}>
              {analysisHeadings[analysisKey]}
            </EntryContentBlock>
          );
        })
      )}
    </>
  );
}
