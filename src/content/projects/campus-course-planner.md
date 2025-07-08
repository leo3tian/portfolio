---
title: "UW Course Planner"
company: "Personal Project"
type: "Full Stack Application"
description: "A comprehensive course planning tool for University of Washington students"
technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"]
image: "/projects/course-planner.png"
liveUrl: "https://uw-course-planner.vercel.app"
githubUrl: "https://github.com/leotian/uw-course-planner"
featured: true
category: "Full Stack"
date: "2023-12"
duration: "3 months"
role: "Full Stack Developer"
---

# UW Course Planner

A modern, intuitive course planning application designed specifically for University of Washington students to plan their academic journey efficiently.

## The Problem

As a CS student at UW, I noticed that existing course planning tools were either outdated, hard to use, or missing key features that students actually needed. Many students struggled with:

- Understanding prerequisite chains
- Planning courses across multiple quarters
- Tracking degree requirements
- Finding optimal course schedules

## The Solution

I built a comprehensive course planning platform that addresses these pain points with a modern, user-friendly interface.

### Core Features

#### Interactive Course Search & Filtering
- Real-time search across all UW courses
- Advanced filtering by department, credits, time slots
- Integration with official UW course catalog API

#### Visual Prerequisite Mapping
- Interactive prerequisite tree visualization
- Automatically highlights courses you can take based on completed coursework
- Shows recommended course sequences

#### Multi-Quarter Planning
- Drag-and-drop interface for planning multiple quarters ahead
- Automatic conflict detection for time slots
- Credit hour tracking and GPA planning

#### Degree Progress Tracking
- Import existing transcripts
- Track progress toward CS degree requirements
- Suggest courses to fulfill remaining requirements

## Technical Implementation

### Architecture
- **Frontend**: Next.js 14 with TypeScript for type safety
- **Database**: PostgreSQL with Prisma ORM for data modeling
- **Styling**: Tailwind CSS for responsive design
- **Deployment**: Vercel for seamless CI/CD

### Key Technical Challenges

#### Data Integration
- Scraped and normalized UW course catalog data
- Built robust data pipeline to handle course updates
- Implemented caching strategies for performance

#### Complex State Management
- Managed complex course planning state across multiple components
- Implemented optimistic updates for smooth UX
- Built undo/redo functionality for course planning

#### Performance Optimization
- Implemented virtual scrolling for large course lists
- Used React Query for efficient data fetching and caching
- Optimized database queries with proper indexing

## Impact & Results

- **500+ students** using the platform within first month of launch
- **4.8/5 average rating** from user feedback
- **Featured** in UW CS Department newsletter
- **Reduced** average planning time from 2 hours to 20 minutes

## What I Learned

This project taught me valuable lessons about:
- Building user-centric applications by talking to actual users
- Handling complex data relationships and state management
- Optimizing performance for real-world usage patterns
- The importance of intuitive UX design in productivity tools

The positive reception from fellow students validated my approach of solving real problems that I personally experienced, and showed me the impact that well-designed software can have on people's daily lives. 