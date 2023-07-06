import { StyledH1 } from "../SingleEntry.styled";

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
      <StyledH1>{title}</StyledH1>
      <p>{date}</p>
      <h2>Beschreibung</h2>
      <p>{description}</p>
      <h2>Gewünschtes Ergebnis</h2>
      <p>{desiredResult}</p>
      <h2>Verhalten</h2>
      <p>{behavior}</p>
      <h2>Interpretation</h2>
      <ol>
        {interpretations.map((interpretation) => {
          return <li>{interpretation}</li>;
        })}
      </ol>
      <h2>Rollenspiel</h2>
      <p>{rolePlay}</p>
      <h2>implementierung</h2>
      <p>{implementation}</p>
      <h2>Transfer</h2>
      <p>{transfer}</p>
    </>
  );
}
