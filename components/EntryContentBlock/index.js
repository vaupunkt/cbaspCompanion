import { useState } from "react";
import EntryInput from "../EntryInput";
import { EntryContent, ContentHeadline } from "./EntryContentBlock.style";
import { styled } from "styled-components";
import Button from "../Button";
import { uid } from "uid";
import { confirmAlert } from "react-confirm-alert";
import KieslerKreis from "../KieslerKreis";
import { allAnalysisFormHeadlines } from "@/lib/allAnalysisFormHeadlines";

const InterpretationListItem = styled.li`
  position: relative;
`;

const StyledList = styled.ol`
  padding: 20px;
  margin: 0px;
`;

const AnalysisDescription = styled.p`
  font-weight: 600;
  padding-top: 5px;
  font-size: 0.8em;
`;

export default function EntryContentBlock({
  children,
  editMode,
  analysisKey,
  updatedData,
  setUpdatedData,
  allActionInterpretations,
}) {
  const analysisHeadlines = allAnalysisFormHeadlines[updatedData.type];
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
    updatedData[analysisKey]
  );

  const [revisions, setRevisions] = useState(
    Array(numberOfInterpretations)
      .fill()
      .map((revision) => ({ id: uid(), revision: "" }))
  );

  function removeInterpretation(index) {
    confirmAlert({
      message: "Sicher, dass du diese Interpretation löschen willst?",
      buttons: [
        { label: "Abbrechen" },
        {
          label: "Löschen",
          onClick: () => {
            setUpdatedData((prevData) => ({
              ...prevData,
              [analysisKey]: prevData[analysisKey].filter(
                (interpretation, i) => i !== index
              ),
              revision: prevData.revision.filter((revision, i) => i !== index),
            }));
          },
        },
      ],
    });
  }

  function addInterpretation() {
    setUpdatedData((prevData) => {
      const newInterpretations = [
        ...prevData[analysisKey],
        { id: uid(), interpretation: "" },
      ];
      const newRevisions = Array.isArray(prevData.revision)
        ? [...prevData.revision, { id: uid(), revision: "" }]
        : Array(newInterpretations.length)
            .fill()
            .map(() => ({ id: uid(), revision: "" }));
      return {
        ...prevData,
        [analysisKey]: newInterpretations,
        revision: newRevisions,
      };
    });
  }

  if (editMode === true) {
    if (
      analysisKey === "actionInterpretation" &&
      Array.isArray(updatedData[analysisKey])
    ) {
      return (
        <EntryContent>
          <ContentHeadline htmlFor={analysisKey}>{children}</ContentHeadline>
          <AnalysisDescription>
            {analysisHeadlines[analysisKey].description}
          </AnalysisDescription>
          <StyledList>
            {updatedData[analysisKey].map(
              ({ id, actionInterpretation }, index) => (
                <InterpretationListItem key={id}>
                  <label htmlFor={id}>Handlungsaufruf:</label>

                  <EntryInput
                    type="text"
                    name={analysisKey + " " + id}
                    id={id}
                    short
                    list="allActionInterpretations"
                    value={actionInterpretation}
                    onChange={(event) =>
                      handleArrayChange(analysisKey, index, event.target.value)
                    }
                  />
                </InterpretationListItem>
              )
            )}
          </StyledList>
          <datalist id="allActionInterpretations">
            {allActionInterpretations.map((actionInterpretationOption) => (
              <option
                key={actionInterpretationOption}
                value={actionInterpretationOption}
              />
            ))}
          </datalist>
        </EntryContent>
      );
    } else if (
      analysisKey === "actionInterpretation" &&
      !Array.isArray(updatedData[analysisKey])
    ) {
      return (
        <EntryContent>
          <ContentHeadline htmlFor={analysisKey}>{children}</ContentHeadline>
          <AnalysisDescription>
            {analysisHeadlines[analysisKey].description}
          </AnalysisDescription>
          <EntryInput
            type="text"
            name={analysisKey}
            short
            list="allActionInterpretations"
            value={updatedData[analysisKey]}
            onChange={(event) => handleChange(analysisKey, event.target.value)}
          />
          <datalist id="allActionInterpretations">
            {allActionInterpretations.map((actionInterpretationOption) => (
              <option
                key={actionInterpretationOption}
                value={actionInterpretationOption}
              />
            ))}
          </datalist>
        </EntryContent>
      );
    } else if (
      analysisKey === "interpretations" &&
      Array.isArray(updatedData[analysisKey])
    ) {
      return (
        <EntryContent>
          <ContentHeadline htmlFor={analysisKey}>{children}</ContentHeadline>
          <AnalysisDescription>
            {analysisHeadlines[analysisKey].description}
          </AnalysisDescription>
          <StyledList>
            {updatedData[analysisKey].map(({ id, interpretation }, index) => (
              <InterpretationListItem key={id}>
                <label htmlFor={id}>Interpretation:</label>
                <EntryInput
                  type="text"
                  name={analysisKey + " " + id}
                  id={id}
                  short
                  value={interpretation}
                  onChange={(event) =>
                    handleArrayChange(analysisKey, index, event.target.value)
                  }
                />
                <Button
                  onClick={() => removeInterpretation(index)}
                  variant="small"
                  type="button"
                  name="deleteInterpretation"
                >
                  🗑️
                </Button>
              </InterpretationListItem>
            ))}
            <Button
              variant="big"
              type="button"
              name="addInterpretation"
              onClick={() => addInterpretation()}
            >
              ➕ mehr Interpretationen hinzufügen
            </Button>
          </StyledList>
        </EntryContent>
      );
    } else if (analysisKey === "revision") {
      return (
        <EntryContent>
          <ContentHeadline htmlFor={analysisKey}>{children}</ContentHeadline>
          <AnalysisDescription>
            {analysisHeadlines[analysisKey].description}
          </AnalysisDescription>
          {Array.isArray(updatedData.revision) &&
            updatedData.revision.map((item, index) => (
              <EntryInput
                short
                key={item.id}
                name={"revision " + item.id}
                id={index}
                type="text"
                value={item.revision}
                onChange={(event) =>
                  handleArrayChange("revision", index, event.target.value)
                }
              />
            ))}
        </EntryContent>
      );
    } else if (analysisKey === "behavior") {
      return (
        <EntryContent>
          <ContentHeadline htmlFor={analysisKey}>{children}</ContentHeadline>
          <AnalysisDescription>
            {analysisHeadlines[analysisKey].description}
          </AnalysisDescription>
          <EntryInput
            long
            type="text"
            name={analysisKey}
            id={analysisKey}
            value={updatedData[analysisKey]}
            onChange={(event) => handleChange(analysisKey, event.target.value)}
          />
          <KieslerKreis
            analysisKey={analysisKey}
            editMode={editMode}
            kieslerkreisDataset={updatedData.behaviorKieslerkreis}
          />
        </EntryContent>
      );
    } else if (analysisKey === "behaviorChange") {
      return (
        <EntryContent>
          <ContentHeadline htmlFor={analysisKey}>{children}</ContentHeadline>
          <AnalysisDescription>
            {analysisHeadlines[analysisKey].description}
          </AnalysisDescription>
          <EntryInput
            long
            type="text"
            name={analysisKey}
            id={analysisKey}
            value={updatedData[analysisKey]}
            onChange={(event) => handleChange(analysisKey, event.target.value)}
          />
          <KieslerKreis
            analysisKey={analysisKey}
            editMode={editMode}
            kieslerkreisDataset={updatedData.behaviorChangeKieslerkreis}
          />
        </EntryContent>
      );
    } else {
      return (
        <EntryContent>
          <ContentHeadline htmlFor={analysisKey}>{children}</ContentHeadline>
          <AnalysisDescription>
            {analysisHeadlines[analysisKey].description}
          </AnalysisDescription>
          <EntryInput
            long
            type="text"
            name={analysisKey}
            id={analysisKey}
            value={updatedData[analysisKey]}
            onChange={(event) => handleChange(analysisKey, event.target.value)}
          />
        </EntryContent>
      );
    }
  } else {
    if (analysisKey === "behavior") {
      return (
        <>
          <EntryContent>
            <ContentHeadline>{children}</ContentHeadline>
            <AnalysisDescription>
              {analysisHeadlines[analysisKey].description}
            </AnalysisDescription>
            <p>{updatedData[analysisKey]}</p>
            <KieslerKreis
              analysisKey={analysisKey}
              kieslerkreisDataset={updatedData.behaviorKieslerkreis}
            />
          </EntryContent>
        </>
      );
    } else if (analysisKey === "behaviorChange") {
      return (
        <>
          <EntryContent>
            <ContentHeadline>{children}</ContentHeadline>
            <AnalysisDescription>
              {analysisHeadlines[analysisKey].description}
            </AnalysisDescription>
            <p>{updatedData[analysisKey]}</p>
            <KieslerKreis
              analysisKey={analysisKey}
              kieslerkreisDataset={updatedData.behaviorChangeKieslerkreis}
            />
          </EntryContent>
        </>
      );
    } else {
      return (
        <>
          <EntryContent>
            <ContentHeadline>{children}</ContentHeadline>
            <AnalysisDescription>
              {analysisHeadlines[analysisKey].description}
            </AnalysisDescription>
            {Array.isArray(updatedData[analysisKey]) ? (
              <ol>
                {updatedData[analysisKey].map(
                  ({ id, interpretation, revision, actionInterpretation }) => (
                    <li key={id}>
                      {interpretation
                        ? interpretation
                        : revision
                        ? revision
                        : actionInterpretation}
                    </li>
                  )
                )}
              </ol>
            ) : (
              <p>{updatedData[analysisKey]}</p>
            )}
          </EntryContent>
        </>
      );
    }
  }
}
