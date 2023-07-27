import KieslerKreis from "@/components/KieslerKreis";

export default function behaviorKieslerkreisPage() {
  return (
    <>
      <Header title="Neue Situationsanalyse" />
      <h2>Wie würdest du dich im Kieslerkreis einschätzen?</h2>
      <KieslerKreis editMode="true" />
    </>
  );
}
