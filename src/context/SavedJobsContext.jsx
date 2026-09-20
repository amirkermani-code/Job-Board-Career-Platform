import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const SavedJobsContext = createContext(null);

const STORAGE_KEY = "jobly-saved-jobs";

function SavedJobsProvider({ children }) {
  const [savedJobs, setSavedJobs] = useState(() => {
    try {
      const storedJobs = localStorage.getItem(STORAGE_KEY);

      return storedJobs ? JSON.parse(storedJobs).map(Number) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedJobs));
  }, [savedJobs]);

  const isSaved = (jobId) => {
    return savedJobs.includes(Number(jobId));
  };

  const toggleSave = (jobId) => {
    const id = Number(jobId);

    setSavedJobs((current) => {
      if (current.includes(id)) {
        return current.filter((savedId) => savedId !== id);
      }

      return [...current, id];
    });
  };

  return (
    <SavedJobsContext.Provider
      value={{
        savedJobs,
        isSaved,
        toggleSave,
      }}
    >
      {children}
    </SavedJobsContext.Provider>
  );
}

export default SavedJobsProvider;