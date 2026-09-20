import { ArrowLeft, BriefcaseBusiness, Clock3, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import jobs from "/data/jobs";

function JobDetails() {
  const { id } = useParams();

  const job = jobs.find((item) => item.id === Number(id));

  if (!job) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-10 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Job Not Found</h1>

          <p className="mt-3 text-sm text-gray-500">
            The job you are looking for does not exist or may have been removed.
          </p>

          <Link
            to="/jobs"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <ArrowLeft size={16} />
            Back to Jobs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Job Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 lg:px-16">
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            Back to Jobs
          </Link>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <BriefcaseBusiness size={28} />
              </div>

              <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                  {job.title}
                </h1>

                <p className="mt-2 text-base font-medium text-gray-600">
                  {job.company}
                </p>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    {job.location}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock3 size={16} />
                    {job.posted}
                  </span>
                </div>
              </div>
            </div>

            <div className="sm:text-right">
              <p className="text-lg font-bold text-gray-900">{job.salary}</p>

              <p className="mt-1 text-sm text-gray-500">Salary range</p>
            </div>
          </div>

          {/* Job Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
              {job.type}
            </span>

            <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
              {job.experience}
            </span>

            {job.remote && (
              <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-600">
                Remote
              </span>
            )}

            <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600">
              {job.category}
            </span>
          </div>
        </div>
      </section>

      {/* Job Content */}
      <section className="mx-auto max-w-5xl px-6 py-10 md:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          {/* Main Content */}
          <article className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900">About the Role</h2>

            <p className="mt-4 leading-7 text-gray-600">{job.description}</p>

            <h2 className="mt-10 text-xl font-bold text-gray-900">
              Responsibilities
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-gray-600">
              {job.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="mt-10 text-xl font-bold text-gray-900">
              Requirements
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-gray-600">
              {job.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="mt-10 text-xl font-bold text-gray-900">Benefits</h2>

            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-gray-600">
              {job.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          {/* Apply Sidebar */}
          <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 lg:sticky lg:top-24">
            <h2 className="text-base font-semibold text-gray-900">
              Interested in this role?
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Take the next step and submit your application.
            </p>

            <button
              type="button"
              className="mt-6 w-full cursor-pointer rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Apply Now
            </button>

            <button
              type="button"
              className="mt-3 w-full cursor-pointer rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:text-blue-600"
            >
              Save Job
            </button>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default JobDetails;
