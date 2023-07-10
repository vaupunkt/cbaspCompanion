const initialEntries = [
  {
    id: "1",
    type: "PastAnalysis",
    title: "Argument with friend",
    date: "2022-10-01",
    description: "I had an argument with my friend",
    interpretations: [
      { id: "1", interpretation: "My friend doesn't care about me" },
      { id: "2", interpretation: "I always ruin my friendships" },
      { id: "3", interpretation: "I can't trust anyone" },
    ],
    behavior: "I stopped talking to my friend",
    actualResult: "We grew apart",
    desiredResult: "To resolve the argument and maintain the friendship",
    comparison: "The actual result was not what I desired",
    revision: "My interpretation may have been incorrect",
    behaviorChange: "Talk to my friend and try to resolve the argument",
    implementation: "I called my friend and we talked it out",
    transfer: "I will try to communicate better in future disagreements",
  },
  {
    id: "2",
    type: "InnerSituationAnalysis",
    title: "Anxiety in social situations",
    date: "2022-11-15",
    description: "I feel anxious in social situations",
    interpretations: [
      { id: "1", interpretation: "People are judging me" },
      { id: "2", interpretation: "I don't fit in" },
      { id: "3", interpretation: "I'm not interesting enough" },
    ],
    behavior: "I avoid social situations",
    actualResult: "I feel isolated",
    desiredResult: "To feel comfortable in social situations",
    comparison: "The actual result was not what I desired",
    revision: "My interpretation may have been incorrect",
    behaviorChange: "Try to attend social situations and challenge my thoughts",
    implementation:
      "I attended a social event and realized people were not judging me",
    transfer: "I will try to challenge my thoughts in future social situations",
  },
  {
    id: "3",
    type: "PastAnalysis",
    title: "Failed Exam",
    date: "2022-09-01",
    description: "I failed an important exam",
    interpretations: [
      { id: "1", interpretation: "I am not smart enough" },
      { id: "2", interpretation: "I'm not cut out for this subject" },
      { id: "3", interpretation: "Everyone else did better than me" },
    ],
    behavior: "I stopped studying for other exams",
    actualResult: "My grades suffered",
    desiredResult: "To pass the exam and improve my grades",
    comparison: "The actual result was not what I desired",
    revision: "My interpretation may have been incorrect",
    behaviorChange: "Study harder and ask for help if needed",
    implementation: "I studied harder and passed the next exam",
    transfer: "I will continue to study hard and ask for help if needed",
  },
  {
    id: "4",
    type: "InnerSituationAnalysis",
    title: "Fear of public speaking",
    date: "2022-12-01",
    description: "I am afraid of public speaking",
    interpretations: [
      {
        id: "1",
        interpretation: "People will laugh at me or think I'm stupid",
      },
      { id: "2", interpretation: "No one wants to hear what I have to say" },
      { id: "3", interpretation: "I'll freeze up and forget everything" },
    ],
    behavior: "I avoid public speaking opportunities",
    actualResult: "I miss out on opportunities to share my ideas",
    desiredResult: "To feel confident while public speaking",
    comparison: "The actual result was not what I desired",
    revision: "My interpretation may have been incorrect",
    behaviorChange: "Practice public speaking and challenge my thoughts",
    implementation:
      "I practiced public speaking and realized people were interested in what I had to say",
    transfer:
      "I will continue to practice public speaking and challenge my thoughts",
  },
  {
    id: "5",
    type: "FutureAnalysis",
    title: "Starting a new hobby",
    date: "2023-02-01",
    description: "I want to start a new hobby, painting",
    desiredResult: "To enjoy painting and improve my skills over time",
    behavior:
      "Buy painting supplies and take a class or watch tutorials online",
    interpretations: [
      {
        id: "1",
        interpretation:
          "Painting is something I can enjoy and improve at over time, even if I'm not good at it right away.",
      },
      { id: "2", interpretation: "It's okay to make mistakes while learning" },
      {
        id: "3",
        interpretation: "Art is about self-expression, not perfection",
      },
    ],
    rolePlay: "",
    implementation:
      "I bought painting supplies, took a class, and started painting regularly. I enjoyed it and saw improvement over time.",
    transfer:
      "I will continue to paint regularly and enjoy the process of improving over time.",
  },
  {
    id: "6",
    type: "FutureAnalysis",
    title: "Applying for a new job",
    date: "2023-01-01",
    description: "I want to apply for a new job",
    desiredResult: "To get the job and feel fulfilled in my career",
    behavior: "Prepare for the interview and present myself well",
    interpretations: [
      { id: "1", interpretation: "I am capable and qualified for this job" },
      { id: "2", interpretation: "I have valuable skills to offer" },
      { id: "3", interpretation: "This is a good opportunity for me" },
    ],
    rolePlay: "Practiced interview questions with a friend",
    implementation: "I attended the interview and felt confident",
    transfer:
      "I will use this experience to feel confident in future interviews",
  },
];

export default initialEntries;