import Header from "@/components/Header";
import React from "react";
import dynamic from "next/dynamic";
import { styled } from "styled-components";

const ChatBotComponent = dynamic(
  () => {
    return import("@/components/ChatBotComponent");
  },
  { ssr: false }
);

export default function NewAnalysis({
  handleAllEntriesChange,
  allEntries,
  setAllActionInterpretations,
  allActionInterpretations,
}) {
  function addActionInterpretation(newActionInterpretation) {
    setAllActionInterpretations((previousActionInterpretation) => {
      if (previousActionInterpretation.includes(newActionInterpretation)) {
        return previousActionInterpretation;
      } else {
        return [...previousActionInterpretation, newActionInterpretation];
      }
    });
  }
  return (
    <>
      <Header backButton title="Neue Situationsanalyse" />
      <ChatBotComponent
        handleAllEntriesChange={handleAllEntriesChange}
        allEntries={allEntries}
        addActionInterpretation={addActionInterpretation}
        allActionInterpretations={allActionInterpretations}
      />
    </>
  );
}
