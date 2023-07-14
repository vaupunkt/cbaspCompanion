import { useState } from "react";
import EntryInput from "../EntryInput";
import { EntryContent, ContentHeadline } from "./EntryContentBlock.style";

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
  const numberOfInterpretations = 3;
  const [interpretations, setInterpretations] = useState(
    Array(numberOfInterpretations).fill({ interpretation: "" })
  );

  function handleInterpretationChange(index, value) {
    setInterpretations((prevInterpretations) =>
      prevInterpretations.map((prevInterpretation, i) =>
        i === index
          ? { ...prevInterpretation, interpretation: value }
          : prevInterpretation
      )
    );
  }
  console.log(interpretations);
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
              onChange={(event) =>
                handleArrayChange(analysisKey, index, event.target.value)
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
            onChange={(event) => handleChange(analysisKey, event.target.value)}
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
            {interpretations.map((_, index) => (
              <li key={index}>
                <label htmlFor={index + 1}>Interpretation:</label>
                <EntryInput
                  required
                  type="text"
                  name={analysisKey + " " + (index + 1)}
                  id={index + 1}
                  short
                  maxLength="200"
                  onChange={(event) =>
                    handleInterpretationChange(index, event.target.value)
                  }
                />
              </li>
            ))}
          </ol>
        ) : (
          ""
        )}
        {analysisKey === "revision" ? (
          <ol>
            {interpretations.map(({ interpretation }, index) => (
              <>
                <li key={index}>
                  <label htmlFor={index + 1}>Revision:</label>
                  <p>Die Interpretation lautete: {interpretation}</p>
                  <EntryInput
                    required
                    type="text"
                    name={"revision " + (index + 1)}
                    id={index + 1}
                    short
                    maxLength="200"
                  />
                </li>
              </>
            ))}
          </ol>
        ) : (
          <EntryInput
            required
            type="text"
            name={analysisKey}
            id={analysisKey}
            long
            maxLength="500"
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
