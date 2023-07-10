import Header from "@/components/Header";
import EntryList from "@/components/EntryList";

export default function VergangenheitsanalysenPage({
  allVergangenheitsanalyseEntries,
}) {
  return (
    <>
      <Header title="Vergangenheitsanalysen" />
      <EntryList entries={allVergangenheitsanalyseEntries} />
    </>
  );
}
