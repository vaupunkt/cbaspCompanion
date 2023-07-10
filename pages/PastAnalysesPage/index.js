import Header from "@/components/Header";
import EntryList from "@/components/EntryList";

export default function PastAnalysesPage({ allPastAnalysesEntries }) {
  return (
    <>
      <Header title="Vergangenheitsanalysen" />
      <EntryList entries={allPastAnalysesEntries} />
    </>
  );
}
