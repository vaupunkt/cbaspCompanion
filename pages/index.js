import Header from "@/components/Header";
import EntryList from "@/components/EntryList";

export default function PastAnalysesPage({ allPastAnalysisEntries }) {
  return (
    <>
      <Header title="Vergangenheitsanalysen" />
      <EntryList entries={allPastAnalysisEntries} />
    </>
  );
}
