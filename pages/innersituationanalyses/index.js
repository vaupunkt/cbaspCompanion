import Header from "@/components/Header";
import EntryList from "@/components/EntryList";
import { Fade } from "react-awesome-reveal";

export default function InnerSituationAnalysisPage({
  allInnerAnalysisEntries,
  onDelete,
}) {
  return (
    <>
      <Header backButton title="Innere Situationsanalysen" />
      <Fade>
        <EntryList entries={allInnerAnalysisEntries} onDelete={onDelete} />
      </Fade>
    </>
  );
}
