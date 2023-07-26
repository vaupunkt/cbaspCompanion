import { useEffect, useRef, useState } from "react";
import { ConversationalForm } from "conversational-form";
import { styled } from "styled-components";
import {
  futureAnalysisFormFields,
  innerSituationAnalysisFormFields,
  pastAnalysisFormFields,
} from "@/lib/questionFormFields";
import KieslerKreis from "../KieslerKreis";
import { uid } from "uid";
import { useRouter } from "next/router";

const ConversationalFormSection = styled.div`
  height: calc(100vh - 60px);
  display: flex;
`;

export default function ChatBotComponent({
  handleAllEntriesChange,
  allEntries,
  addActionInterpretation,
  allActionInterpretations,
}) {
  const router = useRouter();
  let cf = null;
  const ref = useRef(null);

  const formFields = [
    {
      tag: "fieldset",
      type: "text",
      name: "intro",

      "cf-questions":
        "Hallo! Schön, dass du heute eine Situation analysieren möchtest.&&Ich werde versuchen dir dabei zu helfen.",
      children: [
        {
          tag: "input",
          type: "radio",
          name: "intro",
          value: "next",
          label: "next",
          "cf-label": "weiter",
        },
        {
          tag: "input",
          type: "radio",
          name: "intro",
          value: "moreInformationForIntro",
          label: "moreInformationForIntro",
          "cf-label": "mehr Infos",
        },
        {
          tag: "input",
          type: "radio",
          name: "intro",
          value: "goToForm",
          label: "goToForm",
          "cf-label":
            "<a href='./newanalysisform'>lieber ohne Chatbot ausfüllen</a>",
        },
      ],
    },
    {
      "cf-conditional-intro": "moreInformationForIntro",
      tag: "cf-robot-message",
      type: "text",
      name: "moreInformationForIntro",
      "cf-questions":
        "Ich werde dir nacheinander verschiedene Fragen stellen, die zur jeweiligen <strong>Situationsanalyse</strong> gehören.&&Mit einem Klick auf deine gegebenen Antworten kannst du immer zu vorherigen Fragen zurückspringen und sie ändern.",
    },
    {
      tag: "fieldset",
      type: "text",
      name: "type",
      "cf-questions":
        "Was für eine Situationsanalyse möchtest du heute machen?",
      children: [
        {
          tag: "input",
          type: "radio",
          name: "type",
          value: "PastAnalysis",
          label: "PastAnalysis",
          "cf-label": "Vergangenheitsanalyse",
        },
        {
          tag: "input",
          type: "radio",
          name: "type",
          label: "InnerSituationAnalysis",
          value: "InnerSituationAnalysis",
          "cf-label": "Innere Situationsanalyse",
        },
        {
          tag: "input",
          type: "radio",
          name: "type",
          label: "FutureAnalysis",
          value: "FutureAnalysis",
          "cf-label": "Zukunftsanalyse",
        },
      ],
    },
  ];
  const interpretationsAswerArray = [];
  const interpretationsToRevise = [
    {
      tag: "fieldset",
      "cf-conditional-revisionsModal": "yes",
      type: "checkboxes",
      "cf-questions": "Welche Interpretation(en) möchtest du revidieren?",
      children: [],
    },
  ];
  const revisions = [];
  let flowCallback = function (dto, success, error) {
    if (dto.tag.value[0] === "PastAnalysis") {
      window.ConversationalForm.addTags(pastAnalysisFormFields);
    }
    if (dto.tag.value[0] === "InnerSituationAnalysis") {
      window.ConversationalForm.addTags(innerSituationAnalysisFormFields);
    }
    if (dto.tag.value[0] === "FutureAnalysis") {
      window.ConversationalForm.addTags(futureAnalysisFormFields);
    }

    const interpretationsQuestionsArray = [];
    if (dto.tag.name === "interpretationsQuestion") {
      for (let i = 1; i <= Number(dto.text); i++) {
        interpretationsQuestionsArray.push({
          tag: "input",
          type: "text",
          name: "Interpretation " + i,
          "cf-questions": i + ". Interpretation",
        });
      }
      window.ConversationalForm.addTags(interpretationsQuestionsArray);
    }
    if (dto.tag.name.startsWith("Interpretation ")) {
      interpretationsAswerArray.push(dto.text);
      interpretationsToRevise[0].children.push({
        tag: "input",
        type: "checkbox",
        name: "interpretationToRevise",
        "cf-label": dto.text,
      });
      revisions.push({ id: uid(), revision: "" });
    }

    if (dto.tag.name === "revisionsModal" && dto.tag.value[0] === "yes") {
      window.ConversationalForm.addTags(interpretationsToRevise);
    }

    if (dto.tag.name === "interpretationToRevise") {
      const revisionTags = [];
      for (let i = 0; i < dto.controlElements.length; i++) {
        if (dto.controlElements[i].checked === true) {
          revisionTags.push({
            tag: "input",
            type: "text",
            name: "Revision " + (i + 1),
            "cf-questions": `Deine Interpretation lautete:&&"<i>${dto.controlElements[i].value}</i>"&&Schreibe jetzt deine Revision:`,
          });
        }
      }
      window.ConversationalForm.addTags(revisionTags);
    }
    if (dto.tag.name.startsWith("Revision ")) {
      revisions[Number(dto.tag.name.match(/\d+/)[0]) - 1].revision =
        dto.tag.value;
    }
    // We assume every answer is valid. If that wasnt the case we would call error()
    success();
  };
  useEffect(function mount() {
    cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: submitCallback,
        flowStepCallback: flowCallback,
        showProgressBar: true,
      },
      tags: formFields,
    });

    ref.current.appendChild(cf.el);

    return function unMount() {
      cf.remove();
    };
  }, []);

  const date = new Date();
  const [dataset, setDataset] = useState();
  function submitCallback() {
    let dataset = cf.getFormData(true);
    dataset = {
      ...dataset,
      id: uid(),
      date: date.toISOString().slice(0, 10),
      type: dataset.type[0],
    };
    if (Object.entries(dataset).filter((data) => data.comparison === "true")) {
      dataset.comparison = "Erwünschtes Ergebnis erreicht.";
    }

    if (dataset.type === "FutureAnalysis") {
      dataset.actionInterpretation = Object.entries(dataset)
        .filter(([key, value]) => key.startsWith("actionInterpretations "))
        .reduce((array, [key, value]) => {
          delete dataset[key];
          if (value) {
            const id = uid();
            return [...array, { actionInterpretation: value, id }];
          }
          return array;
        }, []);
      for (let i = 0; i < dataset.actionInterpretation.length; i++) {
        addActionInterpretation(
          dataset.actionInterpretation[i].actionInterpretation
        );
      }
    } else {
      addActionInterpretation(dataset.actionInterpretation);
    }
    dataset.interpretations = Object.entries(dataset)
      .filter(([key, value]) => key.startsWith("Interpretation "))
      .reduce((array, [key, value]) => {
        delete dataset[key];
        if (value) {
          const id = uid();
          return [...array, { interpretation: value, id }];
        }
        return array;
      }, []);
    dataset.revision = revisions;
    handleAllEntriesChange([...allEntries, dataset]);
    setDataset(dataset);
    cf.addRobotChatResponse(
      "<strong>Du hast es geschafft 🎉</strong>&&Ich leite dich weiter zu deinem Eintrag.&&Dort kannst du deine Eingaben ansehen, bearbeiten und dich im Kieslerkreis einordnen."
    );
    setTimeout(() => {
      router.push(`/entries/${dataset.id}`);
    }, 5000);
  }

  return (
    <ConversationalFormSection>
      <div ref={ref} />
      <datalist id="allActionInterpretations">
        {allActionInterpretations.map((actionInterpretationOption) => (
          <option
            key={actionInterpretationOption}
            value={actionInterpretationOption}
          />
        ))}
      </datalist>
    </ConversationalFormSection>
  );
}
