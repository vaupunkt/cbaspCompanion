import Header from "@/components/Header";
import EntryList from "@/components/EntryList";

export default function AllEntriesPage({
  allEntries,
  onDelete,
  editMode,
  toggleEditMode,
}) {
  return (
    <>
      <Header backButton title="All Entries" />
      <EntryList
        entries={allEntries}
        onDelete={onDelete}
        editMode={editMode}
        toggleEditMode={toggleEditMode}
      />
    </>
  );
}
