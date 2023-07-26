export const innerSituationAnalysisFormFields = [
  {
    tag: "input",
    type: "text",
    name: "title",
    required: "true",
    "cf-questions":
      "Super! Eine <strong>Innere Situationsanalyse</strong> also.&&Gib der <strong>Analyse</strong> einen passenden Namen.",
  },
  {
    tag: "input",
    type: "text",
    name: "description",
    "cf-questions": "Was ist in dieser <strong>Situation</strong> passiert?",
  },
  {
    tag: "input",
    type: "number",
    min: "1",
    max: "5",
    required: "true",
    "cf-error": "Gib eine Zahl zwischen 1 und 5 ein",
    name: "interpretationsQuestion",
    "cf-questions":
      "Wie hast du die <strong>Situation</strong> aufgefasst/gelesen/interpretiert?&&Sieh es als “inneren Film”, der zeigt, was dir wortwörtlich durch den Kopf geschossen ist (“Kopfkino”).&&Wie viele Interpretationen (1 - 5) möchtest du angeben?",
  },
  {
    tag: "input",
    type: "text",
    name: "behavior",
    "cf-questions":
      " Was hast du in dieser <strong>Situation</strong> genau getan?",
  },
  {
    tag: "input",
    type: "text",
    name: "actionInterpretation",
    list: "allActionInterpretations",
    "cf-questions":
      "Was ist deine Handlungsinterpretation (bzw. dein Schlachtruf)?&&Schreibe eine kurze prägnante Aufforderung an dich selbst, die dich ermutigt bzw. auffordert, ins »Tun« zu kommen (Mut-mach-Sätze), sprich dein neues Ziel anzugehen.",
  },
  {
    tag: "input",
    type: "text",
    name: "actualResult",
    "cf-questions":
      "Tatsächliches Ergebnis. Wie ging die <strong>Situation</strong> für dich aus?",
  },
  {
    tag: "input",
    type: "text",
    name: "desiredResult",
    "cf-questions":
      "Erwünschtes Ergebnis. Welchen Ausgang hättest du dir gewünscht?",
  },
  {
    tag: "fieldset",
    type: "text",
    name: "comparisonModal",
    "cf-questions":
      "Vergleiche das tatsächliche mit dem erwünschten Ergebnis.&&Hast du erreicht, was du wolltest?",
    children: [
      {
        tag: "input",
        type: "radio",
        name: "comparisonModal",
        value: "yes",
        label: "yes",
        "cf-label": "Ja",
      },
      {
        tag: "input",
        type: "radio",
        name: "comparisonModal",
        value: "no",
        label: "no",
        "cf-label": "Nein",
      },
    ],
  },
  {
    "cf-conditional-comparisonModal": "no",
    type: "text",
    tag: "input",
    name: "comparison",
    "cf-questions": "Warum nicht?&&Schreibe deine subjektive Sicht",
  },
  {
    tag: "fieldset",
    name: "revisionsModal",
    "cf-questions":
      "Sind deine Interpretationen in der <strong>Situation</strong> verankert oder aus Prägungen heraus entstanden?&&Möchtest du Revisionen für deine Interpretationen angeben?",
    children: [
      {
        tag: "input",
        type: "radio",
        name: "revisionsModal",
        value: "yes",
        label: "yes",
        "cf-label": "Ja",
      },
      {
        tag: "input",
        type: "radio",
        name: "revisionsModal",
        value: "no",
        label: "no",
        "cf-label": "Nein",
      },
    ],
  },
  {
    tag: "input",
    type: "text",
    name: "behaviorChange",
    "cf-questions":
      "Nachdem du nun deine Interpretationen revidiert hast: Wie hättest du dich verhalten um das zu bekommen, was du willst - also um dein neues Ziel auch tatsächlich zu erreichen?",
  },
  {
    tag: "input",
    type: "text",
    name: "implementation",
    "cf-questions": "Was hast du heute (in der Übung) gelernt?",
  },
  {
    tag: "input",
    type: "text",
    name: "transfer",
    "cf-questions":
      "Kennst du eine ähnliche <strong>Situation</strong> aus deinem Alltag/Leben?&&Was hättest du gedacht und gemacht, wenn du das, was du heute gelernt hast, damals schon gewusst hättest?",
  },
];

