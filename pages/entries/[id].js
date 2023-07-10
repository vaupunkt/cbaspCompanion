import Entry from "@/components/Entry";
import { useRouter } from "next/router";
import placeholderEntries from "@/lib/placeholderEntries";

export default function EntryPage() {
  const router = useRouter();
  const entry = placeholderEntries.find(
    (placeholderEntry) => placeholderEntry.id === router.query.id
  );

  return <>{entry && <Entry data={entry} />}</>;
}
