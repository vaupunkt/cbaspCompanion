import Header from "@/components/Header";
import EntryContentBlock from "../EntryContentBlock";

export default function Entry({ data }) {
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
  } = data;
  return (
    <>
      <Header backButton title={title} date={date}></Header>
      <EntryContentBlock content={description}>Beschreibung</EntryContentBlock>
      <EntryContentBlock content={desiredResult}>
        Gewünschtes Ergebnis
      </EntryContentBlock>
      <EntryContentBlock content={behavior}>Verhalten</EntryContentBlock>
      <EntryContentBlock content={interpretations}>
        Interpretation
      </EntryContentBlock>
      <EntryContentBlock content={rolePlay}>Rollenspiel</EntryContentBlock>
      <EntryContentBlock content={implementation}>
        Implementierung
      </EntryContentBlock>
      <EntryContentBlock content={transfer}>Transfer</EntryContentBlock>
    </>
  );
}
