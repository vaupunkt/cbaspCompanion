import BackButton from "@/components/BackButton";
import Entry from "@/components/Entry";
import placeholderEntries from "@/lib/placeholderEntries";
import { useRouter } from "next/router";
import { useState } from "react";

export default function EntryPage() {
  const router = useRouter();
  const { id } = router.query;
  const entry = placeholderEntries.find(
    (placeholderEntry) => placeholderEntry.id === id
  );

  return (
    <>
      <BackButton />
      <Entry data={entry}></Entry>
    </>
  );
}
