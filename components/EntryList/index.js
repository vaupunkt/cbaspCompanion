import {
  EntryListContainer,
  EntryListDate,
  EntryListItem,
  EntryListTitle,
  EntryListItemLink,
} from "./EntryList.style";

export default function EntryList({ entries }) {
  console.log(entries);
  return (
    <EntryListContainer>
      {!entries ? (
        <h2>Es gibt noch keine Einträge.</h2>
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
