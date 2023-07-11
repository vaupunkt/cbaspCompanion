import { DeleteButtonStyled } from "./DeleteButton.style";

export default function DeleteButton({ onDelete, id }) {
  return (
    <DeleteButtonStyled type="button" onClick={() => onDelete(id)}>
      🗑️
    </DeleteButtonStyled>
  );
}
