import {
  EntryListContainer,
  EntryListDate,
  EntryListItem,
  EntryListTitle,
  EntryListItemLink,
} from "./EntryList.style";

export default function EntryList({
  entries,
  onDelete,
  editMode,
  toggleEditMode,
}) {
  return (
    <EntryListContainer>
      {!entries ? (
        <h2>Es gibt noch keine Einträge.</h2>
      ) : (
        <>
          {entries.map((entry) => {
            return (
              <>
                {editMode ? (
                  <button type="button" onClick={() => onDelete(entry.id)}>
                    x
                  </button>
                ) : (
                  ""
                )}
                <EntryListItemLink href={`/entries/${entry.id}`}>
                  <EntryListItem key={entry.id}>
                    <EntryListDate>{entry.date}</EntryListDate>
                    <EntryListTitle>{entry.title}</EntryListTitle>
                  </EntryListItem>
                </EntryListItemLink>
              </>
            );
          })}
          <button type="button" onClick={() => toggleEditMode()}>
            ✍️
          </button>
        </>
      )}
    </EntryListContainer>
  );
}
