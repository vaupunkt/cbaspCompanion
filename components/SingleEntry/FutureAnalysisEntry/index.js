import { EntryContent } from "../SingleEntry.style";
import Header from "@/utils/Header";
import SubHeading from "@/utils/SubHeading";

export default function FutureAnalysisEntry({ entry }) {
  const {
    title,
    date,
    description,
    desiredResult,
    behavior,
    interpretations,
    rolePlay,
    implementation,
    transfer,
  } = entry;

  return (
    <>
      <Header title={title} date={date}></Header>
      <EntryContent>
        <SubHeading>Beschreibung</SubHeading>
        <p>{description}</p>
        <SubHeading>Gewünschtes Ergebnis</SubHeading>
        <p>{desiredResult}</p>
        <SubHeading>Verhalten</SubHeading>
        <p>{behavior}</p>
        <SubHeading>Interpretation</SubHeading>
        <ol>
          {interpretations.map((interpretation) => {
            return <li>{interpretation}</li>;
          })}
        </ol>
        <SubHeading>Rollenspiel</SubHeading>
        <p>{rolePlay}</p>
        <SubHeading>implementierung</SubHeading>
        <p>{implementation}</p>
        <SubHeading>Transfer</SubHeading>
        <p>{transfer}</p>
      </EntryContent>
    </>
  );
}
