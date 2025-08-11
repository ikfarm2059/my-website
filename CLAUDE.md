# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React company website for 株式会社アイケーファーム (IK-FARM Inc.), a Japanese agricultural company based in Aichi Prefecture. The site is built with Create React App and deployed to GitHub Pages.

## Development Commands

### Start Development Server
```bash
npm start
```
Runs the app in development mode on http://localhost:3000

### Build for Production
```bash
npm run build
```
Creates optimized production build in the `build` folder

### Run Tests
```bash
npm test
```
Launches the test runner in interactive watch mode

### Deploy to GitHub Pages
```bash
npm run deploy
```
Builds and deploys the app to GitHub Pages (requires `gh-pages` package)

## Architecture

### Project Structure
- `src/App.js` - Main application component with header navigation and footer
- `src/components/Home.js` - Main page component that orchestrates all sections
- `src/components/` - Individual section components (Contact, Products, WorkDaily, etc.)
- `src/assets/` - Static assets including images and videos
- `public/` - Static files served directly (icons, manifest, etc.)

### Component Organization
The application follows a component-based architecture:
- **App.js** - Top-level component with navigation header and footer
- **Home.js** - Main page container that renders all sections in order
- **Section Components** - Individual components for each page section:
  - `PresidentMessage.js` - Company president message
  - `Products.js` - Product showcase
  - `WorkDaily.js` - Daily work activities
  - `CompanyMessage.js` - Company messaging
  - `Contact.js` - Contact information
  - `InstagramLink.js` - Instagram integration component

### Content Language
The website content is primarily in Japanese, serving a Japanese agricultural company. All text content, navigation, and user-facing elements are in Japanese.

### Deployment
The site is configured for GitHub Pages deployment with:
- Homepage set to `https://ikfarm2059.github.io/my-website`
- Automated deployment via `gh-pages` package
- Production builds optimized for static hosting

## Key Dependencies
- React 19.1.0 - Main framework
- React Router DOM 7.6.3 - Client-side routing
- React Icons 5.5.0 - Icon components
- Testing Library - Testing utilities
- gh-pages - GitHub Pages deployment