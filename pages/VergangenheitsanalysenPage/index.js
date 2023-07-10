import Header from "@/components/Header";
import EntryList from "@/components/EntryList";

export default function ZukunftsanalysenPage({ allZukunftsanalyseEntries }) {
  return (
    <>
      <Header title="Zukunftsanalysen" />
      <EntryList entries={allZukunftsanalyseEntries} />
    </>
  );
}
