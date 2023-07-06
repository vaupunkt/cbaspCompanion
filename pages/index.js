import placeholder from "@/lib/placeholder";
import PastAnalysisEntry from "@/components/SingleEntry/PastAnalysisEntry";
import FutureAnalysisEntry from "@/components/SingleEntry/FutureAnalysisEntry";
import InnerAnalysisEntry from "@/components/SingleEntry/InnerAnalysisEntry";

export default function HomePage() {
  const entry = placeholder[0];
  return (
    <div>
      {entry.type === "PastAnalysis" ? (
        <PastAnalysisEntry entry={entry}></PastAnalysisEntry>
      ) : entry.type === "FutureAnalysis" ? (
        <FutureAnalysisEntry entry={entry}></FutureAnalysisEntry>
      ) : (
        <InnerAnalysisEntry entry={entry}></InnerAnalysisEntry>
      )}
    </div>
  );
}
