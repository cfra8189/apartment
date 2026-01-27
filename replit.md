# My Louisiana Sky

## Overview
A React application built with Vite and Tailwind CSS. This appears to be a portfolio/personal website with navigation including Home, Alchemy, About, and Contact sections.

## Tech Stack
- **Frontend Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **Routing:** React Router DOM 7
- **UI Components:** HeadlessUI, Heroicons

## Project Structure
```
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   ├── components/      # React components
│   ├── contexts/        # React context providers
│   └── assets/          # Static assets
├── public/              # Public static files
├── index.html           # HTML entry point
└── vite.config.js       # Vite configuration
```

## Development
- **Dev Server:** `npm run dev` (runs on port 5000)
- **Build:** `npm run build`
- **Preview:** `npm run preview`

## Configuration
The Vite dev server is configured to:
- Run on host `0.0.0.0` and port `5000`
- Allow all hosts for Replit proxy compatibility
