import Link from "next/link";

const { styled } = require("styled-components");

const EmptyMessageBlock = styled.section`
  padding: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const AddEntryLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--secondaryColor);
  background-color: var(--primaryColor);
  font-weight: 900;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  align-self: center;
  &:hover {
    background-color: color-mix(
      in srgb,
      var(--primaryColor) 80%,
      var(--secondaryColor)
    );
  }
  &:active {
    box-shadow: inset 0px 0px 5px var(--primaryColor);
  }
`;

export default function EmptyMessage({ link }) {
  return (
    <EmptyMessageBlock>
      <h2>Noch keine Einträge</h2>
      <p>Füge neue Einträge hinzu:</p>
      <AddEntryLink href={link}> + </AddEntryLink>
    </EmptyMessageBlock>
  );
}
