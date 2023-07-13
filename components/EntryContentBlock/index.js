import {
  EntryContent,
  ContentHeadline,
  EntryInput,
} from "./EntryContentBlock.style";

export default function EntryContentBlock({
  children,
  content,
  editMode,
  analysisKey,
  updatedData,
  setUpdatedData,
}) {
  function handleChange(analysisKey, value) {
    setUpdatedData((prevData) => ({ ...prevData, [analysisKey]: value }));
  }

  function handleArrayChange(analysisKey, index, value) {
    setUpdatedData((prevData) => ({
      ...prevData,
      [analysisKey]: prevData[analysisKey].map((item, i) =>
        i === index ? { ...item, interpretation: value } : item
      ),
    }));
  }

  return (
    <>
      {editMode ? (
        <EntryContent>
          <ContentHeadline htmlFor={analysisKey}>{children}</ContentHeadline>
          {Array.isArray(updatedData[analysisKey]) ? (
            updatedData[analysisKey].map((item, index) => (
              <EntryInput
                short="true"
                key={item.id}
                name={"interpretation " + item.id}
                id={index}
                type="text"
                value={item.interpretation}
                onChange={(e) =>
                  handleArrayChange(analysisKey, index, e.target.value)
                }
              />
            ))
          ) : (
            <EntryInput
              long="true"
              type="text"
              name={analysisKey}
              id={analysisKey}
              value={updatedData[analysisKey]}
              onChange={(e) => handleChange(analysisKey, e.target.value)}
            />
          )}
        </EntryContent>
      ) : (
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
      )}
    </>
  );
}
