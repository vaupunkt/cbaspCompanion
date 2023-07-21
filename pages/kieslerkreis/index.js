import Header from "@/components/Header";
import KieslerKreis from "@/components/KieslerKreis";

export default function KieslerkreisPage({ allEntries }) {
  const behaviorKieslerkreisArray = allEntries
    .map((entry) => entry.behaviorKieslerkreis)
    .filter((value) => value !== undefined)
    .map((value) => JSON.parse(value));
  const behaviorChangeKieslerkreisArray = allEntries
    .map((entry) => entry.behaviorChangeKieslerkreis)
    .filter((value) => value !== undefined)
    .map((value) => JSON.parse(value));

  function averageArrays(arrays) {
    const result = [];
    const length = 7;
    for (let i = 0; i < length; i++) {
      let sum = 0;
      let count = 0;
      for (const array of arrays) {
        if (array[i] !== null) {
          sum += array[i];
          count++;
        }
      }
      result.push(count === 0 ? null : Math.round(sum / count));
    }
    return result;
  }
  const overviewDataset = {
    averageBehaviorKieslerkreis: averageArrays(behaviorKieslerkreisArray),
    averagebehaviorChangeKieslerkreisArray: averageArrays(
      behaviorChangeKieslerkreisArray
    ),
  };
  return (
    <>
      <Header backButton title="Kieslerkreis"></Header>
      <KieslerKreis overviewDataset={overviewDataset} />
      <article>
        Auf dieser Seite erhältst du einen Überblick über die verschiedenen
        Positionen auf dem Kieslerkreis. Der Kieslerkreis ist ein
        Kommunikationsmodell, das zwischenmenschliche Interaktionen auf zwei
        Achsen darstellt: der Achse der Kontrolle und der Achse der
        Zugehörigkeit/Beziehung. Durch die Analyse deiner vergangenen
        Situationen kannst du feststellen, welche Positionen du häufig
        eingenommen hast und ob diese Positionen dazu beigetragen haben, deine
        Ziele zu erreichen. Nach der Analyse kannst du dann festlegen, welche
        Positionen du in Zukunft gerne einnehmen möchtest, um dein Verhalten zu
        verändern und bessere Ergebnisse zu erzielen.
      </article>
      <article>
        <section>
          Der Kieslerkreis ist ein Kommunikationsmodell, das von dem
          amerikanischen Psychologen Donald J. Kiesler im Jahr 1983 entwickelt
          wurde. Es beschreibt, wie zwischenmenschliche Interaktionen auf zwei
          Achsen dargestellt werden können: der Achse der Kontrolle mit den
          Polen “dominant” (offen) und “unterwürfig” (verschlossen) und der
          Achse der Zugehörigkeit/Beziehung mit den Polen “freundlich” (nah) und
          “feindselig” (distanziert)
        </section>
        <section>
          Neben diesen vier Hauptdimensionen ergeben sich vier weitere
          Positionen, die jeweils Mischformen der vier Hauptdimensionen
          darstellen 1. Kiesler nahm an, dass sich zwei Menschen immer
          gegenseitig beeinflussen, wenn sie miteinander kommunizieren. Wenn
          also jemand sehr dominant auftritt, dann wird dies in der Regel zu
          unterwürfigem Verhalten beim Gegenüber führen. Wenn jemand freundlich
          auftritt, wird er in der Regel auch eine freundliche Reaktion
          erhalten.
        </section>
        <section>
          Ziel des Kiesler-Kreis-Trainings ist es, sich flexibel im
          Kiesler-Kreis zu bewegen, je nachdem was die Situation erfordert.
          Hierzu sollte man sich bewusst darüber werden, welche Position man
          selbst im Kiesler-Kreis häufig einnimmt und ob man auf diese Weise
          erreichen kann, was man erreichen möchte.
        </section>
        <section>
          Insgesamt bietet der Kieslerkreis ein nützliches Werkzeug zur Analyse
          und Verbesserung zwischenmenschlicher Interaktionen und Beziehungen.
        </section>
      </article>
    </>
  );
}
