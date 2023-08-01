import Button from "@/components/Button";
import Header from "@/components/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { styled, css } from "styled-components";

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
export default function CategoryPage({
  isIOS,
  mySymptoms,
  handleSymptomDelete,
}) {
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
        link="/mysymptoms"
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
            {isIOS ? (
              allSymptoms.map(({ symptom, id }) => {
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
              })
            ) : (
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
            )}
          </SymptomList>
        </>
      ) : (
        <EmptyMessage link="/addsymptom" />
      )}
    </>
  );
}
