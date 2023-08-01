import { useEffect, useRef, useState } from "react";
import { ConversationalForm } from "conversational-form";
import { styled } from "styled-components";
import { uid } from "uid";
import { useRouter } from "next/router";

const ConversationalFormSection = styled.div`
  height: calc(100vh - 60px);
  display: flex;
`;
export default function AddNewSymptom({ handleSymptomChange }) {
  const router = useRouter();
  let cf = null;
  const ref = useRef(null);

  const formFields = [
    {
      tag: "fieldset",
      type: "text",
      name: "symptomCategories",
      "cf-questions":
        "Du möchtest neue <strong>Symptome</strong> hinzufügen.&&Wo möchtest du sie einordnen?",
      children: [
        {
          tag: "input",
          type: "radio",
          name: "symptomCategories",
          value: "physicalLevel",
          "cf-label": "körperliche Ebene",
        },
        {
          tag: "input",
          type: "radio",
          name: "symptomCategories",
          value: "emotionalLevel",
          "cf-label": "Gefühlsebene",
        },
        {
          tag: "input",
          type: "radio",
          name: "symptomCategories",
          value: "mentalLevel",
          "cf-label": "gedankliche Ebene",
        },
        {
          tag: "input",
          type: "radio",
          name: "symptomCategories",
          value: "behavioralLevel",
          "cf-label": "Verhaltensebene",
        },
      ],
    },
    {
      tag: "input",
      type: "text",
      name: "symptom",
      "cf-questions":
        "Gib deine <strong>Symptome</strong> ein.&&Bei mehreren trenne sie durch ein Komma.",
    },
  ];

  let flowCallback = function (dto, success, error) {
    success();
  };

  useEffect(function mount() {
    cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: submitCallback,
        flowStepCallback: flowCallback,
        theme: "dark",
      },
      tags: formFields,
    });

    ref.current.appendChild(cf.el);

    return function unMount() {
      cf.remove();
    };
  }, []);

  function submitCallback() {
    let dataset = cf.getFormData(true);
    const newSymptoms = [
      ...new Set(dataset.symptom.split(",").map((symptom) => symptom.trim())),
    ];
    const symptomCategory = dataset.symptomCategories[0];
    handleSymptomChange((prevMySymptoms) =>
      prevMySymptoms.map((category) =>
        category.category === symptomCategory
          ? {
              ...category,
              symptoms: newSymptoms.map((symptom) => ({
                id: uid(),
                symptom,
              })),
            }
          : category
      )
    );
    cf.addRobotChatResponse(
      "<strong>Super 🎉</strong>&&Ich leite dich weiter zu deinen Symptomen.&&Dort kannst du deine Eingaben ansehen und auch bearbeiten."
    );
    setTimeout(() => {
      router.push(`/mysymptoms`);
    }, 5000);
  }

  return (
    <>
      <ConversationalFormSection>
        <div ref={ref} />
      </ConversationalFormSection>
    </>
  );
}
