import Entry from "@/components/Entry";
import { useRouter } from "next/router";
import initialEntries from "@/lib/initialEntries";
import Button from "@/components/Button";
import Header from "@/components/Header";

export default function EntryPage({ onDelete }) {
  const router = useRouter();
  const entry = initialEntries.find(
    (initialEntry) => initialEntry.id === router.query.id
  );

  return (
    <>
      <Header
        backButton
        title={entry && entry.title}
        date={entry && entry.date}
      ></Header>
      <Button
        variant="big"
        name="delete"
        onClick={() => {
          onDelete(entry.id, "entry");
        }}
      >
        🗑️ Delete
      </Button>
      {entry && <Entry data={entry} />}
    </>
  );
}
