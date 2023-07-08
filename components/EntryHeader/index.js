import BackButton from "../BackButton";
import { HeaderTitle, HeaderDate, Header } from "./Header.style";

export default function EntryHeader({ title, date }) {
  return (
    <Header>
      <BackButton />
      <section>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderDate>{date}</HeaderDate>
      </section>
    </Header>
  );
}
