import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import SavedJobsProvider from "./context/SavedJobsContext";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import SavedJobs from "./pages/SavedJobs";
import Companies from "./pages/Companies";
import CompanyDetails from "./pages/CompanyDetails";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <SavedJobsProvider>
        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/jobs"
            element={
              <PageTransition>
                <Jobs />
              </PageTransition>
            }
          />

          <Route
            path="/jobs/:id"
            element={
              <PageTransition>
                <JobDetails />
              </PageTransition>
            }
          />

          <Route
            path="/saved-jobs"
            element={
              <PageTransition>
                <SavedJobs />
              </PageTransition>
            }
          />

          <Route
            path="/companies"
            element={
              <PageTransition>
                <Companies />
              </PageTransition>
            }
          />

          <Route
            path="/companies/:id"
            element={
              <PageTransition>
                <CompanyDetails />
              </PageTransition>
            }
          />

          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
        </Routes>
      </SavedJobsProvider>
    </BrowserRouter>
  );
}

export default App;
