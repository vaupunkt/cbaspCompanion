import Entry from "@/components/Entry";
import { useRouter } from "next/router";

import Button from "@/components/Button";
import Header from "@/components/Header";
import { useState } from "react";

export default function EntryPage({
  onDelete,
  allEntries,
  handleAllEntriesChange,
}) {
  const router = useRouter();
  let entry = allEntries.find(
    (singleEntry) => singleEntry.id === router.query.id
  );
  const [editMode, setEditMode] = useState(false);
  function toggleEditMode() {
    setEditMode(!editMode);
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
          onAllEntriesChange={handleAllEntriesChange}
          allEntries={allEntries}
          toggleEditMode={toggleEditMode}
        />
      )}
    </>
  );
}
