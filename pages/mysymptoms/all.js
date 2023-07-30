import Button from "@/components/Button";
import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
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
const SymptomDeleteButton = styled(Button)`
  top: 0px;
  right: 0px;
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
      position: relative;
      justify-content: space-around;
      align-items: center;
      list-style: none;
      &:hover {
        background-color: color-mix(
          in srgb,
          var(--${props.category}) 50%,
          var(--secondaryColor)
        );
      }
    `}
`;
export default function AllSymptoms({ mySymptoms, handleSymptomDelete }) {
  const [editMode, setEditMode] = useState(false);
  function toggleEditMode() {
    setEditMode(!editMode);
  }
  if (
    mySymptoms[0].symptoms.length +
      mySymptoms[1].symptoms.length +
      mySymptoms[2].symptoms.length +
      mySymptoms[3].symptoms.length >
    0
  ) {
    return (
      <>
        <Head>
          <title>Alle Symptome</title>
          <meta charSet="UTF-8"></meta>
        </Head>
        <Header link="../mysymptoms" title="Alle Symptome" />
        {editMode ? (
          <Button
            type="button"
            name="save"
            variant="big"
            onClick={() => toggleEditMode()}
          >
            💾 Speichern
          </Button>
        ) : (
          <Button
            type="button"
            name="edit"
            variant="big"
            onClick={() => toggleEditMode()}
          >
            ✍️ Bearbeiten
          </Button>
        )}
        <SymptomList>
          <Fade cascade damping={0.2}>
            {mySymptoms.map(({ symptoms, category }) =>
              symptoms.length > 0
                ? symptoms.map(({ symptom, id }) => (
                    <SymptomEntry key={id} category={category}>
                      {editMode ? (
                        <Button
                          type="button"
                          name="deleteSymptom"
                          variant="small"
                          onClick={() => handleSymptomDelete(id)}
                        >
                          🗑️
                        </Button>
                      ) : null}
                      {symptom}
                    </SymptomEntry>
                  ))
                : null
            )}
          </Fade>
        </SymptomList>
      </>
    );
  } else {
    return (
      <>
        <Header link="../mysymptoms" title="Alle Symptome" />
        <EmptyMessage>
          <h2>Noch keine Einträge</h2>
          <p>Füge neue Einträge hinzu:</p>
          <AddEntryLink href="/addsymptom"> + </AddEntryLink>
        </EmptyMessage>
      </>
    );
  }
}
