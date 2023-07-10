import GlobalStyle from "../styles";
import placeholderEntries from "@/lib/placeholderEntries";

export default function App({ Component, pageProps }) {
  const allEntries = placeholderEntries;
  const allZukunftsanalyseEntries = placeholderEntries.filter(
    (placeholderEntry) => placeholderEntry.type === "FutureAnalysis"
  );
  const allVergangenheitsanalyseEntries = placeholderEntries.filter(
    (placeholderEntry) => placeholderEntry.type === "PastAnalysis"
  );

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        allEntries={allEntries}
        allZukunftsanalyseEntries={allZukunftsanalyseEntries}
        allVergangenheitsanalyseEntries={allVergangenheitsanalyseEntries}
      />
    </>
  );
}
