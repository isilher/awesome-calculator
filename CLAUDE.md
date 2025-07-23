# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 calculator application with a unique prime number badge collection feature. Built with Material UI, TypeScript, and React 19, featuring both light and dark theme support.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture

**Tech Stack:**
- Next.js 15 with App Router
- React 19 
- Material UI for components and theming
- TypeScript for type safety
- Emotion for CSS-in-JS styling

**Key Components:**
- `src/components/Calculator.tsx` - Main calculator logic with prime number detection
- `src/components/ThemeRegistry.tsx` - Theme provider with automatic dark/light mode detection
- `src/app/layout.tsx` - Root layout with theme setup

**Prime Number Feature:**
The calculator detects prime numbers in calculation results and stores them in a badge collection system. Prime detection algorithm is implemented in `Calculator.tsx:30-39`.

**Theme System:**
Uses Material UI's theme system with automatic dark/light mode detection via `prefers-color-scheme`. Custom theme configuration includes gradient backgrounds, custom button styles, and responsive design.

**Project Structure:**
```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
└── components/
    ├── Calculator.tsx      # Main calculator component
    └── ThemeRegistry.tsx   # Theme configuration and provider
```

## Development Notes

- Calculator state is managed with React hooks (display, previousValue, operation, etc.)
- Prime numbers are stored in a Set to avoid duplicates
- Button grid uses CSS Grid with responsive layout (4 columns, special handling for "0" button)
- Theme detection happens automatically on component mount
- All styling uses Material UI's `sx` prop with theme-aware values