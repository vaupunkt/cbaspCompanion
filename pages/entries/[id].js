import Entry from "@/components/Entry";
import { useRouter } from "next/router";
import initialEntries from "@/lib/initialEntries";
import Button from "@/components/Button";
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
      <Button
        variant="big"
        name="delete"
        variant="big"
        onClick={() => {
          onDelete(entry.id, "entry");
        }}
      >
        Delete
      </BigButton>
      {entry && <Entry data={entry} />}
    </>
  );
}
