import { HeaderTitle, HeaderDate, Header } from "./Header.style";

export default function EntryHeader({ title, date }) {
  return (
    <Header>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderDate>{date}</HeaderDate>
    </Header>
  );
}
