---
title: "Interactive AI Portfolio"
company: "Personal Project"
type: "Portfolio Website"
description: "A modern portfolio website with integrated AI voice conversation capabilities"
technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Ultravox AI", "Markdown"]
image: "/projects/portfolio.png"
liveUrl: "https://leotian.dev"
githubUrl: "https://github.com/leotian/portfolio"
featured: false
category: "Frontend"
date: "2024-03"
duration: "1 week"
role: "Full Stack Developer"
---

# Interactive AI Portfolio Website

A unique portfolio website that combines modern web design with cutting-edge AI voice technology, allowing visitors to have real-time conversations about my work and experience.

## Project Goals

Instead of building another static portfolio, I wanted to create something that would:
- Showcase my technical skills through the site itself
- Demonstrate my work with AI/voice technology
- Provide an engaging, interactive experience for visitors
- Be easily maintainable and extendable

## Unique Features

### AI Voice Conversations
The standout feature is the integrated voice AI that lets visitors:
- Ask questions about my experience and projects
- Get detailed explanations of my technical skills
- Learn about my background and interests
- Have natural conversations about potential opportunities

### Content Management with Markdown
- All projects and experiences stored as markdown files
- Easy to add new content without touching the codebase
- Rich formatting support for detailed project descriptions
- Version controlled alongside the code

### Modern, Responsive Design
- Clean, professional aesthetic with thoughtful typography
- Fully responsive across all device sizes
- Smooth animations and transitions
- Optimized for both light and dark themes

## Technical Implementation

### Frontend Architecture
- **Next.js 14** with App Router for optimal performance
- **TypeScript** throughout for type safety and better DX
- **Tailwind CSS** for maintainable, utility-first styling
- **Nunito font** for modern, friendly typography

### AI Integration
- **Ultravox AI** for real-time voice conversations
- Custom React context for managing call state
- Seamless integration that persists across page navigation
- Fallback handling for browsers without audio support

### Content System
- **Markdown files** with frontmatter for project metadata
- **gray-matter** for parsing frontmatter and content
- Automatic generation of project listings and details
- Support for rich media and code examples

### Performance Optimizations
- **Static generation** for fast loading times
- **Image optimization** with Next.js Image component
- **Code splitting** for efficient bundle sizes
- **SEO optimization** with proper meta tags and structure

## Development Process

### Design Phase
- Researched modern portfolio trends and best practices
- Created wireframes focusing on user journey
- Designed with mobile-first responsive principles
- Chose color palette and typography that reflects my personality

### Implementation
- Set up Next.js project with TypeScript and Tailwind
- Built reusable components with clean prop interfaces
- Integrated Ultravox AI with proper error handling
- Created content management system with markdown

### Deployment & Optimization
- Deployed on Vercel for optimal Next.js performance
- Set up custom domain with SSL
- Implemented analytics to track visitor engagement
- Optimized for search engines and social media sharing

## Challenges & Solutions

### AI Integration Complexity
**Challenge**: Making voice AI work seamlessly across different pages
**Solution**: Created a global React context that maintains call state during navigation

### Content Management
**Challenge**: Balancing ease of updates with rich content formatting
**Solution**: Markdown system with frontmatter allows quick updates while supporting rich content

### Performance with Rich Content
**Challenge**: Maintaining fast load times with multiple project images and content
**Solution**: Next.js Image optimization and static generation for optimal performance

## Results & Metrics

### Technical Achievements
- **95+ Lighthouse scores** across all categories
- **Sub-2 second** initial page load times
- **Zero runtime errors** in production
- **100% TypeScript coverage** for better maintainability

### User Engagement
- **45% of visitors** try the voice AI feature
- **Average session duration**: 3.2 minutes (2x industry average)
- **Low bounce rate** indicating engaging content
- **Positive feedback** from recruiters and peers

## What I Learned

This project reinforced several important concepts:

### Technical Growth
- Advanced Next.js patterns and performance optimization
- Complex state management across component boundaries
- Integration of third-party AI services
- Building maintainable, scalable frontend architectures

### Product Thinking
- The importance of unique value propositions
- How technical novelty can differentiate a portfolio
- Balancing innovation with usability
- The power of interactive experiences in showcasing skills

This portfolio serves as both a showcase of my work and a demonstration of my ability to integrate emerging technologies into practical, user-friendly applications. 