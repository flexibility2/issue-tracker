# Issue Tracking System

A modern, full-featured issue tracking system built with Next.js and integrated with Google Authentication. This system helps teams manage and track issues, bugs, and tasks efficiently.


## Features

- **Dashboard Overview**
  - Visual representation of issues by status (Open, In Progress, Closed)
  - Quick statistics and metrics
  - Latest issues overview

- **Issue Management**
  - Create, read, update, and delete issues
  - Rich text editor with Markdown support
  - File attachment capabilities
  - Issue status tracking (Open, In Progress, Closed)
  - Issue assignment to team members

- **Advanced Filtering & Sorting**
  - Filter issues by status
  - Sort by issue title, creation date, and status
  - Pagination support

- **User Authentication**
  - Secure Google OAuth integration

## Tech Stack

### Frontend
- Next.js 13
- TypeScript
- Radix UI

### Backend
- MySQL
- Prisma ORM

### Authentication
- Google OAuth Provider
- NextAuth.js


## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm/yarn
- MySQL database
- Google Cloud Console account

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/issue-tracker.git
cd issue-tracker
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

Add the following variables to your `.env` file:
```
DATABASE_URL="mysql://user:password@localhost:3306/issue_tracker"
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

4. Initialize the database
```bash
npx prisma migrate dev  
```

5. Start the development server
```bash
npm run dev
```

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable Google OAuth 2.0 API
4. Configure OAuth consent screen
5. Create credentials (OAuth client ID)
6. Add authorized JavaScript origins:
   - http://localhost:3000 (for development)
   - https://your-production-domain.com (for production)
7. Add authorized redirect URIs:
   - http://localhost:3000/api/auth/callback/google (for development)
   - https://your-production-domain.com/api/auth/callback/google (for production)
8. Copy the client ID and secret to your `.env` file
9. Add test account in Google Cloud Console

