# Astro Portfolio Setup Guide

This is an Astro version of the Next.js portfolio, recreated following Astro best practices.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Sanity CMS project (same as Next.js version)

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Copy the profile image:**
   Copy `profilepic2.jpeg` from the Next.js assets folder to `src/assets/`:
   ```bash
   cp ../next/assets/profilepic2.jpeg src/assets/
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` with your Sanity credentials:
   ```
   CMS_ID=your_sanity_project_id
   CMS_DATASET=production
   CMS_API_VERSION=2023-01-01
   CMS_USE_CDN=true
   ```

## Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## Build

Build the site for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
astro/
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # Reusable components
│   │   ├── sections/     # Page sections (Hello, AboutMe, etc.)
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── LeftBar.astro
│   │   ├── RightBar.astro
│   │   ├── FeaturedProject.astro
│   │   └── RecentProject.astro
│   ├── layouts/          # Layout components
│   │   └── Layout.astro
│   ├── lib/              # Utility functions
│   │   ├── sanity.ts     # Sanity client setup
│   │   └── utils.ts      # Helper functions
│   ├── pages/            # Route pages
│   │   └── index.astro
│   ├── styles/           # Global styles
│   │   └── global.css
│   └── types.ts          # TypeScript type definitions
├── public/               # Static files
├── astro.config.mjs      # Astro configuration
└── package.json
```

## Key Differences from Next.js Version

1. **No Client-Side Routing**: Astro uses native browser scrolling with `scrollIntoView` instead of React refs
2. **Component Syntax**: `.astro` files instead of `.tsx` with frontmatter for logic
3. **Scoped Styles**: Each component has scoped styles in `<style>` tags
4. **Static by Default**: Pages are pre-rendered at build time
5. **No Framer Motion**: Animations simplified using CSS transitions (Framer Motion requires client-side JS)
6. **Server-Side Data Fetching**: Data is fetched at build time in the frontmatter

## Features Implemented

- ✅ Hero section with introduction
- ✅ About Me section with profile image
- ✅ Experience section with tabbed interface
- ✅ Featured projects showcase
- ✅ Recent projects grid
- ✅ Contact form
- ✅ Responsive header with navigation
- ✅ Left sidebar with social links
- ✅ Right sidebar with role text
- ✅ Footer
- ✅ Responsive design
- ✅ Sanity CMS integration
- ✅ Markdown processing for content

## Notes

- The profile image needs to be manually copied from the Next.js project
- Environment variables must be set up before running the project
- The Sanity CMS structure should match the Next.js version
- Some animations from the Next.js version (Framer Motion) have been simplified to CSS transitions for better performance in Astro
