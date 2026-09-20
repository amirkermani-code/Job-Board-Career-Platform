import { Building2, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

import companies from "/data/companies";
import jobs from "/data/jobs";

function Companies() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
              Companies
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore companies
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Discover companies, learn more about their work, and explore
              available opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => {
            const companyJobCount = jobs.filter(
              (job) => job.companyId === company.id,
            ).length;

            return (
              <Link
                key={company.id}
                to={`/companies/${company.id}`}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Building2 size={24} />
                  </div>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {companyJobCount}{" "}
                    {companyJobCount === 1 ? "job" : "jobs"}
                  </span>
                </div>

                <h2 className="mt-5 text-xl font-semibold text-gray-900 transition group-hover:text-blue-600">
                  {company.name}
                </h2>

                <p className="mt-2 text-sm font-medium text-blue-600">
                  {company.industry}
                </p>

                <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600">
                  {company.description}
                </p>

                <div className="mt-6 space-y-3 border-t border-gray-100 pt-5">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={16} />
                    <span>{company.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users size={16} />
                    <span>{company.employees} employees</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Companies;