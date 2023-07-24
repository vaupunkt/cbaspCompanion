import { confirmAlert } from "react-confirm-alert";
import { useState } from "react";
import { uid } from "uid";
import { styled } from "styled-components";
import { allAnalysisFormHeadlines } from "@/lib/allAnalysisFormHeadlines";
import { allAnalysisKeys } from "@/lib/allAnalysisKeys";
import {
  ContentHeadline,
  EntryContent,
} from "../EntryContentBlock/EntryContentBlock.style";
import EntryInput from "../EntryInput";
import Button from "../Button";
import KieslerKreis from "../KieslerKreis";

const StyledList = styled.ol`
  padding: 20px;
  margin: 0px;
`;

const OutcomeReachedSection = styled.section`
  display: flex;
  align-items: center;
  font-size: 1em;
`;

const InterpretationToRevise = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9em;
  word-wrap: normal;
`;

const InterpretationListItem = styled.li`
  position: relative;
`;

export default function AnalysisForm({
  typeOfAnalysis,
  allActionInterpretations,
}) {
  const [kieslerkreisData, setKieslerkreisData] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const analysisKeys = allAnalysisKeys[typeOfAnalysis];
  const analysisHeadlines = allAnalysisFormHeadlines[typeOfAnalysis];

  const numberOfInterpretations = 3;
  const [interpretations, setInterpretations] = useState(
    Array(numberOfInterpretations)
      .fill()
      .map((interpretation) => ({ id: uid(), interpretation: "" }))
  );

  const [revisions, setRevisions] = useState(
    Array(numberOfInterpretations)
      .fill()
      .map((revision) => ({ id: uid(), revision: "" }))
  );

  function addInterpretation() {
    setInterpretations((prevInterpretations) => [
      ...prevInterpretations,
      { id: uid(), interpretation: "" },
    ]);
    setRevisions((prevRevisions) => [
      ...prevRevisions,
      { id: uid(), revision: "" },
    ]);
  }

  function removeInterpretation(index) {
    confirmAlert({
      message: "Sicher, dass du diese Interpretation löschen willst?",
      buttons: [
        { label: "Abbrechen" },
        {
          label: "Löschen",
          onClick: () => {
            setInterpretations((prevInterpretations) =>
              prevInterpretations.filter((interpretation, i) => i !== index)
            );
          },
        },
      ],
    });
  }

  function handleRevisionChange(index, value) {
    setRevisions((prevRevisions) =>
      prevRevisions.map((prevRevision, i) =>
        i === index ? { ...prevRevision, revision: value } : prevRevision
      )
    );
  }

  function handleInterpretationChange(index, value) {
    setInterpretations((prevInterpretations) =>
      prevInterpretations.map((prevInterpretation, i) =>
        i === index
          ? { ...prevInterpretation, interpretation: value }
          : prevInterpretation
      )
    );
  }

  const [outcomeReached, setOutcomeReached] = useState("");
  function onOptionChange(event) {
    setOutcomeReached(event.target.value === "true");
  }
  return (
    <>
      {analysisKeys.map((analysisKey) => {
        if (analysisKey === "interpretations") {
          return (
            <EntryContent>
              <ContentHeadline htmlFor={analysisKey}>
                {analysisHeadlines[analysisKey].title}
              </ContentHeadline>
              <p>{analysisHeadlines[analysisKey].description}</p>
              <StyledList>
                {interpretations.map(({ id }, index) => (
                  <InterpretationListItem key={id}>
                    <label htmlFor={id}>Interpretation:</label>
                    <EntryInput
                      required={index === 0}
                      type="text"
                      name={analysisKey + " " + id}
                      id={id}
                      short
                      onChange={(event) =>
                        handleInterpretationChange(index, event.target.value)
                      }
                    />
                    {index >= numberOfInterpretations ? (
                      <Button
                        onClick={() => removeInterpretation(index)}
                        variant="small"
                        type="button"
                        name="deleteInterpretation"
                      >
                        🗑️
                      </Button>
                    ) : null}
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
        }
        if (analysisKey === "revision") {
          return (
            <>
              <EntryContent>
                <ContentHeadline htmlFor={analysisKey}>
                  {analysisHeadlines[analysisKey].title}
                </ContentHeadline>
                <p>{analysisHeadlines[analysisKey].description}</p>
                <StyledList>
                  {interpretations.map(({ id, interpretation }, index) => (
                    <>
                      <li key={id}>
                        <label htmlFor={id}>Revision:</label>
                        <InterpretationToRevise>
                          Die Interpretation lautete:{" "}
                          <span
                            style={{
                              textDecoration: revisions[index].revision
                                ? "line-through"
                                : null,
                            }}
                          >
                            {interpretation}
                          </span>
                        </InterpretationToRevise>
                        <EntryInput
                          type="text"
                          name={"revision " + (index + 1)}
                          id={id}
                          short
                          placeholder="(wenn nötig)"
                          onChange={(event) =>
                            handleRevisionChange(index, event.target.value)
                          }
                        />
                      </li>
                    </>
                  ))}
                </StyledList>
              </EntryContent>
            </>
          );
        }
        if (analysisKey === "actionInterpretation") {
          return (
            <EntryContent>
              <ContentHeadline htmlFor={analysisKey}>
                {analysisHeadlines[analysisKey].title}
              </ContentHeadline>
              <p>{analysisHeadlines[analysisKey].description}</p>
              <EntryInput
                required
                type="text"
                name="actionInterpretation"
                short
                list="allActionInterpretations"
              />
              <datalist id="allActionInterpretations">
                {allActionInterpretations.map((actionInterpretation) => (
                  <option
                    key={actionInterpretation}
                    value={actionInterpretation}
                  />
                ))}
              </datalist>
            </EntryContent>
          );
        }
        if (analysisKey === "behavior") {
          return (
            <EntryContent>
              <ContentHeadline htmlFor={analysisKey}>
                {analysisHeadlines[analysisKey].title}
              </ContentHeadline>
              <p>{analysisHeadlines[analysisKey].description}</p>
              <EntryInput
                long
                required
                type="text"
                name={analysisKey}
                id={analysisKey}
              />
              <KieslerKreis
                editMode="true"
                analysisKey={analysisKey}
                kieslerkreisData={kieslerkreisData}
                setKieslerkreisData={setKieslerkreisData}
              />
            </EntryContent>
          );
        }
        if (analysisKey === "behaviorChange") {
          return (
            <EntryContent>
              <ContentHeadline htmlFor={analysisKey}>
                {analysisHeadlines[analysisKey].title}
              </ContentHeadline>
              <p>{analysisHeadlines[analysisKey].description}</p>
              <EntryInput
                long
                required
                type="text"
                name={analysisKey}
                id={analysisKey}
              />
              <KieslerKreis
                editMode="true"
                analysisKey={analysisKey}
                kieslerkreisData={kieslerkreisData}
                setKieslerkreisData={setKieslerkreisData}
              />
            </EntryContent>
          );
        }
        if (analysisKey === "comparison") {
          return (
            <EntryContent>
              <ContentHeadline htmlFor={analysisKey}>
                {analysisHeadlines[analysisKey].title}
              </ContentHeadline>
              <p>{analysisHeadlines[analysisKey].description}</p>
              <OutcomeReachedSection>
                <input
                  type="radio"
                  id="comparisonYes"
                  name="comparison"
                  value={true}
                  checked={outcomeReached === true}
                  onChange={onOptionChange}
                />
                <label htmlFor="comparisonYes">Ja</label>
              </OutcomeReachedSection>
              <OutcomeReachedSection>
                {" "}
                <input
                  type="radio"
                  id="comparisonNo"
                  name="comparison"
                  value={false}
                  checked={outcomeReached === false}
                  onChange={onOptionChange}
                />
                <label htmlFor="comparisonNo">Nein</label>
              </OutcomeReachedSection>
              {outcomeReached === false ? (
                <>
                  <p>Warum nicht?</p>
                  <EntryInput
                    long
                    required
                    type="text"
                    name={analysisKey}
                    id={analysisKey}
                  />
                </>
              ) : null}
            </EntryContent>
          );
        }
        return (
          <EntryContent>
            <ContentHeadline htmlFor={analysisKey}>
              {analysisHeadlines[analysisKey].title}
            </ContentHeadline>
            <p>{analysisHeadlines[analysisKey].description}</p>
            <EntryInput
              long
              required
              type="text"
              name={analysisKey}
              id={analysisKey}
            />
          </EntryContent>
        );
      })}
    </>
  );
}
