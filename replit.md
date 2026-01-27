# My Louisiana Sky - LUCTHELEO

## Overview
A React portfolio/personal website for LUCTHELEO, an audio alchemist and transdisciplinary artist. Features the MNFST manifesto, creative services information, and an Alchemy section showcasing apartment floor plans and concepts.

## Tech Stack
- **Frontend Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **Routing:** React Router DOM 7 (HashRouter)
- **UI Components:** HeadlessUI, Heroicons

## Project Structure
```
├── src/
│   ├── App.jsx              # Main application with routing and image preloading
│   ├── main.jsx             # Application entry point
│   ├── components/
│   │   ├── About/           # MNFST manifesto page
│   │   ├── Alchemy/         # Alchemy section with nested routes
│   │   ├── Contact/         # Contact form page
│   │   ├── HomePage/        # Home page
│   │   ├── Navigation/      # Navigation component
│   │   └── ...
│   ├── contexts/            # React context providers (ThemeContext)
│   └── assets/              # Static assets (images, videos, logos)
├── public/                  # Public static files
├── index.html               # HTML entry point with favicon
└── vite.config.js           # Vite configuration
```

## Key Pages
- **Home:** Main landing page with "My Louisiana Sky" branding
- **About:** MNFST manifesto with sections on architecture, process, foundation, practice, and philosophy
- **Alchemy:** Nested section with apartment overview, floor plan, amenities, and integrated features
- **Contact:** Contact form with service options (Order Line, REVERIE, RUMINATE)

## Development
- **Dev Server:** `npm run dev` (runs on port 5000)
- **Build:** `npm run build`
- **Preview:** `npm run preview`

## Configuration
The Vite dev server is configured to:
- Run on host `0.0.0.0` and port `5000`
- Allow all hosts for Replit proxy compatibility

## Recent Changes
- Added favicon using box-logo.svg
- Updated page title to "LUCTHELEO"
- Redesigned About page with full MNFST manifesto content
- Improved Contact page styling with service options
- Added image preloading for FloorPlan to improve loading experience
