import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineX } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-16">
        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src="/assets/pictures/ChatGPT Image Sep 17, 2026, 06_22_15 PM.png"
                alt="Jobly"
                className="h-9 w-auto"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-500">
              Find meaningful opportunities, connect with great companies, and
              take the next step in your career.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <AiOutlineX size={15} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <FaLinkedinIn size={15} />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Platform</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/jobs"
                  className="text-sm text-gray-500 transition hover:text-blue-600"
                >
                  Browse Jobs
                </Link>
              </li>

              <li>
                <Link
                  to="/companies"
                  className="text-sm text-gray-500 transition hover:text-blue-600"
                >
                  Companies
                </Link>
              </li>

              <li>
                <Link
                  to="/companies/featured"
                  className="text-sm text-gray-500 transition hover:text-blue-600"
                >
                  Featured Companies
                </Link>
              </li>

              <li>
                <Link
                  to="/companies/remote"
                  className="text-sm text-gray-500 transition hover:text-blue-600"
                >
                  Remote Companies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-500 transition hover:text-blue-600"
                >
                  About Us
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition hover:text-blue-600"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition hover:text-blue-600"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition hover:text-blue-600"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition hover:text-blue-600"
                >
                  Career Tips
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition hover:text-blue-600"
                >
                  Job Search Guide
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition hover:text-blue-600"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition hover:text-blue-600"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            © 2026 Jobly. All rights reserved.
          </p>

          <p className="text-sm text-gray-400">Built for the future of work.</p>
        </div>
      </div>
    </footer>
  );
}
