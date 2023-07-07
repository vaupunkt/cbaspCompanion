import placeholderEntries from "@/lib/placeholderEntries";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>All Entries</h1>
      <ul>
        {placeholderEntries.map((placeholderEntry) => {
          return (
            <li key={placeholderEntry.id}>
              <Link href={`/entries/${placeholderEntry.id}`}>
                {placeholderEntry.date}
                <h2>{placeholderEntry.title}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
