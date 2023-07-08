import Entry from "@/components/Entry";
import placeholderEntries from "@/lib/placeholderEntries";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EntryPage() {
  const router = useRouter();

  const [entry, setEntry] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    setId(router.query.id);
    setEntry(
      placeholderEntries.find((placeholderEntry) => placeholderEntry.id === id)
    );
  });

  return <>{entry && <Entry data={entry} />}</>;
}
