import { useState } from "react";
import SmallButton from "../SmallButton";
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
                  <SmallButton name="delete" onClick={() => onDelete(entry.id)}>
                    🗑️
                  </SmallButton>
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
          <SmallButton name="edit" onClick={() => toggleEditMode()}>
            ✍️
          </SmallButton>
        </>
      )}
    </EntryListContainer>
  );
}
