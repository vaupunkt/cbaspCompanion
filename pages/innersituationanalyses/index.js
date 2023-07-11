import Header from "@/components/Header";
import EntryList from "@/components/EntryList";

export default function InnerSituationAnalysisPage({
  allInnerAnalysisEntries,
  onDelete,
  editMode,
  toggleEditMode,
}) {
  return (
    <>
      <Header backButton title="Innere Situationsanalysen" />
      <EntryList
        entries={allInnerAnalysisEntries}
        onDelete={onDelete}
        editMode={editMode}
        toggleEditMode={toggleEditMode}
      />
    </>
  );
}
