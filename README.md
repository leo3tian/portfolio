# Leo Tian - Portfolio Website

A modern, interactive portfolio website built with Next.js, featuring integrated AI voice conversations and markdown-based content management.

## Features

- 🎙️ **AI Voice Conversations**: Integrated Ultravox AI for real-time voice interactions
- 📝 **Markdown Content Management**: Easy-to-maintain project content using markdown files
- 🎨 **Modern Design**: Clean, responsive design with Tailwind CSS
- ⚡ **Performance Optimized**: Built with Next.js for optimal loading speeds
- 📱 **Mobile-First**: Fully responsive across all devices

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/leotian/portfolio-north.git
cd portfolio-north
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

Add your Ultravox AI credentials:
```
ULTRAVOX_API_KEY=your_api_key_here
ULTRAVOX_AGENT=your_agent_id_here
```

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content Management

### Adding New Projects

Projects are stored as markdown files in `src/content/projects/`. Each project file contains:

1. **Frontmatter** (YAML metadata at the top)
2. **Markdown content** (the project description)

#### Example Project Structure

```markdown
---
title: "Project Title"
company: "Company Name"
type: "Full Stack Application"
description: "Brief description for project cards"
technologies: ["React", "Node.js", "MongoDB"]
image: "/projects/project-image.png"
liveUrl: "https://project-live-url.com"
githubUrl: "https://github.com/user/repo"
featured: true
category: "Full Stack"
date: "2024-01"
duration: "3 months"
role: "Full Stack Developer"
---

# Project Title

Detailed project description goes here...

## Features

- Feature 1
- Feature 2

## Technical Implementation

Details about the technical approach...
```

#### Required Frontmatter Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Project title |
| `company` | string | Company or "Personal Project" |
| `type` | string | Project type (e.g., "Full Stack Application") |
| `description` | string | Brief description for cards |
| `technologies` | array | List of technologies used |
| `image` | string | Path to project image |
| `featured` | boolean | Show on homepage |
| `category` | string | Project category |
| `date` | string | Project date (YYYY-MM format) |
| `duration` | string | Project duration |
| `role` | string | Your role in the project |

#### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `liveUrl` | string | Live project URL |
| `githubUrl` | string | GitHub repository URL |

### Project Display

- **Homepage**: Shows featured projects (`featured: true`)
- **Work Page**: Shows all projects in a grid
- **Individual Pages**: Each project gets its own page at `/work/[project-id]`

### Managing Featured Projects

To feature a project on the homepage, set `featured: true` in the frontmatter. The homepage displays up to 4 featured projects.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown with gray-matter
- **AI Integration**: Ultravox AI
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── CallButton.tsx   # AI voice call button
│   │   └── Header.tsx       # Site header
│   ├── contexts/            # React contexts
│   │   └── CallContext.tsx  # Global call state
│   ├── api/                 # API routes
│   │   └── create-call/     # Ultravox AI integration
│   ├── work/                # Work pages
│   │   ├── [id]/           # Dynamic project pages
│   │   └── page.tsx        # Work listing page
│   └── page.tsx            # Homepage
├── content/
│   └── projects/           # Project markdown files
└── lib/
    └── projects.ts         # Project data utilities
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

The site is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add new projects as markdown files
5. Submit a pull request

## License

This project is licensed under the MIT License.
