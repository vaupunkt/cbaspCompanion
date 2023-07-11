import { styled } from "styled-components";
import Link from "next/link";

export const EntryListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const EntryListItem = styled.li`
  border: solid;
  padding: 10px;
  margin: 10px;
  border-radius: 25px;
  position: relative;

  &:hover {
    background-color: color-mix(
      in srgb,
      var(--mainLightColor) 95%,
      var(--mainDarkColor)
    );
  }
  &:active {
    background-color: var(--mainLightColor);
    box-shadow: inset 0px 0px 5px var(--mainDarkColor);
  }
`;

export const EntryListItemLink = styled(Link)`
  color: var(--mainDarkColor);
  text-decoration: none;
`;

export const EntryListDate = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.8em;
`;

export const EntryListTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1em;
`;
