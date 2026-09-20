
import { MapPin, SlidersHorizontal, X } from "lucide-react";

function JobFilters({
  filters,
  onJobTypeChange,
  onExperienceChange,
  onRemoteChange,
  onLocationChange,
  onClearFilters,
}) {
  const hasActiveFilters =
    filters.location.trim() !== "" ||
    filters.jobTypes.length > 0 ||
    filters.experience.length > 0 ||
    filters.remoteOnly;

  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-gray-700" />

          <h2 className="text-sm font-semibold text-gray-900">
            Filters
          </h2>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="flex cursor-pointer items-center gap-1 text-xs font-medium text-blue-600 transition hover:text-blue-700"
          >
            <X size={13} />
            Clear
          </button>
        )}
      </div>

      {/* Location */}
      <div className="mt-6">
        <label
          htmlFor="location"
          className="text-sm font-semibold text-gray-900"
        >
          Location
        </label>

        <div className="relative mt-3">
          <MapPin
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            id="location"
            type="text"
            value={filters.location}
            onChange={(event) => onLocationChange(event.target.value)}
            placeholder="City or country"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Job Type */}
      <div className="mt-7">
        <h3 className="text-sm font-semibold text-gray-900">
          Job Type
        </h3>

        <div className="mt-3 space-y-3">
          {["Full-time", "Part-time", "Contract", "Internship"].map(
            (type) => (
              <label
                key={type}
                className="flex cursor-pointer items-center justify-between text-sm text-gray-600"
              >
                <span>{type}</span>

                <input
                  type="checkbox"
                  checked={filters.jobTypes.includes(type)}
                  onChange={() => onJobTypeChange(type)}
                  className="h-4 w-4 cursor-pointer rounded border-gray-300 accent-blue-600"
                />
              </label>
            ),
          )}
        </div>
      </div>

      {/* Experience Level */}
      <div className="mt-7">
        <h3 className="text-sm font-semibold text-gray-900">
          Experience Level
        </h3>

        <div className="mt-3 space-y-3">
          {["Entry-level", "Mid-level", "Senior"].map((level) => (
            <label
              key={level}
              className="flex cursor-pointer items-center justify-between text-sm text-gray-600"
            >
              <span>{level}</span>

              <input
                type="checkbox"
                checked={filters.experience.includes(level)}
                onChange={() => onExperienceChange(level)}
                className="h-4 w-4 cursor-pointer rounded border-gray-300 accent-blue-600"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Remote */}
      <div className="mt-7 border-t border-gray-100 pt-6">
        <label className="flex cursor-pointer items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Remote only
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Show only remote jobs
            </p>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={filters.remoteOnly}
            onClick={onRemoteChange}
            className={`relative h-6 w-11 cursor-pointer rounded-full transition-colors duration-200 ${
              filters.remoteOnly ? "bg-blue-600" : "bg-gray-200"
            }`}
          >
            <span
              className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                filters.remoteOnly
                  ? "translate-x-6"
                  : "translate-x-1"
              }`}
            />
          </button>
        </label>
      </div>
    </aside>
  );
}

export default JobFilters;
