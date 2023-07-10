import Header from "@/components/Header";
import EntryList from "@/components/EntryList";

export default function PastAnalysesPage({ allInnerAnalysisEntries }) {
  return (
    <>
      <Header backButton title="Vergangenheitsanalysen" />
      <EntryList entries={allInnerAnalysisEntries} />
    </>
  );
}
