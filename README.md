# Thundey GitHub Explorer

Thundey GitHub Explorer is a responsive React application for discovering GitHub developers and repositories through the GitHub REST API.

## Features

- Search GitHub users and repositories
- Debounced search to reduce unnecessary API requests
- Paginate through search results
- Sort repositories by stars, forks, or recent updates
- View detailed user profiles
- Browse a user’s public repositories
- Responsive layout for mobile and desktop screens
- Loading skeletons for search, profile, and repository requests
- Accessible labels, live status updates, and keyboard-friendly controls
- Friendly handling for rate limits, missing resources, network failures, and empty results

## Built With

- React
- JavaScript
- Tailwind CSS
- Vite
- Lucide React
- GitHub REST API

## Learning Goal

My goal for this project was to learn how to integrate a live REST API into a frontend application. I learned how to make requests with `fetch`, encode search parameters, handle loading and error states, display API data in reusable React components, paginate results, sort response data, and handle common API edge cases such as rate limits and network failures.

## API Notes

The app reads public data from GitHub’s REST API. Search requests are made directly from the browser, so GitHub’s unauthenticated rate limits apply. No GitHub token is required for the current frontend-only version.

## Live Demo



## Project Structure

```text
src/
├── api/                 # GitHub REST API request helpers
├── components/          # Search form, result cards, profile, and loading UI
├── hooks/               # Reusable React hooks
├── App.jsx              # Main application state and layout
└── main.jsx             # React entry point
```

