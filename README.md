# Global Tour Booking Platform

A modern, responsive web application for browsing and booking tourism packages worldwide. The application provides an intuitive user interface for exploring international destinations and predefined tour packages.

## Architecture & Technology Stack

This project is built as a Single Page Application (SPA) utilizing a modern frontend technology stack:

- **Core Framework:** React 19
- **Language:** TypeScript for static type checking and structural safety
- **Build Tool:** Vite for fast Hot Module Replacement (HMR) and optimized production builds
- **Routing:** React Router DOM (v7) for client-side navigation
- **Iconography:** Lucide React
- **Styling:** Vanilla CSS 

## Prerequisites

Before setting up the project locally, ensure you have the following installed:
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/SachithGamage12/Tour-Website.git
   cd Tour-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will run locally, typically available at `http://localhost:5173`.

## Project Structure

The codebase is organized adhering to standard component-based module patterns:

```text
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI components
│   ├── common/      # Shared layout components (Header, Footer)
│   ├── destinations/# Destination-specific UI elements
│   ├── home/        # Landing page components
│   └── packages/    # Tour package UI modules
├── data/            # Static data structures
├── pages/           # High-level route components
│   ├── Destinations.tsx
│   ├── Home.tsx
│   └── Packages.tsx
├── App.tsx          # Root component and router configuration
├── index.css        # Global stylesheet and design tokens
└── main.tsx         # Application entry point
```

## Available Scripts

The project provides the following npm scripts for development and deployment processes:

- `npm run dev` - Starts the Vite development server with HMR.
- `npm run build` - Compiles the TypeScript code and produces an optimized production bundle in the `dist` directory.
- `npm run lint` - Executes ESLint to statically analyze the codebase for adherence to configured rules and code quality standards.
- `npm run preview` - Serves the generated production build locally for verification prior to deployment.

## Code Quality & Linting

Code maintainability is enforced through a strict ESLint configuration (`eslint.config.js`). It incorporates rules for standard JavaScript semantics, TypeScript type-checking, and React-specific patterns (such as React Hooks dependency array validation). 

Developers should ensure all code passes linting checks before submitting Pull Requests:

```bash
npm run lint
```
