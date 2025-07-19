# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Architecture Overview

**K-NOMAD HUB** is a Next.js 15.3.5 application using App Router that helps digital nomads find Korean cities matching their preferences. The app features city filtering, like/dislike functionality, and Supabase authentication.

### Key Architecture Patterns

**Data Flow**: Home page (`app/page.tsx`) → HeroSection (filters) → TopCities (city list) → CityCard (individual cities). Filter state flows down via props, user preferences persist in localStorage.

**Authentication**: Middleware-based session management using Supabase SSR. All routes except `/login`, `/register`, and `/auth` require authentication. User session is automatically refreshed across requests.

**State Management**: React useState for component state, localStorage for user preferences (likes/dislikes), no global state management library used.

### Technology Stack

- **Framework**: Next.js 15.3.5 with App Router, React 19, TypeScript 5
- **UI**: Tailwind CSS v4, shadcn/ui (Radix UI), Lucide icons, next-themes
- **Backend**: Supabase for auth and database
- **Development**: Turbopack, ESLint

## Key Files and Directories

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Supabase auth callbacks
│   ├── login/, register/  # Authentication pages
│   └── page.tsx           # Home page with city filtering
├── components/
│   ├── auth/              # Authentication UI components
│   ├── cities/CityCard.tsx # Individual city display with like/dislike
│   ├── home/              # Home page sections (Hero, TopCities, etc.)
│   ├── layout/            # Header, Footer components
│   └── ui/                # shadcn/ui components
├── data/cities.json       # Static city data (20 cities)
├── types/index.ts         # TypeScript definitions for City, filters
└── utils/supabase/        # Supabase client configurations
```

## Data Structure

**City Object** (`src/types/index.ts`):
- Core fields: `id`, `name`, `tagline`, `cost`, `internet`, `likes`, `dislikes`
- Filter fields: `region`, `budget`, `environment`, `bestSeason`
- Scores object with 8 metrics (livingCost, internet, workEnvironment, etc.)

**Filter Types**: Region (7 options), Budget (3 tiers), Environment (4 types), Season (4 seasons)

## Authentication Setup

**Middleware** (`middleware.ts`): Redirects unauthenticated users to `/login` for all routes except auth pages.

**Environment Variables Required**:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**Supabase Clients**:
- `utils/supabase/client.ts` - Browser client
- `utils/supabase/server.ts` - Server-side client
- `utils/supabase/middleware.ts` - Session management

## Current Project Status

The application has been significantly improved from its initial state. Key completed improvements:
- Like/dislike system implemented (replacing star ratings)
- Filter system restructured with 4 categories
- City cards updated to key-value format
- City data expanded to 20 cities with new filter fields

**Remaining cleanup** (per SPEC.md): Remove unused pages (`/cities`, `/compare`, `/community`, `/guides`) and update navigation accordingly.

## GitHub Issue Labels

The repository uses a structured labeling system for organized issue management:

**🎯 Work Type Labels**:
- `✨ feature` - New feature additions
- `🔧 refactor` - Code refactoring
- `🎨 ui/ux` - UI/UX improvements
- `🗑️ cleanup` - Remove unnecessary code/files
- `🔄 enhancement` - Improve existing features

**⚡ Priority Labels**:
- `🔥 high-priority` - Urgent or critical tasks
- `📋 medium-priority` - Standard tasks
- `🔖 low-priority` - Can be done later

**📊 Status Labels**:
- `🚧 in-progress` - Currently being worked on
- `👀 review-needed` - Needs review
- `✅ ready-to-merge` - Ready for merge
- `🐛 bug` - Bug fixes
- `💡 idea` - Feature proposals

Use these labels consistently when creating issues to maintain project organization and facilitate vibe coding sessions.

## Development Notes

**File Organization**: Components are organized by feature (auth, cities, home, layout). Use existing patterns when adding new components.

**Styling**: Uses Tailwind CSS v4 with utility classes. Dark mode supported via next-themes.

**Type Safety**: All city data and filter types are strictly typed. Update `src/types/index.ts` when modifying data structure.

**Local Storage Keys**: User preferences stored with keys like `city-${cityId}-liked` and `city-${cityId}-disliked`.