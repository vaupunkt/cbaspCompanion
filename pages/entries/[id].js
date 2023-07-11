import Entry from "@/components/Entry";
import { useRouter } from "next/router";
import initialEntries from "@/lib/initialEntries";
import BigButton from "@/components/BigButton";
import Header from "@/components/Header";

export default function EntryPage({ onDelete }) {
  const router = useRouter();
  const entry = initialEntries.find(
    (initialEntry) => initialEntry.id === router.query.id
  );

  return (
    <>
      <Header backButton title={entry.title} date={entry.date}></Header>
      <BigButton name="delete" onClick={() => onDelete(entry.id)} icon="🗑️">
        Delete
      </BigButton>
      {entry && <Entry data={entry} />}
    </>
  );
}
