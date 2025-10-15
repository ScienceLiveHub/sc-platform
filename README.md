# Science Live Platform (sc-platform)

Transform Research into Connected Knowledge

## Overview
Science Live is a platform that enables researchers to publish structured, machine-readable research claims as nanopublications, facilitating reproducible science and knowledge graph building.

## Tech Stack
- **Frontend**: React on Cloudflare Pages (Free tier)
- **Backend**: Node.js/Express on Fly.io (Free tier)
- **Database**: PostgreSQL on Supabase Frankfurt (Free tier)
- **Authentication**: ORCID OAuth2

## Project Structure

sc-platform/
├── frontend/          # React frontend (Cloudflare Pages)
├── backend/           # Node.js API (Fly.io)
├── database/          # DB migrations and seeds
└── docs/             # Documentation

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git
- GitHub account
- Cloudflare account (free)
- Fly.io account (free)
- Supabase account (free)

### Local Development
```bash
# Install frontend dependencies
cd frontend && npm install

# Install backend dependencies
cd ../backend && npm install

# Run locally (from root)
npm run dev
```

## Deployment

### Frontend (Cloudflare Pages)
- Automatic deployment from GitHub main branch
- Build command: `npm run build`
- Output directory: `frontend/dist`

### Backend (Fly.io)
- Deploy using Fly CLI: `fly deploy`
- Region: EU (Frankfurt/Amsterdam)

### Database (Supabase)
- Region: Frankfurt (eu-central-1)
- Connection via Supabase client library

## License
MIT
