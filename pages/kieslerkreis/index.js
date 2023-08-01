import Header from "@/components/Header";
import KieslerKreis from "@/components/KieslerKreis";
import ScrollToTop from "@/components/ScrollToTop";
import Head from "next/head";
import { Fade } from "react-awesome-reveal";
import { styled } from "styled-components";

const KieslerkreisTextArticle = styled.article`
  padding: 15px;
`;

const KieslerkreisTextSection = styled.section`
  padding-bottom: 20px;
  line-height: 1.5em;
`;

export default function KieslerkreisPage({ allEntries, isIOS }) {
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
    const length = 8;
    for (let i = 0; i < length; i++) {
      let sum = 0;
      let count = 0;
      for (const array of arrays) {
        if (array[i] !== null) {
          sum += array[i];
          count++;
        }
      }
      result.push(count === 0 ? 0 : Math.round(sum / count));
    }
    return result;
  }
  const overviewDataset = {
    averageBehaviorKieslerkreis: averageArrays(behaviorKieslerkreisArray),
    averageBehaviorChangeKieslerkreis: averageArrays(
      behaviorChangeKieslerkreisArray
    ),
  };
  return (
    <>
      <Head>
        <title>Kieslerkreis</title>
        <meta charSet="UTF-8"></meta>
      </Head>
      <Header backButton title="Kieslerkreis"></Header>
      <ScrollToTop />
      {isIOS ? (
        <>
          <KieslerKreis overviewDataset={overviewDataset} />
          <KieslerkreisTextArticle>
            <h2>Über diese Seite</h2>
            <KieslerkreisTextSection>
              Auf dieser Seite erhältst du einen Überblick über die
              verschiedenen Positionen auf dem <i>Kieslerkreis</i>. Der{" "}
              <i>Kieslerkreis</i> ist ein Kommunikationsmodell, das
              zwischenmenschliche Interaktionen auf zwei Achsen darstellt: der
              Achse der Kontrolle und der Achse der Zugehörigkeit/Beziehung.
              Durch die Analyse deiner vergangenen Situationen kannst du
              feststellen, welche Positionen du häufig eingenommen hast und ob
              diese Positionen dazu beigetragen haben, deine Ziele zu erreichen.
              Nach der Analyse kannst du dann festlegen, welche Positionen du in
              Zukunft gerne einnehmen möchtest, um dein Verhalten zu verändern
              und bessere Ergebnisse zu erzielen.
            </KieslerkreisTextSection>
          </KieslerkreisTextArticle>
          <KieslerkreisTextArticle>
            <h2>Mehr zum Kieslerkreis</h2>
            <KieslerkreisTextSection>
              <h3>Die Dimensionen des Modells</h3>
              Der <i>Kieslerkreis</i> ist ein Kommunikationsmodell, das von dem
              amerikanischen Psychologen Donald J. Kiesler im Jahr 1983
              entwickelt wurde. Es beschreibt, wie zwischenmenschliche
              Interaktionen auf zwei Achsen dargestellt werden können: der Achse
              der Kontrolle mit den Polen “dominant” (offen) und “unterwürfig”
              (verschlossen) und der Achse der Zugehörigkeit/Beziehung mit den
              Polen “freundlich” (nah) und “feindselig” (distanziert)
            </KieslerkreisTextSection>
            <KieslerkreisTextSection>
              Neben diesen vier Hauptdimensionen ergeben sich vier weitere
              Positionen, die jeweils Mischformen der vier Hauptdimensionen
              darstellen. Kiesler nahm an, dass sich zwei Menschen immer
              gegenseitig beeinflussen, wenn sie miteinander kommunizieren. Wenn
              also jemand sehr dominant auftritt, dann wird dies in der Regel zu
              unterwürfigem Verhalten beim Gegenüber führen. Wenn jemand
              freundlich auftritt, wird er in der Regel auch eine freundliche
              Reaktion erhalten.
            </KieslerkreisTextSection>
            <KieslerkreisTextSection>
              <h3>Ziel des Kieslerkreis-Trainings</h3>
              Ziel des <i>Kieslerkreis</i>-Trainings ist es, sich flexibel im
              <i>Kieslerkreis</i> zu bewegen, je nachdem was die Situation
              erfordert. Hierzu sollte man sich bewusst darüber werden, welche
              Position man selbst im <i>Kieslerkreis</i> häufig einnimmt und ob
              man auf diese Weise erreichen kann, was man erreichen möchte.
            </KieslerkreisTextSection>
            <KieslerkreisTextSection>
              Insgesamt bietet der <i>Kieslerkreis</i> ein nützliches Werkzeug
              zur Analyse und Verbesserung zwischenmenschlicher Interaktionen
              und Beziehungen.
            </KieslerkreisTextSection>
          </KieslerkreisTextArticle>
        </>
      ) : (
        <Fade>
          <KieslerKreis overviewDataset={overviewDataset} />
          <KieslerkreisTextArticle>
            <h2>Über diese Seite</h2>
            <KieslerkreisTextSection>
              Auf dieser Seite erhältst du einen Überblick über die
              verschiedenen Positionen auf dem <i>Kieslerkreis</i>. Der{" "}
              <i>Kieslerkreis</i> ist ein Kommunikationsmodell, das
              zwischenmenschliche Interaktionen auf zwei Achsen darstellt: der
              Achse der Kontrolle und der Achse der Zugehörigkeit/Beziehung.
              Durch die Analyse deiner vergangenen Situationen kannst du
              feststellen, welche Positionen du häufig eingenommen hast und ob
              diese Positionen dazu beigetragen haben, deine Ziele zu erreichen.
              Nach der Analyse kannst du dann festlegen, welche Positionen du in
              Zukunft gerne einnehmen möchtest, um dein Verhalten zu verändern
              und bessere Ergebnisse zu erzielen.
            </KieslerkreisTextSection>
          </KieslerkreisTextArticle>
          <KieslerkreisTextArticle>
            <h2>Mehr zum Kieslerkreis</h2>
            <KieslerkreisTextSection>
              <h3>Die Dimensionen des Modells</h3>
              Der <i>Kieslerkreis</i> ist ein Kommunikationsmodell, das von dem
              amerikanischen Psychologen Donald J. Kiesler im Jahr 1983
              entwickelt wurde. Es beschreibt, wie zwischenmenschliche
              Interaktionen auf zwei Achsen dargestellt werden können: der Achse
              der Kontrolle mit den Polen “dominant” (offen) und “unterwürfig”
              (verschlossen) und der Achse der Zugehörigkeit/Beziehung mit den
              Polen “freundlich” (nah) und “feindselig” (distanziert)
            </KieslerkreisTextSection>
            <KieslerkreisTextSection>
              Neben diesen vier Hauptdimensionen ergeben sich vier weitere
              Positionen, die jeweils Mischformen der vier Hauptdimensionen
              darstellen. Kiesler nahm an, dass sich zwei Menschen immer
              gegenseitig beeinflussen, wenn sie miteinander kommunizieren. Wenn
              also jemand sehr dominant auftritt, dann wird dies in der Regel zu
              unterwürfigem Verhalten beim Gegenüber führen. Wenn jemand
              freundlich auftritt, wird er in der Regel auch eine freundliche
              Reaktion erhalten.
            </KieslerkreisTextSection>
            <KieslerkreisTextSection>
              <h3>Ziel des Kieslerkreis-Trainings</h3>
              Ziel des <i>Kieslerkreis</i>-Trainings ist es, sich flexibel im
              <i>Kieslerkreis</i> zu bewegen, je nachdem was die Situation
              erfordert. Hierzu sollte man sich bewusst darüber werden, welche
              Position man selbst im <i>Kieslerkreis</i> häufig einnimmt und ob
              man auf diese Weise erreichen kann, was man erreichen möchte.
            </KieslerkreisTextSection>
            <KieslerkreisTextSection>
              Insgesamt bietet der <i>Kieslerkreis</i> ein nützliches Werkzeug
              zur Analyse und Verbesserung zwischenmenschlicher Interaktionen
              und Beziehungen.
            </KieslerkreisTextSection>
          </KieslerkreisTextArticle>
        </Fade>
      )}
    </>
  );
}
