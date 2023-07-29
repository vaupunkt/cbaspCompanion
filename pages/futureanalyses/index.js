import Header from "@/components/Header";
import EntryList from "@/components/EntryList";
import { Fade } from "react-awesome-reveal";

export default function FutureAnalysesPage({
  allFutureAnalysisEntries,
  onDelete,
}) {
  return (
    <>
      <Header backButton title="Zukunftsanalysen" />
      <Fade>
        <EntryList entries={allFutureAnalysisEntries} onDelete={onDelete} />
      </Fade>
    </>
  );
}
