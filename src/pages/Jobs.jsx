import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";

import JobCard from "../components/JobCard";
import JobFilters from "../components/JobFilters";
import jobs from "/data/jobs";

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const [filters, setFilters] = useState({
    location: "",
    jobTypes: [],
    experience: [],
    remoteOnly: false,
  });

  const [sortBy, setSortBy] = useState("relevant");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Toggle Job Type
  const handleJobTypeChange = (type) => {
    setFilters((current) => ({
      ...current,
      jobTypes: current.jobTypes.includes(type)
        ? current.jobTypes.filter((item) => item !== type)
        : [...current.jobTypes, type],
    }));
  };

  // Toggle Experience
  const handleExperienceChange = (level) => {
    setFilters((current) => ({
      ...current,
      experience: current.experience.includes(level)
        ? current.experience.filter((item) => item !== level)
        : [...current.experience, level],
    }));
  };

  // Toggle Remote
  const handleRemoteChange = () => {
    setFilters((current) => ({
      ...current,
      remoteOnly: !current.remoteOnly,
    }));
  };

  // Location Filter
  const handleLocationChange = (value) => {
    setFilters((current) => ({
      ...current,
      location: value,
    }));
  };

  // Clear Filters
  const clearFilters = () => {
    setFilters({
      location: "",
      jobTypes: [],
      experience: [],
      remoteOnly: false,
    });
  };

  // Clear Everything
  const clearAll = () => {
    setSearch("");
    setLocation("");

    clearFilters();
  };

  // Filter + Search + Sort
  const filteredJobs = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    const normalizedLocation = location.trim().toLowerCase();
    const filterLocation = filters.location.trim().toLowerCase();

    const result = jobs.filter((job) => {
      // Keyword Search
      const matchesSearch =
        normalizedSearch === "" ||
        job.title.toLowerCase().includes(normalizedSearch) ||
        job.company.toLowerCase().includes(normalizedSearch) ||
        job.category.toLowerCase().includes(normalizedSearch);

      // Main Location Search
      const matchesMainLocation =
        normalizedLocation === "" ||
        job.location.toLowerCase().includes(normalizedLocation);

      // Sidebar Location Filter
      const matchesFilterLocation =
        filterLocation === "" ||
        job.location.toLowerCase().includes(filterLocation);

      // Job Type
      const matchesJobType =
        filters.jobTypes.length === 0 || filters.jobTypes.includes(job.type);

      // Experience
      const matchesExperience =
        filters.experience.length === 0 ||
        filters.experience.includes(job.experience);

      // Remote
      const matchesRemote = !filters.remoteOnly || job.remote;

      return (
        matchesSearch &&
        matchesMainLocation &&
        matchesFilterLocation &&
        matchesJobType &&
        matchesExperience &&
        matchesRemote
      );
    });

    // Sorting
    if (sortBy === "newest") {
      return [...result].sort((a, b) => a.id - b.id);
    }

    if (sortBy === "oldest") {
      return [...result].sort((a, b) => b.id - a.id);
    }

    if (sortBy === "salary-high") {
      return [...result].sort((a, b) => {
        const salaryA = Number(a.salary.match(/\d+/)?.[0] || 0);

        const salaryB = Number(b.salary.match(/\d+/)?.[0] || 0);

        return salaryB - salaryA;
      });
    }

    return result;
  }, [search, location, filters, sortBy]);

  const hasActiveFilters =
    search.trim() !== "" ||
    location.trim() !== "" ||
    filters.location.trim() !== "" ||
    filters.jobTypes.length > 0 ||
    filters.experience.length > 0 ||
    filters.remoteOnly;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16 lg:px-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-600">
              JOB OPPORTUNITIES
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Find Your Next Job
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-500">
              Discover opportunities from growing companies and find a role that
              matches your skills, experience, and career goals.
            </p>
          </div>

          {/* Search */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
            <div className="flex flex-col gap-2 lg:flex-row">
              {/* Keyword */}
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Job title, company, or keyword"
                  className="h-12 w-full rounded-xl bg-gray-50 pl-11 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Location */}
              <div className="relative flex-1">
                <input
                  type="text"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="Location"
                  className="h-12 w-full rounded-xl bg-gray-50 px-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Search Button */}
              <button
                type="button"
                className="flex h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                <Search size={17} />
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16">
        {/* Mobile Filter Button */}
        <div className="mb-5 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:text-blue-600"
          >
            <SlidersHorizontal size={17} />
            Filters
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
          {/* Desktop Filters */}
          <div className="hidden lg:block">
            <JobFilters
              filters={filters}
              onJobTypeChange={handleJobTypeChange}
              onExperienceChange={handleExperienceChange}
              onRemoteChange={handleRemoteChange}
              onLocationChange={handleLocationChange}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Jobs */}
          <div>
            {/* Results Header */}
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {filteredJobs.length}{" "}
                  {filteredJobs.length === 1 ? "job" : "jobs"} found
                </h2>

                {hasActiveFilters && (
                  <p className="mt-1 text-sm text-gray-500">
                    Showing results based on your search and filters.
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm text-gray-500">
                  Sort by
                </label>

                <select
                  id="sort"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="cursor-pointer rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="relevant">Most Relevant</option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="salary-high">Highest Salary</option>
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="mb-5 flex flex-wrap items-center gap-2">
                {search.trim() !== "" && (
                  <span className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600">
                    Search: {search}
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="cursor-pointer"
                      aria-label="Remove search"
                    >
                      <X size={13} />
                    </button>
                  </span>
                )}

                {location.trim() !== "" && (
                  <span className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600">
                    Location: {location}
                    <button
                      type="button"
                      onClick={() => setLocation("")}
                      className="cursor-pointer"
                      aria-label="Remove location"
                    >
                      <X size={13} />
                    </button>
                  </span>
                )}

                {filters.remoteOnly && (
                  <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-600">
                    Remote
                  </span>
                )}

                <button
                  type="button"
                  onClick={clearAll}
                  className="cursor-pointer text-xs font-medium text-gray-500 transition hover:text-blue-600"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Job List */}
            {filteredJobs.length > 0 ? (
              <div className="grid gap-4">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              /* No Results */
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <Search size={24} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  No jobs found
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                  We couldn't find any jobs matching your current search and
                  filters. Try adjusting your criteria.
                </p>

                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 cursor-pointer rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Clear Search & Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          {/* Overlay */}
          <div
            onClick={() => setMobileFiltersOpen(false)}
            className="absolute inset-0 bg-black/40"
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto bg-gray-50 shadow-2xl">
            <div className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-6">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={18} className="text-gray-700" />

                <h2 className="font-semibold text-gray-900">Filters</h2>
              </div>

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-5">
              <JobFilters
                filters={filters}
                onJobTypeChange={handleJobTypeChange}
                onExperienceChange={handleExperienceChange}
                onRemoteChange={handleRemoteChange}
                onLocationChange={handleLocationChange}
                onClearFilters={clearFilters}
              />

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="mt-4 w-full cursor-pointer rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Show {filteredJobs.length}{" "}
                {filteredJobs.length === 1 ? "Job" : "Jobs"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Jobs;
