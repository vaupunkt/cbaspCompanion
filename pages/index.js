import {
  EntryListContainer,
  EntryListItem,
  EntryListItemLink,
  EntryListTitle,
} from "@/components/EntryList/EntryList.style";
import Header from "@/components/Header";

export default function MyAnalysesPage() {
  return (
    <>
      <Header title="Meine Situationsanalysen" />
      <EntryListContainer>
        <EntryListItemLink href="./pastanalyses">
          <EntryListItem>
            <EntryListTitle>Vergangenheitsanalysen</EntryListTitle>
          </EntryListItem>
        </EntryListItemLink>
        <EntryListItemLink href="./innersituationanalyses">
          <EntryListItem>
            <EntryListTitle>Innere Situationsanalysen</EntryListTitle>
          </EntryListItem>
        </EntryListItemLink>
        <EntryListItemLink href="./futureanalyses">
          <EntryListItem>
            <EntryListTitle>Zukunftsanalysen</EntryListTitle>
          </EntryListItem>
        </EntryListItemLink>
        <EntryListItemLink href="./allentries">
          <EntryListItem>
            <EntryListTitle>Alle Analysen</EntryListTitle>
          </EntryListItem>
        </EntryListItemLink>
      </EntryListContainer>
    </>
  );
}
