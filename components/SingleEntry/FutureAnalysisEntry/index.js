import {
  StyledH1,
  StyledDate,
  Header,
  EntryContent,
  StyledH2,
} from "../SingleEntry.styled";

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
      <Header>
        <StyledH1>{title}</StyledH1>
        <StyledDate>{date}</StyledDate>
      </Header>
      <EntryContent>
        <StyledH2>Beschreibung</StyledH2>
        <p>{description}</p>
        <StyledH2>Gewünschtes Ergebnis</StyledH2>
        <p>{desiredResult}</p>
        <StyledH2>Verhalten</StyledH2>
        <p>{behavior}</p>
        <StyledH2>Interpretation</StyledH2>
        <ol>
          {interpretations.map((interpretation) => {
            return <li>{interpretation}</li>;
          })}
        </ol>
        <StyledH2>Rollenspiel</StyledH2>
        <p>{rolePlay}</p>
        <StyledH2>implementierung</StyledH2>
        <p>{implementation}</p>
        <StyledH2>Transfer</StyledH2>
        <p>{transfer}</p>
      </EntryContent>
    </>
  );
}
