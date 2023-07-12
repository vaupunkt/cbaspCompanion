import Entry from "@/components/Entry";
import { useRouter } from "next/router";
import initialEntries from "@/lib/initialEntries";
import BigButton from "@/components/BigButton";
import Header from "@/components/Header";
import { useState } from "react";

export default function EntryPage({
  onDelete,
  setAllEntries,
  toggleEditMode,
  allEntries,
}) {
  const router = useRouter();
  const entry = allEntries.find(
    (singleEntry) => singleEntry.id === router.query.id
  );
  const [editMode, setEditMode] = useState(false);
  function toggleEditMode() {
    setEditMode(!editMode);
  }

  function handleSave() {
    setAllEntries((oldEntries) =>
      oldEntries.map((oldEntry) =>
        oldEntry.id === updatedData.id ? updatedData : item
      )
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
  }

  return (
    <>
      <Header
        backButton
        title={entry && entry.title}
        date={entry && entry.date}
      ></Header>
      <BigButton
        name="delete"
        onClick={() => {
          onDelete(entry.id, "entry");
        }}
        icon="🗑️"
      >
        Löschen
      </BigButton>
      {editMode ? (
        <BigButton
          name="save"
          icon="💾"
          form="editEntryForm"
          type="submit"
          onClick={() => handleSubmit(event)}
        >
          Speichern
        </BigButton>
      ) : (
        <BigButton name="edit" onClick={() => toggleEditMode()} icon="✍️">
          Bearbeiten
        </BigButton>
      )}
      {entry && (
        <Entry data={entry} editMode={editMode} handleSubmit={handleSubmit} />
      )}
    </>
  );
}
