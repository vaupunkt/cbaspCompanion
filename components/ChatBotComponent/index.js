import { useEffect, useRef } from "react";
import { ConversationalForm } from "conversational-form";
import { styled } from "styled-components";
import { pastAnalysisFormFields } from "@/lib/questionFormFields";

const ConversationalFormSection = styled.div`
  height: calc(100vh - 60px);
  display: flex;
`;

export default function ChatBotComponent() {
  let cf = null;
  const ref = useRef(null);

  const formFields = [
    {
      tag: "fieldset",
      type: "text",
      name: "intro",
      "cf-questions":
        "Hallo! Schön, dass du heute eine Situation analysieren möchtest.&&Ich werde versuchen dir dabei zu helfen&&Wenn du mehr Infos zu den Fragen hast, schreib <strong>Hilfe</strong>.",
      children: [
        {
          tag: "input",
          type: "radio",
          name: "intro",
          value: "next",
          label: "next",
          "cf-label": "Weiter",
        },
        {
          tag: "input",
          type: "radio",
          name: "intro",
          value: "moreInformationForIntro",
          label: "moreInformationForIntro",
          "cf-label": "Hilfe",
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
        {
          tag: "input",
          type: "radio",
          name: "type",
          label: "moreInformationForType",
          value: "moreInformationForType",
          "cf-label": "mehr Infos bitte",
        },
      ],
    },
  ];
  let flowCallback = function (dto, success, error) {
    console.log("Callback: ", dto, success, error);
    if (dto.tag.value[0] === "moreInformationForType") {
      window.ConversationalForm.addTags([
        {
          "cf-conditional-type": "moreInformationForType",
          tag: "cf-robot-message",
          type: "text",
          name: "moreInformationForType",
          "cf-questions":
            "Die <strong>Vergangenheitsanalyse</strong> behandelt eine Situation, die in der Vergangenheit liegt und die du noch einmal aufarbeiten möchtest.&&Die <strong>innere Situationsanalyse</strong> ist gekennzeichnet durch eine Situation, in welcher keine anderen Personen eine Rolle spielen.&&Die <strong>Zukunftsanalyse</strong> beschreibt eine Situation die dir erst noch bevorsteht.",
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
            {
              tag: "input",
              type: "radio",
              name: "type",
              label: "moreInformationForType",
              value: "moreInformationForType",
              "cf-label": "mehr Infos bitte",
            },
          ],
        },
      ]);
    }
    if (dto.tag.value[0] === "PastAnalysis") {
      window.ConversationalForm.addTags(pastAnalysisFormFields);
    }
    const interpretationsQuestionsArray = [];
    const interpretationsAswerArray = [];
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
      interpretationsAswerArray.push(dto.tag.text);
    }

    if (dto.tag.name === "revisionQuestion") {
      window.ConversationalForm.addTags({ tag: "input", type: "checkbox" });
      const revisionsQuestionsArray = [];
      for (let i = 0; i < interpretationsAswerArray.length; i++) {
        revisionsQuestionsArray.push({
          tag: "input",
          type: "text",
          name: "Revision " + i,
          "cf-questions": `Deine Interpretation lautete: ${interpretationsAswerArray[i]}&&Möchtest du sie überarbeiten?`,
        });
      }
      window.ConversationalForm.addTags(revisionsQuestionsArray);
    }

    // We assume every answer is valid. If that wasnt the case we would call error()
    success();
  };
  useEffect(function mount() {
    cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: submitCallback,
        flowStepCallback: flowCallback,
        preventAutoFocus: true,
        // loadExternalStyleSheet: false
        showProgressBar: true,
      },
      tags: formFields,
    });

    ref.current.appendChild(cf.el);

    return function unMount() {
      cf.remove();
    };
  }, []);

  function submitCallback() {
    var formDataSerialized = cf.getFormData(true);
    console.log("Formdata, obj:", formDataSerialized);
    cf.addRobotChatResponse(
      "You are done. Check the dev console for form data output."
    );
  }

  return (
    <ConversationalFormSection>
      <div ref={ref} />
    </ConversationalFormSection>
  );
}
