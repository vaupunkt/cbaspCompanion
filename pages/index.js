import EntryHeader from "@/components/EntryHeader";
import EntryList from "@/components/EntryList";

export default function HomePage() {
  return (
    <>
      <EntryHeader title="All Entries" />
      <EntryList />
    </>
  );
}
