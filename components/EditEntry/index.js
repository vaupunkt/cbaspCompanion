import {
  EditEntryContent,
  EditEntryInput,
  EditEntryLabel,
} from "./EditEntry.style";

export default function EditEntry({
  analysisHeadings,
  analysisKey,
  updatedData,
  setUpdatedData,
}) {
  function handleChange(analysisKey, value) {
    setUpdatedData((prevData) => ({ ...prevData, [analysisKey]: value }));
  }

  function handleArrayChange(analysisKey, index, value) {
    setUpdatedData((prevData) => ({
      ...prevData,
      [analysisKey]: prevData[analysisKey].map((item, i) =>
        i === index ? { ...item, interpretation: value } : item
      ),
    }));
  }

  return (
    <EditEntryContent>
      <EditEntryLabel htmlFor={updatedData[analysisKey]}>
        {analysisHeadings[analysisKey]}
      </EditEntryLabel>
      {Array.isArray(updatedData[analysisKey]) ? (
        updatedData[analysisKey].map((item, index) => (
          <EditEntryInput
            short
            key={item.id}
            name={item.interpretation}
            type="text"
            value={item.interpretation}
            onChange={(e) =>
              handleArrayChange(analysisKey, index, e.target.value)
            }
          />
        ))
      ) : (
        <EditEntryInput
          long
          type="text"
          name={updatedData[analysisKey]}
          id={updatedData[analysisKey]}
          value={updatedData[analysisKey]}
          onChange={(e) => handleChange(analysisKey, e.target.value)}
        />
      )}
    </EditEntryContent>
  );
}
