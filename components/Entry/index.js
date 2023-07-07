import { EntryContent, ContentHeadline } from "./Entry.style";
import EntryHeader from "@/components/EntryHeader";

export default function Entry({ entry }) {
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
      <EntryHeader title={title} date={date}></EntryHeader>
      <EntryContent>
        <ContentHeadline>Beschreibung</ContentHeadline>
        <p>{description}</p>
      </EntryContent>
      <EntryContent>
        <ContentHeadline>Gewünschtes Ergebnis</ContentHeadline>
        <p>{desiredResult}</p>
      </EntryContent>
      <EntryContent>
        <ContentHeadline>Verhalten</ContentHeadline>
        <p>{behavior}</p>
      </EntryContent>
      <EntryContent>
        <ContentHeadline>Interpretation</ContentHeadline>
        <ol>
          {interpretations.map(({ id, interpretation }) => {
            return <li key={id}>{interpretation}</li>;
          })}
        </ol>
      </EntryContent>
      <EntryContent>
        <ContentHeadline>Rollenspiel</ContentHeadline>
        <p>{rolePlay}</p>
      </EntryContent>
      <EntryContent>
        <ContentHeadline>Implementierung</ContentHeadline>
        <p>{implementation}</p>
      </EntryContent>
      <EntryContent>
        <ContentHeadline>Transfer</ContentHeadline>
        <p>{transfer}</p>
      </EntryContent>
    </>
  );
}
