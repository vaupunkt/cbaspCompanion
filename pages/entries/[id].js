import Entry from "@/components/Entry";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import placeholderEntries from "@/lib/placeholderEntries";

export default function EntryPage() {
  const router = useRouter();

  const [singleEntry, setSingleEntry] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    setId(router.query.id);
    setSingleEntry(
      placeholderEntries.find((placeholderEntry) => placeholderEntry.id === id)
    );
  });

  return <>{singleEntry && <Entry data={singleEntry} />}</>;
}
