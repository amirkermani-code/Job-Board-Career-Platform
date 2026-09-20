
import {
  ArrowRight,
  ArrowUp,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Menu,
  Search,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompaniesOpen, setIsCompaniesOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setScrollProgress(0);
      } else {
        const progress = (scrollTop / documentHeight) * 100;
        setScrollProgress(Math.min(progress, 100));
      }

      setShowBackToTop(scrollTop > 400);
    };

    updateScrollState();

    window.addEventListener("scroll", updateScrollState, {
      passive: true,
    });

    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const closeMenus = () => {
    setIsOpen(false);
    setIsCompaniesOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinkClass = ({ isActive }) =>
    `relative flex items-center text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-blue-600"
        : "text-gray-600 hover:text-gray-900"
    }`;

  return (
    <>
      {/* Scroll Progress */}
      <div
        className="fixed left-0 top-0 z-[60] h-0.5 bg-blue-600 transition-[width] duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center px-6 md:px-10 lg:px-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenus}
            className="flex items-center"
            aria-label="Jobly home"
          >
            <img
              src="/assets/pictures/ChatGPT Image Sep 17, 2026, 06_22_15 PM.png"
              alt="Jobly"
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
            <NavLink to="/" end className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Home
                  {isActive && (
                    <span className="absolute -bottom-[22px] left-0 h-0.5 w-full rounded-full bg-blue-600" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/jobs" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Jobs
                  {isActive && (
                    <span className="absolute -bottom-[22px] left-0 h-0.5 w-full rounded-full bg-blue-600" />
                  )}
                </>
              )}
            </NavLink>

            {/* Companies Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCompaniesOpen(true)}
              onMouseLeave={() => setIsCompaniesOpen(false)}
            >
              <button
                type="button"
                onClick={() =>
                  setIsCompaniesOpen((current) => !current)
                }
                className="flex cursor-pointer items-center gap-1 text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
              >
                Companies
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    isCompaniesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCompaniesOpen && (
                <div className="absolute left-1/2 top-full w-52 -translate-x-1/2 pt-3">
                  <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
                    <Link
                      to="/companies"
                      onClick={closeMenus}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-blue-600"
                    >
                      <Building2 size={17} />
                      All Companies
                    </Link>

                    <Link
                      to="/companies/featured"
                      onClick={closeMenus}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-blue-600"
                    >
                      <BriefcaseBusiness size={17} />
                      Featured Companies
                    </Link>

                    <Link
                      to="/companies/remote"
                      onClick={closeMenus}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-blue-600"
                    >
                      <Search size={17} />
                      Remote Companies
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/about" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  About
                  {isActive && (
                    <span className="absolute -bottom-[22px] left-0 h-0.5 w-full rounded-full bg-blue-600" />
                  )}
                </>
              )}
            </NavLink>
          </div>

          {/* Desktop Actions */}
          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <Link
              to="/signin"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
            >
              Sign In
            </Link>

            <Link
              to="/get-started"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="ml-auto flex cursor-pointer items-center justify-center rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Mobile / Tablet Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-screen w-72 bg-white/95 backdrop-blur-md transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-5">
          <Link
            to="/"
            onClick={closeMenus}
            className="flex items-center"
          >
            <img
              src="/assets/pictures/ChatGPT Image Sep 17, 2026, 06_22_15 PM.png"
              alt="Jobly"
              className="h-9 w-auto"
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
            aria-label="Close menu"
          >
            <X size={21} />
          </button>
        </div>

        <div className="flex flex-col p-5">
          <NavLink
            to="/"
            end
            onClick={closeMenus}
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/jobs"
            onClick={closeMenus}
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            Jobs
          </NavLink>

          {/* Mobile Companies */}
          <div className="mt-1">
            <button
              type="button"
              onClick={() =>
                setIsCompaniesOpen((current) => !current)
              }
              className="flex w-full cursor-pointer items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
            >
              <span>Companies</span>

              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isCompaniesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isCompaniesOpen && (
              <div className="mt-1 space-y-1 pl-3">
                <NavLink
                  to="/companies"
                  onClick={closeMenus}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-2.5 text-sm transition ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    }`
                  }
                >
                  All Companies
                </NavLink>

                <NavLink
                  to="/companies/featured"
                  onClick={closeMenus}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-2.5 text-sm transition ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    }`
                  }
                >
                  Featured Companies
                </NavLink>

                <NavLink
                  to="/companies/remote"
                  onClick={closeMenus}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-2.5 text-sm transition ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    }`
                  }
                >
                  Remote Companies
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/about"
            onClick={closeMenus}
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            About
          </NavLink>

          <div className="mt-6 border-t border-gray-100 pt-6">
            <Link
              to="/signin"
              onClick={closeMenus}
              className="flex w-full items-center justify-center rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Sign In
            </Link>

            <Link
              to="/get-started"
              onClick={closeMenus}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Back To Top */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
          aria-label="Back to top"
        >
          <ArrowUp size={19} />
        </button>
      )}
    </>
  );
}

export default Navbar;
