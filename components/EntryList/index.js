import { useState } from "react";
import Button from "../Button";
import {
  EntryListContainer,
  EntryListDate,
  EntryListItem,
  EntryListTitle,
  EntryListItemLink,
} from "./EntryList.style";

export default function EntryList({ entries, onDelete }) {
  const [editMode, setEditMode] = useState(false);
  function toggleEditMode() {
    setEditMode(!editMode);
  }
  return (
    <EntryListContainer>
      {!entries ? (
        <h2>Es gibt noch keine Einträge.</h2>
      ) : (
        <>
          {entries.map((entry) => {
            return (
              <EntryListItem key={entry.id}>
                {editMode ? (
                  <Button
                    variant="small"
                    name="delete"
                    onClick={() => onDelete(entry.id)}
                  >
                    🗑️
                  </Button>
                ) : (
                  ""
                )}
                <EntryListItemLink href={`/entries/${entry.id}`}>
                  <EntryListDate>{entry.date}</EntryListDate>
                  <EntryListTitle>{entry.title}</EntryListTitle>
                </EntryListItemLink>
              </EntryListItem>
            );
          })}
          <Button variant="small" name="edit" onClick={() => toggleEditMode()}>
            ✍️
          </Button>
        </>
      )}
    </EntryListContainer>
  );
}
