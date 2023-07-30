import Header from "@/components/Header";
import EntryList from "@/components/EntryList";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";

export default function PastAnalysesPage({ allPastAnalysisEntries, onDelete }) {
  return (
    <>
      <Head>
        <title>Vergangenheitsanalysen</title>
        <meta charset="UTF-8"></meta>
      </Head>
      <Header backButton title="Vergangenheitsanalysen" />
      <Fade>
        <EntryList entries={allPastAnalysisEntries} onDelete={onDelete} />
      </Fade>
    </>
  );
}
