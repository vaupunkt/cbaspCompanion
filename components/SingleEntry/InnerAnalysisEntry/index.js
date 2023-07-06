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
      <h1>{title}</h1>
      <p>{date}</p>
      <h2>Beschreibung</h2>
      <p>{description}</p>
      <h2>Interpretation</h2>
      <ol>
        {interpretations.map((interpretation) => {
          return <li>{interpretation}</li>;
        })}
      </ol>
      <h2>Verhalten</h2>
      <p>{behavior}</p>
      <h2>Endergebnis</h2>
      <p>{actualResult}</p>
      <h2>Gewünschtes Ergebnis</h2>
      <p>{desiredResult}</p>
      <h2>Ergebnisvergleich</h2>
      <p>{comparison}</p>
      <h2>Revision</h2>
      <p>{revision}</p>
      <h2>Verhaltensänderung</h2>
      <p>{behaviorChange}</p>
      <h2>implementierung</h2>
      <p>{implementation}</p>
      <h2>Transfer</h2>
      <p>{transfer}</p>
    </>
  );
}
