import Header from "@/components/Header";
import EntryList from "@/components/EntryList";

export default function InnerSituationAnalysisPage({
  allInnerAnalysisEntries,
  onDelete,
}) {
  return (
    <>
      <Header backButton title="Innere Situationsanalysen" />
      <EntryList entries={allInnerAnalysisEntries} onDelete={onDelete} />
    </>
  );
}
