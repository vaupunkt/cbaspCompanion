import Header from "@/components/Header";
import EntryList from "@/components/EntryList";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";
import EmptyMessage from "@/components/EmptyMessage";

export default function PastAnalysesPage({
  isIOS,
  allPastAnalysisEntries,
  onDelete,
}) {
  return (
    <>
      <Head>
        <title>Vergangenheitsanalysen</title>
        <meta charSet="UTF-8"></meta>
      </Head>
      <Header backButton title="Vergangenheitsanalysen" />
      {allPastAnalysisEntries .length > 0 ? (
        isIOS ? (
          <EntryList entries={allPastAnalysisEntries} onDelete={onDelete} />
        ) : (
          <Fade>
            <EntryList entries={allPastAnalysisEntries} onDelete={onDelete} />
          </Fade>
        )
      ) : (
        <EmptyMessage link="/newanalysis" />
      )}
    </>
  );
}
