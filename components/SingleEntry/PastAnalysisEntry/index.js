import SubHeading from "@/components/SubHeading";
import {
  Header,
  EntryContent,
  StyledH1,
  StyledDate,
} from "../SingleEntry.styled";

export default function PastAnalysisEntry({ entry }) {
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
      <Header>
        <StyledH1>{title}</StyledH1>
        <StyledDate>{date}</StyledDate>
      </Header>
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
