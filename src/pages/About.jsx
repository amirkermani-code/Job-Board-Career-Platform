import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import companies from "/data/companies";
import jobs from "/data/jobs";

function About() {
  const stats = [
    {
      label: "Available Jobs",
      value: `${jobs.length}+`,
      icon: BriefcaseBusiness,
    },
    {
      label: "Companies",
      value: `${companies.length}+`,
      icon: Building2,
    },
    {
      label: "Job Categories",
      value: `${new Set(jobs.map((job) => job.category)).size}+`,
      icon: Search,
    },
    {
      label: "Remote Opportunities",
      value: `${jobs.filter((job) => job.remote).length}+`,
      icon: ShieldCheck,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600">
              About Jobly
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Making the job search simpler.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Jobly is a modern job discovery platform designed to help people
              find relevant opportunities and explore companies through a simple
              and focused experience.
            </p>

            <div className="mt-8">
              <Link
                to="/jobs"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Browse Jobs
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Our approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
              A focused way to discover your next opportunity.
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              Finding the right job can be overwhelming when information is
              scattered across different platforms. Jobly brings job discovery
              and company exploration into one straightforward experience.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              From searching and filtering opportunities to exploring companies
              and saving interesting positions, every part of Jobly is designed
              around making the discovery process clear and easy to navigate.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Search size={24} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Built around discovery
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Search by role, location, experience, employment type, or remote
              availability. Explore companies and keep track of opportunities
              that interest you.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon size={20} />
                  </div>

                  <p className="mt-5 text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Jobly */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Why Jobly
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
            Everything you need to explore opportunities.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <Search className="text-blue-600" size={24} />

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Smart discovery
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Find relevant opportunities using flexible search, filters,
              sorting, and location-based discovery.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <Building2 className="text-blue-600" size={24} />

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Explore companies
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Learn more about companies and discover the positions they
              currently have available.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <BriefcaseBusiness className="text-blue-600" size={24} />

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Keep opportunities organized
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Save interesting jobs and return to them later without losing
              track of the opportunities you discovered.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to find your next opportunity?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-300">
            Explore available positions and discover companies that could be the
            right fit for your next career move.
          </p>

          <Link
            to="/jobs"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            Explore Jobs
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
