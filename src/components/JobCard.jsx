import {
  Bookmark,
  BriefcaseBusiness,
  Clock3,
  MapPin,
} from "lucide-react";

function JobCard({ job }) {
  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        {/* Company Logo */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <BriefcaseBusiness size={22} />
        </div>

        {/* Save Button */}
        <button
          type="button"
          aria-label={`Save ${job.title}`}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-blue-600"
        >
          <Bookmark size={18} />
        </button>
      </div>

      {/* Job Info */}
      <div className="mt-5">
        <h2 className="text-lg font-semibold text-gray-900 transition group-hover:text-blue-600">
          {job.title}
        </h2>

        <p className="mt-1 text-sm font-medium text-gray-600">
          {job.company}
        </p>
      </div>

      {/* Location */}
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
        <MapPin size={16} />
        <span>{job.location}</span>
      </div>

      {/* Job Details */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {job.type}
        </span>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {job.experience}
        </span>

        {job.remote && (
          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
            Remote
          </span>
        )}
      </div>

      {/* Bottom */}
      <div className="mt-5 flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900">
            {job.salary}
          </p>

          <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-400">
            <Clock3 size={13} />
            <span>{job.posted}</span>
          </div>
        </div>

        <button
          type="button"
          className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          View Job
        </button>
      </div>
    </article>
  );
}

export default JobCard;