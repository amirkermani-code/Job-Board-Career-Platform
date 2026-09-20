import {
  ArrowLeft,
  Briefcase,
  Building2,
  CalendarDays,
  ExternalLink,
  MapPin,
  Users,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import JobCard from "../components/JobCard";
import companies from "/data/companies";
import jobs from "/data/jobs";

function CompanyDetails() {
  const { id } = useParams();

  const company = companies.find(
    (item) => item.id === Number(id),
  );

  if (!company) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Company Not Found
          </h1>

          <p className="mt-3 text-gray-600">
            The company you are looking for does not exist.
          </p>

          <Link
            to="/companies"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <ArrowLeft size={16} />
            Back to Companies
          </Link>
        </div>
      </main>
    );
  }

  const companyJobs = jobs.filter(
    (job) => job.companyId === company.id,
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Company Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Link
            to="/companies"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            Back to Companies
          </Link>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Building2 size={36} />
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                {company.industry}
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {company.name}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
                {company.description}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 border-t border-gray-100 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-gray-400" size={20} />

              <div>
                <p className="text-xs font-medium uppercase text-gray-400">
                  Location
                </p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {company.location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Users className="text-gray-400" size={20} />

              <div>
                <p className="text-xs font-medium uppercase text-gray-400">
                  Employees
                </p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {company.employees}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CalendarDays className="text-gray-400" size={20} />

              <div>
                <p className="text-xs font-medium uppercase text-gray-400">
                  Founded
                </p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {company.founded}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Briefcase className="text-gray-400" size={20} />

              <div>
                <p className="text-xs font-medium uppercase text-gray-400">
                  Open positions
                </p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {companyJobs.length}
                </p>
              </div>
            </div>
          </div>

          <a
            href={company.website}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            Visit company website
            <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* Company Jobs */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Open positions
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Explore current opportunities at {company.name}.
          </p>
        </div>

        {companyJobs.length > 0 ? (
          <div className="space-y-4">
            {companyJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-gray-200 bg-white px-6 py-12 text-center">
            <Briefcase
              size={32}
              className="mx-auto text-gray-400"
            />

            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              No open positions
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              There are currently no open positions at this company.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default CompanyDetails;