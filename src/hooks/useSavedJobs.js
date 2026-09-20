import { useContext } from "react";

import { SavedJobsContext } from "../context/SavedJobsContext";

function useSavedJobs() {
  const context = useContext(SavedJobsContext);

  if (!context) {
    throw new Error(
      "useSavedJobs must be used inside SavedJobsProvider",
    );
  }

  return context;
}

export default useSavedJobs;