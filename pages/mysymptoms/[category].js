import Header from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function CategoryPage({ mySymptoms }) {
  const router = useRouter();
  const { category } = router.query;
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
    padding: 0px 20px;
    margin: 0;
    background-color: var(--${category});
    border-radius: 25px;
    list-style: none;
    &:hover {
      background-color: color-mix(
        in srgb,
        var(--${category}) 50%,
        var(--mainLightColor)
      );
    }
  `;
  const SymptomList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
    width: 100%;
    justify-content: space-evenly;
  `;
  if (!category) {
    return <></>;
  }
  let allSymptoms = mySymptoms.find(
    (mySymptom) => mySymptom.category === category
  ).symptoms;
  return (
    <>
      <Header
        backButton
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
        <SymptomList>
          {allSymptoms.map(({ symptom, id }) => {
            return (
              <SymptomEntry key={id}>
                <p>{symptom}</p>
              </SymptomEntry>
            );
          })}
        </SymptomList>
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
