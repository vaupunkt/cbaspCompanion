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
  newEntry,
  description,
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

  if (editMode === true) {
    return (
      <EntryContent>
        <ContentHeadline htmlFor={analysisKey}>{children}</ContentHeadline>
        {Array.isArray(updatedData[analysisKey]) ? (
          updatedData[analysisKey].map((item, index) => (
            <EntryInput
              short
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
            long
            type="text"
            name={analysisKey}
            id={analysisKey}
            value={updatedData[analysisKey]}
            onChange={(e) => handleChange(analysisKey, e.target.value)}
          />
        )}
      </EntryContent>
    );
  } else if (newEntry) {
    return (
      <EntryContent>
        <ContentHeadline htmlFor={analysisKey}>{children}</ContentHeadline>
        <p>{description}</p>
        {analysisKey === "interpretations" ? (
          <ol>
            <li>
              <label htmlFor="1">Interpretation:</label>
              <EntryInput
                required
                type="text"
                name={analysisKey + " 1"}
                id="1"
                short
              />
            </li>
            <li>
              <label htmlFor="2">Interpretation:</label>
              <EntryInput type="text" name={analysisKey + " 2"} id="2" short />
            </li>
            <li>
              <label htmlFor="3">Interpretation:</label>
              <EntryInput type="text" name={analysisKey + " 3"} id="3" short />
            </li>
          </ol>
        ) : (
          <EntryInput
            required
            type="text"
            name={analysisKey}
            id={analysisKey}
            long
          />
        )}
      </EntryContent>
    );
  } else {
    return (
      <>
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
      </>
    );
  }
}
