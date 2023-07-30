import Header from "@/components/Header";
import Link from "next/link";
import { styled, css } from "styled-components";

const EmptyMessage = styled.section`
  padding: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const SymptomList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  width: 100%;
  justify-content: space-evenly;
`;
const AddEntryLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--mainLightColor);
  background-color: var(--mainDarkColor);
  border: solid;
  font-weight: 900;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  align-self: center;
  &:hover {
    background-color: color-mix(
      in srgb,
      var(--mainDarkColor) 80%,
      var(--mainLightColor)
    );
  }
  &:active {
    box-shadow: inset 0px 0px 5px var(--mainDarkColor);
  }
`;
const SymptomEntry = styled.li`
  ${(props) =>
    props.category &&
    css`
      background-color: var(--${props.category});
      padding: 0px 20px;
      margin: 0;
      height: 3em;
      border-radius: 25px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style: none;
      &:hover {
        background-color: color-mix(
          in srgb,
          var(--${props.category}) 50%,
          var(--mainLightColor)
        );
      }
    `}
`;
export default function AllSymptoms({ mySymptoms }) {
  if (
    mySymptoms[0].symptoms.length +
      mySymptoms[1].symptoms.length +
      mySymptoms[2].symptoms.length +
      mySymptoms[3].symptoms.length >
    0
  ) {
    return (
      <>
        <Header backButton title="Alle Symptome" />
        <SymptomList>
          {mySymptoms.map(({ symptoms, category }) =>
            symptoms.length > 0
              ? symptoms.map(({ symptom, id }) => (
                  <SymptomEntry key={id} category={category}>
                    {symptom}
                  </SymptomEntry>
                ))
              : null
          )}
        </SymptomList>
      </>
    );
  } else {
    return (
      <>
        <Header backButton title="Alle Symptome" />
        <EmptyMessage>
          <h2>Noch keine Einträge</h2>
          <p>Füge neue Einträge hinzu:</p>
          <AddEntryLink href="/addsymptom"> + </AddEntryLink>
        </EmptyMessage>
      </>
    );
  }
}
