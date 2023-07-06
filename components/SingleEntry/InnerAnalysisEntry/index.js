import {
  StyledH1,
  StyledDate,
  Header,
  EntryContent,
  StyledH2,
} from "../SingleEntry.styled";

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
      <Header>
        <StyledH1>{title}</StyledH1>
        <StyledDate>{date}</StyledDate>
      </Header>
      <EntryContent>
        <StyledH2>Beschreibung</StyledH2>
        <p>{description}</p>
        <StyledH2>Interpretation</StyledH2>
        <ol>
          {interpretations.map((interpretation) => {
            return <li>{interpretation}</li>;
          })}
        </ol>
        <StyledH2>Verhalten</StyledH2>
        <p>{behavior}</p>
        <StyledH2>Endergebnis</StyledH2>
        <p>{actualResult}</p>
        <StyledH2>Gewünschtes Ergebnis</StyledH2>
        <p>{desiredResult}</p>
        <StyledH2>Ergebnisvergleich</StyledH2>
        <p>{comparison}</p>
        <StyledH2>Revision</StyledH2>
        <p>{revision}</p>
        <StyledH2>Verhaltensänderung</StyledH2>
        <p>{behaviorChange}</p>
        <StyledH2>implementierung</StyledH2>
        <p>{implementation}</p>
        <StyledH2>Transfer</StyledH2>
        <p>{transfer}</p>
      </EntryContent>
    </>
  );
}
