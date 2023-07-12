import {
  EntryListContainer,
  EntryListItem,
  EntryListItemLink,
  EntryListTitle,
} from "@/components/EntryList/EntryList.style";
import Header from "@/components/Header";
import NavigationContainer from "@/components/NavigationContainer";
import NavigationLink from "@/components/NavigationLink";

export default function MyAnalysesPage() {
  return (
    <>
      <Header backButton title="Meine Situationsanalysen" />
      <NavigationContainer top left>
        <NavigationLink href="./pastanalyses">
          Vergangenheitsanalysen
        </NavigationLink>
        <NavigationLink href="./innersituationanalyses">
          Innere Situationsanalysen
        </NavigationLink>
        <NavigationLink href="./futureanalyses">
          Zukunftsanalysen
        </NavigationLink>
        <NavigationLink href="./allentries">Alle Analysen</NavigationLink>
      </NavigationContainer>
    </>
  );
}
