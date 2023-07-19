import { useEffect, useRef } from "react";
import { ConversationalForm } from "conversational-form";

export default function ChatBotComponent() {
  const date = new Date();

  const ref = useRef(null);
  const formFields = [
    {
      tag: "input",
      type: "text",
      name: "title",
      required: true,
      "cf-questions": "Was ist der Titel der Analyse?",
    },
    {
      tag: "input",
      type: "date",
      name: "date",
      pattern: "\\d{4}-\\d{2}-\\d{2}",
      max: date.toISOString().slice(0, 10),
      "cf-questions": "Welches Datum möchten Sie wählen?",
    },
    {
      tag: "fieldset",
      type: "radio",
      name: "type",
      "cf-questions": "Was für eine Analyse möchtest du erstellen?",
      "cf-input-placeholder": "Wählen Sie eine Option aus der Liste aus.",
      children: [
        {
          tag: "input",
          type: "radio",
          name: "type",
          value: "PastAnalysis",
          "cf-label": "Vergangenheitsanalyse",
        },
        {
          tag: "input",
          type: "radio",
          name: "type",
          value: "InnerSituationAnalysis",
          "cf-label": "Innere Situationsanalyse",
        },
        {
          tag: "input",
          type: "radio",
          name: "type",
          value: "FutureAnalysis",
          "cf-label": "Zukunftsanalyse",
        },
      ],
    },
  ];
  let cf = null;
  useEffect(function mount() {
    cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: submitCallback,
        preventAutoFocus: false,
        loadExternalStyleSheet: true,
        surpressLog: true,
        userInterfaceOptions: {
          robot: {
            robotResponseTime: 200,
            chainedResponseTime: 400,
          },
        },
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

  return <div ref={ref} />;
}
