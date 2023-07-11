import Header from "@/components/Header";
import EntryList from "@/components/EntryList";

export default function AllEntriesPage({ allEntries }) {
  return (
    <>
      <Header backButton title="All Entries" />
      <EntryList entries={allEntries} />
    </>
  );
}