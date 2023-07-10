import Header from "@/components/Header";
import EntryList from "@/components/EntryList";

export default function FutureAnalysesPage({ allFutureAnalysesEntries }) {
  return (
    <>
      <Header title="Zukunftsanalysen" />
      <EntryList entries={allFutureAnalysesEntries} />
    </>
  );
}
