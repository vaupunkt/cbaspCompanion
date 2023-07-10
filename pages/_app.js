import GlobalStyle from "../styles";
import placeholderEntries from "@/lib/placeholderEntries";

export default function App({ Component, pageProps }) {
  const allEntries = placeholderEntries;
  const allZukunftsanalyseEntries = placeholderEntries.filter(
    (placeholderEntry) => placeholderEntry.type === "FutureAnalysis"
  );

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        allEntries={allEntries}
        allZukunftsanalyseEntries={allZukunftsanalyseEntries}
      />
    </>
  );
}
