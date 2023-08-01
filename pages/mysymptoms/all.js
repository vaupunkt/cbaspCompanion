import Button from "@/components/Button";
import Header from "@/components/Header";
import Head from "next/head";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { styled, css } from "styled-components";

const SymptomList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  width: 100%;
  justify-content: space-evenly;
`;

const SymptomEntry = styled.li`
  ${(props) =>
    props.category &&
    css`
      background-color: var(--${props.category});
      color: var(--secondaryColor);
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
export default function AllSymptoms({
  isIOS,
  mySymptoms,
  handleSymptomDelete,
}) {
  const [editMode, setEditMode] = useState(false);
  function toggleEditMode() {
    setEditMode(!editMode);
  }
  const sumSymptoms = mySymptoms[0].symptoms.length
    ? mySymptoms[0].symptoms.length
    : 0 + mySymptoms[1].symptoms.length
    ? mySymptoms[1].symptoms.length
    : 0 + mySymptoms[2].symptoms.length
    ? mySymptoms[2].symptoms.length
    : 0 + mySymptoms[3].symptoms.length
    ? mySymptoms[3].symptoms.length
    : 0;

  if (sumSymptoms > 0) {
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
          {isIOS ? (
            mySymptoms.map(({ symptoms, category }) =>
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
            )
          ) : (
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
          )}
        </SymptomList>
      </>
    );
  } else {
    return (
      <>
        <Header link="/mysymptoms" title="Alle Symptome" />
        <EmptyMessage link="/addsymptom" />
      </>
    );
  }
}
