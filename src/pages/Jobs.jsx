import { useMemo, useState } from "react";
import { Filter, Search, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import JobCard from "../components/JobCard";
import jobs from "/data/jobs";

function Jobs() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const [location, setLocation] = useState(searchParams.get("location") || "");

  const [filters, setFilters] = useState({
    location: searchParams.get("location") || "",
    jobTypes: searchParams.get("jobType")
      ? searchParams.get("jobType").split(",")
      : [],
    experience: searchParams.get("experience")
      ? searchParams.get("experience").split(",")
      : [],
    remoteOnly: searchParams.get("remote") === "true",
  });

  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "relevant");

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const updateUrl = (updates) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (
        value === "" ||
        value === false ||
        (Array.isArray(value) && value.length === 0)
      ) {
        params.delete(key);
      } else if (Array.isArray(value)) {
        params.set(key, value.join(","));
      } else {
        params.set(key, value);
      }
    });

    setSearchParams(params);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;

    setSearch(value);

    updateUrl({
      search: value,
    });
  };

  const handleLocationChange = (event) => {
    const value = event.target.value;

    setLocation(value);

    setFilters((current) => ({
      ...current,
      location: value,
    }));

    updateUrl({
      location: value,
    });
  };

  const toggleJobType = (type) => {
    setFilters((current) => {
      const updatedTypes = current.jobTypes.includes(type)
        ? current.jobTypes.filter((item) => item !== type)
        : [...current.jobTypes, type];

      updateUrl({
        jobType: updatedTypes,
      });

      return {
        ...current,
        jobTypes: updatedTypes,
      };
    });
  };

  const toggleExperience = (level) => {
    setFilters((current) => {
      const updatedExperience = current.experience.includes(level)
        ? current.experience.filter((item) => item !== level)
        : [...current.experience, level];

      updateUrl({
        experience: updatedExperience,
      });

      return {
        ...current,
        experience: updatedExperience,
      };
    });
  };

  const toggleRemote = () => {
    setFilters((current) => {
      const updatedRemote = !current.remoteOnly;

      updateUrl({
        remote: updatedRemote,
      });

      return {
        ...current,
        remoteOnly: updatedRemote,
      };
    });
  };

  const handleSortChange = (event) => {
    const value = event.target.value;

    setSortBy(value);

    updateUrl({
      sort: value === "relevant" ? "" : value,
    });
  };

  const clearFilters = () => {
    setSearch("");
    setLocation("");

    setFilters({
      location: "",
      jobTypes: [],
      experience: [],
      remoteOnly: false,
    });

    setSortBy("relevant");

    setSearchParams({});
  };

  const filteredJobs = useMemo(() => {
    let result = [...jobs];

    const normalizedSearch = search.trim().toLowerCase();
    const normalizedLocation = location.trim().toLowerCase();

    if (normalizedSearch) {
      result = result.filter((job) => {
        return (
          job.title.toLowerCase().includes(normalizedSearch) ||
          job.company.toLowerCase().includes(normalizedSearch) ||
          job.category.toLowerCase().includes(normalizedSearch)
        );
      });
    }

    if (normalizedLocation) {
      result = result.filter((job) =>
        job.location.toLowerCase().includes(normalizedLocation),
      );
    }

    if (filters.jobTypes.length > 0) {
      result = result.filter((job) => filters.jobTypes.includes(job.type));
    }

    if (filters.experience.length > 0) {
      result = result.filter((job) =>
        filters.experience.includes(job.experience),
      );
    }

    if (filters.remoteOnly) {
      result = result.filter((job) => job.remote);
    }

    if (sortBy === "newest") {
      result.sort((a, b) => a.id - b.id);
    }

    if (sortBy === "oldest") {
      result.sort((a, b) => b.id - a.id);
    }

    if (sortBy === "salary-high") {
      result.sort((a, b) => {
        const salaryA = parseInt(a.salary.replace(/\D/g, ""), 10);

        const salaryB = parseInt(b.salary.replace(/\D/g, ""), 10);

        return salaryB - salaryA;
      });
    }

    return result;
  }, [search, location, filters, sortBy]);

  const hasActiveFilters =
    search ||
    location ||
    filters.jobTypes.length > 0 ||
    filters.experience.length > 0 ||
    filters.remoteOnly;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-600">
              FIND YOUR NEXT OPPORTUNITY
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore Jobs
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-500">
              Discover opportunities from companies around the world and find a
              role that fits your skills.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-16">
          <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search jobs, companies..."
                className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="relative">
              <input
                type="text"
                value={location}
                onChange={handleLocationChange}
                placeholder="Location"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 md:hidden"
            >
              <Filter size={17} />
              Filters
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-gray-900">Filters</h2>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs font-medium text-blue-600 hover:text-blue-700"
                  >
                    Clear all
                  </button>
                )}
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-900">
                  Job Type
                </h3>

                <div className="mt-3 space-y-2">
                  {["Full-time", "Part-time", "Contract"].map((type) => (
                    <label
                      key={type}
                      className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
                    >
                      <input
                        type="checkbox"
                        checked={filters.jobTypes.includes(type)}
                        onChange={() => toggleJobType(type)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />

                      {type}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <h3 className="text-sm font-semibold text-gray-900">
                  Experience
                </h3>

                <div className="mt-3 space-y-2">
                  {["Entry-level", "Mid-level", "Senior"].map((level) => (
                    <label
                      key={level}
                      className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
                    >
                      <input
                        type="checkbox"
                        checked={filters.experience.includes(level)}
                        onChange={() => toggleExperience(level)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />

                      {level}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={filters.remoteOnly}
                    onChange={toggleRemote}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  Remote only
                </label>
              </div>
            </div>
          </aside>

          {/* Jobs */}
          <div>
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {filteredJobs.length}{" "}
                  {filteredJobs.length === 1 ? "job" : "jobs"} found
                </h2>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-1 text-sm text-blue-600 hover:text-blue-700"
                  >
                    Clear filters
                  </button>
                )}
              </div>

              <select
                value={sortBy}
                onChange={handleSortChange}
                className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500"
              >
                <option value="relevant">Most Relevant</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="salary-high">Highest Salary</option>
              </select>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="grid gap-4">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <Search size={24} />
                </div>

                <h2 className="mt-5 text-lg font-semibold text-gray-900">
                  No jobs found
                </h2>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                  Try adjusting your search or removing some filters to see more
                  opportunities.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileFiltersOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-900">Job Type</h3>

              <div className="mt-3 space-y-3">
                {["Full-time", "Part-time", "Contract"].map((type) => (
                  <label
                    key={type}
                    className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
                  >
                    <input
                      type="checkbox"
                      checked={filters.jobTypes.includes(type)}
                      onChange={() => toggleJobType(type)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />

                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-900">
                Experience
              </h3>

              <div className="mt-3 space-y-3">
                {["Entry-level", "Mid-level", "Senior"].map((level) => (
                  <label
                    key={level}
                    className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
                  >
                    <input
                      type="checkbox"
                      checked={filters.experience.includes(level)}
                      onChange={() => toggleExperience(level)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />

                    {level}
                  </label>
                ))}
              </div>
            </div>

            <label className="mt-8 flex cursor-pointer items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={filters.remoteOnly}
                onChange={toggleRemote}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Remote only
            </label>

            <div className="mt-10 flex gap-3">
              <button
                type="button"
                onClick={clearFilters}
                className="flex-1 rounded-lg border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Clear
              </button>

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Jobs;
