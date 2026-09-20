# Jobly — Modern Job Board Platform

Jobly is a modern and responsive job board platform built with **React** and **Vite**.

The project focuses on creating a clean, professional, and user-friendly job search experience while demonstrating practical frontend development skills such as component-based architecture, client-side routing, responsive design, filtering, sorting, and interactive UI states.

## 🚀 Live Demo

Coming soon.

## 📸 Preview

Coming soon.

## ✨ Features

### Job Search

* Search jobs by title, company, or keyword
* Search jobs by location
* Live filtering of job results
* Results count based on current search and filters

### Job Filters

* Filter by location
* Filter by job type

  * Full-time
  * Part-time
  * Contract
  * Internship
* Filter by experience level

  * Entry-level
  * Mid-level
  * Senior
* Remote-only filter
* Clear individual filters
* Clear all filters

### Job Sorting

Jobs can currently be sorted by:

* Most Relevant
* Newest
* Oldest
* Highest Salary

### Responsive Design

Jobly is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

The Jobs page includes a dedicated mobile filter drawer for smaller screens.

### Navigation

The project uses React Router for client-side navigation.

Current routes include:

/                   Home
/jobs               Jobs
/companies          Companies
/companies/featured Featured Companies
/companies/remote   Remote Companies
/about              About


The navigation system also includes:

* Route-aware active navigation
* Responsive mobile/tablet navigation
* Companies dropdown
* Sticky navigation bar
* Scroll progress indicator
* Back-to-top button

## 🧩 Project Structure

src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SearchBar.jsx
│   ├── JobCard.jsx
│   ├── JobFilters.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   └── Jobs.jsx
│
├── data/
│   └── jobs.js
│
├── App.jsx
├── main.jsx
└── index.css

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript
* Vite
* React Router
* Tailwind CSS
* CSS

### UI & Icons

* Lucide React
* React Icons

### Development Tools

* Git
* GitHub
* VS Code

## 🎯 Project Goals

Jobly was built as a frontend portfolio project with a focus on:

* Component-based React architecture
* Reusable components
* Responsive UI development
* Client-side routing
* State management with React hooks
* Search and filtering logic
* Sorting and derived data
* Mobile-first interaction patterns
* Clean and maintainable project structure
* Professional UI/UX

## 🔍 Current Job Data

The current version uses local mock data for job listings.

Example job information includes:

Title
Company
Location
Job Type
Experience Level
Salary
Remote Availability
Posted Date
Category

No backend or external job API is currently connected.

## 📱 Responsive Experience

The interface adapts to different screen sizes with dedicated layouts and interactions.

On smaller screens, the navigation changes into a slide-out menu and job filters are presented through a mobile drawer.

## 🧠 What I Practiced

While building Jobly, I worked with concepts including:

* React component composition
* Props
* `useState`
* `useEffect`
* `useMemo`
* React Router
* `NavLink`
* Dynamic filtering
* Sorting arrays
* Conditional rendering
* Responsive Tailwind CSS
* Mobile navigation patterns
* UI state management
* Empty states
* Reusable UI components

## 🔮 Planned Improvements

The project is still under development.

Planned features include:

* Job details pages
* Dynamic job routes
* Bookmarking jobs
* Saved jobs page
* URL-based search and filters
* Pagination or load more
* Loading and error states
* Company pages
* Improved job/company branding
* Backend integration
* Real job data API

## 📦 Installation

Clone the repository:

git clone https://github.com/amirkermani-code/jobly.git


Navigate into the project:

cd jobly


Install dependencies:

npm install


Start the development server:

npm run dev


The application will then be available at the local development URL provided by Vite.

## 📄 License

This project is currently intended as a personal frontend portfolio project.
