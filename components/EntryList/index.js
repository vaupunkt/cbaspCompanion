import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
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
                <EntryListItem key={entry.id}>
                  {editMode ? (
                    <DeleteButton onDelete={onDelete} id={entry.id} />
                  ) : (
                    ""
                  )}
                  <EntryListItemLink href={`/entries/${entry.id}`}>
                    <EntryListDate>{entry.date}</EntryListDate>
                    <EntryListTitle>{entry.title}</EntryListTitle>
                  </EntryListItemLink>
                </EntryListItem>
              </>
            );
          })}
          <EditButton toggleEditMode={toggleEditMode} />
        </>
      )}
    </EntryListContainer>
  );
}
