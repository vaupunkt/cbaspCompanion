import Header from "@/components/Header";
import EntryList from "@/components/EntryList";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";

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
      {isIOS ? (
        <EntryList entries={allFutureAnalysisEntries} onDelete={onDelete} />
      ) : (
        <Fade>
          <EntryList entries={allFutureAnalysisEntries} onDelete={onDelete} />
        </Fade>
      )}
    </>
  );
}
