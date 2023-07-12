import Entry from "@/components/Entry";
import { useRouter } from "next/router";
import { uid } from "uid";
import Button from "@/components/Button";
import Header from "@/components/Header";
import { useState } from "react";

export default function EntryPage({
  onDelete,
  toggleEditMode,
  allEntries,
  setAllEntries,
}) {
  const router = useRouter();
  let entry = allEntries.find(
    (singleEntry) => singleEntry.id === router.query.id
  );
  const [editedData, setEditedData] = useState(entry);
  const [editMode, setEditMode] = useState(false);
  function toggleEditMode() {
    setEditMode(!editMode);
  }
  function handleDataUpdate() {
    editedData.interpretations = Object.entries(editedData)
      .filter(([key, value]) => key.startsWith("interpretation "))
      .map(([key, value]) => {
        const id = uid();
        delete editedData[key];
        return { interpretation: value, id };
      });
    setAllEntries([
      ...allEntries.filter((singleEntry) => singleEntry.id !== editedData.id),
      editedData,
    ]);
    console.log("allEntriesNew", allEntries);
    setEditedData(editedData);
    console.log("editedData:", editedData);
    toggleEditMode();
  }

  return (
    <>
      <Header
        backButton
        title={entry && entry.title}
        date={entry && entry.date}
      ></Header>
      <Button
        name="delete"
        type="button"
        variant="big"
        onClick={() => {
          onDelete(entry.id, "entry");
        }}
      >
        🗑️ Löschen
      </Button>
      {editMode ? (
        <Button
          variant="big"
          type="button"
          name="cancel"
          onClick={() => toggleEditMode()}
        >
          🙅 Abbrechen
        </Button>
      ) : (
        <Button
          variant="big"
          type="button"
          name="edit"
          onClick={() => toggleEditMode()}
        >
          ✍️ Bearbeiten
        </Button>
      )}
      {entry && (
        <Entry
          data={entry}
          editMode={editMode}
          setEditedData={setEditedData}
          handleDataUpdate={handleDataUpdate}
        />
      )}
    </>
  );
}
