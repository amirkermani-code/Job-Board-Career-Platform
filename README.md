# Jobly

Jobly is a modern and responsive job board frontend built with React, Vite, JavaScript, Tailwind CSS, and React Router.

The project is designed as a frontend portfolio project that demonstrates modern React development, reusable components, responsive UI design, client-side routing, URL-based filtering, persistent state management, and interactive user experiences.

## Features

* Responsive job board interface
* Job search by title, company, category, and location
* Job type filtering
* Experience level filtering
* Remote job filtering
* Job sorting
* URL-based job filters
* Dynamic job detail pages
* Save and unsave jobs
* Persistent saved jobs using localStorage
* Company listing and company detail pages
* Related jobs for each company
* Responsive navigation with mobile drawer
* Companies dropdown navigation
* Scroll progress indicator
* Back-to-top button
* Route-aware navigation
* Page transition animations
* Sign in and sign up UI
* Client-side form validation
* Responsive About page
* Dynamic platform statistics
* Empty states for jobs and saved jobs
* Accessible form labels and interactive controls

## Tech Stack

* React
* Vite
* JavaScript
* Tailwind CSS
* React Router
* Framer Motion
* Lucide React
* React Icons
* CSS
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
│   ├── About.jsx
│   ├── SignIn.jsx
│   └── SignUp.jsx
│
├── data/
│   ├── jobs.js
│   └── companies.js
│
├── App.jsx
├── main.jsx
└── index.css
```

## Routes

| Route            | Description              |
| ---------------- | ------------------------ |
| `/`              | Home page                |
| `/jobs`          | Job listings and filters |
| `/jobs/:id`      | Dynamic job details      |
| `/saved-jobs`    | Saved jobs               |
| `/companies`     | Company directory        |
| `/companies/:id` | Dynamic company details  |
| `/about`         | About Jobly              |
| `/sign-in`       | Sign in interface        |
| `/sign-up`       | Sign up interface        |

## Data Architecture

Jobly currently uses local mock data rather than an external API.

Jobs and companies are stored separately and connected through `companyId`.

For example:

```js
{
  id: 1,
  title: "Frontend Developer",
  company: "TechFlow",
  companyId: 1,
  location: "Berlin, Germany",
  type: "Full-time"
}
```

This relationship allows company pages to dynamically display their related job openings.

## State Management

Jobly uses React Context for saved job management.

Saved job IDs are persisted to `localStorage`, allowing users to keep their saved jobs after refreshing the page.

The project currently uses:

* React Context
* Custom React hooks
* Local component state
* URL query parameters
* localStorage

## URL-Based Filtering

The Jobs page stores filter and sorting state in the URL.

Example:

```text
/jobs?search=React&location=Berlin&remote=true&sort=newest
```

This makes filtered job results shareable and allows the application to restore the current filter state when the page is refreshed.

## Authentication

The project currently includes frontend authentication interfaces for:

* Sign in
* Sign up
* Password visibility toggling
* Basic form validation

Authentication is currently UI-only and does not connect to a backend authentication service.

A future version can connect these interfaces to a backend API and implement real user authentication.

## Design Goals

The main design goals of Jobly are:

* Clean and modern visual design
* Responsive layouts across screen sizes
* Consistent spacing and typography
* Reusable React components
* Clear navigation and user flows
* Accessible interactive elements
* Practical state management
* Maintainable project structure
* Minimal unnecessary complexity

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project

```bash
cd jobly
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## Future Improvements

Potential future improvements include:

* Backend API integration
* Real authentication and authorization
* User profiles
* Job application functionality
* Employer accounts
* Job posting functionality
* Real job search API integration
* Advanced company filtering
* Pagination
* Notifications
* Production database integration
* Automated testing
* Deployment and CI/CD

## License

This project was created as a frontend portfolio project.
