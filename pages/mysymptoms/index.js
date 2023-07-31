import Header from "@/components/Header";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { styled, css } from "styled-components";

const SymptomGrid = styled.section`
  display: grid;

  grid-template-columns: 25vh 25vh;
  grid-template-rows: 25vh 25vh;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  padding-top: 40px;
`;

const SymptomBlock = styled(Link)`
  text-align: center;
  border-radius: 25px;
  text-decoration: none;
  color: black;
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  hyphens: auto;
  word-wrap: break-word;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}
`;
const SeeAllSymptomLink = styled.div`
  border-color: var(--mainDarkColor);
  padding: 15px 40px 15px 15px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  color: var(--mainLightColor);
  background-color: var(--mainDarkColor);
  text-decoration: none;
  position: fixed;
  left: 0px;
  font-weight: 500;
  bottom: 80px;
  font-size: 1.5em;
  &:hover {
    background-color: color-mix(
      in srgb,
      var(--mainDarkColor) 80%,
      var(--mainLightColor)
    );
  }
  &:active {
    box-shadow: inset 0px 0px 5px var(--mainLightColor);
  }
`;

const AddNewSymptomLink = styled.div`
  border-color: var(--mainDarkColor);
  padding: 15px 40px 15px 15px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  color: var(--mainLightColor);
  background-color: var(--mainDarkColor);
  text-decoration: none;
  position: fixed;
  right: 0px;
  font-weight: 800;
  bottom: 80px;
  font-size: 1.5em;
  &:hover {
    background-color: color-mix(
      in srgb,
      var(--mainDarkColor) 80%,
      var(--mainLightColor)
    );
  }
  &:active {
    box-shadow: inset 0px 0px 5px var(--mainLightColor);
  }
`;

const SeeMoreInformationLink = styled.div`
  border-color: var(--mainDarkColor);
  padding: 15px;
  border-radius: 25px;
  color: var(--mainLightColor);
  background-color: var(--mainDarkColor);
  text-decoration: none;
  position: sticky;
  top: 70px;
  font-weight: 500;
  font-size: 1em;
  width: 150px;
  margin: 9em auto 9em auto;
  text-align: center;

  &:hover {
    background-color: color-mix(
      in srgb,
      var(--mainDarkColor) 80%,
      var(--mainLightColor)
    );
  }
  &:active {
    box-shadow: inset 0px 0px 5px var(--mainLightColor);
  }
`;

const MoreInformationArticle = styled.article`
  padding: 15px;
  margin-bottom: 160px;
  scroll-margin: 90px;
  word-wrap: break-word;
  hyphens: auto;
`;

export default function MySymptomsPage() {
  return (
    <>
      <Header link="../mydata" title="Meine Symptome" />
      <Fade cascading damping={0.5}>
        <SymptomGrid lang="de">
          <SymptomBlock
            href={`/mysymptoms/physicalLevel`}
            color="var(--physicalLevel)"
          >
            <h3>Körperliche Ebene</h3>
          </SymptomBlock>

          <SymptomBlock
            href={`/mysymptoms/emotionalLevel`}
            color="var(--emotionalLevel)"
          >
            <h3>Gefühlsebene</h3>
          </SymptomBlock>
          <SymptomBlock
            href={`/mysymptoms/mentalLevel`}
            color="var(--mentalLevel)"
          >
            <h3>gedankliche Ebene</h3>
          </SymptomBlock>
          <SymptomBlock
            href={`/mysymptoms/behavioralLevel`}
            color="var(--behavioralLevel)"
          >
            <h3>Verhaltensebene</h3>
          </SymptomBlock>
        </SymptomGrid>
      </Fade>
      <Link href="./addsymptom">
        <AddNewSymptomLink>+</AddNewSymptomLink>
      </Link>
      <Link href="./mysymptoms/all">
        <SeeAllSymptomLink>Alle</SeeAllSymptomLink>
      </Link>
      <Link href="#moreInformation">
        <SeeMoreInformationLink>mehr Infos</SeeMoreInformationLink>
      </Link>
      <MoreInformationArticle id="moreInformation">
        <h2>Warum sollte man seine Symptome erfassen?</h2>
        <section>
          Depressionen sind eine ernsthafte psychische Erkrankung, die das
          Denken, Fühlen und Verhalten der Betroffenen verändert. Depressionen
          können verschiedene Ursachen haben, wie zum Beispiel genetische
          Veranlagung, Stress, Traumata oder körperliche Erkrankungen.
          Depressionen können auch unterschiedliche Symptome haben, wie zum
          Beispiel Niedergeschlagenheit, Antriebslosigkeit, Schlafstörungen oder
          körperliche Beschwerden. Um eine Depression zu erkennen und zu
          behandeln, ist es wichtig, die Symptome zu erfassen und zu
          dokumentieren.
        </section>
        <h3>Das hat mehrere Vorteile:</h3>
        <ul>
          <li>
            Du kannst deine Stimmung und dein Befinden objektiv beurteilen und
            Veränderungen feststellen.
          </li>
          <li>
            Du kannst deinem Arzt oder Therapeuten einen besseren Einblick in
            deine Situation geben und die passende Behandlung finden.
          </li>
          <li>
            Du kannst deine Fortschritte und Erfolge sichtbar machen und dich
            motivieren.
          </li>
          <li>
            Du kannst deine eigenen Ressourcen und Strategien entdecken und
            nutzen, um mit deiner Depression umzugehen.
          </li>
        </ul>
        <section>
          Die Symptom-Erfassung ist ein wichtiger Bestandteil der
          CBASP-Therapie. Durch die Erfassung können die Patienten lernen, die
          Konsequenzen ihres eigenen Verhaltens zu erkennen und zu beeinflussen.
        </section>
      </MoreInformationArticle>
    </>
  );
}
