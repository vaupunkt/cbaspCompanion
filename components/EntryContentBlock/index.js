import { EntryContent, ContentHeadline } from "./EntryContentBlock.style";

export default function EntryContentBlock({ children, content }) {
  return (
    <EntryContent>
      <ContentHeadline>{children}</ContentHeadline>
      {Array.isArray(content) ? (
        <ol>
          {content.map(({ id, interpretation }) => (
            <li key={id}>{interpretation}</li>
          ))}
        </ol>
      ) : (
        <p>{content}</p>
      )}
    </EntryContent>
  );
}
