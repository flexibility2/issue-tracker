# Issue Tracking System

A modern, full-featured issue tracking system built with Next.js and integrated with Google Authentication. This system helps teams manage and track issues, bugs, and tasks efficiently.

## Project link
[issue-tracker-alpha-ten.vercel.app](https://issue-tracker-alpha-ten.vercel.app/)

## Features

- **Dashboard Overview**
 ![image](https://github.com/user-attachments/assets/31cf5146-17d2-4421-8a8d-4a0a0956d49c)
  - Visual representation of issues by status (Open, In Progress, Closed)
  - Quick statistics and metrics
  - Latest issues overview

- **Issue list**
 ![image](https://github.com/user-attachments/assets/4906656e-3618-4175-a8fa-2d409b96826a)
  - Filter issues by status
  - Sort by issue title, creation date, and status
  - Pagination support
 
- **Issue Management**
 ![image](https://github.com/user-attachments/assets/9754bf35-23e5-4e05-b9ad-58b1537483e6)
 ![image](https://github.com/user-attachments/assets/10b55d22-02b9-4d73-a7de-40c963478d88)
  - Create, read, update, and delete issues
  - Rich text editor with Markdown support
  - Issue assignment to team members

- **User Authentication**
  ![image](https://github.com/user-attachments/assets/4a762b84-db55-4986-9539-c84910015680)

  - Secure Google OAuth integration

## Tech Stack

### Frontend
- Next.js 13
- Zod
- React hook form
- React query
- Radix UI
- easymde
- recharts

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

