import Header from "@/components/Header";
import dynamic from "next/dynamic";
import Head from "next/head";

const AddNewSymptom = dynamic(
  () => {
    return import("@/components/AddNewSymptom");
  },
  { ssr: false }
);

export default function AddSymptomPage({ handleSymptomChange, mySymptoms }) {
  return (
    <>
      <Head>
        <title>Symptome hinzufügen</title>
        <meta charSet="UTF-8"></meta>
      </Head>
      <Header backButton title="Symptome hinzufügen" />
      <AddNewSymptom
        handleSymptomChange={handleSymptomChange}
        mySymptoms={mySymptoms}
      />
    </>
  );
}
