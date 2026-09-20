import { Bookmark, Search } from "lucide-react";
import { Link } from "react-router-dom";

import JobCard from "../components/JobCard";
import jobs from "/data/jobs";
import useSavedJobs from "../hooks/useSavedJobs";

function SavedJobs() {
  const { savedJobs } = useSavedJobs();

  const savedJobList = jobs.filter((job) => savedJobs.includes(Number(job.id)));

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16 lg:px-16">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-sm font-semibold text-blue-600">
              <Bookmark size={16} />
              SAVED JOBS
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your Saved Jobs
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-500">
              Keep track of the opportunities you're interested in and come back
              to them whenever you're ready.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-16">
        {savedJobList.length > 0 ? (
          <>
            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-900">
                {savedJobList.length}{" "}
                {savedJobList.length === 1 ? "job" : "jobs"} saved
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Jobs you've bookmarked for later.
              </p>
            </div>

            <div className="grid gap-4">
              {savedJobList.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
              <Search size={24} />
            </div>

            <h2 className="mt-5 text-lg font-semibold text-gray-900">
              No saved jobs yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              When you find a job you're interested in, bookmark it and it will
              appear here.
            </p>

            <Link
              to="/jobs"
              className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Browse Jobs
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}

export default SavedJobs;
