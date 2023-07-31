import Header from "@/components/Header";
import React from "react";
import dynamic from "next/dynamic";
import { styled } from "styled-components";
import Head from "next/head";

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
      <Head>
        <title>Neue Analyse</title>
        <meta charSet="UTF-8"></meta>
      </Head>
      <Header link="./" title="Neue Situationsanalyse" />
      <ChatBotComponent
        handleAllEntriesChange={handleAllEntriesChange}
        allEntries={allEntries}
        addActionInterpretation={addActionInterpretation}
        allActionInterpretations={allActionInterpretations}
      />
    </>
  );
}
