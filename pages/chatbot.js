import Header from "@/components/Header";
import React from "react";
import dynamic from "next/dynamic";
import { styled } from "styled-components";

const ConversationalFormSection = styled.div`
  height: 90vh;
`;

const ChatBotComponent = dynamic(
  () => {
    return import("@/components/ChatBotComponent");
  },
  { ssr: false }
);

export default function Chatbot() {
  return (
    <>
      <Header backButton title="Chatbot" />
      <ConversationalFormSection>
        <ChatBotComponent />
      </ConversationalFormSection>
    </>
  );
}
