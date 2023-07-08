import placeholderEntries from "@/lib/placeholderEntries";
import Link from "next/link";
import {
  EntryListContainer,
  EntryListDate,
  EntryListItem,
  EntryListTitle,
  EntryListItemLink,
} from "./EntryList.style";

export default function EntryList() {
  return (
    <EntryListContainer>
      {placeholderEntries === "" ? (
        <p>Es gibt noch keine Einträge.</p>
      ) : (
        placeholderEntries.map((placeholderEntry) => {
          return (
            <EntryListItemLink href={`/entries/${placeholderEntry.id}`}>
              <EntryListItem key={placeholderEntry.id}>
                <EntryListDate>{placeholderEntry.date}</EntryListDate>
                <EntryListTitle>{placeholderEntry.title}</EntryListTitle>
              </EntryListItem>
            </EntryListItemLink>
          );
        })
      )}
    </EntryListContainer>
  );
}
