import Header from "@/components/Header";
import EntryList from "@/components/EntryList";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";

export default function InnerSituationAnalysisPage({
  allInnerAnalysisEntries,
  onDelete,
  isIOS,
}) {
  return (
    <>
      <Head>
        <title>Innere Situationsanalysen</title>
        <meta charSet="UTF-8"></meta>
      </Head>
      <Header backButton title="Innere Situationsanalysen" />
      {isIOS ? (
        <EntryList entries={allInnerAnalysisEntries} onDelete={onDelete} />
      ) : (
        <Fade>
          <EntryList entries={allInnerAnalysisEntries} onDelete={onDelete} />
        </Fade>
      )}
    </>
  );
}
