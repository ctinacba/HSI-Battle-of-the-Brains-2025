# TechFlow - SaaS Analytics Platform

A full-stack analytics platform built with React, Express, and TypeScript.

## Tech Stack

**Frontend:**
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui component library
- Wouter for routing
- TanStack React Query for data fetching

**Backend:**
- Express.js with TypeScript
- Session-based authentication
- In-memory storage

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5000`

### Build for Production

```bash
# Build both frontend and backend
npm run build

# Start production server
npm start
```

## Project Structure

```
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility libraries
│   │   └── pages/       # Page components
│   └── index.html
├── server/              # Express backend
│   ├── auth.ts          # Authentication logic
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   ├── storage.ts       # In-memory storage
│   └── vite.ts          # Vite middleware
├── shared/              # Shared types
├── netlify/             # Netlify Functions
│   └── functions/
│       └── api.ts       # Serverless API
└── netlify.toml         # Netlify configuration
```

## Deploying to Netlify

1. Push this code to GitHub
2. Go to [Netlify](https://netlify.com) and click "Add new site" > "Import an existing project"
3. Connect your GitHub account and select your repository
4. Netlify will automatically detect settings from `netlify.toml`
5. Click Deploy

### Environment Variables (Optional)
Set these in Netlify dashboard if you want custom credentials:
- `AUTH_USERNAME` - Login username
- `AUTH_PASSWORD` - Login password

## API Endpoints

- `POST /api/login` - User login
- `POST /api/logout` - User logout
- `GET /api/auth/user` - Get current user
- `POST /api/contact` - Submit contact form
- `GET /api/contact/submissions` - Get all submissions (protected)

## License

MIT
