---
title: "Software Engineering Intern @Ignite Robotics"
company: "Ignite Robotics"
type: "Experience"
description: "Developing a full-stack web portal for nonprofit robotics organization, handling $500,000+ in annual transactions"
technologies: ["PostgreSQL", "React.js", "Node.js", "Stripe"]
image: "/projects/ignite-robotics1.png"
liveUrl: "https://app.igniterobotics.org/login"
githubUrl: ""
featured: true
category: "Full-Stack Development"
date: "2025-02"
duration: "Spring 2025"
role: "Software Engineering Intern"
---

### Why?

Ignite Robotics is a nonprofit that runs Washington middle and high school robotics teams. The organization's 50% year-over-year growth meant that infrastructure for hundreds of students was now being used to handle tens of thousands of students. By infrastructure, I mean a web of spreadsheets and google forms used to track the signup, waiver, payment, and team status for each student. 

### What?

Our (me and a team of 4 other devs) job was to come in and:
- 1: Design a unified and secure backend system to track signup, waiver, payment, and team status for each student. 
- 2: Build an interface where it all comes together - a portal for students to complete their tasks, and a portal for admins to interact with the system.

## Team Collaboration & System Architecture

My primary responsibility is the Stripe integration, enabling the portal to process over $500,000 in annual transactions. I built the frontend in React.js, using Axios to connect to a shared REST API. I also led development of the payment backend, which authenticates users, retrieves assigned fees from a SQL database, processes payments through Stripe, and updates records. We worked closely to maintain consistent API design and frontend architecture across the project.

## Impact & Learning

The internship strengthened my ability to build secure, user-focused systems from scratch—spanning database design, API development, and frontend implementation—while solving real operational challenges for a community-based organization. Thank you to the team at Ignite Robotics for the opportunity!

In the end, we:
- Decreased time spent on administration by 95% *reported by the admin team
- Reduced customer error tickets by 80+%
- Collected data on over $500,000 anually in transactions


## Technologies Used

- **Frontend**: React.js, TypeScript, responsive design
- **Backend**: Node.js, REST APIs, authentication systems
- **Payment Processing**: Stripe API integration, secure transaction handling
- **Database**: SQL database design and optimization
- **Development**: Git collaboration, API design, testing 


Snippets:
I developed a full-stack web portal for Ignite Robotics, a nonprofit that supports middle and high school robotics teams by providing team placement, workspace access, and part ordering. 

Previously, the organization relied heavily on spreadsheets and manual processes to handle student signups, waivers, payments, and team assignments. My work replaces this with a centralized, secure system designed for students, parents, and administrators.