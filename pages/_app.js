import GlobalStyle from "../styles";
import initialEntries from "@/lib/initialEntries";

export default function App({ Component, pageProps }) {
  const allEntries = initialEntries;
  const allFutureAnalysisEntries = initialEntries.filter(
    (initialEntry) => initialEntry.type === "FutureAnalysis"
  );
  const allPastAnalysisEntries = initialEntries.filter(
    (initialEntry) => initialEntry.type === "PastAnalysis"
  );
  const allInnerAnalysisEntries = placeholderEntries.filter(
    (placeholderEntry) => placeholderEntry.type === "InnerSituationAnalysis"
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
