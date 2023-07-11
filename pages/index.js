import {
  EntryListContainer,
  EntryListItem,
  EntryListItemLink,
  EntryListTitle,
} from "@/components/EntryList/EntryList.style";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header title="CBASP Companion" />
      <EntryListContainer>
        <EntryListItemLink href="./myanalyses">
          <EntryListItem>
            <EntryListTitle>Meine Analysen</EntryListTitle>
          </EntryListItem>
        </EntryListItemLink>
      </EntryListContainer>
    </>
  );
}
