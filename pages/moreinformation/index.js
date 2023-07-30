import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { styled, css } from "styled-components";

const MoreInformationArticle = styled.article`
  padding: 15px;
  margin-bottom: 160px;
  scroll-margin: 90px;
  line-height: 1.5em;
  word-wrap: break-word;
  hyphens: auto;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const MoreInformationSection = styled.section`
  scroll-margin: 80px;
  padding-bottom: 20px;

  scroll-snap-align: start;
`;

const InformationListLink = styled(Link)`
  text-decoration: none;
  border-radius: 25px;
  color: var(--mainLightColor);

  &:active {
    color: var(--mainLightColor);
  }
`;

const ListEntry = styled.li`
  background-color: var(--mainDarkColor);
  color: var(--mainLightColor);
  padding: 0px 20px;
  height: 3em;
  border-radius: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  list-style: none;
  &:hover {
    background-color: color-mix(
      in srgb,
      var(--mainDarkColor) 50%,
      var(--mainLightColor)
    );
  }
`;

const InformationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  flex-direction: row;
  margin: auto;
  align-items: flex-start;
  justify-content: center;
`;

export default function MoreInformationPage() {
  return (
    <>
      <Head>
        <title>Mehr Informationen</title>
        <meta charSet="UTF-8"></meta>
      </Head>
      <Header link="./" title="mehr Informationen" />
      <InformationList>
        <Fade cascade damping={0.2}>
          <InformationListLink href="#depression">
            <ListEntry>(chronische) Depressionen</ListEntry>
          </InformationListLink>
          <InformationListLink href="#cbaspTherapy">
            <ListEntry>CBASP Therapie</ListEntry>
          </InformationListLink>
          <InformationListLink href="#getHelp">
            <ListEntry>Hilfe erhalten</ListEntry>
          </InformationListLink>
          <InformationListLink href="#about">
            <ListEntry>Über diese App</ListEntry>
          </InformationListLink>
        </Fade>
      </InformationList>
      <Fade>
        <MoreInformationArticle>
          <MoreInformationSection id="depression">
            <h2>Über (chronische) Depressionen</h2>
            <p>
              <strong>Depression</strong> ist eine psychische Störung, die durch
              Episoden von mentaler <strong>Depression</strong> gekennzeichnet
              ist. Symptome einer <strong>Depression</strong> sind Gefühle von
              Traurigkeit, Weinen, Hoffnungslosigkeit, Kurztemperament,
              Reizbarkeit, Verlust des Interesses oder mangelndes Vergnügen,
              Gedächtnisverlust, schwache Emotionen, Schlafstörungen, Müdigkeit,
              reduzierter Appetit und Gewichtsverlust sowie Gefühle von
              Wertlosigkeit. Chronische <strong>Depression</strong> bedeutet,
              dass die <strong>Depression</strong> länger als zwei Jahre
              angedauert hat. Menschen mit chronischer{" "}
              <strong>Depression</strong> haben oft eine Vorgeschichte von
              emotionaler Vernachlässigung oder körperlicher Gewalt in ihrer
              Kindheit.
            </p>
            <p>
              <strong>Depression</strong> kann jeden betreffen, unabhängig von
              Alter, Geschlecht oder sozialem Status. Es gibt viele Faktoren,
              die zur Entstehung einer <strong>Depression</strong> beitragen
              können, darunter genetische Veranlagung, Veränderungen im
              Gehirnchemie, Stress und traumatische Ereignisse. Es ist wichtig
              zu beachten, dass <strong>Depression</strong> eine behandelbare
              Erkrankung ist und dass es viele wirksame Behandlungsmöglichkeiten
              gibt.
            </p>
          </MoreInformationSection>
          <MoreInformationSection id="cbaspTherapy">
            <h2>Über CBASP-Therapie</h2>
            <p>
              <strong>CBASP</strong> (Cognitive Behavioral Analysis System of
              Psychotherapy) ist eine spezielle Form der kognitiven
              Verhaltenstherapie, die speziell für die Behandlung von
              chronischer <strong>Depression</strong> entwickelt wurde.{" "}
              <strong>CBASP</strong> zielt darauf ab, die Denk- und
              Verhaltensmuster zu ändern, die zur Aufrechterhaltung der{" "}
              <strong>Depression</strong> beitragen. Die Therapie umfasst
              Techniken wie Situationsanalyse und Zwischenmenschliche
              Diskriminationsübungen, um dir zu helfen, deine Gedanken und
              Verhaltensweisen besser zu verstehen und zu ändern.
            </p>
            <p>
              <strong>CBASP</strong> wurde in zahlreichen klinischen Studien
              untersucht und hat sich als wirksam bei der Behandlung von
              chronischer <strong>Depression</strong> erwiesen. Die Therapie
              wird in der Regel über einen Zeitraum von mehreren Wochen oder
              Monaten durchgeführt und kann einzeln oder in Gruppen durchgeführt
              werden. Wenn du an chronischer <strong>Depression</strong> leidest
              und an <strong>CBASP</strong> interessiert bist, sprich mit deinem
              Arzt oder Therapeuten über diese Behandlungsmöglichkeit.
            </p>
          </MoreInformationSection>
          <MoreInformationSection id="getHelp">
            <h2>Hilfe erhalten</h2>
            <p>
              Wenn du oder jemand, den du kennst, an{" "}
              <strong>Depressionen</strong> leidet, ist es wichtig,
              professionelle Hilfe zu suchen. Es gibt viele Möglichkeiten zur
              Behandlung von <strong>Depressionen</strong>, darunter
              Psychotherapie, Medikamente und Selbsthilfegruppen. Ein guter
              erster Schritt ist es, mit deinem Hausarzt oder einem anderen
              medizinischen Fachmann über deine Symptome zu sprechen. Sie können
              dir bei der Suche nach einer geeigneten Behandlung helfen und dich
              an einen Spezialisten überweisen.
            </p>
            <p>
              Es ist auch wichtig zu beachten, dass es viele Ressourcen gibt,
              die dir helfen können, mit <strong>Depressionen</strong>{" "}
              umzugehen. Dazu gehören Selbsthilfebücher und -websites sowie
              Online-Support-Gruppen. Es kann auch hilfreich sein, sich an
              Freunde und Familie zu wenden und ihnen von deinen Gefühlen zu
              erzählen. Denke daran: Du bist nicht allein und es gibt Hilfe da
              draußen.
            </p>
            <h3>
              Hier einige hilfreiche Links und Telefonnummern für Menschen, die
              von Depressionen betroffen sind:
            </h3>
            <ul>
              <li>
                <strong>Info-Telefon Depression</strong>: Dies ist ein
                kostenloser Service, der von der Stiftung Deutsche
                Depressionshilfe angeboten wird. Du kannst das Info-Telefon
                unter der Nummer{" "}
                <Link href="tel:+498003344533">0800 / 33 44 533</Link>{" "}
                erreichen. Die Sprechzeiten sind Mo, Di, Do – 13.00 bis 17.00
                Uhr; Mi und Fr – 08.30 bis 12.30 Uhr.
              </li>
              <li>
                <strong>Deutsche Depressionshilfe</strong>: Auf der Website der{" "}
                <Link href="https://www.deutsche-depressionshilfe.de/depression-infos-und-hilfe/wo-finde-ich-hilfe">
                  Deutschen Depressionshilfe
                </Link>{" "}
                findest du viele Informationen und Hilfsangebote bei Depression.
                Dort gibt es auch eine Liste von Klinikadressen und
                Krisendiensten in deiner Region.
              </li>
              <li>
                <strong>Telefonseelsorge</strong>: Die Telefonseelsorge ist rund
                um die Uhr unter den Nummern{" "}
                <Link href="tel:+498001110111">0800 / 11 10 111</Link> und{" "}
                <Link href="tel:+498001110222">0800 / 11 10 222</Link>{" "}
                erreichbar. Es gibt auch eine Mail- und Chatberatung über die{" "}
                <Link href="https://www.telefonseelsorge.de/">Website</Link>.
              </li>
              <li>
                <strong>Kinder- und Jugendtelefon</strong>: Das Kinder- und
                Jugendtelefon ist unter der Nummer{" "}
                <Link href="tel:+49116111">11 61 11</Link> erreichbar. Die
                Sprechzeiten sind Mo - Sa von 14:00 - 20:00 Uhr.
              </li>
              <li>
                <strong>Elterntelefon</strong>: Das Elterntelefon ist unter der
                Nummer <Link href="tel:+498001110550">0800 11 10 55 0</Link>{" "}
                erreichbar. Die Sprechzeiten sind Mo - Fr von 9:00 - 17:00 Uhr,
                Di+Do bis 19:00 Uhr.
              </li>
            </ul>
          </MoreInformationSection>
          <MoreInformationSection id="about">
            <h2>Über diese App</h2>
            <p>
              Diese Webseite und App ist mein Abschlussprojekt für mein{" "}
              <Link href="https://www.neuefische.de/bootcamp/web-development">
                Web-Development Bootcamp
              </Link>{" "}
              bei NeueFische. Ich entwickle die App{" "}
              <strong>CBASP Companion</strong>, in der man die
              Situationsanalysen der <strong>CBASP</strong>-Therapie durchführen
              kann. Als jemand, der selbst von chronischen Depressionen
              betroffen ist und in <strong>CBASP</strong>-Behandlung ist, weiß
              ich, wie wichtig es ist, Zugang zu hilfreichen Ressourcen zu
              haben. Deshalb habe ich beschlossen, meine Fähigkeiten und
              Erfahrungen zu nutzen, um anderen zu helfen.
            </p>
            <p>
              Mehr Informationen zur App findest du auf meiner GitHub-Seite:{" "}
              <Link href="https://github.com/vaupunkt/cbaspCompanion/">
                [cbaspCompanion]
              </Link>
              . Ich hoffe, dass meine App ein paar Menschen helfen kann, die an
              Depressionen leiden.
            </p>
            <p>
              Bei der Erstellung der Formulare für die Situationsanalysen habe
              ich mich stark an den Vorgaben aus dem Buch "
              <i>Die Mauer überwinden</i>" (ISBN: 3621280853) von Eva-Lotta
              Brakemeier und Angela Buchholz orientiert. Dieses Buch bietet
              Strategien aus der <strong>CBASP</strong>-Therapie, um Menschen
              mit chronischen Depressionen zu helfen, ihre Mauer zu überwinden
              und ihr Leben wieder selbstbewusst zu gestalten. Ein besonderes
              Ziel ist die Aufarbeitung von Prägungen durch wichtige
              Bezugspersonen in der Kindheit, die zur Entwicklung und
              Verfestigung von Verhaltens- und Denkmustern beitragen. Ich kann
              mir vorstellen, dass ich die Arbeit mit und Aufarbeitung von
              Prägungen in Zukunft bei <strong>CBASP Companion</strong> noch
              einbauen werde.
            </p>
            <p>Vielen Dank für dein Interesse! 😊</p>
          </MoreInformationSection>
        </MoreInformationArticle>
      </Fade>
    </>
  );
}