export const futureAnalysisFormFields = [
  {
    tag: "input",
    type: "text",
    name: "title",
    required: "true",
    "cf-questions":
      "Super! Eine <strong>Zukunftsanalyse</strong> also!&&Gib der <strong>Analyse</strong> einen passenden Namen:",
  },
  {
    tag: "input",
    type: "text",
    name: "description",
    "cf-questions":
      "Was wird voraussichtlich passieren? (mit Anfangs- und Endpunkt, rein beschreibend)",
  },
  {
    tag: "input",
    type: "text",
    name: "desiredResult",
    "cf-questions":
      "Welchen Ausgang des Ereignisses wünschst du dir?&&Was ist dein Ziel in dieser <strong>Situation</strong>?&&(In Verhaltensbegriffen formulieren, realistisch durch dich erreichbar und in dir verankert)",
  },
  {
    tag: "input",
    type: "text",
    name: "behavior",
    "cf-questions": "Wie kannst du dich verhalten, um dein Ziel zu erreichen?",
  },
  {
    tag: "cf-robot-message",
    "cf-questions":
      "Welche Interpretationen bzw. »Schlachtrufe« helfen dir, dein Ziel zu erreichen?",
  },
  {
    tag: "input",
    type: "text",
    name: "actionInterpretations 1",
    list: "allActionInterpretations",
    "cf-questions": "1. Interpretation bzw. dein »Schlachtruf«",
  },
  {
    tag: "input",
    type: "text",
    name: "actionInterpretations 2",
    list: "allActionInterpretations",
    "cf-questions": "2. Interpretation bzw. dein »Schlachtruf«",
  },
  {
    tag: "input",
    type: "text",
    name: "actionInterpretations 3",
    list: "allActionInterpretations",
    "cf-questions": "3. Interpretation bzw. dein »Schlachtruf«",
  },

  {
    tag: "cf-robot-message",
    "cf-questions":
      "Übe die <strong>Situation</strong> in einem Rollenspiel mit eine:r Freund:in, einem Familienmitglied oder deine:r Therapeut:in.&&Spiele die <strong>Situation</strong> 2 - 5 mal durch um sie zu festigen.",
  },
  {
    tag: "input",
    type: "text",
    name: "implementation",
    "cf-questions":
      "Was hast du durch diese <strong>Zukunfts-Situationsanalyse</strong> gelernt?",
  },
  {
    tag: "input",
    type: "text",
    name: "transfer",
    "cf-questions":
      "Traust du dir nun zu, diese <strong>Situation</strong> auch tatsächlich anzugehen?&&Fühlst du dich nun besser vorbereitet auf diese <strong>Situation</strong>?&&Kennst du eine ähnliche <strong>Situation</strong> aus deinem Leben?&&Was hättest du gemacht, wenn du das, was du heute gelernt hast, damals schon gewusst hättest?",
  },
];

