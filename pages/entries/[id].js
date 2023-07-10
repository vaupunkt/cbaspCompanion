import Entry from "@/components/Entry";
import { useRouter } from "next/router";
import initialEntries from "@/lib/initialEntries";

export default function EntryPage() {
  const router = useRouter();
  const entry = initialEntries.find(
    (initialEntry) => initialEntry.id === router.query.id
  );

  return <>{entry && <Entry data={entry} />}</>;
}
