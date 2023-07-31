import Header from "@/components/Header";
import dynamic from "next/dynamic";

const AddNewSymptom = dynamic(
  () => {
    return import("@/components/AddNewSymptom");
  },
  { ssr: false }
);

export default function AddSymptomPage({ handleSymptomChange, mySymptoms }) {
  return (
    <>
      <Header backButton title="Symptome hinzufügen" />
      <AddNewSymptom
        handleSymptomChange={handleSymptomChange}
        mySymptoms={mySymptoms}
      />
    </>
  );
}
