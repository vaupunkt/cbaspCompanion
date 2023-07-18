import React, { useEffect, useRef } from "react";
import { ConversationalForm } from "conversational-form";

export default function MyForm() {
  let cf = null;
  const ref = useRef(null);
  const formFields = [
    {
      tag: "input",
      type: "text",
      name: "firstname",
      "cf-questions": "What is your firstname?",
    },
    {
      tag: "input",
      type: "text",
      name: "lastname",
      "cf-questions": "What is your lastname?",
    },
  ];

  useEffect(function mount() {
    cf = ConversationalForm.startTheConversation({
      options: {
        theme: "blue",
        submitCallback: submitCallback,
        preventAutoFocus: true,
        // loadExternalStyleSheet: false
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
