import { useState } from "react";
import EntryInput from "../EntryInput";
import { EntryContent, ContentHeadline } from "./EntryContentBlock.style";

export default function EntryContentBlock({
  children,
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

  if (editMode === true) {
    return (
      <EntryContent>
        <ContentHeadline htmlFor={analysisKey}>{children}</ContentHeadline>
        {Array.isArray(updatedData[analysisKey]) &&
        analysisKey === "interpretations" ? (
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
        ) : Array.isArray(updatedData[analysisKey]) &&
          analysisKey === "revision" ? (
          updatedData[analysisKey].map((item, index) => (
            <EntryInput
              short
              key={item.id}
              name={"revision " + item.id}
              id={index}
              type="text"
              value={item.revision}
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
  } else {
    return (
      <>
        <EntryContent>
          <ContentHeadline>{children}</ContentHeadline>
          {Array.isArray(updatedData[analysisKey]) &&
          analysisKey === "interpretations" ? (
            <ol>
              {updatedData[analysisKey].map(({ id, interpretation }) => (
                <li key={id}>{interpretation}</li>
              ))}
            </ol>
          ) : Array.isArray(updatedData[analysisKey]) &&
            analysisKey === "revision" ? (
            <ol>
              {updatedData[analysisKey].map(({ id, revision }) => (
                <li key={id}>{revision}</li>
              ))}
            </ol>
          ) : (
            <p>{updatedData[analysisKey]}</p>
          )}
        </EntryContent>
      </>
    );
  }
}
