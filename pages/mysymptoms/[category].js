import Button from "@/components/Button";
import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { styled, css } from "styled-components";

const EmptyMessage = styled.section`
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
  border: solid;
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
const SymptomList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  width: 100%;
  justify-content: space-evenly;
`;
export default function CategoryPage({ mySymptoms, handleSymptomDelete }) {
  const router = useRouter();
  const { category } = router.query;
  const [editMode, setEditMode] = useState(false);
  function toggleEditMode() {
    setEditMode(!editMode);
  }

  if (!category) {
    return <></>;
  }
  let allSymptoms = mySymptoms.find(
    (mySymptom) => mySymptom.category === category
  ).symptoms;
  return (
    <>
      <Head>
        <title>
          {router.query.category === "behavioralLevel"
            ? "Verhaltensebene"
            : router.query.category === "mentalLevel"
            ? "gedankliche Ebene"
            : router.query.category === "emotionalLevel"
            ? "Gefühlsebene"
            : "Körperliche Ebene"}
        </title>
        <meta charSet="UTF-8"></meta>
      </Head>
      <Header
        link="../mysymptoms"
        title={
          router.query.category === "behavioralLevel"
            ? "Verhaltensebene"
            : router.query.category === "mentalLevel"
            ? "gedankliche Ebene"
            : router.query.category === "emotionalLevel"
            ? "Gefühlsebene"
            : "Körperliche Ebene"
        }
      />
      {allSymptoms.length > 0 ? (
        <>
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
              {allSymptoms.map(({ symptom, id }) => {
                return (
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
                );
              })}
            </Fade>
          </SymptomList>
        </>
      ) : (
        <EmptyMessage>
          <h2>Noch keine Einträge</h2>
          <p>Füge neue Einträge hinzu:</p>
          <AddEntryLink href="/addsymptom"> + </AddEntryLink>
        </EmptyMessage>
      )}
    </>
  );
}
