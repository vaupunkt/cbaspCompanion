import { useEffect, useRef } from "react";
import { ConversationalForm } from "conversational-form";

export default function ChatBotComponent() {
  let cf = null;
  const ref = useRef(null);

  const formFields = [
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
    {
      "cf-conditional-type": "PastAnalysis",
      tag: "input",
      type: "text",
      name: "title",
      "cf-questions":
        "Super! Eine Vergangenheitsanalyse also.&&Gib der Analyse einen passenden Namen.",
    },
    {
      "cf-conditional-type": "FutureAnalysis",
      tag: "input",
      type: "text",
      name: "title",
      "cf-questions":
        "Super! Eine Zukunftsanalyse also!&&Gib der Analyse einen passenden Namen:",
    },
    {
      "cf-conditional-type": "InnerSituationAnalysis",
      tag: "input",
      type: "text",
      name: "title",
      "cf-questions":
        "Super! Eine Innere Situationsanalyse also.&&Gib der Analyse einen passenden Namen.",
    },
    {
      "cf-conditional-type": "PastAnalysis",
      tag: "input",
      type: "text",
      name: "description",
      "cf-questions":
        "Beschreibe die Situation&&Was ist in dieser Situation passiert?",
    },
    {
      "cf-conditional-type": "PastAnalysis",
      tag: "input",
      type: "text",
      name: "interpretations",
      "cf-questions":
        "Interpretation&&Wie habe ich die Situation aufgefasst/gelesen/interpretiert?",
    },
    {
      "cf-conditional-type": "PastAnalysis",
      tag: "input",
      type: "text",
      name: "behavior",
      "cf-questions":
        "Verhalten&&Was habe ich in dieser Situation genau getan?",
    },
    {
      "cf-conditional-type": "PastAnalysis",
      tag: "input",
      type: "text",
      name: "actualResult",
      "cf-questions":
        "Tatsächliches Ergebnis&&Wie ging die Situation für mich aus?",
    },
    {
      "cf-conditional-type": "PastAnalysis",
      tag: "input",
      type: "text",
      name: "desiredResult",
      "cf-questions":
        "Erwünschtes Ergebnis&&Welchen Ausgang hätte ich mir gewünscht?",
    },
    {
      "cf-conditional-type": "PastAnalysis",
      tag: "input",
      type: "text",
      name: "comparison",
      "cf-questions":
        "Vergleich des tatsächlichen mit dem erwünschten Ergebnis&&Habe ich erreicht, was ich wollte?",
    },
    {
      "cf-conditional-type": "PastAnalysis",
      tag: "input",
      type: "text",
      name: "      revision",
      "cf-questions":
        "Revision ungeeigneter Interpretationen&&Ist die Interpretation in der Situation verankert? War es wirklich so? Inwieweit trägt diese Interpretation dazu bei, dass ich mein Ziel erreiche? Sehe ich Zusammenhänge zwischen meinen Interpretationen und meinen Prägungen?",
    },
    {
      "cf-conditional-type": "PastAnalysis",
      tag: "input",
      type: "text",
      name: "behaviorChange",
      "cf-questions":
        "Veränderung des Verhaltens&&Nachdem ich nun meine Interpretationen revidiert habe: Wie hätte ich mich verhalten um das zu bekommen, was ich will - also um mein neues Ziel auch tatsächlich zu erreichen?",
    },
    {
      "cf-conditional-type": "PastAnalysis",
      tag: "input",
      type: "text",
      name: "implementation",
      "cf-questions":
        "Umsetzung und Zusammenfassung&&Was habe ich heute (in der Übung) gelernt?",
    },
    {
      "cf-conditional-type": "PastAnalysis",
      tag: "input",
      type: "text",
      name: "transfer",
      "cf-questions":
        "Generalisierung und Übertragung des Gelernten auf den Alltag&&Kenne ich eine ähnliche Sitation aus meinem Alltag/Leben? Was hätte ich gedacht und gemacht, wenn ich das, was ich heute gelernt habe, damals schon gewusst hätte?",
    },
    {
      "cf-conditional-type": "FutureAnalysis",
      tag: "input",
      type: "text",
      name: "description",
      "cf-questions":
        "Beschreibe die Situation&&Was wird voraussichtlich passieren? (mit Anfangs- und Endpunkt, rein beschreibend)",
    },
    {
      "cf-conditional-type": "FutureAnalysis",
      tag: "input",
      type: "text",
      name: "desiredResult",
      "cf-questions":
        "Erwünschtes Ergebnis&&Welchen Ausgang des Ereignisseswünsche ich mir? Was ist mein Ziel in dieser Situation? (In Verhaltensbegriffen formulieren, realistisch durch mich erreichbar und in mir verankert)",
    },
    {
      "cf-conditional-type": "FutureAnalysis",
      tag: "input",
      type: "text",
      name: "behavior",
      "cf-questions":
        "Verhalten&&Wie kann ich mich verhalten, um mein Ziel zu erreichen?",
    },
    {
      "cf-conditional-type": "FutureAnalysis",
      tag: "input",
      type: "text",
      name: "interpretations",
      "cf-questions":
        "Interpretation&&Welche Interpretationen »Schlachtrufe« helfen mir, mein Ziel zu erreichen?",
    },
    {
      "cf-conditional-type": "FutureAnalysis",
      tag: "input",
      type: "text",
      name: "rolePlay",
      "cf-questions":
        "Rollenspiel&&Übe die Situation in einem Rollenspiel mit eine:r Freund:in, einem Familienmitglied oder deine:r Therapeut:in.",
    },
    {
      "cf-conditional-type": "FutureAnalysis",
      tag: "input",
      type: "text",
      name: "implementation",
      "cf-questions":
        "Umsetzung und Zusammenfassung&&Was habe ich durch diese Zukunfts-Situationsanalyse gelernt?",
    },
    {
      "cf-conditional-type": "FutureAnalysis",
      tag: "input",
      type: "text",
      name: "transfer",
      "cf-questions":
        "Übertragung des Gelernten auf den Alltag&&Traue ich mir nun zu, diese Situation auch tatsächlich anzugehen? Fühle ich mich nun besser vorbereitet auf diese Situation? Kenne ich eine ähnliche Situation aus meinem Leben? Was hätte ich gemacht, wenn ich das, was ich heute gelernt habe, damals schon gewusst hätte?",
    },
    {
      "cf-conditional-type": "InnerSituationAnalysis",
      tag: "input",
      type: "text",
      name: "description",
      "cf-questions":
        "Beschreibe die Situation&&Was ist in dieser Situation passiert?",
    },
    {
      "cf-conditional-type": "InnerSituationAnalysis",
      tag: "input",
      type: "text",
      name: "description",
      "cf-questions":
        "Beschreibe die Situation&&Was ist in dieser Situation passiert?",
    },
    {
      "cf-conditional-type": "InnerSituationAnalysis",
      tag: "input",
      type: "text",
      name: "interpretations",
      "cf-questions":
        "Interpretation&&Wie habe ich die Situation aufgefasst/gelesen/interpretiert?",
    },
    {
      "cf-conditional-type": "InnerSituationAnalysis",
      tag: "input",
      type: "text",
      name: "behavior",
      "cf-questions":
        "Verhalten&&Was habe ich in dieser Situation genau getan?",
    },
    {
      "cf-conditional-type": "InnerSituationAnalysis",
      tag: "input",
      type: "text",
      name: "actualResult",
      "cf-questions":
        "Tatsächliches Ergebnis&&Wie ging die Situation für mich aus?",
    },
    {
      "cf-conditional-type": "InnerSituationAnalysis",
      tag: "input",
      type: "text",
      name: "desiredResult",
      "cf-questions":
        "Erwünschtes Ergebnis&&Welchen Ausgang hätte ich mir gewünscht?",
    },
    {
      "cf-conditional-type": "InnerSituationAnalysis",
      tag: "input",
      type: "text",
      name: "comparison",
      "cf-questions":
        "Vergleich des tatsächlichen mit dem erwünschten Ergebnis&&Habe ich erreicht, was ich wollte?",
    },
    {
      "cf-conditional-type": "InnerSituationAnalysis",
      tag: "input",
      type: "text",
      name: "revision",
      "cf-questions":
        "Revision ungeeigneter Interpretationen&&Ist die Interpretation in der Situation verankert? War es wirklich so? Inwieweit trägt diese Interpretation dazu bei, dass ich mein Ziel erreiche? Sehe ich Zusammenhänge zwischen meinen Interpretationen und meinen Prägungen?",
    },
    {
      "cf-conditional-type": "InnerSituationAnalysis",
      tag: "input",
      type: "text",
      name: "behaviorChange",
      "cf-questions":
        "Veränderung des Verhaltens&&Nachdem ich nun meine Interpretationen revidiert habe: Wie hätte ich mich verhalten um das zu bekommen, was ich will - also um mein neues Ziel auch tatsächlich zu erreichen?",
    },
    {
      "cf-conditional-type": "InnerSituationAnalysis",
      tag: "input",
      type: "text",
      name: "implementation",
      "cf-questions":
        "Umsetzung und Zusammenfassung&&Was habe ich heute (in der Übung) gelernt?",
    },
    {
      "cf-conditional-type": "InnerSituationAnalysis",
      tag: "input",
      type: "text",
      name: "transfer",
      "cf-questions":
        "Generalisierung und Übertragung des Gelernten auf den Alltag&&Kenne ich eine ähnliche Sitation aus meinem Alltag/Leben? Was hätte ich gedacht und gemacht, wenn ich das, was ich heute gelernt habe, damals schon gewusst hätte?",
    },
  ];

  useEffect(function mount() {
    cf = ConversationalForm.startTheConversation({
      options: {
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

  return (
    <div>
      <div ref={ref} />
    </div>
  );
}
