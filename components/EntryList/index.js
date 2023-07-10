import {
  EntryListContainer,
  EntryListDate,
  EntryListItem,
  EntryListTitle,
  EntryListItemLink,
} from "./EntryList.style";

export default function EntryList({ entries }) {
  return (
    <EntryListContainer>
      {!entries ? (
        <p>Es gibt noch keine Einträge.</p>
      ) : (
        entries.map((entry) => {
          return (
            <EntryListItemLink href={`/entries/${entry.id}`}>
              <EntryListItem key={entry.id}>
                <EntryListDate>{entry.date}</EntryListDate>
                <EntryListTitle>{entry.title}</EntryListTitle>
              </EntryListItem>
            </EntryListItemLink>
          );
        })
      )}
    </EntryListContainer>
  );
}
