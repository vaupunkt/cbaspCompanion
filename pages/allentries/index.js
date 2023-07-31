import Header from "@/components/Header";
import EntryList from "@/components/EntryList";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";

export default function AllEntriesPage({ allEntries, onDelete }) {
  return (
    <>
      <Head>
        <title>Alle Einträge</title>
        <meta charSet="UTF-8"></meta>
      </Head>
      <Header backButton title="Alle Einträge" />
      <Fade>
        <EntryList entries={allEntries} onDelete={onDelete} />
      </Fade>
    </>
  );
}
