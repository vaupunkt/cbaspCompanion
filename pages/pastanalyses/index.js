import Header from "@/components/Header";
import EntryList from "@/components/EntryList";

export default function PastAnalysesPage({
  allPastAnalysisEntries,
  onDelete,
  editMode,
  toggleEditMode,
}) {
  return (
    <>
      <Header backButton title="Vergangenheitsanalysen" />
      <EntryList
        entries={allPastAnalysisEntries}
        onDelete={onDelete}
        editMode={editMode}
        toggleEditMode={toggleEditMode}
      />
    </>
  );
}
