import EntryContentBlock from "../EntryContentBlock";
import { useState } from "react";
import { uid } from "uid";
import Button from "../Button";
import { allAnalysisKeys } from "@/lib/allAnalysisKeys";
import { allAnalysisEntryHeadings } from "@/lib/allAnalysisEntryHeadings";

export default function Entry({
  data,
  editMode,
  allEntries,
  onAllEntriesChange,
  toggleEditMode,
  setAllActionInterpretations,
  allActionInterpretations,
}) {
  const { type } = data;
  const analysisKeys = allAnalysisKeys[type];

  function addActionInterpretation(newActionInterpretation) {
    setAllActionInterpretations((previousActionInterpretation) => {
      if (previousActionInterpretation.includes(newActionInterpretation)) {
        return previousActionInterpretation;
      } else {
        return [...previousActionInterpretation, newActionInterpretation];
      }
    });
  }

  const [updatedData, setUpdatedData] = useState(data);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let dataset = Object.fromEntries(formData);
    dataset = {
      ...dataset,
      id: data.id,
      type: data.type,
      title: data.title,
      date: data.date,
    };
    dataset.interpretations = Object.entries(dataset)
      .filter(([key, value]) => key.startsWith("interpretations "))
      .map(([key, value]) => {
        const id = uid();
        delete dataset[key];
        return { interpretation: value, id };
      });
    dataset.revision = Object.entries(dataset)
      .filter(([key, value]) => key.startsWith("revision "))
      .map(([key, value]) => {
        const id = uid();
        delete dataset[key];
        return { revision: value, id };
      });

    const filteredAllEntries = allEntries.filter(
      (singleEntry) => singleEntry.id !== dataset.id
    );
    onAllEntriesChange([...filteredAllEntries, dataset]);
    addActionInterpretation(dataset.actionInterpretation);
    setUpdatedData(dataset);
    toggleEditMode();
  }

  return (
    <>
      {editMode ? (
        <form id="editEntryForm" onSubmit={handleSubmit}>
          <Button name="save" variant="side" form="editEntryForm" type="submit">
            💾 Speichern
          </Button>
          {analysisKeys.map((analysisKey) => {
            return (
              <EntryContentBlock
                key={analysisKey}
                analysisHeadings={allAnalysisEntryHeadings}
                analysisKey={analysisKey}
                editMode={editMode}
                updatedData={updatedData}
                allActionInterpretations={allActionInterpretations}
                setUpdatedData={setUpdatedData}
              >
                {allAnalysisEntryHeadings[analysisKey]}
              </EntryContentBlock>
            );
          })}
        </form>
      ) : (
        analysisKeys.map((analysisKey) => {
          return (
            <EntryContentBlock
              key={analysisKey}
              analysisHeadings={allAnalysisEntryHeadings}
              analysisKey={analysisKey}
              editMode={editMode}
              updatedData={updatedData}
              setUpdatedData={setUpdatedData}
              allActionInterpretations={allActionInterpretations}
            >
              {allAnalysisEntryHeadings[analysisKey]}
            </EntryContentBlock>
          );
        })
      )}
    </>
  );
}