export const pastAnalysisFormFields = [
  {
    tag: "cf-robot-message",
    "cf-questions": "Super! Eine <strong>Vergangenheitsanalyse</strong> also.",
  },
  {
    tag: "input",
    type: "text",
    name: "title",
    label: "title",
    required: "true",
    "cf-questions": "Gib der <strong>Analyse</strong> einen passenden Namen.",
  },
  {
    tag: "input",
    type: "text",
    name: "description",
    "cf-questions":
      "Beschreibe den Anfangspunkt, Endpunkt und die Geschichte dazwischen in der Ich-Form.&&Halte es rein beschreibend, wie eine Regieanweisung einer kurzen Filmszene.&&Fasse das Wesentliche möglichst kurz und prägnant zusammen.&&Was ist in dieser <strong>Situation</strong> passiert?",
  },
  {
    tag: "input",
    type: "number",
    min: "1",
    max: "3",
    required: "true",
    "cf-error": "Gib eine Zahl zwischen 1 und 3 ein",
    name: "interpretationsQuestion",
    "cf-questions":
      "Wie hast du die <strong>Situation</strong> aufgefasst/gelesen/interpretiert?&&Gib maximal 3 Interpretationen an,von denen jede in einem Satz beschrieben wird.&&Sieh es als “inneren Film”, der zeigt, was dir wortwörtlich durch den Kopf geschossen ist (“Kopfkino”).&&Wie viele Interpretationen möchtest du angeben?",
  },
  {
    tag: "input",
    type: "text",
    name: "behavior",
    "cf-questions":
      "Was hast du in dieser <strong>Situation</strong> genau getan?&&Die Körpersprache, Gestik, Mimik und Sprache werden aus der Beobachterperspektive betrachtet.",
  },
  {
    tag: "input",
    type: "text",
    name: "actualResult",
    "cf-questions":
      "Wie ging die <strong>Situation</strong> für dich aus?&&Das Ergebnis ist der Endpunkt aus der Situationsbeschreibung.",
  },
  {
    tag: "input",
    type: "text",
    name: "desiredResult",
    "cf-questions":
      "Welchen Ausgang hättest du dir gewünscht (bzw. Wie hättest du dich gerne verhalten)?&&Das erwünschte Ergebnis ist für dich realistisch erreichbar und in dir selbst verankert.&&Möglichst nur 1 Satz.",
  },
  {
    tag: "fieldset",
    type: "text",
    name: "comparisonModal",
    "cf-questions":
      "Vergleiche das tatsächliche mit dem erwünschten Ergebnis.&&Hast du erreicht, was du wolltest?",
    children: [
      {
        tag: "input",
        type: "radio",
        name: "comparisonModal",
        value: "yes",
        label: "yes",
        "cf-label": "Ja",
      },
      {
        tag: "input",
        type: "radio",
        name: "comparisonModal",
        value: "no",
        label: "no",
        "cf-label": "Nein",
      },
    ],
  },
  {
    "cf-conditional-comparisonModal": "no",
    type: "text",
    tag: "input",
    name: "comparison",
    "cf-questions": "Warum nicht?&&Schreibe deine subjektive Sicht",
  },
  {
    tag: "fieldset",
    name: "revisionsModal",
    "cf-questions":
      "Sind deine Interpretationen in der <strong>Situation</strong> verankert oder aus Prägungen heraus entstanden?&&Möchtest du Revisionen für deine Interpretationen angeben?",
    children: [
      {
        tag: "input",
        type: "radio",
        name: "revisionsModal",
        value: "yes",
        label: "yes",
        "cf-label": "Ja",
      },
      {
        tag: "input",
        type: "radio",
        name: "revisionsModal",
        value: "no",
        label: "no",
        "cf-label": "Nein",
      },
    ],
  },
  {
    tag: "input",
    type: "text",
    name: "actionInterpretation",
    list: "allActionInterpretations",
    "cf-questions":
      "Was ist deine Handlungsinterpretation (bzw. dein Schlachtruf)?&&Schreibe eine kurze prägnante Aufforderung an dich selbst, die dich ermutigt bzw. auffordert, ins »Tun« zu kommen (Mut-mach-Sätze), sprich dein neues Ziel anzugehen.",
  },
  {
    tag: "input",
    type: "text",
    name: "behaviorChange",
    "cf-questions":
      "Nachdem du nun deine Interpretationen revidiert hast: Wie hättest du dich verhalten um das zu bekommen, was du willst - also um dein neues Ziel auch tatsächlich zu erreichen?",
  },
  {
    tag: "input",
    type: "text",
    name: "implementation",
    "cf-questions":
      'Was hast du heute (in der Übung) gelernt?&&Was nimmst du mit - hast du eine "Take-home-message"?',
  },
  {
    tag: "input",
    type: "text",
    name: "transfer",
    "cf-questions":
      "Kennst du eine ähnliche Sitation aus deinem Alltag/Leben? Was hättest du gedacht und gemacht, wenn du das, was du heute gelernt hast, damals schon gewusst hättest?",
  },
];
