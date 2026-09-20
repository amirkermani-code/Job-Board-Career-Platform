# Jobly

A modern and responsive job discovery platform built with React and Tailwind CSS.

Jobly allows users to explore job opportunities, search and filter listings, discover companies, view detailed job and company information, and save interesting jobs for later.

## Features

* Responsive job listing experience
* Search jobs by title, company, or category
* Filter jobs by location, employment type, experience level, and remote availability
* Sort jobs by relevance, newest, oldest, and salary
* Persist search and filter state through URL query parameters
* Dynamic job detail pages
* Company directory and dynamic company detail pages
* Display company-specific job openings
* Save and remove jobs from a personal saved list
* Persist saved jobs using LocalStorage
* Responsive mobile navigation
* Route-aware navigation
* Automatic scroll-to-top on route changes
* Smooth page transitions between routes
* Responsive design across desktop, tablet, and mobile devices
* Empty states for pages without available results

## Tech Stack

* React
* Vite
* JavaScript
* React Router
* Tailwind CSS
* Framer Motion
* Lucide React
* React Icons
* LocalStorage
* Git

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SearchBar.jsx
│   ├── JobCard.jsx
│   ├── JobFilters.jsx
│   ├── Footer.jsx
│   ├── ScrollToTop.jsx
│   └── PageTransition.jsx
│
├── context/
│   └── SavedJobsContext.jsx
│
├── hooks/
│   └── useSavedJobs.js
│
├── pages/
│   ├── Home.jsx
│   ├── Jobs.jsx
│   ├── JobDetails.jsx
│   ├── SavedJobs.jsx
│   ├── Companies.jsx
│   ├── CompanyDetails.jsx
│   └── About.jsx
│
├── data/
│   ├── jobs.js
│   └── companies.js
│
├── App.jsx
├── main.jsx
└── index.css
```

## Application Routes

| Route            | Description                        |
| ---------------- | ---------------------------------- |
| `/`              | Home page                          |
| `/jobs`          | Job listings and search            |
| `/jobs/:id`      | Job details                        |
| `/saved-jobs`    | Saved jobs                         |
| `/companies`     | Company directory                  |
| `/companies/:id` | Company details and available jobs |
| `/about`         | About Jobly                        |

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd jobly
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## Data Architecture

Jobly currently uses local JavaScript data files to simulate a job platform.

Jobs and companies are connected through a `companyId` relationship:

```js
{
  id: 1,
  title: "Frontend Developer",
  company: "TechFlow",
  companyId: 1,
}
```

This allows company detail pages to dynamically display the jobs associated with each company without duplicating job data.

## State Management

Saved jobs are managed using React Context and persisted with LocalStorage.

The saved job state is shared across the application through:

```text
SavedJobsProvider
        ↓
useSavedJobs
        ↓
JobCard / SavedJobs
```

Search and filtering state is synchronized with the URL using React Router's `useSearchParams`, allowing filtered job pages to be bookmarked or shared.

## Design Goals

Jobly was built with a focus on:

* Clean and consistent UI
* Responsive design
* Reusable React components
* Data-driven rendering
* Simple and maintainable architecture
* Clear navigation and user experience
* Practical state management without unnecessary complexity

## Future Improvements

Possible future improvements include:

* Backend API integration
* User authentication
* Real job and company data
* Job application functionality
* Advanced job recommendations
* Company logos and richer company profiles
* Pagination or infinite scrolling
* Job posting functionality

## License

This project was created as a frontend portfolio project.
