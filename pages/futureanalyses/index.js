import Header from "@/components/Header";
import EntryList from "@/components/EntryList";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";
import EmptyMessage from "@/components/EmptyMessage";

export default function FutureAnalysesPage({
  allFutureAnalysisEntries,
  onDelete,
  isIOS,
}) {
  return (
    <>
      <Head>
        <title>Zukunftsanalysen</title>
        <meta charSet="UTF-8"></meta>
      </Head>
      <Header backButton title="Zukunftsanalysen" />
      {allFutureAnalysisEntries > 0 ? (
        isIOS ? (
          <EntryList entries={allFutureAnalysisEntries} onDelete={onDelete} />
        ) : (
          <Fade>
            <EntryList entries={allFutureAnalysisEntries} onDelete={onDelete} />
          </Fade>
        )
      ) : (
        <EmptyMessage link="/newanalysis" />
      )}
    </>
  );
}
