import Header from "@/components/Header";
import EntryList from "@/components/EntryList";

export default function FutureAnalysesPage({
  allFutureAnalysisEntries,
  onDelete,
}) {
  return (
    <>
      <Header backButton title="Zukunftsanalysen" />
      <EntryList entries={allFutureAnalysisEntries} onDelete={onDelete} />
    </>
  );
}
