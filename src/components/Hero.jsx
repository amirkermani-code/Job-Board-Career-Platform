import { MapPin, Search } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="jobs"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white px-6 py-20 md:px-16 md:py-28"
    >
      {/* Background Decorations */}
      <div className="animate-hero-float absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="animate-hero-float-slow absolute -right-24 top-20 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto max-w-5xl text-center">

        {/* Badge */}
        <div className="animate-hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-medium text-blue-600 opacity-0 shadow-sm backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-blue-600" />

          Find opportunities that fit your future
        </div>

        {/* Heading */}
        <h1 className="animate-hero-heading mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-900 opacity-0 sm:text-5xl md:text-6xl">
          Find Your{" "}
          <span className="text-blue-600">
            Next Opportunity
          </span>
        </h1>

        {/* Description */}
        <p className="animate-hero-description mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 opacity-0 sm:text-lg">
          Discover jobs from growing companies and find the
          opportunity that matches your skills, goals, and career path.
        </p>

        {/* Search Box */}
        <div className="animate-hero-search mx-auto mt-10 flex max-w-4xl flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-3 opacity-0 shadow-lg shadow-gray-200/50 md:flex-row md:items-center">

          {/* Job Search */}
          <div className="flex flex-1 items-center gap-3 rounded-xl px-4 py-3 text-left transition focus-within:bg-gray-50">
            <Search
              size={20}
              className="shrink-0 text-gray-400"
            />

            <div className="flex-1">
              <label
                htmlFor="job-search"
                className="block text-xs font-medium text-gray-400"
              >
                What are you looking for?
              </label>

              <input
                id="job-search"
                type="text"
                placeholder="Job title, keyword..."
                className="mt-1 w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden h-10 w-px bg-gray-200 md:block" />

          {/* Location Search */}
          <div className="flex flex-1 items-center gap-3 rounded-xl px-4 py-3 text-left transition focus-within:bg-gray-50">
            <MapPin
              size={20}
              className="shrink-0 text-gray-400"
            />

            <div className="flex-1">
              <label
                htmlFor="location-search"
                className="block text-xs font-medium text-gray-400"
              >
                Where?
              </label>

              <input
                id="location-search"
                type="text"
                placeholder="City, country, or remote"
                className="mt-1 w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Search Button */}
          <button
            type="button"
            className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
          >
            <Search size={18} />

            Search Jobs
          </button>
        </div>

        {/* Popular Searches */}
        <div className="animate-hero-popular mt-5 flex flex-wrap items-center justify-center gap-2 text-sm opacity-0">
          <span className="text-gray-500">
            Popular:
          </span>

          <button
            type="button"
            className="cursor-pointer rounded-full border border-gray-200 bg-white px-3 py-1 text-gray-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            Frontend Developer
          </button>

          <button
            type="button"
            className="cursor-pointer rounded-full border border-gray-200 bg-white px-3 py-1 text-gray-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            UI/UX Designer
          </button>

          <button
            type="button"
            className="cursor-pointer rounded-full border border-gray-200 bg-white px-3 py-1 text-gray-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            Product Manager
          </button>

          <button
            type="button"
            className="cursor-pointer rounded-full border border-gray-200 bg-white px-3 py-1 text-gray-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            Remote
          </button>
        </div>

        {/* Stats */}
        <div className="animate-hero-stats mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-sm opacity-0">
          <div>
            <p className="text-2xl font-bold text-gray-900">
              10K+
            </p>

            <p className="mt-1 text-gray-500">
              Open Jobs
            </p>
          </div>

          <div className="hidden h-10 w-px bg-gray-200 sm:block" />

          <div>
            <p className="text-2xl font-bold text-gray-900">
              2.5K+
            </p>

            <p className="mt-1 text-gray-500">
              Companies
            </p>
          </div>

          <div className="hidden h-10 w-px bg-gray-200 sm:block" />

          <div>
            <p className="text-2xl font-bold text-gray-900">
              50K+
            </p>

            <p className="mt-1 text-gray-500">
              Job Seekers
            </p>
          </div>
        </div>
      </div>

      {/* Hero Animations */}
      <style>{`
        @keyframes heroFadeDown {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroFloat {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(12px, 16px);
          }
        }

        @keyframes heroFloatSlow {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-14px, 12px);
          }
        }

        .animate-hero-badge {
          animation: heroFadeDown 0.7s ease-out 0.1s forwards;
        }

        .animate-hero-heading {
          animation: heroFadeUp 0.8s ease-out 0.25s forwards;
        }

        .animate-hero-description {
          animation: heroFadeUp 0.8s ease-out 0.4s forwards;
        }

        .animate-hero-search {
          animation: heroFadeUp 0.8s ease-out 0.55s forwards;
        }

        .animate-hero-popular {
          animation: heroFadeUp 0.8s ease-out 0.7s forwards;
        }

        .animate-hero-stats {
          animation: heroFadeUp 0.8s ease-out 0.85s forwards;
        }

        .animate-hero-float {
          animation: heroFloat 8s ease-in-out infinite;
        }

        .animate-hero-float-slow {
          animation: heroFloatSlow 10s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-hero-badge,
          .animate-hero-heading,
          .animate-hero-description,
          .animate-hero-search,
          .animate-hero-popular,
          .animate-hero-stats {
            animation: none;
            opacity: 1;
          }

          .animate-hero-float,
          .animate-hero-float-slow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}