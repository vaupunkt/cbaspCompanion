import { useState } from "react";
import GlobalStyle from "../styles";
import initialEntries from "@/lib/initialEntries";

export default function App({ Component, pageProps }) {
  const [allEntries, setAllEntries] = useState(initialEntries);
  const allFutureAnalysisEntries = initialEntries.filter(
    (initialEntry) => initialEntry.type === "FutureAnalysis"
  );
  const allPastAnalysisEntries = initialEntries.filter(
    (initialEntry) => initialEntry.type === "PastAnalysis"
  );
  const allInnerAnalysisEntries = initialEntries.filter(
    (initialEntry) => initialEntry.type === "InnerSituationAnalysis"
  );

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        allEntries={allEntries}
        allFutureAnalysisEntries={allFutureAnalysisEntries}
        allPastAnalysisEntries={allPastAnalysisEntries}
        allInnerAnalysisEntries={allInnerAnalysisEntries}
      />
    </>
  );
}
