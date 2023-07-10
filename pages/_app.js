import GlobalStyle from "../styles";
import placeholderEntries from "@/lib/placeholderEntries";

export default function App({ Component, pageProps }) {
  const allEntries = placeholderEntries;
  const allFutureAnalysesEntries = placeholderEntries.filter(
    (placeholderEntry) => placeholderEntry.type === "FutureAnalysis"
  );
  const allPastAnalysesEntries = placeholderEntries.filter(
    (placeholderEntry) => placeholderEntry.type === "PastAnalysis"
  );
  const allInnerAnalysesEntries = placeholderEntries.filter(
    (placeholderEntry) => placeholderEntry.type === "InnerSituationAnalysis"
  );

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        allEntries={allEntries}
        allFutureAnalysesEntries={allFutureAnalysesEntries}
        allPastAnalysesEntries={allPastAnalysesEntries}
        allInnerAnalysesEntries={allInnerAnalysesEntries}
      />
    </>
  );
}
