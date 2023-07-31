import Header from "@/components/Header";
import EntryList from "@/components/EntryList";
import { Fade } from "react-awesome-reveal";

export default function PastAnalysesPage({ allPastAnalysisEntries, onDelete }) {
  return (
    <>
      <Header backButton title="Vergangenheitsanalysen" />
      <Fade>
        <EntryList entries={allPastAnalysisEntries} onDelete={onDelete} />
      </Fade>
    </>
  );
}
