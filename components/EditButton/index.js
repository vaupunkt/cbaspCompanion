import { EditButtonStyled } from "./EditButton.style";

export default function EditButton({ toggleEditMode }) {
  return (
    <EditButtonStyled type="button" onClick={() => toggleEditMode()}>
      ✍️
    </EditButtonStyled>
  );
}
