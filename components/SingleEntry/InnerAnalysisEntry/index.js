import { EntryContent } from "../SingleEntry.style";
import Header from "@/utils/Header";
import SubHeading from "@/utils/SubHeading";

export default function InnerAnalysisEntry({ entry }) {
  const {
    title,
    date,
    description,
    interpretations,
    behavior,
    actualResult,
    desiredResult,
    comparison,
    revision,
    behaviorChange,
    implementation,
    transfer,
  } = entry;

  return (
    <>
      <Header title={title} date={date}></Header>
      <EntryContent>
        <SubHeading>Beschreibung</SubHeading>
        <p>{description}</p>
        <SubHeading>Interpretation</SubHeading>
        <ol>
          {interpretations.map((interpretation) => {
            return <li>{interpretation}</li>;
          })}
        </ol>
        <SubHeading>Verhalten</SubHeading>
        <p>{behavior}</p>
        <SubHeading>Endergebnis</SubHeading>
        <p>{actualResult}</p>
        <SubHeading>Gewünschtes Ergebnis</SubHeading>
        <p>{desiredResult}</p>
        <SubHeading>Ergebnisvergleich</SubHeading>
        <p>{comparison}</p>
        <SubHeading>Revision</SubHeading>
        <p>{revision}</p>
        <SubHeading>Verhaltensänderung</SubHeading>
        <p>{behaviorChange}</p>
        <SubHeading>implementierung</SubHeading>
        <p>{implementation}</p>
        <SubHeading>Transfer</SubHeading>
        <p>{transfer}</p>
      </EntryContent>
    </>
  );
}
