import Header from "@/components/Header";
import EntryContentBlock from "../EntryContentBlock";

export default function Entry({ data }) {
  const { type } = data;

  if (type === "PastAnalysis") {
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
    } = data;
    return (
      <>
        <Header backButton title={title} date={date}></Header>
        <EntryContentBlock content={description}>
          Beschreibung
        </EntryContentBlock>
        <EntryContentBlock content={interpretations}>
          Interpretation
        </EntryContentBlock>
        <EntryContentBlock content={behavior}>Verhalten</EntryContentBlock>
        <EntryContentBlock content={actualResult}>
          Tatsächliches Ergebnis
        </EntryContentBlock>
        <EntryContentBlock content={desiredResult}>
          Gewünschtes Ergebnis
        </EntryContentBlock>
        <EntryContentBlock content={comparison}>
          Vergleich des tatsächlichen mit dem erwünschten Ergebnis
        </EntryContentBlock>
        <EntryContentBlock content={revision}>
          Revision ungeeigneter Interpretationen
        </EntryContentBlock>
        <EntryContentBlock content={behaviorChange}>
          Veränderung des Verhaltens
        </EntryContentBlock>
        <EntryContentBlock content={implementation}>
          Umsetzung und Zusammenfassung
        </EntryContentBlock>
        <EntryContentBlock content={transfer}>
          Generalisierung und Übertragung des Gelernten auf den Alltag
        </EntryContentBlock>
      </>
    );
  }

  if (type === "InnerSituationAnalysis") {
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
    } = data;
    return (
      <>
        <Header backButton title={title} date={date}></Header>
        <EntryContentBlock content={description}>
          Beschreibung
        </EntryContentBlock>
        <EntryContentBlock content={interpretations}>
          Interpretation
        </EntryContentBlock>
        <EntryContentBlock content={behavior}>Verhalten</EntryContentBlock>
        <EntryContentBlock content={actualResult}>
          Tatsächliches Ergebnis
        </EntryContentBlock>
        <EntryContentBlock content={desiredResult}>
          Gewünschtes Ergebnis
        </EntryContentBlock>
        <EntryContentBlock content={comparison}>
          Vergleich des tatsächlichen mit dem erwünschten Ergebnis
        </EntryContentBlock>
        <EntryContentBlock content={revision}>
          Revision ungeeigneter Interpretationen
        </EntryContentBlock>
        <EntryContentBlock content={behaviorChange}>
          Veränderung des Verhaltens
        </EntryContentBlock>
        <EntryContentBlock content={implementation}>
          Umsetzung und Zusammenfassung
        </EntryContentBlock>
        <EntryContentBlock content={transfer}>
          Generalisierung und Übertragung des Gelernten auf den Alltag
        </EntryContentBlock>
      </>
    );
  }

  if (type === "FutureAnalysis") {
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
        <EntryContentBlock content={description}>
          Beschreibung
        </EntryContentBlock>
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
}
