import Header from "@/components/Header";
import EntryList from "@/components/EntryList";
import { Fade } from "react-awesome-reveal";

export default function AllEntriesPage({ allEntries, onDelete }) {
  return (
    <>
      <Header backButton title="All Entries" />
      <Fade>
        <EntryList entries={allEntries} onDelete={onDelete} />
      </Fade>
    </>
  );
}
