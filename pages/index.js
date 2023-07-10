import Header from "@/components/Header";
import EntryList from "@/components/EntryList";

export default function PastAnalysesPage({ allInnerAnalysesEntries }) {
  return (
    <>
      <Header title="Innere Situationsanalysen" />
      <EntryList entries={allInnerAnalysesEntries} />
    </>
  );
}
