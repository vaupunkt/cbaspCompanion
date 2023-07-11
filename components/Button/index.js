import { BackButton, DeleteButton, EditButton } from "./Button.style";

export default function Button({ buttonType, id, onDelete, toggleEditMode }) {
  if (buttonType === "editButton") {
    return (
      <EditButton
        type="button"
        name="edit"
        aria-label="edit"
        onClick={() => toggleEditMode()}
      >
        ✍️
      </EditButton>
    );
  } else if (buttonType === "backButton") {
    return (
      <BackButton
        type="button"
        name="back"
        aria-label="back"
        onClick={() => history.back()}
      >
        ❮
      </BackButton>
    );
  } else if (buttonType === "deleteButton") {
    return (
      <DeleteButton
        type="button"
        name="delete"
        aria-label="delete"
        onClick={() => onDelete(id)}
      >
        🗑️
      </DeleteButton>
    );
  }
}
