import Header from "@/components/Header";
import EntryList from "@/components/EntryList";

export default function FutureAnalysesPage({ allFutureAnalysisEntries }) {
  return (
    <>
      <Header title="Zukunftsanalysen" />
      <EntryList entries={allFutureAnalysisEntries} />
    </>
  );
}
