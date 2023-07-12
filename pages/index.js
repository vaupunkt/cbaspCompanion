import Header from "@/components/Header";
import NavigationContainer from "@/components/NavigationContainer";
import NavigationLink from "@/components/NavigationLink";

export default function Home() {
  return (
    <>
      <Header title="CBASP Companion" />
      <NavigationContainer bottom>
        <NavigationLink href="./myanalyses">Meine Analysen</NavigationLink>
      </NavigationContainer>
    </>
  );
}
