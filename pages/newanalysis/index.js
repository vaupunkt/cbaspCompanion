import Button from "@/components/Button";
import { HeaderContainer, HeaderDate } from "@/components/Header/Header.style";
import { useState } from "react";
import { styled } from "styled-components";
import PastAnalysisForm from "@/components/PastAnalysisForm";

const TitleInput = styled.input`
  width: 50%;
  text-align: right;
  margin: 0;
  font-size: 1.3em;
  background-color: var(--mainDarkColor);
  color: var(--mainLightColor);
  border: solid;
  border-width: 2px;
`;

const DateInput = styled.input`
  background-color: var(--mainDarkColor);
  color: var(--mainLightColor);
  border: solid;
  text-align: right;
  border-width: 2px;
  margin-top: 2px;
`;

const ChooseTypeOfAnalysisFormfield = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;

const ChooseTypeOfAnalysisInput = styled.section`
  display: flex;
  align-items: center;
  font-size: 1.2em;
`;

export default function NewAnalysis() {
  const [typeOfAnalysis, setTypeOfAnalysis] = useState("");
  function onOptionChange(event) {
    setTypeOfAnalysis(event.target.value);
  }

  const date = new Date();

  return (
    <>
      <form>
        <HeaderContainer>
          <Button
            type="button"
            variant="small"
            name="back"
            onClick={() => history.back()}
          >
            ❮
          </Button>
          <TitleInput
            name="title"
            required
            placeholder="Title der Analyse"
          ></TitleInput>
          <HeaderDate>
            <DateInput
              type="date"
              pattern="\d{4}-\d{2}-\d{2}"
              defaultValue={date.toISOString().slice(0, 10)}
              name="date"
            />
          </HeaderDate>
        </HeaderContainer>
        <ChooseTypeOfAnalysisFormfield>
          <h2>Was für eine Analyse möchtest du erstellen?</h2>
          <ChooseTypeOfAnalysisInput>
            <input
              type="radio"
              id="pastAnalysis"
              name="type"
              onChange={onOptionChange}
              checked={typeOfAnalysis === "PastAnalysis"}
              value="PastAnalysis"
            />
            <label htmlFor="pastAnalysis">Vergangenheitsanalyse</label>
          </ChooseTypeOfAnalysisInput>
          <ChooseTypeOfAnalysisInput>
            <input
              type="radio"
              id="InnerSituationAnalysis"
              name="type"
              onChange={onOptionChange}
              checked={typeOfAnalysis === "InnerSituationAnalysis"}
              value="InnerSituationAnalysis"
            />
            <label htmlFor="InnerSituationAnalysis">
              Innere Situationsanalyse
            </label>
          </ChooseTypeOfAnalysisInput>
          <ChooseTypeOfAnalysisInput>
            <input
              type="radio"
              id="FutureAnalysis"
              name="type"
              onChange={onOptionChange}
              checked={typeOfAnalysis === "FutureAnalysis"}
              value="FutureAnalysis"
            />
            <label htmlFor="FutureAnalysis">Zukunftsanalyse</label>
          </ChooseTypeOfAnalysisInput>
        </ChooseTypeOfAnalysisFormfield>
        {typeOfAnalysis === "PastAnalysis" ? (
          <>
            <PastAnalysisForm typeOfAnalysis={typeOfAnalysis} />

            <Button variant="big" type="submit">
              💾 Speichern
            </Button>
          </>
        ) : (
          <p>Nothing yet</p>
        )}
      </form>
    </>
  );
}
